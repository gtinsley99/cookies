// Show navbar on scrollup, hide on scrolldown
export const onScroll = (setShowNav) => {
  let prevScrollPos = window.scrollY;
  window.onscroll = () => {
    let currentScrollPos = window.scrollY;
    if (prevScrollPos > currentScrollPos || currentScrollPos < 100) {
      setShowNav(true);
    } else {
      setShowNav(false);
    }
    prevScrollPos = currentScrollPos;
  };
};
