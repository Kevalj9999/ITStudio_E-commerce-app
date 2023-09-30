var _a = require("apollo-server"), ApolloServer = _a.ApolloServer, gql = _a.gql;
var typeDefs = require("./schema").typeDefs;
var db = require("./db").db;
var Query = require("./resolvers/query").Query;
var Mutation = require("./resolvers/mutation").Mutation;
var Product = require("./resolvers/product").Product;
var Category = require("./resolvers/category").Category;
var server = new ApolloServer({ typeDefs: typeDefs, resolvers: {
        Query: Query,
        Product: Product,
        Category: Category,
        Mutation: Mutation
    },
    context: {
        db: db
    }
});
server.listen().then(function (_a) {
    var url = _a.url;
    console.log("Server is ready at:" + url);
});
