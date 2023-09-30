const {v4:uuid}=require("uuid");

exports.Mutation = {
    addCategory: (parent,{input},{db}) => {
        const {name}=input;
        const newCategory={
            id:uuid(),
            name:input.name,
        }
        db.categories.push(newCategory);
        return newCategory
    },
    addProduct: (parent,{input},{db}) => {
        const {name,description,quantity,price,onSale,image,CategoryID}=input;
        const newProduct={
            name,description,quantity,price,onSale,image,CategoryID
        }
        db.products.push(newProduct);
        return newProduct
    },
    deleteCategory:(parent,{id},{db}) =>{
        db.categories=db.categories.filter((category) => category.id!=id);
        db.products=db.products.map((product) => {
            if(product.CategoryID===id)
            {
                return{
                    ...product,
                    categoryID:null
                }
            }
            else
            {
                return product
            }
        })
        return true
    },
    deleteProduct:(parent,{name},{db})=>{
        db.products=db.products.filter((product) => product.name!==name);
        return true
    },
    updateCategory:(parent,{id,input},{db}) => {
        const index=db.categories.findIndex(category => category.id=id);
        db.categories[index]={
            ...db.categories[index],
            ...input
        }
        return db.categories[index]
    }
}; 