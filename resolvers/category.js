exports.Category= {
    products: function (parent, args, {db}) {
        const categories=db.categories;
        var categoryID = parent.id;
        return db.products.filter(function (product) { return product.CategoryID === categoryID; });
    }
}