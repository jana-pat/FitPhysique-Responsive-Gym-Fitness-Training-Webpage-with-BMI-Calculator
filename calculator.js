function calculateBMI(event) {
    event.preventDefault();
    const age = parseInt(document.getElementById("age").value);
    const height = parseFloat(document.getElementById("height").value) / 100; // cm to m
    const weight = parseFloat(document.getElementById("weight").value);
    
    // Calculate BMI
    const bmi = weight / (height * height);
    
    // Animate BMI counter
    animateCounter(bmi, document.getElementById("bmiCounter"));
    
    // Determine BMI category and plans
    let category, dietPlan, maintenanceTips;
    if (bmi < 18.5) {
      category = "Underweight";
      dietPlan = [
        "High-calorie meals: 3 main meals + 2-3 snacks daily.",
        "Protein sources: Eggs, chicken breast, peanut butter, Greek yogurt.",
        "Healthy fats: Avocados, nuts, olive oil.",
        "Carbs: Whole grains like oats, brown rice, sweet potatoes.",
        "Supplements: Consider protein shakes if approved by a doctor."
      ];
      maintenanceTips = [
        "Strength training: 3-4 sessions/week (e.g., squats, deadlifts).",
        "Focus on compound lifts to build muscle mass.",
        "Light cardio: 20-30 min, 2x/week to improve appetite.",
        "Rest: 7-8 hours sleep for recovery.",
        "Track progress: Weigh yourself weekly."
      ];
    } else if (bmi <= 24.9) {
      category = "Normal Weight";
      dietPlan = [
        "Balanced meals: 40% carbs, 30% protein, 30% fats.",
        "Protein: Lean meats (turkey, fish), tofu, lentils.",
        "Carbs: Quinoa, whole wheat pasta, fruits like berries.",
        "Fats: Almonds, chia seeds, coconut oil.",
        "Hydration: 2-3 liters of water daily."
      ];
      maintenanceTips = [
        "Cardio: 30-40 min, 3-4x/week (e.g., running, cycling).",
        "Strength training: 3-4x/week (e.g., bench press, lunges).",
        "Flexibility: Yoga or stretching 1-2x/week.",
        "Consistency: Maintain a regular workout schedule.",
        "Monitor: Adjust diet if weight fluctuates."
      ];
    } else if (bmi <= 29.9) {
      category = "Overweight";
      dietPlan = [
        "Calorie deficit: 500-700 kcal less than maintenance.",
        "Protein: Grilled chicken, fish, egg whites.",
        "Low-carb veggies: Broccoli, spinach, zucchini.",
        "Healthy fats: Small portions of nuts, seeds.",
        "Avoid: Sugary drinks, processed snacks."
      ];
      maintenanceTips = [
        "HIIT: 20-30 min, 3-4x/week (e.g., sprints, burpees).",
        "Cardio: 40-60 min, 4-5x/week (e.g., brisk walking).",
        "Strength: 3x/week to preserve muscle (e.g., kettlebell swings).",
        "Portion control: Use smaller plates.",
        "Progress: Track weight loss bi-weekly."
      ];
    } else {
      category = "Obese";
      dietPlan = [
        "Low-carb, high-fiber: Leafy greens, cauliflower, beans.",
        "Protein: Lean beef, salmon, cottage cheese.",
        "Small meals: 4-5 times/day to control hunger.",
        "Fats: Minimal, from sources like flaxseeds.",
        "Avoid: Fast food, refined sugars."
      ];
      maintenanceTips = [
        "Low-impact cardio: 30-40 min, 4-5x/week (e.g., swimming).",
        "Strength: Bodyweight exercises 3x/week (e.g., push-ups).",
        "Mobility: Daily stretching or yoga.",
        "Consult: Work with a trainer or doctor.",
        "Goals: Aim for 0.5-1 kg loss/week."
      ];
    }
    
    // Display results
    document.getElementById("bmiCategory").innerHTML = `<strong>Category:</strong> ${category}`;
    const dietList = document.getElementById("dietList");
    dietList.innerHTML = "";
    dietPlan.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      dietList.appendChild(li);
    });
    const maintenanceList = document.getElementById("maintenanceList");
    maintenanceList.innerHTML = "";
    maintenanceTips.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      maintenanceList.appendChild(li);
    });
    document.getElementById("bmiResult").style.display = "block";
  }

  // Aesthetic counter animation
  function animateCounter(target, element) {
    let start = 0;
    const duration = 2000; // 2 seconds
    const stepTime = 50; // Update every 50ms
    const steps = duration / stepTime;
    const increment = target / steps;

    const counter = setInterval(() => {
      start += increment;
      if (start >= target) {
        start = target;
        clearInterval(counter);
      }
      element.textContent = start.toFixed(1);
    }, stepTime);
  }