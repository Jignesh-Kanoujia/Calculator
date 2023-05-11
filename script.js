function appendCharacter(character) {
    document.getElementById("result").value += character;
  }
  
  function deleteLastCharacter() {
    let result = document.getElementById("result").value;
    document.getElementById("result").value = result.slice(0, -1);
  }
  
  function clearResult() {
    document.getElementById("result").value = "";
  }
  function calculateResult() {
    let result = document.getElementById("result").value;
    try {
      let calculatedResult = eval(result);
      if (isNaN(calculatedResult)) {
        throw new Error("Invalid Expression");
      }
      document.getElementById("result").value = calculatedResult;
    } catch (error) {
      document.getElementById("result").value = "Error";
    }
  }
  