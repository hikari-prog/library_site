/* アコーディオン */
const menuIndexes = document.querySelectorAll('.menu_index');

for(const menuIndex of menuIndexes) {
  const btn = menuIndex.querySelector('.toggle_btn');
  const container = menuIndex.nextElementSibling;
  menuIndex.addEventListener('click', () => {
    menuIndex.classList.toggle('active');
  })
}

/* ハンバーガーメニュー */
const drowerWrap = document.querySelector(".drower")
const drowerBtn =document.querySelector(".drower-btn")
const Drower = document.querySelector(".header__nav__sp");

drowerBtn.addEventListener("click" , ()=> {
  drowerBtn.classList.toggle("active");
  Drower.classList.toggle("active");
});

