# PRODIGY_GA_01
AI Text Generator Web App
A simple and elegant web application for generating text responses using the Hugging Face Inference API. Users can input a prompt, and the app generates a response based on the chosen AI model.

Features

Clean and professional user interface with a dark theme.
Real-time AI-generated text responses.
Responsive and mobile-friendly design.
Powered by Hugging Face Inference API for advanced text generation.

Technologies Used

HTML5: For structuring the web application.
CSS3: For styling and creating a professional, interactive UI.
JavaScript (ES6+): For API integration and interactivity.
Hugging Face API: For generating AI-based text responses.

Installation
Clone the repository:

git clone https://github.com/arunkishorai/PRODIGY_GA_01.git
Navigate to the project directory:

cd text_gen_app
Open the index.html file in your browser:

open index.html
Or simply drag and drop the file into your browser.

Setup
Obtain an API token from Hugging Face:

Log in to your Hugging Face account.
Go to Settings > Access Tokens.
Generate a new token with read access.
Replace the placeholder token in script.js:

javascript

Authorization: "Bearer hf_your_actual_token", // Replace with your token
Verify the model being used (). Ensure the model is accessible with your token.

Usage

Open the application in your browser.
Enter a prompt in the text box.
Click the Generate button.
View the generated response in the output box.

Demo

![image](https://github.com/user-attachments/assets/a759d3a7-c4db-4632-a0b0-8af79423f044)


Project Structure

ai-text-generator/
├── index.html       # Main HTML file
├── styles.css       # CSS for styling
├── script.js        # JavaScript for functionality
└── README.md        # Project documentation

Contributing
Contributions are welcome! If you find bugs or have suggestions for improvements, please create an issue or submit a pull request.

Acknowledgments
Hugging Face for the API.
Inspiration from modern, minimalistic UI designs.
