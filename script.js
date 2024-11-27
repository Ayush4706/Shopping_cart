function startClock() {
  t = setInterval(showClock, 1000);
}

function showClock() {
  x = new Date();
  document.getElementById("tm").innerText = x.toLocaleTimeString();
}

function calculateTotalAmt() {
  let totalAmt = 0;
  const checkboxes = document.querySelectorAll(".row-selector:checked");

  checkboxes.forEach(function (checkbox) {
    const row = checkbox.closest("tr");

    const amt = parseInt(row.cells[4].textContent);

    if (!isNaN(amt)) {
      totalAmt += amt;
    }
  });
  document.getElementById("totalAmt").textContent = totalAmt;
}

document.querySelectorAll(".row-selector").forEach(function (checkbox) {
  checkbox.addEventListener("change", calculateTotalAmt);
});
