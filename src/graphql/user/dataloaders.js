import DataLoader from 'dataloader';
//dentro dataloader funcão cb retorna um batching de ids, chamando todos os ids de uma vez, e caching salvando os dados
export const makeUserDataLoader = (getUsers) => {
  return new DataLoader(async (ids) => {
    const urlQuery = ids.join('&id=');
    const users = await getUsers('?id=' + urlQuery);
    return ids.map((id) => users.find((user) => user.id === id));
  });
};
