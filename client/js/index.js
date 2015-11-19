import { State } from 'abyssa';
import { babelpolyfill } from 'babel-polyfill';
import router from './router';
import profils from './profils';


router
  .addState('profils', State('profils', profils))
  .init('profils');
