const accordions = document.getElementsByClassName("accordion");

for (let i = 0; i < accordions.length; i++) {
  accordions[i].addEventListener("click", function () {
    this.classList.toggle("active");
    const panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

const contents = document.querySelectorAll(".panel li a");
const title = document.getElementById("title");
contents.forEach((content) => {
  content.addEventListener("click", function () {
    title.innerText = this.innerText;
  });
});