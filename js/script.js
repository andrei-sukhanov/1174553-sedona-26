const btn = document.querySelector(".btn_search");
const btnSubmit = document.querySelector(".btn_blue.find");
const form = document.querySelector(".form_order");

const dateVisit = document.querySelector("[name=data-visit]");
const dateDepart = document.querySelector("[name=data-departure]");
const numberAdults = document.querySelector("[name=number-adults]");
const numberChildren = document.querySelector("[name=number-children]");

form.classList.add("toggle");

btn.addEventListener ("click", function() {
    form.classList.toggle("toggle");
    form.classList.remove("shake");
});

btnSubmit.addEventListener("click", function() {
    if(dateVisit.value == ""||dateDepart.value == ""|| numberChildren.value == ""||numberAdults =="") {
        form.classList.add("shake");
    }
})

