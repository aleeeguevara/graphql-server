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

const user = async ({ userId }, __, { getUsers }) => {
  console.log(userId);
  const user = await getUsers('/' + userId);
  return user.json();
};

export const postResolvers = {
  Query: { post, posts },
  Post: { user }, //resolvers para algum campo da query..
};
