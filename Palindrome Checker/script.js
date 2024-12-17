const inputField = document.getElementById("text-input");
document.getElementById("check-btn").addEventListener("click", () => {
      
      const inputString = inputField.value;
      const cleanedString = inputString.toLowerCase().replace(/[^a-z0-9]/g, "");
      const reversedString = cleanedString.split("").reverse().join("");

      if (inputString.trim() === "") {
        alert("Please input a value");
      } else if (cleanedString === reversedString) {
        document.getElementById("result").innerHTML = `<span>${inputString}</span> is a palindrome.`;
      } else {
        document.getElementById("result").innerHTML = `<span>${inputString}</span> is not a palindrome.`;
      }
  });
