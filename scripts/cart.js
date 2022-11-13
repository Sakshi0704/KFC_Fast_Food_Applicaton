
let cartData = JSON.parse(localStorage.getItem("cart"))||[];

displayData(cartData);

//console.log(cartData);



function displayData(arr){

     document.querySelector("#cont-child1").innerHTML="";

     arr.forEach((elem,index)=>{

   let quant = arr.reduce((a,b)=>{
     return(a+(+(b.quantity)));
   },0);


   document.querySelector("#item").innerText = quant+"    Item";

   let div = document.createElement("div");

   let insideDiv = document.createElement("div");

   let img = document.createElement("img");
     img.src = elem.img;

   let insideDiv1 = document.createElement("div");  

   let smallDisc = document.createElement("p");
        smallDisc.innerText = elem.smallDisc;

    let remove = document.createElement("button");
        remove.innerText = "Remove";
        remove.addEventListener("click",function(){
             deleteData(cartData,index);
             window.location.reload();

        });
    let insideDiv2 = document.createElement("div");

    let increament = document.createElement("button");
          increament.innerText = "+";
          increament.addEventListener("click",function(){
            elem.quantity++;
                   quantity.innerText=elem.quantity;
                    localStorage.setItem("cart",JSON.stringify(cartData));
                      //   displayData(cartData);
                let res= ((+elem.quantity)*(+elem.price));
                price.innerText = (+res); 
                window.location.reload();                       
          });


     let quantity = document.createElement("h4");
          quantity.innerText = elem.quantity;
   

   let  decreament = document.createElement("button");
          decreament.innerText = "-";
          decreament.addEventListener("click",function(){
               if(elem.quantity<=1)
                    return;
               elem.quantity--;
                      quantity.innerText=elem.quantity;
                       localStorage.setItem("cart",JSON.stringify(cartData));
//displayData(cartData);
                          let res= ((+elem.quantity)*(+elem.price));
                          price.innerText = (+res);
                          window.location.reload();
             });
             
   let price = document.createElement("h3");
          price.innerText = "₹ "+((+elem.quantity)*(+elem.price)).toFixed(1);   
           // subtotal = elem.price;
   insideDiv.append(img);
   insideDiv1.append(smallDisc,remove);
   insideDiv2.append(increament,quantity,decreament,price);
   div.append(insideDiv,insideDiv1,insideDiv2);
   document.querySelector("#cont-child1").append(div);

});
   
};

function deleteData(data,i){
     //let data = JSON.parse(localStorage.getItem("key"))||[];
     data.splice(i,1);
     localStorage.setItem("cart",JSON.stringify(data));
     displayData(data);
}


//let subTotal = document.querySelector("#subtotal").innerText;

 let subTotal = cartData.reduce((a,b)=>{
          return (a + ((+b.quantity)*(+b.price)));
          },0);
     document.querySelector("#subtotal").innerText="₹ "+(subTotal).toFixed(1);

let totalPrice = (subTotal+95+35).toFixed(1);
document.querySelector("#total-checkout>p+p").innerText = "₹ "+totalPrice;
localStorage.setItem("totalPrice",totalPrice);

document.querySelector("#total-checkout").addEventListener("click",function(){
     window.location.href="./payment.html";
})