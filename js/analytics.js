const previousMovies = [
    { title: "Tanhaji", director: "Om Raut", year: 2020 },
    { title: "Sooryavanshi", director: "Rohit Shetty", year: 2021 },
    { title: "Pushpa: The Rise", director: "Sukumar", year: 2021 },
    { title: "RRR", director: "S. S. Rajamouli", year: 2022 },
    { title: "KGF: Chapter 2", director: "Prashanth Neel", year: 2022 },
    { title: "Pathaan", director: "Siddharth Anand", year: 2023 },
    { title: "Jawan", director: "Atlee", year: 2023 },
    { title: "Gadar 2", director: "Anil Sharma", year: 2023 },
    { title: "Adipurush", director: "Om Raut", year: 2023 },
    { title: "Animal", director: "Sandeep Reddy Vanga", year: 2024 },
    { title: "Laal Singh Chaddha", director: "Advait Chandan", year: 2022 },
    { title: "Brahmastra", director: "Ayan Mukerji", year: 2022 },
    { title: "Bhool Bhulaiyaa 2", director: "Anees Bazmee", year: 2022 },
    { title: "Liger", director: "Puri Jagannadh", year: 2023 },
    { title: "Heropanti 2", director: "Ahmed Khan", year: 2023 },
    { title: "Bachchan Pandey", director: "Farhad Samji", year: 2024 },
    { title: "Gangubai Kathiawadi", director: "Sanjay Leela Bhansali", year: 2022 },
    { title: "Rocky Aur Rani Ki Prem Kahani", director: "Karan Johar", year: 2023 },
    { title: "Cirkus", director: "Rohit Shetty", year: 2023 },
    { title: "Bhediya", director: "Amar Kaushik", year: 2022 },
    { title: "Atrangi Re", director: "Aanand L. Rai", year: 2021 },
    { title: "Kick 2", director: "Sajid Nadiadwala", year: 2024 },
    { title: "Kabhi Eid Kabhi Diwali", director: "Farhad Samji", year: 2024 },
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
