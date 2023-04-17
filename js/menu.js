function menuShow() {
  let menuMobile = document.querySelector(".mobile-menu");
  if (menuMobile.classList.contains("open")) {
    menuMobile.classList.remove("open");
    document.querySelector(".icon").src = "../img/menu-responsivo.png";
  } else {
    menuMobile.classList.add("open");
    document.querySelector(".icon").src = "../img/menu-responsivo.png";
  }
}
const cookieBox = document.querySelector(".wrapper");
acceptBtn = cookieBox.querySelector(".bttn button");

acceptBtn.onclick = () => {
  document.cookie = "CookieBy=CodingNepal; max-age=" + 60 * 60 * 24 * 30;
  if (document.cookie) {
    cookieBox.classList.add("hide");
  } else {
    alert("Cookie can't be set!");
  }
};
// let checkCookie = document.cookie.indexOf("CookieBy=CodingNepal");
// checkCookie != 1
//   ? cookieBox.classList.add("hide")
//   : cookieBox.classList.remove("hide");
