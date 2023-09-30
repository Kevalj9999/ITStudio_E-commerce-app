const {ApolloServer , gql} = require("apollo-server");
exports.typeDefs=gql`
    type Query{
        hello: String
        products(filter: ProductsFilterInput): [Product!]!
        product(id: ID!): Product
        categories: [Category!]!
        category(id: ID!): Category
    }

    type Mutation{
        addCategory(input: AddCategoryInput!) : Category!
        addProduct(input: AddProductInput!) : Product!
        deleteCategory(id:ID!):Boolean!
        deleteProduct(name:String!):Boolean!
        updateCategory(id:ID!,input:UpdateCategoryInput!): Category!
    }

    type Product{
        name:String!
        description: String!
        quantity: Int!
        price: Float!
        onSale: Boolean!
        image: String!
        category: Category
    }

    type Category{
        id:ID!
        name:String!
        products:[Product!]!
    }

    input ProductsFilterInput{
    onSale: Boolean
    }

    input AddCategoryInput{
        name:String
    }

    input AddProductInput{
        name:String!
        description: String!
        quantity: Int!
        price: Float!
        onSale: Boolean!
        image: String!
        categoryID: ID!
    }

    input UpdateCategoryInput{
        name:String
    }
`