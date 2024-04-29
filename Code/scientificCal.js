document.addEventListener("DOMContentLoaded", function () {
  const display = document.getElementById('calc-display');
  const buttons = document.getElementsByClassName('btn');
  let currentValue = "";

  function evaluateResult() {
    console.log('currentValue:', currentValue)
    const convertedValue = currentValue
      .replace(/x/g, "*")
      .replace(/÷/g, "/")
      .replace(/%/g, "*0.01")
      .replace(/sin/g, 'Math.sin')
      .replace(/cos/g, 'Math.cos')
      .replace(/ln/g, 'Math.log')
      .replace(/π/g, 'Math.PI')
      .replace(/log/g, 'Math.log10')
      .replace(/e/g, 'Math.E')
      .replace(/tan/g, 'Math.tan')
      .replace(/√/g, 'Math.sqrt');
    
    console.log('convertedValue:', convertedValue)
    const result = eval(convertedValue);
    currentValue = result.toString();
    display.value = currentValue;
  }
  for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    button.addEventListener('click', function() {
      const value = button.innerText;
      try {
          if (value == "AC") {
              currentValue = "";
              display.value = currentValue;
            }else if(value == "CE") {
              currentValue = currentValue.slice(0, -1);
              display.value = currentValue;
          } else if(value == "=") {
              evaluateResult();
            } 
            else if (value === '+' || value === '-' || value === 'x' || value === '/' || value === '%') {
              // Check if the last character is an operator
              if (currentValue.length > 0 && ['+', '-', 'x', '/','%'].includes(currentValue[currentValue.length - 1])) {
                  // Replace the last operator with the new one
                  currentValue = currentValue.slice(0, -1) + value;
              } else {
                  currentValue += value;
              }
              display.value = currentValue;
            }
            else {
              currentValue += value;
              display.value = currentValue;
            }
      } catch (error) {
          console.error(error);
          currentValue = " ";
          display.value = currentValue;
      }
    }) 
  }

const themeToggleBtn = document.getElementById('theme-toggle');
const home = document.getElementById('home');

      home.addEventListener('click', (event) => {
        currentValue = "";
          display.value = ""  
        event.preventDefault();
        window.location.href = "index.html";
      });

        // Add a click event listener to toggle the theme
        themeToggleBtn.addEventListener('click', (event) => {
          currentValue = "";
          display.value = ""
          event.preventDefault();
            // Toggle the dark mode class on the body
            document.body.classList.toggle('dark-mode');
            document.body.classList.toggle('light-mode');
        });
});
