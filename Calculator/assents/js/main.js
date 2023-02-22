// Define an immediately-invoked function expression to avoid polluting the global namespace
(function() {

    // Define the calculator object and its methods
    function createCalculator() {
      return {
        display: document.querySelector('.display'),
        clearButton: document.querySelector('.btnClear'),
        
        start() {
          this.addEventListeners();
        },
        
        // Add event listeners to the relevant elements
        addEventListeners() {
          this.display.addEventListener('keyup', (event) => {
            if (event.keyCode === 13) {
              this.performCalculation();
            }
          });
          
          document.addEventListener('click', (event) => {
            if (event.target.classList.contains('btnNum')) {
              this.addToDisplay(event.target.innerText);
            }
            
            if (event.target === this.clearButton) {
              this.clearDisplay();
            }
            
            if (event.target.classList.contains('btnDel')) {
              this.deleteLastDigit();
            }
            
            if (event.target.classList.contains('btnEq')) {
              this.performCalculation();
            }
          });
        },
        
        // Evaluate the expression in the display and update the display with the result
        performCalculation() {
          const expression = this.display.value;
          
          try {
            const result = eval(expression);
            
            if (!result) {
              alert('INVALID CALCULATION');
              return;
            }
            
            this.display.value = String(result);
          } catch (error) {
            alert('INVALID CALCULATION');
            return;
          }
        },
        
        // Clear the calculator display
        clearDisplay() {
          this.display.value = '';
        },
        
        // Remove the last digit from the calculator display
        deleteLastDigit() {
          this.display.value = this.display.value.slice(0, -1);
        },
        
        // Add a digit or operator to the calculator display
        addToDisplay(value) {
          this.display.value += value;
        },
        
      };
    }
    
    // Create a new calculator object and start it
    const calculator = createCalculator();
    calculator.start();
  
  })();
  