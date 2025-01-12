const nowClock = document.querySelector('.nowClock');
const colors = [
  '#ef5777',
  '#575fcf',
  '#4bcffa',
  '#34e7e4',
  '#0be881',
  '#f53b57',
  '#3c40c6',
  '#0fbcf9',
  '#00d8d6',
  '#05c46b',
  '#ffc048',
  '#ffdd59',
  '#ff5e57',
  '#d2dae2',
  '#485460',
  '#ffa801',
  '#ffd32a',
  '#ff3f34',
];

function randomBackground() {
  const a = colors[Math.floor(Math.random() * colors.length)];
  const b = colors[Math.floor(Math.random() * colors.length)];
  if (a === b) {
    return randomBackground();
  }
  document.body.style.background = `linear-gradient(45deg, ${a} 10%, ${b} 40%, transparent)`;
  document.body.style.mixBlendMode = multiply;
}

// 현재 시간 가져오기
function getDate(dateString) {
  const years = dateString.getFullYear();
  const months = dateString.getMonth() + 1;
  const days = dateString.getDate();
  const hours = dateString.getHours();
  const minutes = dateString.getMinutes();
  const seconds = dateString.getSeconds();
  return `${years}년 ${months}월 ${days}일 ${hours}시 ${minutes}분 ${seconds}초`;
}
function dateDisplay() {
  const toDay = new Date();
  nowClock.innerHTML = getDate(toDay);
}

// 로그인
const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener('submit', onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}

// 실행
setInterval(() => {
  // randomBackground();
}, 10000);
setInterval(dateDisplay, 1000);
