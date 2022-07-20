window.onload = () => {
  const form = document.querySelector("form"),
    passwordFields = document.querySelectorAll('input[type="password"]');

  passwordFields.forEach(
    (field) =>
      (field.onchange = () => {
        if (passwordFields[0].value !== passwordFields[1].value) {
          passwordFields[1].setCustomValidity("Passwords must match.");
        } else {
          passwordFields[1].setCustomValidity("");
        }
      })
  );

  form.onsubmit = (ev) => {
    ev.preventDefault();
  };
};
