
// DEMO LOGIN

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const error = document.getElementById("loginError");

    if (
        email === "demo@dengueshield.ai" &&
        password === "dengue123"
    ) {
        document.getElementById("loginPage").classList.add("hidden");
        document.getElementById("dashboardPage").classList.remove("hidden");

        error.textContent = "";

        initializeCharts();
        renderWards();

    } else {
        error.textContent = "Invalid email or password!";
    }
});


// LOGOUT

document.getElementById("logoutBtn").addEventListener("click", function() {

    document.getElementById("dashboardPage").classList.add("hidden");
    document.getElementById("loginPage").classList.remove("hidden");

    document.getElementById("loginForm").reset();

});


// DASHBOARD NAVIGATION

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {

    link.addEventListener("click", function(e) {

        e.preventDefault();

        navLinks.forEach(item => item.classList.remove("active"));

        this.classList.add("active");

        const section = this.dataset.section;

        document.querySelectorAll(".content-section").forEach(item => {
            item.classList.add("hidden");
        });

        document.getElementById(section).classList.remove("hidden");

        const titles = {
            overview: "Dashboard Overview",
            analytics: "Risk Analytics",
            wards: "Ward Monitoring",
            forecast: "7-Day Forecast",
            insights: "AI Insights",
            prevention: "Prevention & Intervention"
        };

        document.getElementById("pageTitle").textContent = titles[section];

        // Fix chart dimensions when opening hidden sections
        if (section === "analytics" && !analyticsChart) {
            initializeAnalytics();
        }

    });

});


// DEMO WARD DATA
// Replace these illustrative values with model outputs.

const wards = [
    { ward: 1, score: 24 },
    { ward: 2, score: 42 },
    { ward: 3, score: 68 },
    { ward: 4, score: 85 },
    { ward: 5, score: 32 },
    { ward: 6, score: 74 },
    { ward: 7, score: 91 },
    { ward: 8, score: 48 },
    { ward: 9, score: 56 },
    { ward: 10, score: 18 },
    { ward: 11, score: 79 },
    { ward: 12, score: 63 }
];

function getRisk(score) {

    if (score < 25) {
        return {
            level: "Low",
            className: "risk-low"
        };
    }

    if (score < 50) {
        return {
            level: "Moderate",
            className: "risk-moderate"
        };
    }

    if (score < 75) {
        return {
            level: "High",
            className: "risk-high"
        };
    }

    return {
        level: "Very High",
        className: "risk-very-high"
    };

}


// RENDER WARD TABLE

function renderWards(search = "") {

    const table = document.getElementById("wardTable");

    const filtered = wards.filter(item =>
        String(item.ward).includes(search)
    );

    table.innerHTML = filtered.map(item => {

        const risk = getRisk(item.score);

        return `
            <tr>
                <td>Ward ${item.ward}</td>
                <td>${item.score}/100</td>
                <td>
                    <span class="risk-pill ${risk.className}">
                        ${risk.level}
                    </span>
                </td>
                <td>Demo Data</td>
            </tr>
        `;

    }).join("");

    if (filtered.length === 0) {
        table.innerHTML = `
            <tr>
                <td colspan="4">No matching ward found.</td>
            </tr>
        `;
    }

    const highRisk = wards.filter(item => item.score >= 50).length;

    document.getElementById("highRiskCount").textContent = highRisk;

}


// WARD SEARCH

document.getElementById("wardSearch").addEventListener("input", function() {

    renderWards(this.value.trim());

});


// CHARTS

let trendChart = null;
let riskChart = null;
let analyticsChart = null;

function initializeCharts() {

    if (trendChart) return;

    const trendCanvas = document.getElementById("trendChart");

    trendChart = new Chart(trendCanvas, {

        type: "line",

        data: {
            labels: ["2017", "2018", "2019", "2020", "2021", "2022"],

            datasets: [{
                label: "Historical Incidence (Illustrative)",
                data: [35, 48, 42, 30, 55, 68],
                borderColor: "#087f8c",
                backgroundColor: "rgba(8,127,140,0.12)",
                fill: true,
                tension: 0.4,
                pointRadius: 4
            }]
        },

        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }

    });


    riskChart = new Chart(
        document.getElementById("riskChart"),
        {
            type: "doughnut",

            data: {
                labels: ["Low", "Moderate", "High", "Very High"],

                datasets: [{
                    data: [
                        wards.filter(w => w.score < 25).length,
                        wards.filter(w => w.score >= 25 && w.score < 50).length,
                        wards.filter(w => w.score >= 50 && w.score < 75).length,
                        wards.filter(w => w.score >= 75).length
                    ],

                    backgroundColor: [
                        "#36b37e",
                        "#f4c95d",
                        "#f28c45",
                        "#df5c5c"
                    ],

                    borderWidth: 0
                }]
            },

            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: "bottom"
                    }
                }
            }

        }
    );

}


// ANALYTICS CHART

function initializeAnalytics() {

    analyticsChart = new Chart(
        document.getElementById("analyticsChart"),
        {
            type: "bar",

            data: {
                labels: ["2017", "2018", "2019", "2020", "2021", "2022"],

                datasets: [{
                    label: "Illustrative Historical Index",
                    data: [35, 48, 42, 30, 55, 68],
                    backgroundColor: "#12a89d",
                    borderRadius: 6
                }]
            },

            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        }
    );

}


// DEMO AI ASSISTANT

document.getElementById("chatForm").addEventListener("submit", function(e) {

    e.preventDefault();

    const input = document.getElementById("chatInput");

    const question = input.value.trim();

    if (!question) return;

    const messages = document.getElementById("chatMessages");

    messages.innerHTML += `
        <div class="user-message">
            ${escapeHTML(question)}
        </div>
    `;

    let answer = "Dengue surveillance involves monitoring historical cases, environmental conditions and mosquito activity. This is a demo response, not a live AI prediction.";

    const q = question.toLowerCase();

    if (q.includes("prevent")) {

        answer = "Preventive measures include removing stagnant water, covering water containers, community awareness and monitoring potential mosquito breeding sites.";

    }

    else if (q.includes("risk")) {

        answer = "Dengue risk assessment can use historical incidence, rainfall, humidity, temperature and mosquito surveillance. Our current demo uses historical ward-level incidence; environmental indicators are not yet integrated.";

    }

    else if (q.includes("ward")) {

        answer = "DengueShield AI is designed to monitor 144 Kolkata wards. The current ward scores are illustrative demo values and should not be treated as actual risk assessments.";

    }

    else if (q.includes("forecast") || q.includes("predict")) {

        answer = "The 7-day forecasting module is planned to use a trained machine learning model. Live predictions are not yet connected in this frontend demo.";

    }

    setTimeout(() => {

        messages.innerHTML += `
            <div class="bot-message">
                ✧ ${answer}
            </div>
        `;

        messages.scrollTop = messages.scrollHeight;

    }, 400);

    input.value = "";

});


// PREVENT HTML INJECTION IN USER INPUT

function escapeHTML(value) {

    return value.replace(/[&<>"']/g, char => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    })[char]);

}
