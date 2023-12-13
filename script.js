const accordianItems = document.querySelectorAll(".accordian__item");

let activeIndex = -1;

accordianItems.forEach((item, index) => {
  const button = item.querySelector(".accordian__btn");
  const panel = item.querySelector(".accordian__panel");
  const toggleImg = item.querySelector("img");
  button.addEventListener("click", (event) => {
    if (accordianItems[activeIndex] !== item && activeIndex > -1) {
      const beforePanel =
        accordianItems[activeIndex].querySelector(".accordian__panel");
      const beforeToggleImg = accordianItems[activeIndex].querySelector("img");
      beforePanel.style.display = "";
      beforeToggleImg.src = "./assets/images/icon-plus.svg";
    }
    if (panel.style.display === "") {
      panel.style.display = "block";
      toggleImg.src = "./assets/images/icon-minus.svg";
      activeIndex = index;
    } else {
      panel.style.display = "";
      toggleImg.src = "./assets/images/icon-plus.svg";
      activeIndex = -1;
    }
  });
});
