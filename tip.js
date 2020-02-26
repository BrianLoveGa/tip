console.log("tips");
////////////////
// gratuity
////////////////

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
    tFif = (Math.round(totalFif * 100) / 100).toFixed(2);
    fif.textContent = `$ ${tFif}`;

    var totalTwen = check * 0.2;
    tTwen = (Math.round(totalTwen * 100) / 100).toFixed(2);
    twen.textContent = `$ ${tTwen}`;

    var totalTwenFv = check * 0.25;
    tTwFv = (Math.round(totalTwenFv * 100) / 100).toFixed(2);
    twfv.textContent = `$ ${tTwFv}`;

    var totalThirty = check * 0.3;
    tThIR = (Math.round(totalThirty * 100) / 100).toFixed(2);
    thir.textContent = `$ ${tThIR}`;
  }
}

///////////////////////////
/// split the bill
///////////////////////////

document.getElementById("billSplit").addEventListener("click", function(event) {
  event.preventDefault();
});

function splitBill() {
  let bill = document.getElementById("billSplitBill").value;
  let people = document.getElementById("billSplitPeople").value;
  let amount = document.getElementById("billSplitAmount");
  let info = document.getElementById("info");
  let even = (Math.round((bill / people) * 100) / 100).toFixed(2);
  amount.innerText = `$ ${even}  per person`;
  let leftOver = document.getElementById("left");
  let remainder = (Math.round((even * people - bill) * 100) / 100).toFixed(2);
  if (remainder === 0.0) {
    leftOver.innerText = `even split ${remainder} `;
    info.innerText = "";
  } else if (remainder > 0) {
    leftOver.innerText = `with $ ${remainder}  left-over. `;
    info.innerText = `one person needs to pay ${remainder} less than everyone else`;
  } else {
    leftOver.innerText = `with $ ${remainder * -1} under-paid. `;
    info.innerText = `one person needs to pay ${remainder * -1} extra`;
  }
}

////////////////////////
/// discount calc
/////////////////////////

document.getElementById("discount").addEventListener("click", function(event) {
  event.preventDefault();
});

function discount() {
  let neeew = document.getElementById("new");
  let percent = document.getElementById("percent").value;
  let amount = document.getElementById("itemAmount").value;
  let amountOff = amount * (percent / 100);
  let newCost = (Math.round((amount - amountOff) * 100) / 100).toFixed(2);
  let round = (Math.round(amountOff * 100) / 100).toFixed(2);

  neeew.innerText = `$ ${newCost} = ($ ${amount} - $ ${round}) `;
}

////////////////////////
/// unit cost breakdown
/////////////////////////

document.getElementById("cost").addEventListener("click", function(event) {
  event.preventDefault();
});

function costBreakdown() {
  /// the names
  let itemA = document.getElementById("itemA").value;
  let itemB = document.getElementById("itemB").value;
  let itemC = document.getElementById("itemC").value;
  let itemD = document.getElementById("itemD").value;
  /// the item counts
  let itemACount = document.getElementById("itemAcount").value;
  let itemBCount = document.getElementById("itemBcount").value;
  let itemCCount = document.getElementById("itemCcount").value;
  let itemDCount = document.getElementById("itemDcount").value;
  /// the total cost
  let itemAcost = document.getElementById("itemAcost").value;
  let itemBcost = document.getElementById("itemBcost").value;
  let itemCcost = document.getElementById("itemCcost").value;
  let itemDcost = document.getElementById("itemDcost").value;

  /// now we break it down and show the results

  let nameA = document.getElementById("itemAname");
  nameA.innerText = `A = ${itemA}`;
  let unitCostA = document.getElementById("costA");
  let mathA = (((itemAcost / itemACount) * 100) / 100).toFixed(2);
  unitCostA.innerText = ` $ ${mathA} per unit A`;

  let nameB = document.getElementById("itemBname");
  nameB.innerText = `B = ${itemB}`;
  let unitCostB = document.getElementById("costB");
  let mathB = (((itemBcost / itemBCount) * 100) / 100).toFixed(2);
  unitCostB.innerText = ` $ ${mathB} per unit B`;

  let nameC = document.getElementById("itemCname");
  nameC.innerText = `C = ${itemC}`;
  let unitCostC = document.getElementById("costC");
  let mathC = (((itemCcost / itemCCount) * 100) / 100).toFixed(2);
  unitCostC.innerText = ` $ ${mathC} per unit C`;

   let nameD = document.getElementById("itemDname");
   nameD.innerText = `D = ${itemD}`;
   let unitCostD = document.getElementById("costD");
   let mathD = (((itemDcost / itemDCount) * 100) / 100).toFixed(2);
   unitCostD.innerText = ` $ ${mathD} per unit D`;
}
