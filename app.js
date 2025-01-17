// Event listener for 'Add Habit' button
document.getElementById("addHabitBtn").addEventListener('click', showForm);

let habits = []; // Array to store habits

// Function to display the habit form
function showForm() {
    let getAddHabitForm = document.getElementById("add-habit-form");
    getAddHabitForm.classList = "bg-orange";
    getAddHabitForm.innerHTML = "";

    getAddHabitForm.innerHTML = `
        <div class="add-habit__details">
            <div id="close-habit-form" class="add-btn">
                <ion-icon name="close-outline"></ion-icon>
            </div>
            <div class="icon-text">
                <ion-icon name="list-outline" style="width: 3rem; height: 3rem;"></ion-icon>
                <p style="font-weight:600">Add habit to track</p>
            </div>
            <div class="form">
                <h5>Please Add a Habit</h5>
                <form id="habitForm" class="form">
                    <input type="text" placeholder="Enter habit" id="habit-name" required>
                    <input type="text" placeholder="Enter image URL" id="image-url" required>
                    <input type="date" id="start-date" placeholder="Start date" required>
                    <button type="submit" class="btn-submit">Add Habit</button>
                </form>
            </div>
        </div>
        <div id="habit-list"></div>
    `;

    // Attach event listener to the close button
    document.getElementById("close-habit-form").addEventListener('click', closeForm);

    // Attach event listener to handle form submission
    document.getElementById("habitForm").addEventListener('submit', handleFormSubmit);

    // Display existing habits
    displayHabits();
}

// Function to close the habit form
function closeForm() {
    let getAddHabitForm = document.getElementById("add-habit-form");
    getAddHabitForm.classList = "";
    getAddHabitForm.innerHTML = "";
    console.log('Closed form');
}

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault();

    // Get form values
    const habitName = document.getElementById("habit-name").value;
    const imageUrl = document.getElementById("image-url").value;
    const startDate = document.getElementById("start-date").value;

    if (habitName && imageUrl && startDate) {
        const newHabit = {
            habit: habitName,
            image: imageUrl,
            startDate: startDate
        };
        habits.unshift(newHabit); // Add new habit to the beginning
        localStorage.setItem("habits", JSON.stringify(habits));

        console.log("Habit Added:", newHabit);
        alert(`Habit '${habitName}' added successfully!`);
        displayHabits();
        closeForm();
    } else {
        alert("Please fill in all fields.");
    }
}

// Function to delete a habit
function deleteHabit(index) {
    habits.splice(index, 1);
    localStorage.setItem("habits", JSON.stringify(habits));
    displayHabits();
    alert("Habit deleted successfully!");
}

// Function to display habits below the form
function displayHabits() {
    const habitList = document.getElementById("habit-list");
    if (!habitList) return;

    habitList.innerHTML = "";
    const storedHabits = JSON.parse(localStorage.getItem("habits")) || [];
    habits = storedHabits;

    habits.forEach((habit, index) => {
        habitList.innerHTML += `
            <div class="habit-item">
                <img src="${habit.image}" alt="${habit.habit}" style="width:50px; height:50px;">
                <div>
                    <p><strong>${habit.habit}</strong></p>
                    <p>Start Date: ${habit.startDate}</p>
                </div>
                <button onclick="deleteHabit(${index})" class="delete-btn">Delete</button>
            </div>
        `;
    });
}

// Load habits on page load
window.onload = function() {
    habits = JSON.parse(localStorage.getItem("habits")) || [];
    displayHabits();
};
