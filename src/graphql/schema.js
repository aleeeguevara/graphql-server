import { gql } from 'apollo-server';
import { postTypeDefs } from './post/typedefs';
import { postResolvers } from './post/resolvers';
import { userResolvers } from './user/resolvers';
import { userTypeDefs } from './user/typedefs';
import { apiFiltersTypeDefs } from './api-filters/typedefs';
import { apiFiltersResolvers } from './api-filters/resolvers';

const rootTypeDefs = gql`
  type Query {
    _root: Boolean
  }
`;

const rootResolvers = {
  Query: {
    _root: () => true,
  },
};

export const typeDefs = [
  rootTypeDefs,
  userTypeDefs,
  postTypeDefs,
  apiFiltersTypeDefs,
];
export const resolvers = [
  rootResolvers,
  userResolvers,
  postResolvers,
  apiFiltersResolvers,
];
