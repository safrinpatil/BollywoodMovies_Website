

// Data Analytics for Chart.js
if (document.getElementById('myChart')) {
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['2020', '2021', '2022', '2023', '2024'],
            datasets: [{
                label: 'Movies Released per Year',
                data: [85, 90, 95, 100, 110],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Sample data of previously added movies 
const HomePageMovies = [
    { title: "Radhe: Your Most Wanted Bhai", director: "Prabhu Deva", year: 2021,image:'Radhe Your Most Wanted Bhai.jpg' },
    { title: "Sooryavanshi", director: "Rohit Shetty", year: 2021,image:'Sooryavanshi.jpg'  },
    { title: "Laal Singh Chaddha", director: "Advait Chandan", year: 2022,image:'Laal Singh Chaddha.jpeg' },
    { title: "RRR", director: "S.S. Rajamouli", year: 2022 ,image:'RRR.jpeg'},
    { title: "KGF: Chapter 2", director: "Prashanth Neel", year: 2022,image:'KGF.jpeg' },
    { title: "Pathan", director: "Siddharth Anand", year: 2023 ,image:'Pathan.jpeg'},
    { title: "Tiger 3", director: "Maneesh Sharma", year: 2023 ,image:'Tiger3.jpeg'},
    { title: "Kick 2", director: "Sajid Nadiadwala", year: 2024 ,image:'Kick.jpg'},
    { title: "Brahmastra", director: "Ayan Mukerji", year: 2024,image:'Brahmastra.jpg' }
];

  
// Function to populate the home page with movie data
function populateHomePage() {
    const movieList = document.getElementById('movieList');
   

    HomePageMovies.forEach(movie => {
         const movieCard = document.createElement('div');
         const imageUrl = `images/${movie.image}`;

        movieCard.classList.add('col-md-4', 'mb-4');
      
        movieCard.innerHTML = `
            <div class="card card-custom"> 
            <img src="${imageUrl}" class="card-img-top fixed-size-img" alt="${movie.title} Poster">
                <div class="card-body">
                    <h5 class="card-title">${movie.title}</h5>
                    <p class="card-text">Directed by: ${movie.director}<br>Year: ${movie.year}</p>
                </div>
            </div>
        `;
        movieList.appendChild(movieCard);
    });
}

// Call the function to populate the home page with movie data when the page loads
window.onload = populateHomePage;

