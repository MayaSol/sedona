var link = document.querySelector(".offer-search-title");
var form = document.querySelector(".offer-search-form");
var date_in = form.querySelector("[name=osf-date-in]");
var btn_search = form.querySelector(".osf-search-btn");

link.addEventListener("click", function (event) {
    event.preventDefault();
    form.classList.toggle("osf-show");
    btn_search.focus();
    date_in.focus();
});