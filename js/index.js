document.getElementById('movie-form').addEventListener('submit', (e) => {
    e.preventDefault()
    fetch("http://www.omdbapi.com/?apikey=1e8fb45a&t=Blade Runner")
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
})