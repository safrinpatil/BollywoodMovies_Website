const previousMovies = [
    { title: "Radhe: Your Most Wanted Bhai", director: "Prabhu Deva", year: 2021 },
    { title: "Sooryavanshi", director: "Rohit Shetty", year: 2021 },
    { title: "Laal Singh Chaddha", director: "Advait Chandan", year: 2022 },
    { title: "RRR", director: "S.S. Rajamouli", year: 2022 },
    { title: "KGF: Chapter 2", director: "Prashanth Neel", year: 2022 },
    { title: "Pathan", director: "Siddharth Anand", year: 2023 },
    { title: "Tiger 3", director: "Maneesh Sharma", year: 2023 },
    { title: "Kick 2", director: "Sajid Nadiadwala", year: 2024 },
    { title: "Brahmastra", director: "Ayan Mukerji", year: 2024 }
];

let movieToDeleteIndex = null;

function populatePreviousMovies() {
    const tableBody = document.getElementById('movieTableBody');
    tableBody.innerHTML = '';
    previousMovies.forEach((movie, index) => {
        const newRow = tableBody.insertRow();
        const cellIndex = newRow.insertCell(0);
        const cellTitle = newRow.insertCell(1);
        const cellDirector = newRow.insertCell(2);
        const cellYear = newRow.insertCell(3);
        const cellActions = newRow.insertCell(4);

        cellIndex.innerText = index + 1;
        cellTitle.innerText = movie.title;
        cellDirector.innerText = movie.director;
        cellYear.innerText = movie.year;        
        cellActions.innerHTML = `
            <button class="btn btn-info btn-sm" onclick="editMovie(${index})">Edit</button>
            <button class="btn btn-danger btn-sm" onclick="confirmDelete(${index})">Delete</button>
        `;
    });
}

function handleFormSubmit(event) {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const director = document.getElementById('director').value;
    const year = document.getElementById('year').value;
    previousMovies.push({ title, director, year });
    populatePreviousMovies();
    document.getElementById('movieForm').reset();
}

function handleUpdate() {
    const index = document.getElementById('movieIndex').value;
    const title = document.getElementById('title').value;
    const director = document.getElementById('director').value;
    const year = document.getElementById('year').value;
    previousMovies[index] = { title, director, year };
    populatePreviousMovies();
    document.getElementById('movieForm').reset();
    document.getElementById('updateButton').style.display = 'none';
    document.getElementById('movieForm').querySelector('button[type="submit"]').style.display = 'inline-block';
}

function editMovie(index) {
    const movie = previousMovies[index];
    document.getElementById('title').value = movie.title;
    document.getElementById('director').value = movie.director;
    document.getElementById('year').value = movie.year;
    document.getElementById('movieIndex').value = index;
    document.getElementById('updateButton').style.display = 'inline-block';
    document.getElementById('movieForm').querySelector('button[type="submit"]').style.display = 'none';
}

function confirmDelete(index) {
    movieToDeleteIndex = index;
    $('#deleteModal').modal('show');
}

function handleConfirmDelete() {
    if (movieToDeleteIndex !== null) {
        previousMovies.splice(movieToDeleteIndex, 1);
        populatePreviousMovies();
        $('#deleteModal').modal('hide');
        movieToDeleteIndex = null;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    populatePreviousMovies();
});
