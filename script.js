const foodDatabase = [
    // Your original entries...
    { name: "Apple", calories: 95, protein: 0.5, servingSize: 1, servingUnit: "medium (182g)" },
    { name: "Banana", calories: 105, protein: 1.3, servingSize: 1, servingUnit: "medium (118g)" },
    { name: "Chicken Breast", calories: 165, protein: 31, servingSize: 1, servingUnit: "breast (120g cooked)" },
    { name: "Egg", calories: 68, protein: 5.5, servingSize: 1, servingUnit: "large egg" },
    { name: "Milk", calories: 103, protein: 8, servingSize: 1, servingUnit: "cup (244ml)" },
    { name: "Rice", calories: 206, protein: 4.3, servingSize: 1, servingUnit: "cup cooked (158g)" },
    { name: "Pasta", calories: 200, protein: 7, servingSize: 1, servingUnit: "cup cooked (140g)" },
    { name: "Greek Yogurt", calories: 100, protein: 17, servingSize: 1, servingUnit: "container (150g)" },
    { name: "Peanut Butter", calories: 190, protein: 8, servingSize: 2, servingUnit: "tbsp (32g)" },
    { name: "Almonds", calories: 164, protein: 6, servingSize: 1, servingUnit: "oz (28g, about 23 nuts)" },
    { name: "Oatmeal", calories: 150, protein: 5, servingSize: 1, servingUnit: "cup cooked (234g)" },
    { name: "Whole Wheat Bread", calories: 70, protein: 3.5, servingSize: 1, servingUnit: "slice (28g)" },
    { name: "Avocado", calories: 234, protein: 3, servingSize: 1, servingUnit: "whole (200g)" },
    { name: "Sweet Potato", calories: 103, protein: 2.3, servingSize: 1, servingUnit: "medium (130g)" },
    { name: "Tuna", calories: 191, protein: 42, servingSize: 1, servingUnit: "can (165g)" },
    { name: "Cottage Cheese", calories: 163, protein: 14, servingSize: 1, servingUnit: "cup (210g)" },
    { name: "Quinoa", calories: 222, protein: 8, servingSize: 1, servingUnit: "cup cooked (185g)" },
    { name: "Spinach", calories: 7, protein: 0.9, servingSize: 1, servingUnit: "cup raw (30g)" },
    { name: "Beef (Ground, 85% lean)", calories: 213, protein: 22, servingSize: 1, servingUnit: "4 oz cooked (113g)" },
    { name: "Tofu", calories: 144, protein: 15, servingSize: 1, servingUnit: "1/2 block (126g)" },
  
    // New additions
    { name: "Blueberries", calories: 85, protein: 1.1, servingSize: 1, servingUnit: "cup (148g)" },
    { name: "Strawberries", calories: 49, protein: 1, servingSize: 1, servingUnit: "cup sliced (166g)" },
    { name: "Broccoli", calories: 55, protein: 3.7, servingSize: 1, servingUnit: "cup cooked (156g)" },
    { name: "Cheddar Cheese", calories: 113, protein: 7, servingSize: 1, servingUnit: "oz (28g)" },
    { name: "Granola Bar", calories: 190, protein: 3, servingSize: 1, servingUnit: "bar (40g)" },
    { name: "Protein Shake (Whey)", calories: 120, protein: 24, servingSize: 1, servingUnit: "scoop mixed (32g)" },
    { name: "Pizza (Cheese, slice)", calories: 285, protein: 12, servingSize: 1, servingUnit: "slice (107g)" },
    { name: "Hamburger (Homemade)", calories: 354, protein: 17, servingSize: 1, servingUnit: "burger (150g)" },
    { name: "French Fries", calories: 365, protein: 3.4, servingSize: 1, servingUnit: "medium (117g)" },
    { name: "Caesar Salad (with dressing)", calories: 330, protein: 8, servingSize: 1, servingUnit: "serving (230g)" },
    { name: "Grilled Cheese Sandwich", calories: 400, protein: 12, servingSize: 1, servingUnit: "sandwich (150g)" },
    { name: "Pancakes (2 medium)", calories: 175, protein: 4.5, servingSize: 2, servingUnit: "medium pancakes (150g)" },
    { name: "Bacon (3 slices)", calories: 132, protein: 9, servingSize: 3, servingUnit: "slices (34g)" },
    { name: "Chick-fil-A Chicken Sandwich", calories: 440, protein: 28, servingSize: 1, servingUnit: "sandwich" },
    { name: "McDonald's Big Mac", calories: 550, protein: 25, servingSize: 1, servingUnit: "burger" },
    { name: "Taco Bell Beef Taco", calories: 170, protein: 8, servingSize: 1, servingUnit: "taco" },
    { name: "Starbucks Mocha Frappuccino", calories: 370, protein: 5, servingSize: 1, servingUnit: "grande (16 fl oz)" },
    { name: "Chipotle Chicken Burrito", calories: 1070, protein: 45, servingSize: 1, servingUnit: "burrito" },
    { name: "Ice Cream (Vanilla)", calories: 207, protein: 3.5, servingSize: 1, servingUnit: "cup (132g)" },
    { name: "Trail Mix", calories: 693, protein: 20, servingSize: 1, servingUnit: "cup (143g)" },
    { name: "Bagel with Cream Cheese", calories: 350, protein: 9, servingSize: 1, servingUnit: "bagel (120g)" },
  
    // Additional Foods & Drinks
    { name: "Premier Protein Shake", calories: 160, protein: 30, servingSize: 1, servingUnit: "bottle (11 fl oz)" },
    { name: "Fairlife Core Power Protein Shake", calories: 170, protein: 26, servingSize: 1, servingUnit: "bottle (14 fl oz)" },
    { name: "Celery with Peanut Butter", calories: 150, protein: 6, servingSize: 1, servingUnit: "snack (100g)" },
    { name: "Egg Whites", calories: 17, protein: 3.6, servingSize: 1, servingUnit: "egg white (33g)" },
    { name: "Cucumber", calories: 16, protein: 0.7, servingSize: 1, servingUnit: "cup sliced (104g)" },
    { name: "Carrots (baby)", calories: 35, protein: 0.5, servingSize: 1, servingUnit: "8 pieces (85g)" },
    { name: "Protein Bar (Quest)", calories: 200, protein: 21, servingSize: 1, servingUnit: "bar (60g)" },
    { name: "Monster Energy Zero Ultra", calories: 10, protein: 0, servingSize: 1, servingUnit: "can (16 fl oz)" },
    { name: "Gatorade", calories: 140, protein: 0, servingSize: 1, servingUnit: "bottle (20 fl oz)" },
    { name: "Coca-Cola", calories: 140, protein: 0, servingSize: 1, servingUnit: "can (12 fl oz)" },
    { name: "Iced Coffee (Black)", calories: 5, protein: 0, servingSize: 1, servingUnit: "cup (8 fl oz)" },
    { name: "Baked Salmon", calories: 233, protein: 25, servingSize: 1, servingUnit: "fillet (154g)" },
    { name: "Protein Oats", calories: 250, protein: 20, servingSize: 1, servingUnit: "bowl (1 cup oats + scoop protein)" },
    { name: "Turkey Sandwich", calories: 320, protein: 22, servingSize: 1, servingUnit: "sandwich" },
    { name: "Hard Boiled Egg", calories: 78, protein: 6, servingSize: 1, servingUnit: "egg" },
  
    // Popular items not yet listed
    { name: "Hot Dog", calories: 290, protein: 10, servingSize: 1, servingUnit: "hot dog (standard with bun)" },
    { name: "Fried Rice (Chicken)", calories: 329, protein: 14, servingSize: 1, servingUnit: "cup (198g)" },
    { name: "Donut (Glazed)", calories: 260, protein: 3, servingSize: 1, servingUnit: "donut (52g)" },
    { name: "Spaghetti with Meatballs", calories: 350, protein: 15, servingSize: 1, servingUnit: "serving (1 cup pasta + 2 meatballs)" },
    { name: "Orange", calories: 62, protein: 1.2, servingSize: 1, servingUnit: "medium (131g)" },
    { name: "Cheeseburger (Fast Food)", calories: 300, protein: 15, servingSize: 1, servingUnit: "burger (120g)" },
    { name: "Nachos with Cheese", calories: 346, protein: 8, servingSize: 1, servingUnit: "serving (180g)" },
    { name: "Mashed Potatoes with Gravy", calories: 214, protein: 4, servingSize: 1, servingUnit: "cup (210g)" },
    { name: "Apple Pie Slice", calories: 320, protein: 2, servingSize: 1, servingUnit: "slice (1/8 of 9\" pie)" }
    { name: "Cake Batter Yogurt Bowl", calories: 330, protein: 18, servingSize: 1, servingUnit: "bowl (1/2 cup cake batter yogurt + graham cracker crumbles + chocolate pretzel + 1 Gold Oreo)"}
  ];
  
const foodInput = document.getElementById('food-input');
const autocompleteResults = document.getElementById('autocomplete-results');
const foodQuantity = document.getElementById('food-quantity');
const foodUnit = document.getElementById('food-unit');
const mealType = document.getElementById('meal-type');
const addFoodBtn = document.getElementById('add-food-btn');
const calorieGoal = document.getElementById('calorie-goal');
const totalCaloriesElement = document.getElementById('total-calories');
const totalProteinElement = document.getElementById('total-protein');

const mealSections = {
    breakfast: document.getElementById('breakfast-list'),
    lunch: document.getElementById('lunch-list'),
    dinner: document.getElementById('dinner-list'),
    snack: document.getElementById('snack-list')
};

let addedFoods = [];

function init() {
    loadFromLocalStorage();
    setupEventListeners();
    updateTotals();
}

function setupEventListeners() {
    foodInput.addEventListener('input', handleFoodInput);
    
    addFoodBtn.addEventListener('click', addFood);
    
    calorieGoal.addEventListener('change', saveToLocalStorage);
    
    autocompleteResults.addEventListener('click', selectAutocompleteItem);
    
    document.addEventListener('click', (e) => {
        if (e.target !== foodInput) {
            autocompleteResults.style.display = 'none';
        }
    });
}

function handleFoodInput() {
    const searchTerm = foodInput.value.toLowerCase();
    if (searchTerm.length < 2) {
        autocompleteResults.style.display = 'none';
        return;
    }
    
    const results = foodDatabase.filter(food => 
        food.name.toLowerCase().includes(searchTerm)
    );
    
    displayAutocompleteResults(results);
}

function displayAutocompleteResults(results) {
    if (results.length === 0) {
        autocompleteResults.style.display = 'none';
        return;
    }
    
    autocompleteResults.innerHTML = '';
    results.forEach(food => {
        const item = document.createElement('div');
        item.classList.add('autocomplete-item');
        item.textContent = food.name;
        item.dataset.foodName = food.name;
        item.dataset.calories = food.calories;
        item.dataset.protein = food.protein;
        item.dataset.servingSize = food.servingSize;
        item.dataset.servingUnit = food.servingUnit;
        autocompleteResults.appendChild(item);
    });
    
    autocompleteResults.style.display = 'block';
}

function selectAutocompleteItem(e) {
    if (e.target.classList.contains('autocomplete-item')) {
        foodInput.value = e.target.dataset.foodName;
        autocompleteResults.style.display = 'none';
    }
}

function addFood() {
    const foodName = foodInput.value.trim();
    const quantity = parseFloat(foodQuantity.value) || 100;
    const unit = foodUnit.value;
    const meal = mealType.value;
    
    if (!foodName) {
        alert('Please select a food');
        return;
    }
    
    const foodItem = foodDatabase.find(food => food.name === foodName);
    if (!foodItem) {
        alert('Food not found in database');
        return;
    }
    
    let calories, protein;
    
    if (unit === foodItem.servingUnit) {
    
        const ratio = quantity / foodItem.servingSize;
        calories = Math.round(foodItem.calories * ratio);
        protein = Math.round(foodItem.protein * ratio * 10) / 10;
    } else {
        
        let convertedQuantity = quantity;
        
        if (unit === 'oz' && foodItem.servingUnit === 'g') {
            convertedQuantity = quantity * 28.35;
        } else if (unit === 'g' && foodItem.servingUnit === 'oz') {
            convertedQuantity = quantity / 28.35;
        } else {
            
            convertedQuantity = foodItem.servingSize;
        }
        
        const ratio = convertedQuantity / foodItem.servingSize;
        calories = Math.round(foodItem.calories * ratio);
        protein = Math.round(foodItem.protein * ratio * 10) / 10;
    }
    
    const food = {
        id: Date.now(),
        name: foodName,
        calories,
        protein,
        quantity,
        unit,
        meal
    };
    
    addedFoods.push(food);
    
    renderFoodItem(food);
    updateTotals();
    saveToLocalStorage();
    
    foodInput.value = '';
    foodQuantity.value = '100';
}

function renderFoodItem(food) {
    const foodItemElement = document.createElement('div');
    foodItemElement.classList.add('food-item');
    foodItemElement.dataset.id = food.id;
    
    foodItemElement.innerHTML = `
        <div class="food-name">${food.name}</div>
        <div class="food-details">
            <span class="food-quantity">${food.quantity}${food.unit}</span>
            <span class="food-calories">${food.calories} cal</span>,
            <span class="food-protein">${food.protein}g protein</span>
            <button class="delete-btn" data-id="${food.id}"><i class="fas fa-trash"></i></button>
        </div>
    `;
    
    mealSections[food.meal].appendChild(foodItemElement);
    
    const deleteBtn = foodItemElement.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', () => deleteFoodItem(food.id));
}

function deleteFoodItem(id) {
    addedFoods = addedFoods.filter(food => food.id !== id);
    document.querySelector(`.food-item[data-id="${id}"]`)?.remove();
    updateTotals();
    saveToLocalStorage();
}

function updateTotals() {
    const totalCalories = addedFoods.reduce((sum, food) => sum + food.calories, 0);
    const totalProtein = addedFoods.reduce((sum, food) => sum + food.protein, 0);
    
    totalCaloriesElement.textContent = totalCalories;
    totalProteinElement.textContent = totalProtein;
    
    const meals = ['breakfast', 'lunch', 'dinner', 'snack'];
    meals.forEach(meal => {
        const mealFoods = addedFoods.filter(food => food.meal === meal);
        const mealCalories = mealFoods.reduce((sum, food) => sum + food.calories, 0);
        const mealProtein = mealFoods.reduce((sum, food) => sum + food.protein, 0);
        
        const mealSection = document.getElementById(`${meal}-section`);
        const caloriesElement = mealSection.querySelector('.meal-calories');
        const proteinElement = mealSection.querySelector('.meal-protein');
        
        caloriesElement.textContent = mealCalories;
        proteinElement.textContent = mealProtein;
    });
    
    const goal = parseInt(calorieGoal.value) || 2000;
    if (totalCalories > goal) {
        totalCaloriesElement.style.color = 'var(--danger-color)';
    } else if (totalCalories > goal * 0.8) {
        totalCaloriesElement.style.color = 'var(--warning-color)';
    } else {
        totalCaloriesElement.style.color = 'inherit';
    }
}

function saveToLocalStorage() {
    const data = {
        addedFoods,
        calorieGoal: calorieGoal.value
    };
    localStorage.setItem('calorieTrackerData', JSON.stringify(data));
}

function loadFromLocalStorage() {
    const savedData = localStorage.getItem('calorieTrackerData');
    if (savedData) {
        const data = JSON.parse(savedData);
        addedFoods = data.addedFoods || [];
        calorieGoal.value = data.calorieGoal || 2000;
        
    
        addedFoods.forEach(food => renderFoodItem(food));
        updateTotals();
    }
}

init();
