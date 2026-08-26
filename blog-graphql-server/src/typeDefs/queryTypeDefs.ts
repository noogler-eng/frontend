const queryTypeDefs = `#graphql
  type HealthCheckResponse {
    status: String!
    message: String!
  }

  type post {
    id: ID!
    title: String!
    content: String!
    comments: [comment!]!
  }

  type comment {
    id: ID!
    content: String!
  }

  type Query {
    healthCheck: HealthCheckResponse
    posts: [post!]!
    post(id: ID!): post
    comments(postId: ID!): [comment!]!
  } 
`;

export default queryTypeDefs;