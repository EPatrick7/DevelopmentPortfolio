import "./style.css";
export const imports = {
  articles: [
    require("./index.html"),
    require("./assets/fonts/arialroundedmtbold.ttf"),

    require("./assets/articles/frontiers.html"),
    require("./assets/articles/avatar.html"),
    require("./assets/articles/wtew.html"),

    require("./assets/articles/charybdis.html"),
    require("./assets/articles/scraprooms.html"),
    require("./assets/articles/charybdis.html"),
    require("./assets/articles/chronomancy.html"),
    require("./assets/articles/bugsvbunnies.html"),
    require("./assets/articles/convergence.html"),
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
    require("./assets/images/Avatar1.png"),
    require("./assets/images/WTEW1.png"),
    require("./assets/images/Frontiers1.png"),
    require("./assets/images/Pipeline1.png"),
    require("./assets/images/BugsVBunnies.jpg"),
    require("./assets/images/Chronomancy.jpg"),
    require("./assets/images/Charybdis1.PNG"),
    require("./assets/images/Convergence1.PNG"),
    require("./assets/images/Scraprooms1.PNG"),
    require("./assets/images/Eric.png"),
    require("./assets/images/PMaren2.PNG"),
  ],
};

Array.from(document.getElementsByClassName("project-focus"))?.forEach(
  (focus: any) => {
    focus.style.opacity = "1";
  },
);
