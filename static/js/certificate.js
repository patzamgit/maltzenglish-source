document.querySelectorAll("[data-clipboard]").forEach(function (elem) {
    elem.addEventListener('click', function () {
        copyTextToClipboard(elem.getAttribute('data-clipboard'));
        document.querySelectorAll('.copylink-copy-message').forEach((msg) => {
            msg.classList.add('copylink-copy-message--show');
        });
        
        window.setTimeout(() => {
            document.querySelectorAll('.copylink-copy-message').forEach((msg) => {
                msg.classList.remove('copylink-copy-message--show');
            });
            
        }, 1500);
    });
});
