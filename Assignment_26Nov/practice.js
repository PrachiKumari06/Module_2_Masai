//1.   dom navigating 
// ------------------------------------------------------------------------------------------------------
    // const a=document.getElementById("fruit");
    // const b=a.firstElementChild;
    // b.style.background="red";

  //we can use for multiple as:
    const c = document.querySelectorAll("ul");
    c.forEach(c => {
        const d = c.firstElementChild;
        d.style.background = "yellow";
    });//arrow opertor

  //using nextElementSibling,same as previousElementSibling
  const e=document.getElementById("vege");
  const f=e.nextElementSibling;
  f.style.background="green";

// ------------------------------------------------------------------------------------------------------
//2.Append vs Appendchild

function Adddata(){
var rollno=document.sam.rollno.value;
var name=document.sam.name.value;
var tr1=document.createElement('tr');
var td1=tr1.appendChild(document.createElement('td'));
var td2=tr1.appendChild(document.createElement('td'));
td1.innerHTML=rollno;
td2.innerHTML=name;
document.getElementById("tbl").appendChild(tr1);

}