// tăng kích thước width cho thanh search
let search = document.querySelector("#header-search");
function selectSearch() {
  search.classList.toggle("width-200");
}
search.addEventListener("click", function () {
  selectSearch();
});

//Hiệu ứng scroll
window.onscroll = function () {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.querySelector("header").classList.add("header-fixed");
  } else {
    document.querySelector("header").classList.remove("header-fixed");
  }
};
