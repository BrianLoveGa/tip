console.log("tips");

document.getElementById("billSet").addEventListener("click", function(event) {
  event.preventDefault();
});

function setBill() {
  let fif = document.getElementById("tip15");
  let twen = document.getElementById("tip20");
  let twfv = document.getElementById("tip25");
  let thir = document.getElementById("tip30");
  let check = document.getElementById("amount").value;

  if (check <= 0) {
    alert("please enter a whole positive bill amount");
  } else {
    // return check times %'s...

    var totalFif = check * 0.15;
    tFif = Math.round(totalFif * 100) / 100;
    fif.textContent = tFif;

    var totalTwen = check * 0.2;
    tTwen = Math.round(totalTwen * 100) / 100;
    twen.textContent = tTwen;

    var totalTwenFv = check * 0.25;
    tTwFv = Math.round(totalTwenFv * 100) / 100;
    twfv.textContent = tTwFv;

    var totalThirty = check * 0.3;
    tThIR = Math.round(totalThirty *100) /100;
    thir.textContent = tThIR;
  }
}
