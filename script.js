function toCase(text) {
     return (text.trim().toLowerCase()+"-"+text.trim().toUpperCase());
  }
  
  // DO not change the code below
  
  const text = prompt("Enter text:");
  alert(toCase(text));