import "./style.css";
export const isMobile = window.innerWidth < 1000;
export const imports = {
  articles: [
    require("./index.html"),
    require("./assets/fonts/arialroundedmtbold.ttf"),
  ],
  images: [
    require("./assets/icon.png"),
    require("./assets/profile_picture.png"),
    require("./assets/email.png"),
    require("./assets/github.png"),
    require("./assets/itch-io.png"),
    require("./assets/linkedin.png"),
  ],
  article_images: [
    require("./assets/images/Astronomous1.PNG"),
    require("./assets/images/Astronomous2.PNG"),
    require("./assets/images/Astronomous3.PNG"),
    require("./assets/images/CBB1.png"),
    require("./assets/images/CBB2.png"),
    require("./assets/images/Convergence1.PNG"),
    require("./assets/images/Convergence2.PNG"),
    require("./assets/images/Scraprooms1.PNG"),
    require("./assets/images/Scraprooms2.PNG"),
    require("./assets/images/Eric.png"),
    require("./assets/images/PCE1.png"),
    require("./assets/images/PCE2.png"),
    require("./assets/images/PCE3.png"),
    require("./assets/images/PMaren1.PNG"),
    require("./assets/images/PMaren2.PNG"),
    require("./assets/images/Trajectory1.png"),
    require("./assets/images/Trajectory2.png"),
    require("./assets/images/space_bk.png"),
  ],
};

//Scroll to top of page when the page loads:
setTimeout(() => {
  document.body.scrollTo(0, 0);
}, 0.1);

//When the page loads:
document.addEventListener("DOMContentLoaded", () => {
  //Add a listener to scroll to fade in articles as needded:
  const handleScroll = () => {
    const fadeElements = document.querySelectorAll(".fade-in");
    fadeElements.forEach((el) => {
      const element = el as HTMLElement;
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const visibilityThreshold = isMobile ? 0.9 : 0.8;
      if (rect.top < windowHeight * visibilityThreshold) {
        element.classList.add("show");
      } else {
        element.classList.remove("show");
      }
    });
  };
  window.addEventListener("scroll", handleScroll);
  handleScroll();
  setTimeout(() => {
    handleScroll();
  }, 100);
});
