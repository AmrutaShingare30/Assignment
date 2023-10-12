function calculateDays() {
  const inputDate = new Date(document.getElementById("dateInput").value);
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "";

  for (let i = 0; i < 7; i++) {
      const day = new Date(inputDate);
      day.setDate(inputDate.getDate() + i);
      const dayOfWeek = daysOfWeek[day.getDay()];
      const dayDiv = document.createElement("div");
      dayDiv.textContent = dayOfWeek;
      resultDiv.appendChild(dayDiv);
  }
}