document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("search-btn");

    button.addEventListener("click", () => {
        fetch("http://localhost/info2180-lab4/superheroes.php")
            .then(response => response.text())
            .then(data => {
                alert(data); 
            })
            .catch(error => console.error("Error:", error));
    });
});


