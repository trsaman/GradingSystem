var promptGrade = prompt("Enter your grade: ");
var numGrade = parseInt(promptGrade);

if (numGrade >= 0 && numGrade <= 50) {
  document.write("POOR.");
}

else if (numGrade > 50 && numGrade <= 60) {
  document.write("Pasang-awa.");
}

else if (numGrade > 60 && numGrade <= 70) {
  document.write("Passing na maluwalhati.");
}

else if (numGrade > 70 && numGrade <= 80) {
  document.write("Average.");
}

else if (numGrade > 80 && numGrade <= 90) {
  document.write("Malapit na bumongga!");
}

else if (numGrade > 90 && numGrade <= 100) {
  document.write("BONGGA KA 'DAY!");
}

else {
  document.write("NOT A VALID GRADE. YOU WILL NOT GRADUATE.");
}
