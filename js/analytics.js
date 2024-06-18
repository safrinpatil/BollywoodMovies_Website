const previousMovies = [
    { title: "Tanhaji", director: "Om Raut", year: 2020, image: "tanhaji.jpg" },
    { title: "Sooryavanshi", director: "Rohit Shetty", year: 2021, image: "sooryavanshi.jpg" },
    { title: "Pushpa: The Rise", director: "Sukumar", year: 2021, image: "pushpa.jpg" },
    { title: "RRR", director: "S. S. Rajamouli", year: 2022, image: "rrr.jpg" },
    { title: "KGF: Chapter 2", director: "Prashanth Neel", year: 2022, image: "kgf2.jpg" },
    { title: "Pathaan", director: "Siddharth Anand", year: 2023, image: "pathaan.jpg" },
    { title: "Jawan", director: "Atlee", year: 2023, image: "jawan.jpg" },
    { title: "Gadar 2", director: "Anil Sharma", year: 2023, image: "gadar2.jpg" },
    { title: "Adipurush", director: "Om Raut", year: 2023, image: "adipurush.jpg" },
    { title: "Animal", director: "Sandeep Reddy Vanga", year: 2024, image: "animal.jpg" }
];


function drawPieChart() {
    const ctx = document.getElementById('moviePieChart').getContext('2d');
    const years = previousMovies.reduce((acc, movie) => {
        acc[movie.year] = (acc[movie.year] || 0) + 1;
        return acc;
    }, {});

    const data = {
        labels: Object.keys(years),
        datasets: [{
            label: 'Movies Released Per Year',
            data: Object.values(years),
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
    };

    new Chart(ctx, {
        type: 'pie',
        data: data,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    enabled: true
                }
            }
        }
    });
}

function drawBarChart() {
    const ctx = document.getElementById('movieBarChart').getContext('2d');
    const years = previousMovies.reduce((acc, movie) => {
        acc[movie.year] = (acc[movie.year] || 0) + 1;
        return acc;
    }, {});

    const data = {
        labels: Object.keys(years),
        datasets: [{
            label: 'Movies Released Per Year',
            data: Object.values(years),
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    };

    new Chart(ctx, {
        type: 'bar',
        data: data,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    enabled: true
                }
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('moviePieChart')) {
        drawPieChart();
    }
    if (document.getElementById('movieBarChart')) {
        drawBarChart();
    }
});
