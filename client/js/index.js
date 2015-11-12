import { State } from 'abyssa';
import router from './router';

import profils from './profils';


router
  .addState('profils', State('profils', profils))
  .init('profils');
