// const menuIcon = document.querySelector("#menuIcon");
// const menuContaner = document.querySelector(".menu_contaner");
// const wrapper = document.querySelector(".wrapper");
// const iconX = document.querySelector("#iconX");
// const options = document.querySelectorAll(".options");
const seeBtn = document.querySelectorAll(".SEE");
const xIcon = `<i id="popiconX" class="fas fa-lg fa-times"></i>`;

// [menuIcon, iconX].forEach((e) => {
//   e.addEventListener("click", () => {
//     menuContaner.classList.toggle("d-none");
//     menuContaner.classList.toggle("p-fixed");
//     menuContaner.classList.toggle("d-flex");
//     wrapper.classList.toggle("p-fixed");
//     wrapper.classList.toggle("d-none");
//     wrapper.classList.toggle("d-flex");
//     document.body.classList.toggle("no-scroll");
//   });
// });

// options.forEach((e) => {
//   e.addEventListener("click", () => {
//     menuContaner.classList.toggle("d-none");
//     menuContaner.classList.toggle("p-fixed");
//     menuContaner.classList.toggle("d-flex");
//     wrapper.classList.toggle("p-fixed");
//     wrapper.classList.toggle("d-none");
//     wrapper.classList.toggle("d-flex");
//     document.body.classList.toggle("no-scroll");
//   });
// });

// seeBtn.forEach((e) => {
//   e.addEventListener("click", () => {
//     popupWindow.classList.toggle("d-none");
//     popupWindow.classList.toggle("d-flex");
//     popupWindow.classList.toggle("p-fixed");
//     document.body.classList.toggle("no-scroll");
//   });
// });

// popiconX.addEventListener("click", () => {
//   popupWindow.classList.toggle("d-none");
//   popupWindow.classList.toggle("d-flex");
//   popupWindow.classList.toggle("p-fixed");
//   document.body.classList.toggle("no-scroll");
// });

const dataArray = [
  {
    id: 0,
    imgUlr: "./img/workPhoto.png",
    name: "Tonic",
    technologies: ["CANOPY", "BACK END DEV", "2015"],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos  pariatur voluptas, amet autem natus quam vitae culpa ut! Voluptate officiis eligendi non atque? Ab necessitatibus, ipsa aliquam provident, odio incidunt eum debitis ipsum non animi consecteturomnis, labore eius quo dolores rerum nobis vel recusandae saepe fuga sed libero perferendis?",
    language: ["HTML", "CSS", "JS"],
  },
  {
    id: 1,
    imgUlr: "./img/workPhoto.png",
    name: "Tonic",
    technologies: ["CANOPY", "BACK END DEV", "2015"],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos  pariatur voluptas, amet autem natus quam vitae culpa ut! Voluptate officiis eligendi non atque? Ab necessitatibus, ipsa aliquam provident, odio incidunt eum debitis ipsum non animi consecteturomnis, labore eius quo dolores rerum nobis vel recusandae saepe fuga sed libero perferendis?",
    language: ["HTML", "CSS", "JS"],
  },
  {
    id: 2,
    imgUlr: "./img/workPhoto.png",
    name: "Tonic",
    technologies: ["CANOPY", "BACK END DEV", "2015"],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos  pariatur voluptas, amet autem natus quam vitae culpa ut! Voluptate officiis eligendi non atque? Ab necessitatibus, ipsa aliquam provident, odio incidunt eum debitis ipsum non animi consecteturomnis, labore eius quo dolores rerum nobis vel recusandae saepe fuga sed libero perferendis?",
    language: ["HTML", "CSS", "JS"],
  },
  {
    id: 3,
    imgUlr: "./img/workPhoto.png",
    name: "Tonic",
    technologies: ["CANOPY", "BACK END DEV", "2015"],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos  pariatur voluptas, amet autem natus quam vitae culpa ut! Voluptate officiis eligendi non atque? Ab necessitatibus, ipsa aliquam provident, odio incidunt eum debitis ipsum non animi consecteturomnis, labore eius quo dolores rerum nobis vel recusandae saepe fuga sed libero perferendis?",
    language: ["HTML", "CSS", "JS"],
  },
];

const popupCard = document.getElementById("popupCard");

function createPopupCard(popupData) {
  const data = `
  <div class="popupContaner d-flex">
  <div class="popupwrapper">
  <div class="project popup-card d-flex">
  ${xIcon}
    <h1>${popupData.name}</h1>
    <div class="in-body">
      <p class="a7a">${popupData.technologies[0]}</p>
      <p>${popupData.technologies[1]}</p>
      <p>${popupData.technologies[2]}</p>
    </div>
    <img class="img100" src="${popupData.imgUlr}" alt="work photo one" />
    <div class="projectInfo">
      <p class="dis--">
        ${popupData.description}
      </p>
      <div class="d-flex ddd">
        <ul class="butt">
          <li class="ppp">${popupData.language[0]}</li>
          <li class="ppp">${popupData.language[1]}</li>
          <li class="ppp">${popupData.language[2]}</li>
        </ul>
        <hr />
        <div class="popupBtns button">
          <button class="popupBtnn" type="button">
            <a href="">
              <p>See live</p>
              <i class="fas fa-share-square"></i>
            </a>
          </button>
          <button class="popupBtnn" type="button">
            <a href="">
              <p>See live</p>
              <i class="fab fa-github"></i>
            </a>
          </button>
        </div>
      </div>
    </div>
  </div>
  </div>
  </div>
`;

  const popupWrapper = document.createElement("div");
  const card = document.querySelector(".popup-card");

  popupWrapper.setAttribute("class", "popupwrapper");

  popupWrapper.innerHTML = data;

  // card.innerHTML += xIcon;
  return popupWrapper;
}

seeBtn.forEach((btn) => {
  // console.log(btn);
  btn.addEventListener("click", (e) => {
    if (!document.querySelector(".popupWrapper")) {
      const popupData = dataArray[e.target.id];
      const popup = createPopupCard(popupData);
      popupCard.append(popup);
      document.body.classList.toggle("no-scroll");
    }
  });
});

xIcon.addEventListener("click", (e) => {
  console.log("sda");
});
