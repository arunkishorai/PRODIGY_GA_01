const inputTxt = document.getElementById("input");
const outputDiv = document.getElementById("output");
const button = document.getElementById("btn");
const loadingDiv = document.getElementById("loading");

async function query(data) {
    try {
        const response = await fetch(
            "", // Replace with your Hugging Face
            {
                headers: {
                    Authorization: "Bearer hf_xxxxxxxxxxxxxxxxxxx",  // Replace with your Hugging Face token
                    "Content-Type": "application/json",
                },
                method: "POST",
                body: JSON.stringify(data),
            }
        );
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return response.json();
    } catch (error) {
        throw new Error("Failed to connect to the API.");
    }
}

button.addEventListener("click", async () => {
    const inputText = inputTxt.value.trim();
    outputDiv.style.display = "none"; 
    loadingDiv.style.display = "block"; 

    if (!inputText) {
        alert("Please enter a prompt.");
        loadingDiv.style.display = "none"; 
        return;
    }

    try {
        const response = await query({ inputs: inputText });

        loadingDiv.style.display = "none"; 
        outputDiv.style.display = "block"; 
        if (response.error) {
            outputDiv.textContent = `Error: ${response.error}`;
        } else if (response.generated_text) {
            outputDiv.textContent = response.generated_text;
        } else {
            outputDiv.textContent = "No response generated.";
        }
    } catch (error) {
        loadingDiv.style.display = "none"; 
        outputDiv.style.display = "block"; 
        outputDiv.textContent = `Error: ${error.message}`;
    }
});
