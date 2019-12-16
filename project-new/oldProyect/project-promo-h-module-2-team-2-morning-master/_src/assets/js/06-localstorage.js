"use strict";

const formInputs = document.querySelectorAll(".js-form__input");
const palettesData = document.querySelectorAll(".palette-container");

function getDataObj() {
  const currentPaletteValue = document.querySelector(
    ".palette-container__input:checked"
  ).value;

  const data = {
    palette: parseInt(currentPaletteValue),
    photo: picture
  };

  for (const formInput of formInputs) {
    const key = formInput.name;
    data[key] = formInput.value;
  }
  return data;
}

function setData() {
  const data = getDataObj();
  localStorage.setItem("data", JSON.stringify(data));
}

form.addEventListener("change", setData);

const getLsData = function() {
  let data = JSON.parse(localStorage.getItem("data"));

  if (data !== null) {
    const newPalette = document.querySelector("#palette" + data.palette);
    newPalette.checked = true;
    picture = data.photo;

    for (const formInput of formInputs) {
      const key = formInput.name;
      formInput.value = data[key];
    }
  }
};
