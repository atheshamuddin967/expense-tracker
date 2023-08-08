const balance = document.getElementById("balance");
const income = document.getElementById("income");
const expense = document.getElementById("expense");
const tname = document.getElementById("transaction-name")
const tamount = document.getElementById("transaction-amount")
const item = document.getElementById("item");
const form = document.getElementById("form");

//  1st make dummy transaction and show them to your list item 
const dummytransactions = [

    { id: 1, tname: "flower", tamount: -150 },
    { id: 2, tname: "petrol", tamount: -350 },
    { id: 3, tname: "salry", tamount: 500 },
    { id: 4, tname: "pocket", tamount: 600 },
];

let transactions = dummytransactions




// 2nd make li and its inner html with class positive or negative with delete button
function addtransactiontodom(transaction){
    const sing= transaction.tamount >0 ?"+" :"-";
    const litems=document.createElement("li");
    litems.classList.add(sing === "+"? "plus":"minus");
    litems.innerHTML= `${transaction.tname}<span>  ${transaction.tamount}</span>
     <button class="dlt-btn"onclick="removetransaction (${transaction.id})">
     <i class="fa-solid fa-trash"></i></button>`;
 item.appendChild(litems)

};



// make function for genrate atomatic new id 

function generateid() {
    return Math.floor(Math.random() * 100000000);
}

// asing values to array 
function addtransaction(e){
    e.preventDefault();
    const transaction = {
        id:generateid(),
        tname:tname.value ,
        tamount: +tamount.value,
    }

// add transaction array in your old transactions array 
transactions.push(transaction);
addtransactiontodom(transaction);
updatevalue();
tname.value="",
tamount.value=""
};

// update values after make list items 
function updatevalue(){
    const tamounts= transactions.map((transaction)=> transaction.tamount);
    
    const total=(tamounts.reduce((accumulator,value)=>(accumulator += value),0));
    
    const inc=(
    tamounts
    .filter((value)=>value >0)
    .reduce((accumulator,value)=>(accumulator+=value),0)
    
    );
    const exp=(
        tamounts
        .filter((value)=>value <0)
        .reduce((accumulator,value)=>(accumulator+=value),0) *-1 );
    
    
    balance.innerHTML=`${total}`,
    income.innerHTML=`${inc}`,
    expense.innerHTML=`${exp}`
    };

    //  add transaction to ul li 
    function init () {
        item.innerHTML = "";
        transactions.forEach(addtransactiontodom);
        updatevalue();
    }



// delete button function 
    function removetransaction(id) {
        transactions = transactions.filter((transaction) => transaction.id !== id);
        // updateLocaleStorage();
        init();
      }


init();

form.addEventListener("submit", addtransaction);



