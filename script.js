// script.js

document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    card.addEventListener('click', () => {
      card.classList.add('clicked');
      setTimeout(() => {
        card.classList.remove('clicked');
      }, 300);
    });
  });
});
