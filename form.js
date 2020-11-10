"use strict";

const form = document.querySelector("form");
const formElements = form.elements;
// const submit = formElements[7];

// const fornavn = formElements.name.value;
// const efternavn = formElements.lastname.value;
// const arbejdsmail = formElements.email.value;
// const virksomhed = formElements.company.value;
// const jobtitel = formElements.job.value;
// const land = formElements.country.value;

const key = "5f96ab834b77c1637d147e00";
const endpoint = "https://frontend2020-18a2.restdb.io/rest/dxc-signups";

window.addEventListener("load", start);

function start() {
  submitForm();
}

function submitForm() {
  const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    form.elements.submit.disabled = true;

    const myData = {
      fornavn: formElements.name.value,
      efternavn: formElements.lastname.value,
      arbejdsmail: formElements.email.value,
      virksomhed: formElements.company.value,
      jobtitel: formElements.job.value,
      land: formElements.country.value,
    };

    post(myData);
  });
}

// function that posts data to restdb
function post(data) {
  const postData = JSON.stringify(data);
  fetch(endpoint, {
    method: "post",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": key,
      "cache-control": "no-cache",
    },
    body: postData,
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}
