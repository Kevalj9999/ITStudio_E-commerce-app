exports.Query={
    hello: () => {
        return "World !!"
    },
    products:(parent,args,{db}) => {
        const filter=args.filter;
        const products=db.products;
        let filteredProducts=products;
        if(filter)
        {
            if(filter.onSale===true)
            {
                filteredProducts=filteredProducts.filter(product => {
                    return product.onSale
                });
            }
        }
        return filteredProducts
    },
    product: (parent,args,{db}) => {
        const products=db.products;
        const productID=args.id;
        const product=products.find(product => product.id===productID);
        if(!product)
        {
            return null
        }
        else
        {
            return product
        }
    },
    categories:(parent,args,{db}) => {
        console.log(db.products);
        console.log(db.categories);
        return db.categories
    }
}