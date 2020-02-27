// var dish= {
//     Sweet: 50,
//     Bread: 20,
//     PaneerCari: 150,
//     ChickenCari: 200,
//     Rice: 50,
//     Biryani: 100,
//     Dosa: 80,
//     Idli: 40
// }

function addItem(){
    var dish= document.getElementById("dish").value;
    var quantity= document.getElementById("qty").value;
    var rate= document.getElementById("rate").value;
    var day= document.getElementById("day").value;
    var item= document.getElementById("item")
    var price= document.getElementById("price")
    var tax= document.getElementById("tax")
    var tip= document.getElementById("tip")
    var dis= document.getElementById("discount")
    var total= document.getElementById("total")

    var tbDish= document.createElement("p")
    item.appendChild(tbDish);
    tbDish.textContent= dish
    

    var tbPrice= document.createElement("p")
    price.appendChild(tbPrice);
    tbPrice.textContent= Number(quantity)* Number(rate);

    var tbTax= document.createElement("p")
    tax.appendChild(tbTax);
    tbTax.textContent= (Number(quantity)* Number(rate)) * 5 /100;
    

    var tbTip= document.createElement("p")
    tip.appendChild(tbTip);
    tbTip.textContent= (Number(quantity)* Number(rate)) * 2 /100;

    var tbDis= document.createElement("p")
    dis.appendChild(tbDis);
    if(day === "Friday"){
        tbDis.textContent= 100;
    }
    else{
        tbDis.textContent= "Not Applicable";
    }
    


    
    var amount= document.createElement("p")
    total.appendChild(amount);

    if( day=== "Friday"){
        amount.textContent= (Number(quantity)* Number(rate))+ 
        ((Number(quantity)* Number(rate)) * 5 /100)+ ((Number(quantity)* Number(rate)) * 2 /100)-100;
    }
    else{
        amount.textContent= (Number(quantity)* Number(rate))+ 
        ((Number(quantity)* Number(rate)) * 5 /100)+ ((Number(quantity)* Number(rate)) * 2 /100);
    }
    







}
