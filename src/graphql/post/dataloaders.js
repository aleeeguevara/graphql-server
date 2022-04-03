import DataLoader from 'dataloader';

export const makePostDataLoader = (getPosts) => {
  return new DataLoader(async (ids) => {
    const urlQuery = ids.join('&userId=');
    const response = await getPosts('?userId=' + urlQuery);
    const posts = await response.json();
    const sortPosts = ids.map((id) =>
      posts.filter((post) => post.userId === id),
    );
    return sortPosts;
  });
};
