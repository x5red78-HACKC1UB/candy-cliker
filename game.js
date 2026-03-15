//Lastly ignore
// js
//NOTE FUCTIONS MAKEGOLDSHOPPY & BUYGOLDITEM are GEMS/GOLD I DONT FEEL LIKE CHNGING THE NAME
//SO CONSIDER YOUSELF WARNED
//lets
let money = 0; //just read
let mps = 0;
let startingmpc=0;
let mpc = 1 +startingmpc;
let salesbought=0;
let coins=0;
let clicks=0;
let prestige=0;
let gold=0;
let clickspeed=0;
let muted=false;
let multiplier=0;
let ultraprestige=0;
let gems=0;


//consts
const score = document.getElementById("moneyScore");
const goldamount = document.getElementById("goldamount");
const clicker = document.querySelector(".moneybtn");
const shoptoggle = document.getElementById("shoponoff");
const shopcontainer = document.querySelector(".shopcontainer");
const shop = document.getElementById("shop");
const shutupbutton = document.getElementById("shutupbutton");
const prestigebtn= document.getElementById("prestigebtn");
const goldshopbtn = document.getElementById("goldshopbtn");
const goldshopcontainer = document.getElementById("goldshopcontainer");
const ultraprestigebtn= document.getElementById("ultraprestige")
const coinsound= new Audio;
coinsound.src="lol.wav";
let currentTracky = 0;
const PLAYLIST=[
"bg.mp3",
"bg2.mp3",
"bg3.mp3",
"bg4.mp3",
"bg5.mp3",
];


 let bgsound = new Audio(PLAYLIST[currentTracky]);
bgsound.loop=true;
bgsound.volume = 0.42;
bgsound.play();
document.getElementById("stereo").addEventListener("click", () => {
  currentTracky++;

 if (currentTracky >= PLAYLIST.length) {
    currentTracky = 0;
  }
   bgsound.pause();
  bgsound = new Audio(PLAYLIST[currentTracky]);
  bgsound.loop = true;
  bgsound.volume = 0.20;
  bgsound.play();
});
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

goldshopbtn.addEventListener("click", () => {
  goldshopcontainer.classList.toggle("open");

  if (goldshopcontainer.classList.contains("open")) {
    goldshopbtn.textContent = "Close Special Shop";
     goldtxt();
     gemtxt();
  } else {
    goldshopbtn.textContent = "Special Shop";
  }
});

//amount of money shown
function scoretxt() {
  score.textContent = Math.floor(money) + " money";
}
function goldtxt() {
  goldamount.textContent = Math.floor(gold) + " gold";
}
function gemtxt() {
  gemsamount.textContent = Math.floor(gems) + " gems";
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
}, 1000-clickspeed);

prestigebtn.addEventListener("click", ()=>{

 if (money < 10000) {
    alert("Not enough money!");
    return;
  }else{
gold+=(Math.floor(money/10000));
 money = 0; //just read
 mps = 0;
 mpc = (1 +startingmpc)*multiplier;
 shopitems = [
  { name: "Basic Cursor", price: 15, mpc: 2, }, //mpc = money per click. //{ name:"" , price: , mpc:  }  empty upgrades template to add any upgrade
  { name: "Auto Clicker", price: 35, mps: 1 }, //mps = money per sec. // { name:"" , price: , mps:  }
  { name: "Triple Clickers", price:100 , mps:3  },
{ name:"Cool Cursor" , price:250 , mpc:10  },
{ name:"Clicker Crew" , price:700 , mps:20  },
{ name:"Clicker Mine" , price:1500 , mps:30  },
{ name:"Stone Clicker" , price:2000 , mpc: 50 },
{ name:"Clicker Storm" , price:3000 , mps:200  },
{ name:"Iron Clicker" , price:5000 , mpc:150  },
{ name:"Clicker Vortex" , price:9000 , mps:700  },
{ name:"Diamond Clicker" , price:15000 , mpc:1200 },
];



scoretxt();
goldtxt();
  checkachievementssteamhappy();
  }
});
ultraprestigebtn.addEventListener("click", ()=>{

 if (gold < 100) {
    alert("Not enough gold!");
    return;
  }else{
gems+=Math.floor(gold/100);
gold=0;
 shopitems = [
  { name: "Basic Cursor", price: 15, mpc: 2, }, //mpc = money per click. //{ name:"" , price: , mpc:  }  empty upgrades template to add any upgrade
  { name: "Auto Clicker", price: 35, mps: 1 }, //mps = money per sec. // { name:"" , price: , mps:  }
  { name: "Triple Clickers", price:100 , mps:3  },
{ name:"Cool Cursor" , price:250 , mpc:10  },
{ name:"Clicker Crew" , price:700 , mps:20  },
{ name:"Clicker Mine" , price:1500 , mps:30  },
{ name:"Stone Clicker" , price:2000 , mpc: 50 },
{ name:"Clicker Storm" , price:3000 , mps:200  },
{ name:"Iron Clicker" , price:5000 , mpc:150  },
{ name:"Clicker Vortex" , price:9000 , mps:700  },
{ name:"Diamond Clicker" , price:15000 , mpc:1200 },
];
  }
});
//shopping :D
let shopitems = [
  { name: "Basic Cursor", price: 15, mpc: 2, }, //mpc = money per click. //{ name:"" , price: , mpc:  }  empty upgrades template to add any upgrade
  { name: "Auto Clicker", price: 35, mps: 1 }, //mps = money per sec. // { name:"" , price: , mps:  }
  { name: "Triple Clickers", price:100 , mps:3  },
{ name:"Cool Cursor" , price:250 , mpc:10  },
{ name:"Clicker Crew" , price:700 , mps:20  },
{ name:"Clicker Mine" , price:1500 , mps:30  },
{ name:"Stone Clicker" , price:2000 , mpc: 50 },
{ name:"Clicker Storm" , price:3000 , mps:200  },
{ name:"Iron Clicker" , price:5000 , mpc:150  },
{ name:"Clicker Vortex" , price:9000 , mps:700  },
{ name:"Diamond Clicker" , price:15000 , mpc:1200 },
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
const goldshopitems = [
  { name: "Golden multiplier", gold: 1, startingmpc: 4 },
  { name: "Golden Auto Clicker", gold: 10, clickspeed: 25 },
  { name: "Money enhance", gold: 100, multiplier: 2 }
];
function makegoldshoppy() {
  goldshopbtn.innerHTML="";
  goldshopitems.forEach((item,index) =>{
    const div=document.createElement("div");

    let currencyswapping ="";
    if(item.gold>0) currencyswapping += `${item.gold} gold `;
    if (item.gems > 0) currencyswapping += `${item.gems} gems`;
 div.innerHTML = `
      <strong>${item.name}</strong><br>
      Cost: ${currencyswapping}<br>
      <button id="goldbuy${index}">Buy</button>
    `;
     goldshop.appendChild(div);

    document.getElementById(`goldbuy${index}`).addEventListener("click", () => {
      buygolditem(index);
    });
  });
}

function buygolditem(index) {
  const item = goldshopitems[index];

  
  if (gold >= item.gold && gems >= item.gems) {

    
    gold -= item.gold;
    gems -= item.gems;
    goldtxt();
    gemtxt();

    
    if (item.mpc) mpc += item.mpc;
    if (item.mps) mps += item.mps;

    if (item.multiplier) {
      mpc *= item.multiplier;
      mps *= item.multiplier;
    }

    if (item.clickspeed) clickspeed += item.clickspeed;

    if (item.startingmpc) {
      startingmpc += item.startingmpc;
      mpc += item.startingmpc;
    }

    
    item.gold = Math.floor(item.gold + 5);
    item.gems = Math.floor(item.gems + 1);

    scoretxt();
    makegoldshoppy();

  } else {
    alert("Not enough gold/gems!");
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
  { name: "100 Candy", unlocked: false, condition: () => money >= 100 }, //achievements layout{ name: , unlocked:false , condition: () =>  }
  { name: "1,000 Candy", unlocked: false, condition: () => money >= 1000 },
{ name:"Gotcha!" , unlocked:false , condition: () => coins>=1 },
{ name:"Coin Collector" , unlocked:false , condition: () => coins>=10 },
{ name:"100 clicks" , unlocked:false , condition: () => clicks>=100 },
{ name:"1000 clicks" , unlocked:false , condition: () => clicks>=1000 },
{ name:"10000 clicks" , unlocked:false , condition: () => clicks>=10000 },
{ name:"Prestige" , unlocked:false , condition: () =>gold>=1  }
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
  coins=+1;
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
 });
 setTimeout(() => coin.remove(), 10000);
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
makegoldshoppy();
scoretxt();
