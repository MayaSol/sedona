var link = document.querySelector(".offer-search-title");
var form = document.querySelector(".offer-search-form");
var date_in = form.querySelector("[name=osf-date-in]");

link.addEventListener("click", function (event) {
    event.preventDefault();
    form.classList.toggle("osf-show");
    date_in.focus();
});