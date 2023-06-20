
let products = [];

exports.getApiData = async (req,resUser) => {
    try {
 
         const res = await fetch("https://api.escuelajs.co/api/v1/products");
 
         products = await res.json();
        
        }
        catch{

        }
    }


exports.get = () => { return products }

exports.find = (id) => { 
    
    return products.find( p => p.id==id );

 }

 exports.create = (p) => { 
    
    products.push(p);

    return p;

 }

 exports.update = (id , p) => { 
   let i = products.findIndex( p => p.id==id );

    products[i] = p;

    return products[i];

 }

 exports.delete = (id) => { 
    let i = products.findIndex( p => p.id==id );
 
    products.splice(i);

    return "product deleted";
 
  }

