document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("search-btn");
    const input = document.getElementById("search-input");
    const resultDiv = document.getElementById("result");

    button.addEventListener("click", () => {
        const query = encodeURIComponent(input.value.trim());
         fetch(`superheroes.php?query=${query}`)
            .then(response => response.json())
            .then(data => {
                resultDiv.innerHTML = '';

            if (data.notfound) {
                    resultDiv.textContent = 'Superhero not found';
                    return;
                }

            if (Array.isArray(data)) {
                    const ul = document.createElement('ul');
                    data.forEach(hero => {
                        const li = document.createElement('li');
                        li.textContent = hero.alias;
                        ul.appendChild(li);
                    });
                    resultDiv.appendChild(ul);
                } else {
                    const h3 = document.createElement('h3');
                    h3.textContent = data.alias;
                    const h4 = document.createElement('h4');
                    h4.textContent = data.name;
                    const p = document.createElement('p');
                    p.textContent = data.biography;

                    resultDiv.appendChild(h3);
                    resultDiv.appendChild(h4);
                    resultDiv.appendChild(p);
                }
            })
            .catch(err => {
                console.error(err);
                resultDiv.textContent = 'Error fetching data';
            });
    });
});
