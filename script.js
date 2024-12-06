document.addEventListener("DOMContentLoaded", () => {
    const listContainer = document.querySelector(".result-list");

    fetch('./data.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            data.forEach(item => {
                // Create the <li> element
                const li = document.createElement("li");
                li.className = `result-list__item relative flex rounded-xl p-3 justify-between gap-5 items-center ${item.bgColor}`;

                // Inner HTML of the <li>
                li.innerHTML = `
          <div class="flex gap-2">
            <img class="icon" src="${item.icon}" alt="${item.category}">
            <span class="category text-red-500 font-hanken font-bold ${item.textColor}">${item.category}</span>
          </div>
          <div class="font-hanken font-bold">
            <span class="score">${item.score}</span>
            <span class="text-slate">/ 100</span>
          </div>
          <!-- Corner Borders -->
          <div class="absolute top-0 left-0 w-2 h-2 border-t border-l border-slate rounded-tl-2xl"></div>
          <div class="absolute top-0 right-0 w-2 h-2 border-t border-r border-slate rounded-tr-2xl"></div>
          <div class="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-slate rounded-bl-2xl"></div>
          <div class="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-slate rounded-br-2xl"></div>
        `;

                // Append the <li> to the <ul>
                listContainer.appendChild(li);
            });
        })
        .catch(error => {
            console.error('Error fetching the JSON:', error);
        });
});