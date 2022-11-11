
// linking to cart page
document.querySelector("#img2NavBar").addEventListener("click",function(){
     window.location.href="./cart.html";
 });


// Chicken Buckets.......

let data1 = JSON.parse(localStorage.getItem("chicken"))||[];

displayData(data1);


function displayData(arr){

arr.forEach(function(elem,index){

   let div = document.createElement("div");

   let img = document.createElement("img");
        img.src = elem.img;

   let smallDisc = document.createElement("p");
        smallDisc.innerText = elem.smallDisc;

   let price = document.createElement("h3");
        price.innerText = elem.price;

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
        smallDisc.innerText = elem.innerText;

   let price = document.createElement("h3");
        price.innerText = elem.price;

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
     localStorage.setItem(key,JSON.stringify(cartData));
     console.log(cartData);
}






