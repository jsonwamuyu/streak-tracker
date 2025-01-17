
document.getElementById("addHabitBtn").addEventListener('click', showForm);

function showForm() {
    console.log("form added")

    let getAddHabitForm = document.getElementById("add-Habit-form");
    getAddHabitForm.classList = "bg-orange"
    // let form = document.createElement('form');
    getAddHabitForm.innerHTML = "";

    getAddHabitForm.innerHTML = `
        <div class="add-habit__details">
                        <div id="close-form-btn" class="add-btn">
                            <ion-icon name="close-outline"></ion-icon>
                        </div>
                        <div class="icon-text">
                            <ion-icon name="list-outline" style="width: 3rem; height: 3rem;"></ion-icon>
                            <p style="font-weight:600">Add habit to track</p>
                        </div>
                        <div class="form">
                            <h5>Please Add a Habit</h5>
                            <form action="" class="form">
                                <input type="text" placeholder="Enter habit" id="habit-name">
                                <input type="text" placeholder="Enter image URL" id="image-url">
                                <input type="date" id="start-date" placeholder="Start date">
                                <button type="submit" class="btn-submit">Add Habit</button>
                            </form>
                        </div>
                    </div>
    
                `



}