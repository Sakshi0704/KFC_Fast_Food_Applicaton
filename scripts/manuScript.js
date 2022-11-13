
// linking to cart page
document.querySelector("#img2NavBar").addEventListener("click",function(){
     window.location.href="./cart.html";
 });


// Chicken Buckets.......

let data1 = JSON.parse(localStorage.getItem("chicken"))||[];

displayData1(data1);

function displayData1(arr){

arr.forEach(function(elem,index){

   let div = document.createElement("div");

   let img = document.createElement("img");
        img.src = elem.img;

   let smallDisc = document.createElement("p");
        smallDisc.innerText = elem.smallDisc;

   let price = document.createElement("h3");
        price.innerText = "₹ "+elem.price;

   let detail = document.createElement("p");
        detail.innerText = elem.detail;

   let button = document.createElement("button");
        button.innerText = "Add to Cart";
          button.addEventListener("click",function(){
                    addDataCart("cart",elem);
          })

   div.append(img,smallDisc,price,detail,button);
        document.querySelector("#chicken").append(div);
});

};


// Exlusive Deal.......

let data2 = JSON.parse(localStorage.getItem("Exlusive"))||[];

displayData2(data2);


function displayData2(arr){
arr.forEach(function(elem,index){

   let div = document.createElement("div");

   let img = document.createElement("img");
        img.src = elem.img;

   let smallDisc = document.createElement("p");
        smallDisc.innerText = elem.smallDisc;

   let price = document.createElement("h3");
          price.innerText = "₹ "+elem.price;

   let detail = document.createElement("p");
        detail.innerText = elem.detail;

   let button = document.createElement("button");
        button.innerText = "Add to Cart";
        button.addEventListener("click",function(){
          addDataCart("cart",elem);
          })

   div.append(img,smallDisc,price,detail,button);
        document.querySelector("#exclusive").append(div);
});

};


// New Launch Deal.......

let data3 = JSON.parse(localStorage.getItem("NewLaunch"))||[];

displayData3(data3);


function displayData3(arr){

arr.forEach(function(elem,index){

   let div = document.createElement("div");

   let img = document.createElement("img");
        img.src = elem.img;

   let smallDisc = document.createElement("p");
        smallDisc.innerText = elem.smallDisc;

   let price = document.createElement("h3");
          price.innerText = "₹ "+elem.price;

   let detail = document.createElement("p");
        detail.innerText = elem.detail;

   let button = document.createElement("button");
        button.innerText = "Add to Cart";
        button.addEventListener("click",function(){
          addDataCart("cart",elem);
          })

   div.append(img,smallDisc,price,detail,button);
        document.querySelector("#newLaunch").append(div);
});

};


// Biryani Deal.......

let data4 = JSON.parse(localStorage.getItem("Biryani"))||[];

displayData4(data4);


function displayData4(arr){

arr.forEach(function(elem,index){

   let div = document.createElement("div");

   let img = document.createElement("img");
        img.src = elem.img;

   let smallDisc = document.createElement("p");
        smallDisc.innerText = elem.smallDisc;

   let price = document.createElement("h3");
           price.innerText = "₹ "+elem.price;

   let detail = document.createElement("p");
        detail.innerText = elem.detail;

   let button = document.createElement("button");
        button.innerText = "Add to Cart";
        button.addEventListener("click",function(){
          addDataCart("cart",elem);
          })

   div.append(img,smallDisc,price,detail,button);
        document.querySelector("#biryaniBuckets").append(div);
});

};


// Box Meals.......

let data5 = JSON.parse(localStorage.getItem("Meals"))||[];

displayData5(data5);


function displayData5(arr){

arr.forEach(function(elem,index){

   let div = document.createElement("div");

   let img = document.createElement("img");
        img.src = elem.img;

   let smallDisc = document.createElement("p");
        smallDisc.innerText = elem.smallDisc;

   let price = document.createElement("h3");
          price.innerText = "₹ "+elem.price;

   let detail = document.createElement("p");
        detail.innerText = elem.detail;

   let button = document.createElement("button");
        button.innerText = "Add to Cart";
        button.addEventListener("click",function(){
          addDataCart("cart",elem);
          })

   div.append(img,smallDisc,price,detail,button);
        document.querySelector("#meals").append(div);
});

};


// Burgers.......

let data6 = JSON.parse(localStorage.getItem("Burgers"))||[];

displayData6(data6);


function displayData6(arr){

arr.forEach(function(elem,index){

   let div = document.createElement("div");

   let img = document.createElement("img");
        img.src = elem.img;

   let smallDisc = document.createElement("p");
        smallDisc.innerText = elem.smallDisc;

   let price = document.createElement("h3");
          price.innerText = "₹ "+elem.price;

   let detail = document.createElement("p");
        detail.innerText = elem.detail;

   let button = document.createElement("button");
        button.innerText = "Add to Cart";
        button.addEventListener("click",function(){
          addDataCart("cart",elem);
          })

   div.append(img,smallDisc,price,detail,button);
        document.querySelector("#burgers").append(div);
});

};



// Snacks.......

let data7 = JSON.parse(localStorage.getItem("Snacks"))||[];

displayData7(data7);


function displayData7(arr){

arr.forEach(function(elem,index){

   let div = document.createElement("div");

   let img = document.createElement("img");
        img.src = elem.img;

   let smallDisc = document.createElement("p");
        smallDisc.innerText = elem.smallDisc;

   let price = document.createElement("h3");
           price.innerText = "₹ "+elem.price;

   let detail = document.createElement("p");
        detail.innerText = elem.detail;

   let button = document.createElement("button");
        button.innerText = "Add to Cart";
        button.addEventListener("click",function(){
          addDataCart("cart",elem);
          })

   div.append(img,smallDisc,price,detail,button);
        document.querySelector("#snacks").append(div);
});

};




// Specials.......

let data8 = JSON.parse(localStorage.getItem("Specials"))||[];

displayData8(data8);


function displayData8(arr){

arr.forEach(function(elem,index){

   let div = document.createElement("div");

   let img = document.createElement("img");
        img.src = elem.img;

   let smallDisc = document.createElement("p");
        smallDisc.innerText = elem.smallDisc;

   let price = document.createElement("h3");
          price.innerText = "₹ "+elem.price;

   let detail = document.createElement("p");
        detail.innerText = elem.detail;

   let button = document.createElement("button");
        button.innerText = "Add to Cart";
        button.addEventListener("click",function(){
          addDataCart("cart",elem);
          })

   div.append(img,smallDisc,price,detail,button);
        document.querySelector("#spacials").append(div);
});

};


// Beverages.......

let data9 = JSON.parse(localStorage.getItem("Bevarges"))||[];

displayData9(data9);


function displayData9(arr){

arr.forEach(function(elem,index){

   let div = document.createElement("div");

   let img = document.createElement("img");
        img.src = elem.img;

   let smallDisc = document.createElement("p");
        smallDisc.innerText = elem.smallDisc;

   let price = document.createElement("h3");
           price.innerText = "₹ "+elem.price;

   let detail = document.createElement("p");
        detail.innerText = elem.detail;

   let button = document.createElement("button");
        button.innerText = "Add to Cart";
        button.addEventListener("click",function(){
          addDataCart("cart",elem);
          })

   div.append(img,smallDisc,price,detail,button);
        document.querySelector("#beverages").append(div);
});

};



function addDataCart(key,value){
     let cartData = JSON.parse(localStorage.getItem(key))||[];
      for(let i=0;i<cartData.length;i++){
        if(cartData[i].id==value.id)
              {
               alert("Add already in cart if need to increase please go to the cart and increase the quentity");
               return;
               }   
          };  
     cartData.push({...value,quantity:1});
     alert("Add in cart successfully");
     localStorage.setItem(key,JSON.stringify(cartData));
     console.log(cartData);
}




document.querySelector("#searchBar").addEventListener("input",search);

function search(){
     let q=document.querySelector("#searchBar").value;
     console.log(q);
     let newData = data3.filter(function(elem){
          return elem.smallDisc.toLowerCase().includes(q.toLowerCase());
     })
     document.querySelector("#contDiv")="";
     displayData3(newData);
};




