//navbar show
let Open = false;
//navbar show

// -------------------------------------------getdata------------------------------------------------
async function getdata(){
let createdata = await fetch("http://localhost:3000/product");
let convertdata = await createdata.json();
let finaldata = convertdata.map( (e)=> `

    <tr>
        <td>${e.id}</td>
        <td>${e.brand}</td>
        <td>${e.product}</td>
        <td>${e.price}</td>
        <td><button class="action-btn delete-btn" onclick="deletedata('${e.id}');">Delete</button></td>
        <td><button class="action-btn update-btn" onclick ="updatedata('${e.id}');">Update</button></td> 
    </tr>
`).join("")

let output = document.querySelector('#tableshow');
output.innerHTML = finaldata;
}
// -------------------------------------------getdata------------------------------------------------





// -------------------------------------------deletedata---------------------------------------------
function deletedata(id){
    fetch(`http://localhost:3000/product/${id}`,{
        method:'DELETE'
    })
    .then(window.alert("Delete Data Successfully..!!!"))
}
// -------------------------------------------deletedata----------------------------------------------





// -------------------------------------------Update--------------------------------------------
async function updatedata(id){
let getdata = await fetch(`http://localhost:3000/product/${id}`);
let convertdata = await getdata.json();
let final_data = `
    
        <input type="text" value="${convertdata.id}" id="id1" readonly> 
        <input type="text" value="${convertdata.brand}" id="brand1"> 
        <input type="text" value="${convertdata.product}" id="product1"> 
        <input type="text" value="${convertdata.price}" id="price1"> 
        <button onclick="finalupdate('${convertdata.id}')">Submit</button>
`

document.querySelector('#myupdatedata').innerHTML = final_data;
}


//final update
function finalupdate(id){
    let data = {
        brand : document.querySelector('#brand1').value,
        product : document.querySelector('#product1').value,
        price : document.querySelector('#price1').value
    }

    let finalupdate = fetch(`http://localhost:3000/product/${id}`,{
        method:'PUT',
        headers:{
            'content-type': 'apllication/json'
        },
        body:JSON.stringify(data)
    })
    .then(window.alert("Update suceesfully"))
}

// -------------------------------------------Update--------------------------------------------




// -------------------------------------------adddata-------------------------------------------
function insertdata(){
    let addbrand = document.querySelector('#brand').value;
    let addproduct = document.querySelector('#product').value;
    let addprice = document.querySelector('#price').value;

    let data = {
        brand:addbrand,
        product:addproduct,
        price:addprice
    }

    fetch("http://localhost:3000/product", {
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(data)
    })
    .then(window.alert("Insert Successfully"))
}
// -------------------------------------------adddata------------------------------------------------



//navbar show
function humnavbar() {
  let nav = document.querySelector(".navbar");

  if (Open) {
    nav.style.left = "-300px"; 
  } else {
    nav.style.left = "0"; 
  }

  Open = !Open; 

  nav.style.display = "block"
}

// navbar hide
function navhide(){
  let nav = document.querySelector(".navbar");
  nav.style.display = "none"
}