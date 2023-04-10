// replace with actual API URL
const apiUrl = "https://somepickuplinedb.com/api/lines"; 
      const generateBtn = document.getElementById("generate-btn");
      const lineInput = document.getElementById("line-input");
      const result = document.getElementById("result");

      function generateResponse(line) {
        fetch(apiUrl)
          .then(response => response.json())
          .then(lines => {
            const suitableLine = lines.find(l => l.category === "suitable" && l.keywords.some(k => line.includes(k)));
            if (suitableLine) {
              result.innerText = suitableLine.text;
            } else {
              result.innerText = "Sorry, I don't have a good response for that line.";
            }
          })
          .catch(error => {
            console.error("Error fetching pick up lines", error);
            result.innerText = "Sorry, an error occurred while generating a response.";
          });
      }

      generateBtn.addEventListener("click", () => generateResponse(lineInput.value));