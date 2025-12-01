let books=[];
function addbook(){
    let title=document.getElementById("title").value;
    let author=document.getElementById("author").value;
    let category=document.getElementById("category").value;
    if(title==="" || author==="" || category===""){
        alert("Please fill in all fields");
        return;
    }
let obj={
    title,
    author,
    category,
    image:"https://m.media-amazon.com/images/I/71ZB18P3inL._SY522_.jpg"
};
books.push(obj);
render(books);
 document.getElementById("title").value="";
    document.getElementById("author").value="";
    document.getElementById("category").value="";
}
function render(arr){
    let box=document.getElementById("cards");
    box.innerHTML="";
    arr.forEach((item,index) => {
    let card=document.createElement("div");
    card.className="card";
    card.innerHTML=`
    <img src=${item.image} width=150px>
    <p>Title : ${item.title}</p>
    <p>Author : ${item.author}</p>
    <p>Category : ${item.category}</p>
    <button onclick=deletebutton(${index}) class="danger">Delete </button>
  `
box.appendChild(card);
    });
}
function deletebutton(i){
   let confirmation=confirm("Are you really want to delete?");
  if(confirmation){
      books.splice(i,1);
    render(books);
  }
}
function sortAZ(){
books.sort((a,b)=>{
    return a.title.localeCompare(b.title);
}) 
render(books);   
}

function sortZA(){
books.sort((a,b)=>{
    return b.title.localeCompare(a.title);
}) 
render(books);   
}

function filtercategory(){
let cate=document.getElementById("filtercate").value;
let filcat=books.filter(book=>{
   return book.category===cate
});
render(filcat);
}

