function calculate(num1, operation, num2) {
  
  
  
  switch (operation) {
      case '+': return num1 + num2
      case '-': return num1 - num2
      case '*': return num1 * num2
      case '/': {
        if (num1 && num2)
          return num1 / num2
      }
      default: return null
  }
}