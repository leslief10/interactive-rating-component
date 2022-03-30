const ratingCard = document.querySelector('.rating-card');
const ratingBtns = [...document.querySelectorAll('button[type=button]')];
const submitBtn = document.querySelector('.submit-btn');
const thanksCard = document.querySelector('.thanks-card');
const ratingSelectedText = document.querySelector('.rating-selected');

/*Functions*/
function toggleCardsVisibility() {
  ratingCard.classList.add('hidden');
  thanksCard.classList.remove('hidden');
  thanksCard.classList.add('visible');
}

function ratingSelectedButton(e) {
  ratingSelectedText.innerHTML = `You selected ${e.target.textContent} out of 5`;
}

/*Event listeners*/
submitBtn.addEventListener('click', toggleCardsVisibility);
ratingBtns.forEach(button => button.addEventListener('click', ratingSelectedButton));