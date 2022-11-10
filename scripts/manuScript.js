


// Chicken Buckets.......

let chickenArr=[
    {
 img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002153.jpg?ver=21.88",
smallDisc: "Peri Peri 10 Strips with Dynamite",
price: "639.05",
detail : "10 Spicy Peri Peri chicken strips & our Dynamite Spicy Mayo Sauce Bottle",
     },
    {
    img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002153.jpg?ver=21.88",
    smallDisc: "Peri Peri 10 Strips with Dynamite",
price: "639.05",
detail : "10 Spicy Peri Peri chicken strips & our Dynamite Spicy Mayo Sauce Bottle",
    },
    {
 img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002153.jpg?ver=21.88",
 smallDisc: "Peri Peri 10 Strips with Dynamite",
 price: "639.05",
detail : "10 Spicy Peri Peri chicken strips & our Dynamite Spicy Mayo Sauce Bottle",
     },
    {
img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002153.jpg?ver=21.88",
smallDisc: "Peri Peri 10 Strips with Dynamite",
price: "639.05",
detail : "10 Spicy Peri Peri chicken strips & our Dynamite Spicy Mayo Sauce Bottle",
  },
   {
img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002153.jpg?ver=21.88",
smallDisc: "Peri Peri 10 Strips with Dynamite",
price: "639.05",
 detail : "10 Spicy Peri Peri chicken strips & our Dynamite Spicy Mayo Sauce Bottle",
  },
  {
 img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002153.jpg?ver=21.88",
 smallDisc: "Peri Peri 10 Strips with Dynamite",
 price: "639.05",
 detail : "10 Spicy Peri Peri chicken strips & our Dynamite Spicy Mayo Sauce Bottle",
  },
  {
    img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002153.jpg?ver=21.88",
    smallDisc: "Peri Peri 10 Strips with Dynamite",
price: "639.05",
detail : "10 Spicy Peri Peri chicken strips & our Dynamite Spicy Mayo Sauce Bottle",
    },
    {
 img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002153.jpg?ver=21.88",
 smallDisc: "Peri Peri 10 Strips with Dynamite",
 price: "639.05",
detail : "10 Spicy Peri Peri chicken strips & our Dynamite Spicy Mayo Sauce Bottle",
     },
    {
img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002153.jpg?ver=21.88",
smallDisc: "Peri Peri 10 Strips with Dynamite",
price: "639.05",
detail : "10 Spicy Peri Peri chicken strips & our Dynamite Spicy Mayo Sauce Bottle",
  },
   {
img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002153.jpg?ver=21.88",
smallDisc: "Peri Peri 10 Strips with Dynamite",
price: "639.05",
 detail : "10 Spicy Peri Peri chicken strips & our Dynamite Spicy Mayo Sauce Bottle",
  },
  {
 img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002153.jpg?ver=21.88",
 smallDisc: "Peri Peri 10 Strips with Dynamite",
 price: "639.05",
 detail : "10 Spicy Peri Peri chicken strips & our Dynamite Spicy Mayo Sauce Bottle",
  },
  {
    img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002153.jpg?ver=21.88",
    smallDisce: "Peri Peri 10 Strips with Dynamite",
    price: "639.05",
     detail : "10 Spicy Peri Peri chicken strips & our Dynamite Spicy Mayo Sauce Bottle",
      },
      {
     img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002153.jpg?ver=21.88",
     smallDisc: "Peri Peri 10 Strips with Dynamite",
     price: "639.05",
     detail : "10 Spicy Peri Peri chicken strips & our Dynamite Spicy Mayo Sauce Bottle",
      },
                                         
]

localStorage.setItem("chicken",JSON.stringify(chickenArr));
console.log(chickenArr);

let data1 = JSON.parse(localStorage.getItem("chicken"));

displayData(data1);


function displayData(arr){

arr.forEach(function(elem,index){

   let div = document.createElement("div");

   let img = document.createElement("img");
        img.src = elem.img;

   let smallDisc = document.createElement("p");
        smallDisc.innerText = elem.innerText;

   let price = document.createElement("h3");
        price.innerText = elem.price;

   let detail = document.createElement("p");
        detail.innerText = elem.detail;

   let button = document.createElement("button");
        button.innerText = "Add to Cart";

   div.append(img,smallDisc,price,detail,button);
        document.querySelector("#chicken").append(div);
});

};


// Exlusive Deal.......
let ExlusiveArr=[
    {
 img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002153.jpg?ver=21.88",
smallDisc: "Peri Peri 10 Strips with Dynamite",
price: "639.05",
detail : "10 Spicy Peri Peri chicken strips & our Dynamite Spicy Mayo Sauce Bottle",
     },
    {
    img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002153.jpg?ver=21.88",
    smallDisc: "Peri Peri 10 Strips with Dynamite",
price: "639.05",
detail : "10 Spicy Peri Peri chicken strips & our Dynamite Spicy Mayo Sauce Bottle",
    },                                   
]

localStorage.setItem("Exlusive",JSON.stringify(ExlusiveArr));
console.log(chickenArr);

let data2 = JSON.parse(localStorage.getItem("Exlusive"));

displayData2(data2);


function displayData2(arr){

arr.forEach(function(elem,index){

   let div = document.createElement("div");

   let img = document.createElement("img");
        img.src = elem.img;

   let smallDisc = document.createElement("p");
        smallDisc.innerText = elem.innerText;

   let price = document.createElement("h3");
        price.innerText = elem.price;

   let detail = document.createElement("p");
        detail.innerText = elem.detail;

   let button = document.createElement("button");
        button.innerText = "Add to Cart";

   div.append(img,smallDisc,price,detail,button);
        document.querySelector("#exclusive").append(div);
});

};

