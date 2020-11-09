"use strict";

const form = document.querySelector("form");
const formElements = form.elements;

const key = "5f96ab834b77c1637d147e00";
const endpoint = "https://frontend2020-18a2.restdb.io/rest/dxc-signups";

console.log(formElements);

form.setAttribute("novalidate", true);

// function that posts data to restdb
function post() {
  const data = {
    fornavn: "",
    efternavn: "",
    arbejdsmail: "",
    virksomhed: "",
    jobtitel: "",
    land: "",
  };

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
