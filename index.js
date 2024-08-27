const welcomeMessage = () => {
    const today = new Date().toDateString();
    document.getElementById('welcomeMessage').textContent = `🤸🏾‍♀️ Welcome to Your Fitness Tracker 🥗 Today is ${today}`;
};
welcomeMessage();

//The Workout
const displayWorkoutRoutine = () => {
    const workoutInput = document.querySelector('#workoutInput').value.trim(); // Trim whitespace
    const workoutList = document.querySelectorAll('#workoutList li'); // Get all existing workouts
    
    //Client-Side Validation:
    // Check for duplicates
    for (let workout of workoutList) {
        if (workout.textContent === workoutInput) {
            alert('This workout has already been added! Please enter a new workout.');
            return; // Exit the function to prevent adding a duplicate
        }
    }
    
    // If no duplicate is found, proceed to add the workout
    const newWorkout = document.createElement('li');
    newWorkout.textContent = workoutInput;
    document.querySelector('#workoutList').appendChild(newWorkout);
};

// Add event listener to the workout submit button
document.querySelector('#submitWorkout').addEventListener('click', displayWorkoutRoutine);

//The Goal
const addNewGoal = () => {
    const goalInput = document.querySelector('#goalInput').value.trim(); // Trim whitespace
    const goalList = document.querySelectorAll('#goalList li'); // Get all existing goals
    
    //Client-Side Validation:
    // Check for duplicates
    for (let goal of goalList) {
        if (goal.textContent === goalInput) {
            alert('This goal has already been added! Please enter a new goal.');
            return; // Exit the function to prevent adding a duplicate
        }
    }
    
    // If no duplicate is found, proceed to add the goal
    const newGoal = document.createElement('li');
    newGoal.textContent = goalInput;
    document.querySelector('#goalList').appendChild(newGoal);
};

// Add event listener to the goal submit button
document.querySelector('#submitGoal').addEventListener('click', addNewGoal);

    
//Water Intake
let waterIntake = 0;
const updateWaterIntake = (change) => {
    waterIntake += change;
    document.querySelector('#waterIntakeDisplay').textContent = `${waterIntake} glasses 💦`;
};

document.querySelector('#increaseWater').addEventListener('click', () => updateWaterIntake(1));
document.querySelector('#decreaseWater').addEventListener('click', () => updateWaterIntake(-1));


const updateProgressCharts = () => {
    document.querySelector('#workoutProgress').textContent = "Updated workout progress..."; //Static message
    document.querySelector('#calorieIntakeProgress').textContent = "Updated calorie intake progress..."; //Static message
};

updateProgressCharts();

const toggleTheme = () => {
    document.body.classList.toggle('dark-theme');
};

document.querySelector('#themeToggle').addEventListener('click', toggleTheme);

const submitMealPlan = (event) => {
    event.preventDefault(); // Prevent the form from submitting by default

    const mealInputs = document.querySelectorAll('#mealPlanForm input[type="text"]'); // Get all meal inputs
    const mealValues = Array.from(mealInputs).map(input => input.value.trim()); // Extract and trim values
    const uniqueMeals = new Set(mealValues); // Use a Set to store unique meal entries

    //Client-Side Validation:
    if (uniqueMeals.size < mealValues.length) {
        alert('Duplicate meal entries found! Please ensure each day has a unique meal.');
        return; // Exit the function to prevent duplicate submission
    }

    alert('Meal plan submitted successfully! 🍴');
};

// Add event listener to the meal plan form
document.querySelector('#mealPlanForm').addEventListener('submit', submitMealPlan);

