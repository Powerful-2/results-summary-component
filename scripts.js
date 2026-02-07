/* fetch('./data.json')
  .then(response => response.json())
  .then(data => {
    console.log(data); 
  });

  const summaryContainer = document.querySelector('.summary-content');

fetch('./data.json')
  .then(response => response.json())
  .then(data => {
    data.forEach(item => {
      const div = document.createElement('div');
      div.classList.add('summary-item', item.category.toLowerCase());

      div.innerHTML = `
        <div class="category-label">
          <img src="${item.icon}" alt="${item.category}">
          <span>${item.category}</span>
        </div>
        <div class="category-score">
          <span class="score-bold">${item.score}</span>
          <span class="score-faded">/ 100</span>
        </div>
      `;

      summaryContainer.appendChild(div);
    });
  }); */
