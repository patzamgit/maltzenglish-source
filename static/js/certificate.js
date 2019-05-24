document.querySelectorAll("[data-clipboard]").forEach(function (elem) {
    elem.addEventListener('click', function () {
        copyTextToClipboard(elem.getAttribute('data-clipboard'));
        alert('Copied');
    });
});
