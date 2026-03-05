//Lastly ignore
// js

let money = 0; //just read
let mps = 0;
let mpc = 1

const score = document.getElementById("moneyScore");
const clicker = document.querySelector(".moneybtn");

function scoretxt() {
  score.textContent = Math.floor(money) + " money";
}

// what makes the money actually happen
clicker.addEventListener("click", function () {
  money += mpc;
  scoretxt();
  console.log("Clicked")
});
setInterval(() => {
  money += mps;
  scoretxt();
}, 1000);
const shopitems = [
  { name: "Basic Cursor", price: 15, mpc: 1 }, //mpc = money per click. // { name: , price: , mpc:  } empty upgrades template to add any upgrade
  { name: "Auto Clicker", price: 35, mps: 1 }, //mps = money per sec. // { name: , price: , mps:  }
{ name:"Cool Cursor" , price:100 , mpc:5  },

];
const shop = document.getElementById("shop");
function makeshop() {
  shop.innerHTML = ""; // clear shop to stop stacking

  shopitems.forEach((item, index) => {  //links to shopitems index starts at 0 for basic cursor and goes up
    const itemstat = document.createElement("div");
    itemstat.innerHTML = `
            <strong>${item.name}</strong><br>
            Price: ${item.price} money<br>
            <button id="sale${index}">Buy?</button>`; //labels id's in the index using $ pretty cool, right(so sale0, sale1 and etc.)

    shop.appendChild(itemstat);// actual bozx

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

    item.price = Math.floor(item.price * 1.35); // price scale


    scoretxt();
    makeshop();
  } else {
    alert("Not enough money!"); //no money D: :(
  }
}
makeshop();
scoretxt();