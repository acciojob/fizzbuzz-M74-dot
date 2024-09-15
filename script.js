for (let i = 1; i <= 100; i++) {
  let output = "";  // Initialize an empty string for each iteration
  
  if (i % 3 === 0) output += "Fizz";  // Add "Fizz" for multiples of 3
  if (i % 5 === 0) output += "Buzz";  // Add "Buzz" for multiples of 5
  
  if (output === "") output = i;  // If neither, use the number itself
  
  alert(output);  // Output the result via alert
}
