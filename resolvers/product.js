exports.Product= {
    category: function (parent, args, {db}) {
        const products=db.products;
        var categoryID = parent.CategoryID;
        return db.categories.find(function (category) { return category.id === categoryID; });
    }
}