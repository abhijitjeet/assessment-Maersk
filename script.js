document.addEventListener("DOMContentLoaded", () => {
  const cardsContainer = document.getElementById("cards");
  const shuffleBtn = document.getElementById("shuffleBtn");
  const sortBtn = document.getElementById("sortBtn");

  // Initial cards
  let cards = Array.from({ length: 9 }, (_, i) => i + 1);

  // Function to render cards
  function renderCards(cards) {
    cardsContainer.innerHTML = "";
    cards.forEach((card) => {
      const cardElement = document.createElement("div");
      cardElement.classList.add("card");
      cardElement.textContent = card;
      cardsContainer.appendChild(cardElement);
    });
  }

  // Shuffle function
  function shuffle(cards) {
    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }
  }

  // Sort function
  function sort(cards) {
    cards.sort((a, b) => a - b);
  }

  // Initial render
  renderCards(cards);

  // Event listeners
  shuffleBtn.addEventListener("click", () => {
    shuffle(cards);
    renderCards(cards);
  });

  sortBtn.addEventListener("click", () => {
    sort(cards);
    renderCards(cards);
  });
});
