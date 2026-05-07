(function () {
    function updateGridLeftRule() {
        var navItems = document.querySelector('#header .main-header__nav > ul');
        var container = document.querySelector('.module .container, main .container, .container');

        if (!navItems || !container) return;

        var navItemsRect = navItems.getBoundingClientRect();
        var containerRect = container.getBoundingClientRect();

        var leftRule = navItemsRect.left - containerRect.left;

        if (leftRule > 0) {
            document.documentElement.style.setProperty(
                '--grid-aside-width',
                leftRule + 'px'
            );
        }
    }

    var frame;

    function requestUpdate() {
        cancelAnimationFrame(frame);
        frame = requestAnimationFrame(updateGridLeftRule);
    }

    window.addEventListener('load', requestUpdate);
    window.addEventListener('resize', requestUpdate);

    if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(requestUpdate);
    }

    requestUpdate();
})();
