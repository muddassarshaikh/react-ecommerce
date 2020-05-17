import { types } from './shop.types';

export const updateCollection = (collectionsMap) => {
  return {
    type: types.UPDATE_COLLECTIONS,
    payload: collectionsMap
  };
};
