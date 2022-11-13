
document.querySelector("#skip").addEventListener("click",function(){
    window.location.href="./index.html";
});

document.querySelector("#clickHere").addEventListener("click",function(){
        let number = document.querySelector("#phoneNumber").value;
        if(number==="")
            alert("please enter the number");
        else if(number.length<10||number.length>10)
                alert("Please enter a valid 10-digit mobile number");
        else
                window.location.href="./otp.html";
});
document.querySelector("#phoneNumber")