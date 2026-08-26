const mutationTypeDefs = `#graphql
    type Mutation {
        addPost(title: String!, content: String!): post!
    }
`

export default mutationTypeDefs;