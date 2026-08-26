import queryResolvers from './queryResolver.js';
import mutationResolvers from './mutationResolver.js';

const resolvers = {
    Query: queryResolvers,
    Mutation: mutationResolvers
}

export default resolvers;