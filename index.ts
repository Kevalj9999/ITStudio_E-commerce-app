const {ApolloServer , gql} = require("apollo-server");
const {typeDefs}=require("./schema");
const {db}=require("./db");
const {Query}=require("./resolvers/query");
const {Mutation}=require("./resolvers/mutation");
const {Product}=require("./resolvers/product");
const {Category}=require("./resolvers/category");

const server= new ApolloServer({typeDefs,
    resolvers:{
    Query,
    Product,
    Category,
    Mutation
},
    context:{
        db
    }
});

server.listen().then(({url}) => {
    console.log("Server is ready at:"+url);
})
