//Lastly ignore
// js

let money=0; //just read
let mps=0;
let mpc=1

const score=document.getElementById("moneyScore");
const clicker= document.querySelector(".moneybtn");
// what makes the money actually happen
clicker.addEventListener("click", function(){
    money+= mpc;
    score.textContent= money+ " money";
    console.log("Clicked")
});
setInterval(() => {
    money += mps;
    score.textContent = money + " money";
}, 1000);
const shopitems = [
    {name: "Multiplier", price: 15, mpc: 2}, //mpc = money per click
    { name: "Auto Clicker", price: 40, mps: 1 }, //mps = money per sec
    
];
const shop = document.getElementById("shop");
function makeshop(){
      shop.innerHTML = ""; // clear shop to stop stacking

    shopitems.forEach((item, index) => {  //links to shopitems index starts at 0 for auto clicker
        const itemDiv = document.createElement("div");
        itemDiv.innerHTML = `
            <strong>${item.name}</strong><br>
            Price: ${item.price} money<br>
            <button id="sale${index}">Buy?</button>`; //labels id's in the index using $ pretty cool, right
        
        shop.appendChild(itemDiv);// actual bozx

        document.getElementById(`sale${index}`).addEventListener("click", () => buyitem(index)); //“When this button is clicked, run buyitem(index).” best description i have
    });
}
function buyitem(index) {
  const item = shopitems[index];

  if (money >= item.price) { // if there's enough mone subtract iten.price from money
    money -= item.price;

    if (item.mps) { // if an upgrade give mps
      mps += item.mps;
    }

    if (item.mpc) { // if an upgrade gives mpc
      mpc += item.mpc;
    }

    item.price = Math.floor(item.price * 1.5); // price scale

    score.textContent = money + " money";
    makeshop();
  } else {
    alert("Not enough money!"); //no money D: :(
  }
}
makeshop();
score.textContent = money + " money";