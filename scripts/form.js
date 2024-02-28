"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  form.addEventListener("submit", formsend);

  async function formsend(e) {
    e.preventDefault();

    let error = formValidate(form);

    let formData = new FormData(form);

    if (error === 0) {
      form.classList.add("_sending");
      form.reset();
      let response = await fetch("sendmail.php", {
        method: "POST",
        body: formData,
      });
      console.log(formData);
      if (response.ok) {
        console.log("Sent");
        let result = await response.json();
        alert(result.message);
        form.reset();
      }
    }
  }

  function formValidate(form) {
    let error = 0;
    let formReq = document.querySelectorAll("._req");

    for (let i = 0; i < formReq.length; i++) {
      const input = formReq[i];
      formRemoveError(input);
      if (input.value === "") {
        formAddError(input);
        error++;
      }
    }
    return error;
  }

  function formAddError(input) {
    input.parentElement.classList.add("_error");
    input.classList.add("_error");
  }
  function formRemoveError(input) {
    input.parentElement.classList.remove("_error");
    input.classList.remove("_error");
  }
});
