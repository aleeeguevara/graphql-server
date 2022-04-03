const post = async (_, { id }, { dataSources }) => {
  const post = await dataSources.postApi.getPost(id);
  return post;
};

const posts = async (_, { input }, { dataSources }) => {
  //parametros resolver (parent, params, context) parent só vai pros resolver de campo
  const posts = await dataSources.postApi.getPosts(input);
  return posts;
};

const user = async ({ userId }, _, { dataSources }) => {
  return await dataSources.userApi.batchLoaderByPostsUserId(userId);
};

export const postResolvers = {
  Query: { post, posts },
  Post: { user }, //resolvers para algum campo da query..
};
