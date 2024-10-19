document.addEventListener("DOMContentLoaded", () => {
  // select each elements
  const counterValue = document.getElementById("counter-value");
  const incrBtn = document.getElementById("increse-btn");
  const decrBtn = document.getElementById("decrese-btn");
  const resetbtn = document.getElementById("reset-btn");

  // add click event
  let count = 0;
  incrBtn.addEventListener("click", () => {
    count++;
    // counterValue.textContent = count;
    updateCount();
  });
  decrBtn.addEventListener("click", () => {
    count--;
    // counterValue.textContent = count;
    updateCount();
  });
  resetbtn.addEventListener("click", () => {
    count = 0;
    // counterValue.textContent = count;
    updateCount();
  });
  function updateCount() {
    counterValue.textContent=count;
  }
});
