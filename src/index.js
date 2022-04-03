import { ApolloServer } from 'apollo-server';
import { typeDefs, resolvers } from './graphql/schema';
import { context } from './graphql/context';
import { PostsApi } from './graphql/post/datasources';
import { UserApi } from './graphql/user/datasources';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context,
  dataSources: () => {
    //retorna obj com coisas atreladas ao contexto
    //assim como o contexto, é executado para cada uma das requisições
    return {
      postApi: new PostsApi(),
      userApi: new UserApi(),
    };
  },
});

server.listen(4003).then(({ url }) => {
  console.log(`Server listening on url ${url}`);
});
