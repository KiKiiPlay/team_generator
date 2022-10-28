const namesField = document.querySelector(".name_container");
const nameInput = document.getElementById("name");
const team_blocks = document.querySelector(".right_part");
let teamQuantity = document.getElementById("team_quantity_val");
let startVal = 0;
let teamNum = 0;

let teamsArr = [];
let tempArr = [];

const newName = function () {
  let name = nameInput.value;
  const newNameElement = document.createElement("span");
  newNameElement.innerText = name;
  namesField.appendChild(newNameElement);
  teamsArr.push(name);
  nameInput.value = "";
};

const reset = function () {
  namesField.innerText = "";
  teamsArr = [];
  startVal = 0;
  teamQuantity.innerText = startVal;
};

const increaseTeam = function () {
  startVal += 1;
  teamQuantity.innerText = startVal;
  console.log(startVal);
};

const decreaseTeam = function () {
  if (startVal > 0) {
    startVal -= 1;
    teamQuantity.innerText = startVal;
    console.log(startVal);
  }
};

// const getVal = function () {
//   console.log(startVal);
// };

const randomizeTeams = function () {
  let currentIndex = teamsArr.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [teamsArr[currentIndex], teamsArr[randomIndex]] = [
      teamsArr[randomIndex],
      teamsArr[currentIndex],
    ];
  }

  const quantityOfTeamParticipants = teamsArr.length / startVal;
  console.log(quantityOfTeamParticipants);

  for (let i = 0; i < startVal; i++) {
    for (let i = 0; i < quantityOfTeamParticipants; i++) {
      tempArr.push(teamsArr[0]);
      teamsArr.splice(0, 1);
    }
    team_blocks.innerHTML += `
    <div class="container_with_text">
    <span>Team ${(teamNum += 1)}</span>
    <div class="team_container">${tempArr}</div>
  </div>`;
    tempArr = [];
  }

  namesField.innerHTML = ``;

  startVal = 0;
  teamQuantity.innerText = startVal;
};
