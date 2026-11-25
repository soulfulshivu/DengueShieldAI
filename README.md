# 🛡️ DengueShield AI
### Predict. Explain. Prevent.

**An AI-powered Dengue Surveillance, Risk Prediction and Early-Warning Platform**

DengueShield AI is an intelligent public health monitoring platform designed to support dengue surveillance and early risk identification through historical disease data, machine learning and AI-powered insights.

The platform aims to help identify potentially vulnerable areas, understand dengue trends and support preventive healthcare interventions through data-driven decision-making.

---

## 📌 Problem Statement

Dengue remains a significant public health concern, particularly in densely populated urban regions.

Traditional dengue monitoring systems often rely on historical case reporting and manual surveillance, which can make early identification of potential high-risk areas challenging.

There is a need for an intelligent system that can:

- Analyze historical dengue incidence.
- Identify potentially high-risk geographical areas.
- Monitor ward-level dengue patterns.
- Support early-warning mechanisms.
- Provide understandable insights for public health monitoring.
- Encourage timely preventive interventions.

## 💡 Our Solution

DengueShield AI proposes an AI-powered dengue surveillance and early-warning system initially focused on Kolkata, West Bengal.

The platform combines historical dengue data analysis, machine learning-based risk assessment, interactive dashboards and AI-assisted explanations to make public health information more accessible and actionable.

**Core objectives:**

1. Analyze historical dengue incidence across different wards.
2. Develop ward-level dengue risk assessment.
3. Explore predictive modelling for early identification of potential outbreaks.
4. Visualize geographical and temporal disease patterns.
5. Generate understandable AI-assisted public health insights.
6. Support preventive planning and community awareness.

---

## ✨ Key Features

### 1. AI-Based Dengue Risk Assessment
- Ward-level dengue risk analysis.
- Classification into Low, Moderate, High and Very High risk categories.
- Historical incidence-based analysis.
- Planned integration of machine learning prediction models.

### 2. Interactive Monitoring Dashboard
- Total wards monitored.
- Historical dataset overview.
- Ward-level risk distribution.
- Dengue trend visualization.
- Monitoring status and analytics.

### 3. Historical Dengue Trend Analysis
- Analysis of historical dengue incidence.
- Year-wise trend visualization.
- Identification of changing disease patterns.

### 4. Ward-Level Monitoring
- Ward-wise risk score visualization.
- Searchable ward information.
- Planned GIS-based geographical representation.

### 5. 7-Day Predictive Forecasting
- Proposed machine learning-powered forecasting.
- Future ward-level risk estimation.
- Early-warning support for public health monitoring.

### 6. AI-Powered Insights
- Natural-language explanations of dengue trends.
- Public health information assistance.
- Preventive recommendations.
- Planned Gemini API integration.

### 7. Prevention and Intervention
- Community awareness recommendations.
- Stagnant water monitoring.
- Mosquito breeding prevention.
- Public health intervention support.

---

## 📊 Dataset Information

The initial prototype uses historical dengue-related data for Kolkata.

| Parameter | Details |
|---|---|
| Geographic Focus | Kolkata, West Bengal, India |
| Total Wards | 144 |
| Historical Period | 2017–2022 |
| Historical Records | 864 |
| Data Granularity | Ward-level historical records |
| Primary Focus | Dengue incidence analysis |

**Dataset Note:** The initial dataset is intended for prototype development and demonstration. Environmental variables such as rainfall, humidity and temperature are planned additions where reliable data is available.

Missing environmental values are not treated as observed measurements.

---

## ⚙️ Technology Stack

| Component | Technologies |
|---|---|
| Frontend | HTML, CSS, JavaScript |
| Data Processing | Python, Pandas, NumPy |
| Machine Learning | Scikit-learn |
| Data Visualization | Chart.js, Matplotlib |
| Backend (Planned) | Flask, Python |
| AI Integration (Planned) | Google Gemini API |
| Database (Planned) | SQLite |
| Geographical Visualization (Planned) | Leaflet.js |

---

## 🧠 Proposed Machine Learning Workflow

The planned machine learning pipeline consists of:

1. **Data Collection:** Gather historical dengue incidence records.
2. **Data Preprocessing:** Handle missing values, inconsistent records and data formatting.
3. **Exploratory Data Analysis:** Study ward-level and year-wise dengue patterns.
4. **Feature Engineering:** Prepare suitable features from available historical data.
5. **Model Development:** Experiment with suitable classification or regression algorithms.
6. **Model Evaluation:** Evaluate performance using appropriate metrics.
7. **Risk Classification:** Generate risk categories based on validated model outputs.
8. **Dashboard Integration:** Display model results through interactive visualizations.

*Note: Model training, validation and deployment are separate development stages. The current frontend demonstration does not represent validated predictive performance.*

---

## 🏗️ System Architecture

```text
             DengueShield AI
                    |
          Frontend Dashboard
           HTML, CSS, JS
                    |
             Flask Backend
                    |
          Data Processing Layer
             Python/Pandas
                    |
          Machine Learning Layer
              Scikit-learn
                    |
       +------------+------------+
       |            |            |
   Risk Scores   AI Insights   GIS Mapping
       |            |            |
       +------------+------------+
                    |
           Interactive Dashboard
```

---

## 📂 Project Structure

```text
DengueShield-AI/
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── dataset/
│   └── dengue_dataset.csv
│
├── notebooks/
│   └── dengue_analysis.ipynb
│
├── models/
│   └── (trained models - future integration)
│
├── backend/
│   └── (Flask API - future integration)
│
├── screenshots/
│   └── (project screenshots)
│
├── requirements.txt
│
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- Python 3.10+
- Visual Studio Code
- Modern web browser
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR-USERNAME/DengueShield-AI.git
```

### 2. Navigate to the Project

```bash
cd DengueShield-AI
```

### 3. Run the Frontend

Open the `frontend` folder in VS Code.

Run `index.html` using the Live Server extension.

### 4. Demo Login

For the current frontend demonstration:

- **Email:** demo@dengueshield.ai
- **Password:** dengue123

The login is a frontend-only demonstration and is not intended for production authentication.

---

## 📸 Screenshots

Screenshots of the login interface, dashboard, risk analytics, ward monitoring and AI insights will be added here.

| Login Page | Dashboard |
|---|---|
| Add Login Screenshot | Add Dashboard Screenshot |

---

## 🌍 Future Scope

- Integration of real-time weather and environmental data.
- Development and validation of machine learning prediction models.
- Ward-level GIS mapping of dengue risk.
- Integration of Google Gemini for AI-generated explanations.
- Real-time public health alerts and notifications.
- Mosquito surveillance and potential sensor-based monitoring.
- Deployment as a scalable public health intelligence platform.
- Expansion to additional cities and geographical regions.

---

## ⚠️ Disclaimer

DengueShield AI is an experimental prototype developed for demonstration and hackathon purposes.

The current dashboard includes illustrative values and demo interactions. These must not be interpreted as actual dengue outbreak predictions, confirmed ward risk assessments or official public health information.

The platform is intended to support research and public health awareness, not replace professional medical advice or official disease surveillance systems.

---

## 👩‍💻 Project Development

**DengueShield AI**

*Predict. Explain. Prevent.*

Developed as an AI-powered public health intelligence initiative focused on dengue surveillance, predictive analytics and early-warning support.

---

### ⭐ Support

If you find this project interesting, consider giving the repository a star!

**Building smarter public health solutions through Artificial Intelligence.**
