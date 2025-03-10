# Define 3.0
The official template repository for Define 3.0

![DefineHack 2025 Logo](https://github.com/user-attachments/assets/8173bc16-418e-4912-b500-c6427e4ba4b6)

---

# FlowFii
![Homepage](https://github.com/user-attachments/assets/79e98292-d09c-430d-aae6-83cf3848486e)


### Team Information
- *Team Name*: Strike4
- *Track*: Fintech

### Team Members
| Name | Role | GitHub | LinkedIn |
|------|------|--------|----------|
| Gokul G | Frontend Developer | [@GOKULGSECE](https://github.com/GOKULGSECE) | [Profile](https://linkedin.com/in/gokul-g-760a23259) |
| Rithish S | Backend Developer | [@rithish5513u](https://github.com/rithish5513u) | [Profile](https://linkedin.com/in/rithish-s) |
| Rishab S | Backend Developer | [@rishabtr](https://github.com/rishabtr) | [Profile](https://linkedin.com/in/rishab-s-0aa28b21a) |
| Tamilkumaran N | Frontend Developer | [@tamilkumaran17](https://github.com/tamilkumaran17) | [Profile](https://linkedin.com/in/tamilkumarann) |

## Project Details

### Overview
FlowFii is a fintech platform with an AI-powered chatbot designed to provide financial insights and customer support. The platform integrates publicly available APIs to deliver personalized financial news. Users can track their finances, analyze trends, and manage a virtual investment portfolio using a user-friendly dashboard. Additionally, users can upload bank statements for automatic income and expense analysis. Our goal is to simplify financial management, empowering users to make smarter money decisions.

### Problem Statement
Develop a basic prototype of a fintech website with an AI-powered chatbot that provides users with financial insights and customer support. The website should have a clean, user-friendly interface with a simple dashboard displaying sample financial data and a chatbot capable of handling basic FAQs related to fintech services.

### Solution
FlowFii offers an intuitive fintech platform with an AI-powered chatbot, delivering:
- Personalized financial news by integrating external APIs.
- A dashboard for users to track expenses and manage finances effectively.
- Virtual trading and stock simulation to educate users on trading and mutual funds.
- AI-driven expense categorization and financial insights from uploaded bank statements.
- A dynamic news feed tailored to user interests.

### Demo
[![Project Demo]([https://i.vimeocdn.com/video/1991414377-c15006d94fc935e4adfee74da13b1f6413f758a5e77bb06ccf67576da21aaf6f-d_2400])(https://vimeo.com/1064156587/244e61a66c?ts=0&share=copy)

### Live Project
[FlowFii](https://flowfii-demo-link.com)

### Technologies Used
- *Frontend*: ReactJS
- *Backend*: NodeJS, Flask
- *Database*: MongoDB
- *APIs*: Alpha Vantage, NewsAPI
- *Other Tools*: Postman, GitHub

### Key Features
- *Virtual Trading & Stock Market Simulation*: Users can practice trading in a risk-free environment.
- *Dashboard for Expense Tracking*: Visual breakdown of expenses and earnings.
- *AI-Powered Chatbot*: Assists users with financial queries and FAQs.
- *Dynamic News Feed*: Personalized financial news updates based on user preferences.
- *Bank Statement Analysis*: Automated expense categorization for better financial management.

## Setup Instructions

### Prerequisites
- *Software Requirements*:
  - Node.js & npm
  - Python & pip
  - MongoDB
- *Knowledge Requirements*:
  - Basic understanding of finance
  - API integration
  - ReactJS, Flask, and NodeJS basics

### Installation
#### Frontend Setup
bash
# Clone the frontend repository
git clone https://github.com/GOKULGSECE/Strike4-Frontend.git
cd strike4-frontend
npm install
npm start


#### Backend Setup
bash
# Clone the backend repository
git clone https://github.com/Rithish5513U/Strike4-Backend.git
cd strike4-backend

### NodeJS
npm install
npm start

### Flask
cd flask_backend
pip install -r requirements.txt

### Running the Project
bash
# Run frontend
to be executed from strike4-frontend directory:
npm start

# Run backend (NodeJS)
to be executed from strike4-backend/node directory:
npm start

# Run backend (Flask)
to be executed from strike4-backend/flask_backend directory:
python app.py

### .env setup
- We have used newsapi for fetching newscards in the insights page. Use your api key in place of NEWS_API in the flask_backend
- We have used gemini api for chatbot. You can use your own api key in the flask_backend in place of GOOGLE_API_KEY

## Additional Resources

### Project Timeline
- *Week 1*: Ideation and Wireframing
- *Week 2*: Frontend and Backend Setup
- *Week 3*: API Integration and Chatbot Development
- *Week 4*: Testing, Debugging, and Final Deployment

### Challenges Faced
- Faced difficulties in accessing open APIs as most were paid, and free APIs had strict limitations.
- Struggled with extracting meaningful data from PDFs and storing it in MongoDB due to unstructured formats.
- To overcome PDF extraction challenges, we opted for Excel sheet input while ensuring personal data was removed.

### Future Enhancements
- *Advanced AI for Chatbot*: Integrate OpenAI/GPT models for better conversational support.
- *Multi-Currency Support*: Allow users to track financial data across different currencies.
- *Predictive Financial Analytics*: AI-powered financial forecasting for users.
- *Integration with More Banks*: Extend support for additional banking APIs.

### References
- [Alpha Vantage API](https://www.alphavantage.co/)
- [NewsAPI](https://newsapi.org/)
- [Gemini API](https://ai.google.dev/gemini-api/docs)

---

### Submission Checklist
- [x] Completed all sections of this README
- [x] Added project demo video
- [x] Provided live project link
- [x] Ensured all team members are listed
- [x] Included setup instructions
- [x] Submitted final code to repository

---

© Define 3.0 | [Define 3.0](https://www.define3.xyz/)
