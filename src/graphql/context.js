import fetch from 'node-fetch';
import { makePostDataLoader } from './post/dataloaders';
import { getPosts } from './post/utils';
import { makeUserDataLoader } from './user/dataloaders';
import { getUsers } from './user/utils';

const _getUsers = getUsers(fetch);
const _getPosts = getPosts(fetch);
//função de contexto executada a cada requisição

export const context = () => {
  return {
    postDataLoader: makePostDataLoader(_getPosts),
    userDataLoader: makeUserDataLoader(_getUsers),
    getUsers: _getUsers,
    getPosts: _getPosts,
  };
};
