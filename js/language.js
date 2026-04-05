// language.js
function setLang(lang){
  if(lang==='en'){
    document.querySelectorAll('.en').forEach(el => el.style.display='block');
    document.querySelectorAll('.cn').forEach(el => el.style.display='none');
  } else {
    document.querySelectorAll('.en').forEach(el => el.style.display='none');
    document.querySelectorAll('.cn').forEach(el => el.style.display='block');
  }
}

// 默认显示英文
window.onload = function() {
  setLang('en');
}