
let products = [];
let categories = [];

exports.getApiData = async (req,resUser) => {
    try {
 
         const res = await fetch("https://api.escuelajs.co/api/v1/products");
 
         products = await res.json();

         const res2 = await fetch("https://api.escuelajs.co/api/v1/categories");
 
         categories = await res2.json();
        
        }
        catch{

        }
    }


exports.get = () => { return products }

exports.find = (id) => { 
    
    return products.find( p => p.id==id );

 }

 exports.create = (p) => {

    let productSchema = {
        "id": new Date().valueOf(),
        "title": "",
        "price": 100,
        "description": "",
        "images": [],
        "creationAt": new Date(),
        "updatedAt": new Date(),
        "category": {}
      }

    Object.keys(productSchema).forEach( k => {productSchema[k] = p[k] || productSchema[k]} );
    
    productSchema.category = categories.find( c => c.id === p.categoryId )

    products.push(productSchema);

    return productSchema;

 }

 exports.update = (id , p) => { 

    let i = products.findIndex( p => p.id==id );

    if (i === -1){return "There is no product with this id";}
    else{
        Object.keys(products[i]).forEach( k => {products[i][k] = p[k] || products[i][k]} );

        products[i].updatedAt = new Date();

        return products[i];
        }
 }

 exports.delete = (id) => { 
    let i = products.findIndex( p => p.id==id );
 
    products.splice(i);

    return "product deleted";
 
  }

