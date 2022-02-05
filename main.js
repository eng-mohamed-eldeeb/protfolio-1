const menuIcon = document.querySelector('#menuIcon');
const menuContaner = document.querySelector('.menu_contaner');
const wrapper = document.querySelector('.wrapper');
const options = document.querySelectorAll('.options');
const iconX = document.querySelector('#iconX');
const seeBtn = document.querySelectorAll('.SEE');
const work = document.querySelector('#works');

[menuIcon, iconX].forEach((e) => {
  e.addEventListener('click', () => {
    menuContaner.classList.toggle('d-none');
    menuContaner.classList.toggle('p-fixed');
    menuContaner.classList.toggle('d-flex');
    wrapper.classList.toggle('p-fixed');
    wrapper.classList.toggle('d-none');
    wrapper.classList.toggle('d-flex');
    document.body.classList.toggle('no-scroll');
  });
});

options.forEach((e) => {
  e.addEventListener('click', () => {
    menuContaner.classList.toggle('d-none');
    menuContaner.classList.toggle('p-fixed');
    menuContaner.classList.toggle('d-flex');
    wrapper.classList.toggle('p-fixed');
    wrapper.classList.toggle('d-none');
    wrapper.classList.toggle('d-flex');
    document.body.classList.toggle('no-scroll');
  });
});

const dataArray = [
  {
    id: 0,
    imgUlr: './img/workPhoto.png',
    name: 'Tonic',
    technologies: ['CANOPY', 'BACK END DEV', '2015'],
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos  pariatur voluptas, amet autem natus quam vitae culpa ut! Voluptate officiis eligendi non atque? Ab necessitatibus, ipsa aliquam provident, odio incidunt eum debitis ipsum non animi consecteturomnis, labore eius quo dolores rerum nobis vel recusandae saepe fuga sed libero perferendis?',
    language: ['HTML', 'CSS', 'JS'],
    giturl: 'https://github.com/eng-mohamed-eldeeb',
    source: 'https://eng-mohamed-eldeeb.github.io/protofolio/',
  },
  {
    id: 1,
    imgUlr: './img/workPhoto1.png',
    name: 'Tonic',
    technologies: ['CANOPY', 'BACK END DEV', '2015'],
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos  pariatur voluptas, amet autem natus quam vitae culpa ut! Voluptate officiis eligendi non atque? Ab necessitatibus, ipsa aliquam provident, odio incidunt eum debitis ipsum non animi consecteturomnis, labore eius quo dolores rerum nobis vel recusandae saepe fuga sed libero perferendis?',
    language: ['HTML', 'CSS', 'JS'],
    giturl: 'https://github.com/eng-mohamed-eldeeb',
    source: 'https://eng-mohamed-eldeeb.github.io/protofolio/',
  },
  {
    id: 2,
    imgUlr: './img/workPoto2.png',
    name: 'Tonic',
    technologies: ['CANOPY', 'BACK END DEV', '2015'],
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos  pariatur voluptas, amet autem natus quam vitae culpa ut! Voluptate officiis eligendi non atque? Ab necessitatibus, ipsa aliquam provident, odio incidunt eum debitis ipsum non animi consecteturomnis, labore eius quo dolores rerum nobis vel recusandae saepe fuga sed libero perferendis?',
    language: ['HTML', 'CSS', 'JS'],
    giturl: 'https://github.com/eng-mohamed-eldeeb',
    source: 'https://eng-mohamed-eldeeb.github.io/protofolio/',
  },
  {
    id: 3,
    imgUlr: './img/workPoto3.png',
    name: 'Tonic',
    technologies: ['CANOPY', 'BACK END DEV', '2015'],
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos  pariatur voluptas, amet autem natus quam vitae culpa ut! Voluptate officiis eligendi non atque? Ab necessitatibus, ipsa aliquam provident, odio incidunt eum debitis ipsum non animi consecteturomnis, labore eius quo dolores rerum nobis vel recusandae saepe fuga sed libero perferendis?',
    language: ['HTML', 'CSS', 'JS'],
    giturl: 'https://github.com/eng-mohamed-eldeeb',
    source: 'https://eng-mohamed-eldeeb.github.io/protofolio/',
  },
];

const popupCard = document.getElementById('popupCard');

function createPopupCard(popupData) {
  const data = `
  <div class="popupContaner d-flex">
  <div class="popupwrapper">
  <div class="project popup-card d-flex">
  <i id="xIcon" class="fas fa-lg fa-times"></i>
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
            <a href="${popupData.source}">
              <p>See live</p>
              <i class="fas fa-share-square"></i>
            </a>
          </button>
          <button class="popupBtnn" type="button">
            <a href="${popupData.giturl}">
              <p>See cource</p>
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

  const popupWrapper = document.createElement('div');

  popupWrapper.setAttribute('class', 'popupwrapper');

  popupWrapper.innerHTML += data;

  popupWrapper.querySelector('#xIcon').addEventListener('click', () => {
    popupWrapper.innerHTML = '';
    document.body.classList.toggle('no-scroll');
  });

  return popupWrapper;
}

seeBtn.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const popupData = dataArray[e.target.id];
    const popup = createPopupCard(popupData);
    popupCard.append(popup);
    document.body.classList.toggle('no-scroll');
  });
});

function createWork(popupData) {
  const data = `
  <div class="project">
  <img src="${popupData.imgUlr}" alt="work photo one" />
  <div class="project-info">
    <h3>${popupData.name}</h3>
    <div class="in-body">
    <p class="a7a">${popupData.technologies[0]}</p>
    <p>${popupData.technologies[1]}</p>
    <p>${popupData.technologies[2]}</p>
    </div>
    <p class="dis--">
      ${popupData.description}
    </p>
    <ul class="butt">
    <li class="ppp">${popupData.language[0]}</li>
    <li class="ppp">${popupData.language[1]}</li>
    <li class="ppp">${popupData.language[2]}</li>
    </ul>
    <button id="0" class="SEE" type="button">See Project</button>
  </div>
</div>
`;

  const popupWrapper = document.createElement('div');

  popupWrapper.setAttribute('class', 'project');

  popupWrapper.innerHTML += data;

  popupWrapper.querySelector('.SEE').addEventListener('click', (e) => {
    const popupData = dataArray[e.target.id];
    const popup = createPopupCard(popupData);
    popupCard.append(popup);
    document.body.classList.toggle('no-scroll');
  });

  return popupWrapper;
}

for (let i = 0; i < 4; i += 1) {
  const popupData = dataArray[i];
  const popup = createWork(popupData);
  work.append(popup);
}

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const userMail = form.elements.userMail.value;
  const errorMessage = document.getElementById('error-msg');
  if (userMail === userMail.toLowerCase()) {
    errorMessage.classList.toggle('d-none');
    form.submit();
  } else {
    errorMessage.classList.toggle('d-none');
  }
});