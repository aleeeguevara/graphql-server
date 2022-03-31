const users = async (_, { input }, { getUsers }) => {
  const searchParams = new URLSearchParams(input);
  const users = await getUsers('/?' + searchParams);
  return users.json();
};

const user = async (_, { id }, { getUsers }) => {
  const response = await getUsers('/' + id);
  const user = await response.json();
  return user;
};

export const userResolvers = {
  Query: {
    user,
    users,
  },
};
