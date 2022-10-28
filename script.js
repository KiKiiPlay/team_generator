const namesField = document.querySelector(".name_container");

const newName = function () {
  const name = "Max";
  const newNameElement = document.createElement("span");
  newNameElement.innerText = name;
  namesField.appendChild(newNameElement);
};
