//Lastly ignore
// js
//lets
let money = 0; //just read
let mps = 0;
let mpc = 1
let salesbought=0;
let coins=0;
let muted=false
let clicks=0;
//consts
const score = document.getElementById("moneyScore");
const clicker = document.querySelector(".moneybtn");
const shoptoggle = document.getElementById("shoponoff");
const shopcontainer = document.querySelector(".shopcontainer");
const shop = document.getElementById("shop");
const shutupbutton = document.getElementById("shutupbutton");

const coinsound= new Audio;
coinsound.src="lol.wav";

let bgsound=new Audio("bg.mp3")
bgsound.loop=true;
bgsound.volume = 0.42;
bgsound.play();

document.addEventListener("click", () => {
  bgsound.play();
}, { once: true });

shutupbutton.addEventListener("click",()=>{

    muted = !muted;

  if (muted) {
    bgsound.pause();
    coinsound.muted = true;
    shutupbutton.textContent = "Unmute";
  } else {
    bgsound.play();
    coinsound.muted = false;
    shutupbutton.textContent = "Mute";
  }
});

//open/colse shop
shoptoggle.addEventListener("click", () => {
  shopcontainer.classList.toggle("open");
  if (shopcontainer.classList.contains("open")) {
    shoptoggle.textContent = "Close";
  } else {
    shoptoggle.textContent = "Shop";
  }
});

//amount of money shown
function scoretxt() {
  score.textContent = Math.floor(money) + " money";
}

// what makes the money actually happen
clicker.addEventListener("click", function () {
  money += mpc;
  clicks+=1;
  scoretxt();
  checkachievementssteamhappy();
  console.log("Clicked")
});
setInterval(() => {
  money += mps;
  scoretxt();
  checkachievementssteamhappy();
}, 1000);

//shopping :D
const shopitems = [
  { name: "Basic Cursor", price: 15, mpc: 1, }, //mpc = money per click. //{ name:"" , price: , mpc:  }  empty upgrades template to add any upgrade
  { name: "Auto Clicker", price: 35, mps: 1 }, //mps = money per sec. // { name:"" , price: , mps:  }
  { name: "Triple Clickers", price:100 , mps:3  },
{ name:"Cool Cursor" , price:250 , mpc:4  },
{ name:"Clicker Crew" , price:700 , mps:10  },
{ name:"Clicker Mine" , price:1500 , mps:20  },
{ name:"Stone Clicker" , price:2000 , mpc: 30 }

];


// shop layout and containers
function makeshop() {
  shop.innerHTML = ""; // clear shop 
  shopitems.forEach((item, index) => {  //links to shopitems index starts at 0 for basic cursor and goes up
    const itemstat = document.createElement("div"); 
    itemstat.innerHTML = `
            <strong>${item.name}</strong>
            <br> Price: ${item.price} money <br>
            <button id="sale${index}">Buy?</button>`; //labels id's in the index using $ pretty cool, right(so sale0, sale1 and etc.)
//(br is line break/enter and strong hightlight text)
    shop.appendChild(itemstat);// actual bozx

    setTimeout(() => itemstat.classList.add("show"), 50); //allowshop to render

    document.getElementById(`sale${index}`).addEventListener("click", () => buyitem(index)); //“When this button is clicked, run buyitem(index).” best description i have
  });
}

//buying itemss
function buyitem(index) {
  const item = shopitems[index];

  if (money >= item.price) { // if there's enough mone subtract iten.price from money
    money -= item.price;
    salesbought++;
    checkachievementssteamhappy();

    if (item.mps) { // if an upgrade give mps
      mps += item.mps;
      checkachievementssteamhappy();
    }

    if (item.mpc) { // if an upgrade gives mpc
      mpc += item.mpc;
      checkachievementssteamhappy();
    }

    item.price = Math.floor(item.price * 1.35); // price scale


    scoretxt();
    makeshop();
  } else {
    alert("Not enough money!"); //no money D: :(
  }
}

//achievements
const achievementsBtn = document.getElementById("achievements");
const achievementsTab = document.getElementById("achievementsTab");
const achievementsList = document.getElementById("achievementsList");

achievementsBtn.addEventListener("click", () => {
  achievementsTab.classList.toggle("hidden");
});

let achievements = [
  { name: "First Click", unlocked: false, condition: () => money >= 1 },
  { name: "100 Candy", unlocked: false, condition: () => money >= 100 }, //achievements layout{ name: , unlocked: , condition: () =>  }
  { name: "1,000 Candy", unlocked: false, condition: () => money >= 1000 },
{ name:"Gotcha!" , unlocked:false , condition: () => coins>=1 },
{ name:"Coin Collector" , unlocked:false , condition: () => coins>=10 },
{ name:"100 clicks" , unlocked:false , condition: () => clicks>=100 },
{ name:"1000 clicks" , unlocked:false , condition: () => clicks>=1000 },
{ name:"10000 clicks" , unlocked:false , condition: () => clicks>=10000 },
];

function checkachievementssteamhappy() {
  achievements.forEach(a => {
    if (!a.unlocked && a.condition()) {
      a.unlocked = true;
      addAchievements(a.name);
    }
  });
}

function addAchievements(name) {
  const li = document.createElement("li");
  li.textContent = name;
  achievementsList.appendChild(li);
}

//coin7y
function oohshiny(){
   const coin = document.createElement("img");
  coin.src = "coin.svg"; 
      coin.classList.add("coin");

  coin.style.left = Math.random() * (window.innerWidth - 60) + "px";
  coin.style.top = Math.random() * (window.innerHeight - 60) + "px";
 document.body.appendChild(coin);
 coin.addEventListener("click", ()=>{

 if(money> 5000) {
  money+=Math.floor(money*0.25);
  coins=+1
   coinsound.play();
  scoretxt();
   checkachievementssteamhappy();
  coin.remove();
 } else {
  money+=300;
   coinsound.play();
  coins+=1;
  scoretxt();
   checkachievementssteamhappy();
  coin.remove();
 }
 setTimeout(() => coin.remove(), 10000);
 });
}
function spawncoin() {
  const wait = (40 + Math.random() * 40) * 1000; 


  setTimeout(() => {
    oohshiny();
   spawncoin(); // repeat
  }, wait);
}

spawncoin();

makeshop(); // the end is here
scoretxt();
