let data=[];
function addFleet(){
    let reg=document.getElementById("reg").value;
    let category=document.getElementById("category").value;
    let driver=document.getElementById("driver").value;
    let avail=document.getElementById("avail").value;

    if(!reg || !category || !driver){
        alert("All Fields Required!");
        return;
    }
    let obj={
        reg,
        category,
        driver,
        avail,
        image:"https://coding-platform.s3.amazonaws.com/dev/lms/tickets/5e80fcb6-3f8e-480c-945b-30a5359eb40e/JNmYjkVr3WOjsrbu.png"
    }
    data.push(obj);
    render(data);
    document.getElementById("reg").value="";
    document.getElementById("category").value="";
    document.getElementById("driver").value="";
    document.getElementById("avail").value="Available";
}

function render(arr){
    let box=document.getElementById("cards");
    box.innerHTML="";
    arr.forEach((item,index) => {
     let card=document.createElement("div");
     card.className="card";
     card.innerHTML=`
     <img src="${item.image}" width=200px>
     <h3>${item.reg}</h3>
     <p>Category: ${item.category}</p>
     <p>Driver: ${item.driver}</p>
     <p>Status: ${item.avail}</p>

    <button onclick="updateDriver(${index})">Update Driver Name</button><br><br>
    <button onclick="changeAvail(${index})">Change Availability </button><br><br>
    <button onclick="deleteVehicle(${index})">Delete Vehicle</button><br><br>
     `
     box.appendChild(card);   
    });
}
function updateDriver(i){
    let newDriver=prompt("Enter new Driver Name");
    if(!newDriver){
        return;
    }
    data[i].driver=newDriver;
    render(data);
}
function changeAvail(i){
    data[i].avail=data[i].avail==="Available"?"Unavailable":"Available";
    render(data);
}
function deleteVehicle(i){
    if(confirm("Are you Sure to Delete it?")){
        data.splice(i,1);
        render(data);
    }
}
function applyfilter(){
    let cat=document.getElementById("filterCategory").value;
    let avail=document.getElementById("filterAvail").value;
    let filtered=data.filter(item=>{
        let matchCat=(cat==="All") || (item.category===cat);
        let matchAvail=avail==="All" || (avail=="Available" && item.avail===true) || (avail=="Unavailable" && item.avail===false)  ;
    return matchAvail && matchCat;
    })
    render(filtered);
}
function clearFilter(){
    document.getElementById("filterCategory").value="All";
    document.getElementById("filterAvail").value="All";
    render(data);
}