import { Action } from 'fluxx';

import {getAllProfils} from './api';

export var types = Action.create(
  'INIT'
);

export function init() {
  return getAllProfils().then(profils => types.INIT(profils));
}
