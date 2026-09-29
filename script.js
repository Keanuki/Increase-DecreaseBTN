const countLabel = document.getElementById("countLabel");
const reset = document.getElementById("reset");
const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
let count = 0;

increaseBtn.onclick = function() {
    count++;
    countLabel.textContent = count;
}
decreaseBtn.onclick = function() {
    count--;
    countLabel.textContent = count;
}
reset.onclick = function() {
    count = 0;
    countLabel.textContent = count;
}