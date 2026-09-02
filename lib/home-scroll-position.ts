const homeScrollPositionKey = "home-scroll-position";

export function saveHomeScrollPosition() {
  if (window.location.pathname !== "/") {
    return;
  }

  window.sessionStorage.setItem(homeScrollPositionKey, `${window.scrollY}`);
}
