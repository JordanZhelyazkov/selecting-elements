import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  let cardElements = document.querySelectorAll('div>.card');
  cardElements.forEach(card => {
    if(card.className !== 'card active'){
      setTimeout(() => {
      card.style.display = 'none';
    },3000)
    }
  })
});
