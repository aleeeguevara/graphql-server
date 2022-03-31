const posts = async (_, { input }, { getPosts }) => {
  const searchParams = new URLSearchParams(input);
  const posts = await getPosts('/?' + searchParams);
  return posts.json();
};
const post = async (_, { id }, { getPosts }) => {
  const response = await getPosts('/' + id);
  const post = await response.json();

  if (Math.random() > 0.5) {
    return {
      statusCode: 500,
      message: 'Post timeout!',
      timeout: 123,
    };
  }

  if (typeof post.id === 'undefined') {
    return {
      statusCode: 404,
      message: 'Post not found',
      postId: id,
    };
  }
  return post;
};

export const postResolvers = {
  Query: { post, posts },
  Post: {
    unixTimestamp: ({ createdAt }) => {
      const timestamp = new Date(createdAt).getTime() / 1000; //milisegundos para segundos
      return Math.floor(timestamp);
    },
  },
  PostResult: {
    __resolveType: (obj) => {
      if (typeof obj.postId !== 'undefined') return 'PostNotFoundError';
      if (typeof obj.timeout !== 'undefined') return 'PostTimeoutError'; //resolvendo para o union
      if (typeof obj.id !== 'undefined') return 'Post';
      return null;
    },
  },
  PostError: {
    __resolveType: (obj) => {
      if (typeof obj.postId !== 'undefined') return 'PostNotFoundError'; //resolvendo para a interface
      if (typeof obj.timeout !== 'undefined') return 'PostTimeoutError';
    },
  },
};
