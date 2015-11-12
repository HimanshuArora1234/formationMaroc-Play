import { Store } from 'fluxx';

import { types } from './actions';

export default Store(on => {
  let profils;

  on(types.INIT, data => {
    profils = data;
  });

  return {
    profils: () => profils
  };

});
