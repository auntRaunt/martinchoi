window.onload = function () {
  const logo = document.getElementById("logo");
  const header = document.getElementById("header");
  const about = document.getElementById("about");
  const interest = document.getElementById("interest");
  const projects = document.getElementById("projects");
  const nav = document.querySelector(".nav-info");
  const navLis = document.querySelectorAll(".nav-info li");

  const proImgs = document.querySelectorAll(".pro-content-img");

  function homeDisplay() {
    header.style.display = "flex";
    projects.style.display = "none";
    about.style.display = "none";
  }
  function aboutDisplay() {
    header.style.display = "none";
    projects.style.display = "none";
    about.style.display = "block";
  }
  function projectDisplay() {
    header.style.display = "none";
    projects.style.display = "block";
    about.style.display = "none";
  }

  navLis.forEach((item, index) => {
    item.addEventListener("click", () => {
      let itemID = item.id;
      switch (itemID) {
        case "navLi-home":
          homeDisplay();
          break;
        case "navLi-about":
          aboutDisplay();
          //only about have problem
          break;
        case "navLi-pro":
          projectDisplay();
          break;
      }
    });
  });

  const navSlide = () => {
    const burger = document.querySelector(".burger");

    burger.addEventListener("click", () => {
      nav.classList.toggle("nav-active");
      navLis.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = "";
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.5
          }s`;
        }
      });
      burger.classList.toggle("toggle");
    });
  };

  navSlide();

  for (let i = 0; i < proImgs.length; i++) {
    proImgs[i].addEventListener("mouseover", function (e) {
      let eachId = e.target.id;
      // console.log(document.getElementById(`${eachId}`).className === content);
      let groupDiv = document.getElementById(`${eachId}-group`);
      let hoverDiv = document.getElementById(`${eachId}-hover`);
      hoverDiv.style.display = "block";
    });

    proImgs[i].addEventListener("mouseout", function (e) {
      let eachId = e.target.id;
      let hoverDiv = document.getElementById(`${eachId}-hover`);
      hoverDiv.style.display = "none";
    });
  }
};
