const data = [
  { name: "Laptop", price: 1000 },
  { name: "Mouse", price: 20 },
];
processProducts(data);
function processProducts(product){
    const name=product.map(p=>p.name);
    product.forEach(p => {
        if(p.price>50){
            console.log(p.name+" is above 50")
        }
        else{
          console.log(p.name+" is less 50")  
        }
    });
}
