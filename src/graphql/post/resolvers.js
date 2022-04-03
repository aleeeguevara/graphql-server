const post = async (_, { id }, { getPosts }) => {
  const response = await getPosts('/' + id);
  const post = await response.json();
  return post;
};

const posts = async (_, { input }, { getPosts }) => {
  //parametros resolver (parent, params, context) parent só vai pros resolver de campo
  const searchParams = new URLSearchParams(input);
  const posts = await getPosts('/?' + searchParams);
  return posts.json();
};

const user = async ({ userId }, _, { userDataLoader }) => {
  return userDataLoader.load(userId);
};

export const postResolvers = {
  Query: { post, posts },
  Post: { user }, //resolvers para algum campo da query..
};
