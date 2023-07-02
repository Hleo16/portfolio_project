const overlay = document.querySelector('.sidebar-overlay');

const closeModelBtn = document.getElementsByClassName('closemodel');

const modelImg = document.getElementsByClassName('flex-container');

const btn = document.querySelector('.btnF');

const modelOpenBtn = document.getElementsByClassName('btnModel');


overlay.addEventListener('click', closeModelBtn)

const modelCard = []
for (var prop in modelImg) {
  modelCard.push(modelImg[prop])
}

/*function closeModel(arg) {
  overlay.classList.remove('open')
  console.log(Array.from(modelCard).indexOf());
  document.body.style.overflowY = 'auto';}
function openModel(arg) {
}*/

for (let i = 0; i < modelOpenBtn.length; i++) {
  modelOpenBtn[i].addEventListener('click', () => {
    document.body.style.overflowY = 'hidden';
    overlay.classList.add('open');
    modelImg[i].classList.add('open')
    modelImg[i].querySelector('.closemodel').style.display ="block";
  });
}




for (let i = 0; i < closeModelBtn.length; i++) {
  closeModelBtn[i].addEventListener('click', () => {
    overlay.classList.remove('open');
    modelImg[i].classList.remove('open')
    modelImg[i].querySelector('.closemodel').style.display ="none";
    document.body.style.overflowY = 'auto';
  });
}

console.log("Wellcome");