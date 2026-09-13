   function getLocation() {

            const result = document.getElementById("locationResult");
            const latitude = document.getElementById("latitude");
            const longitude = document.getElementById("longitude");
            const mapLink = document.getElementById("mapLink");

            if (!navigator.geolocation) {

                alert("Geolocation is not supported by your browser.");

                return;
            }

            navigator.geolocation.getCurrentPosition(

                function(position) {

                    const lat = position.coords.latitude;
                    const lon = position.coords.longitude;

                    latitude.textContent = lat;
                    longitude.textContent = lon;

                    mapLink.href =
                        "https://www.google.com/maps?q="
                        + lat + "," + lon;

                    result.style.display = "block";

                },

                function(error) {

                    if (error.code === 1) {

                        alert(
                            "Location permission was denied. " +
                            "Please allow location access in your browser."
                        );

                    } else {

                        alert(
                            "Unable to get your location. " +
                            "Please try again."
                        );

                    }

                }

            );

        }
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}
function checkQuiz() {

    let score = 0;

    const q1 = document.querySelector('input[name="q1"]:checked');
    const q2 = document.querySelector('input[name="q2"]:checked');
    const q3 = document.querySelector('input[name="q3"]:checked');

    if (q1 && q1.value === "112") {
        score++;
    }

    if (q2 && q2.value === "safe") {
        score++;
    }

    if (q3 && q3.value === "gps") {
        score++;
    }

    const result = document.getElementById("quizResult");

    result.style.display = "block";

    result.textContent =
        "🎯 Your Score: " + score + " / 3";
}
function showGuide() {
    const situation = document.getElementById("emergencySelect").value;
    const result = document.getElementById("guideResult");
    const title = document.getElementById("guideTitle");
    const text = document.getElementById("guideText");

    if (situation === "") {
        result.style.display = "none";
        return;
    }

    result.style.display = "block";

    if (situation === "fire") {
        title.textContent = "🔥 Fire Emergency";
        text.textContent =
            "Move away from the fire and smoke, alert people nearby, use a safe exit, and contact emergency services. Do not use elevators.";
    }

    else if (situation === "medical") {
        title.textContent = "🚑 Medical Emergency";
        text.textContent =
            "Stay calm, contact appropriate medical assistance, provide the person's location, and clearly explain what has happened. Follow instructions from trained responders.";
    }

    else if (situation === "flood") {
        title.textContent = "🌊 Flood";
        text.textContent =
            "Move to a safer and higher location if instructed. Avoid walking or driving through moving floodwater and follow official emergency alerts.";
    }

    else if (situation === "earthquake") {
        title.textContent = "🌍 Earthquake";
        text.textContent =
            "Protect yourself from falling objects and stay away from windows and unstable objects. After the shaking stops, follow official instructions.";
    }

    else if (situation === "electrical") {
        title.textContent = "⚡ Electrical Emergency";
        text.textContent =
            "Stay away from damaged electrical equipment and exposed wires. Do not touch electrical equipment with wet hands. Contact qualified assistance.";
    }
}
function checkPreparedness() {
    const checks = document.querySelectorAll('.checklist-box input[type="checkbox"]');
    const result = document.getElementById('checklistResult');

    let completed = 0;

    checks.forEach(check => {
        if (check.checked) {
            completed++;
        }
    });

    if (completed === checks.length) {
        result.innerHTML = "✅ Excellent! Your mobile phone is well prepared for emergencies.";
        result.style.color = "#2e7d32";
    } 
    else if (completed >= 3) {
        result.innerHTML = "🟡 Good preparation! Complete the remaining items for better emergency readiness.";
        result.style.color = "#f57c00";
    } 
    else {
        result.innerHTML = "🔴 Your emergency preparedness needs improvement. Please complete more items.";
        result.style.color = "#d32f2f";
    }
}
