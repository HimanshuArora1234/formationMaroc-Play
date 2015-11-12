import React from 'react';
import ReactDOM from 'react-dom';
import { Store } from 'fluxx';
import { init } from './actions';
import ProfilList from './ProfilList';

let unregister;
import store from './store';

export default {
  enter() {
    unregister = Store.onChange(store)(() => {
      ReactDOM.render(<ProfilList profils={store.profils()} />, document.getElementById('viewContainer'));
    });
    init();
  },

  exit() {
    unregister();
  }
};
