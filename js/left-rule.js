(function () {
  function updateGridLeftRule() {
    const ul = document.querySelector('#header .main-header__nav > ul');
    if (!ul) return;

    const left = Math.round(ul.getBoundingClientRect().left);
    const asideWidth = left - 40;

    document.documentElement.style.setProperty(
      '--grid-aside-width',
      asideWidth + 'px'
    );
  }

  let raf;

  function scheduleUpdate() {
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(updateGridLeftRule);
  }

  window.addEventListener('resize', scheduleUpdate);
  window.addEventListener('load', scheduleUpdate);
  document.addEventListener('DOMContentLoaded', scheduleUpdate);

  setTimeout(scheduleUpdate, 100);
  setTimeout(scheduleUpdate, 500);
  setTimeout(scheduleUpdate, 1000);

  scheduleUpdate();
})();
