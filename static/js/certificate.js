document.querySelectorAll("[data-clipboard]").forEach(function (elem) {
    console.log(elem);
    var value = elem.getAttribute('data-clipboard');
    elem.addEventListener('click', function () {
        copyTextToClipboard(value);
        alert('Copied');
    });

});
