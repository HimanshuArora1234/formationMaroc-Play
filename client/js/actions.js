import { Action } from 'fluxx';

import {getAllProfils, updateProfil} from './api';

export var types = Action.create(
  'INIT',
  'UPDATE_PROFILS'
);

export function init() {
  return getAllProfils().then(profils => types.INIT(profils));
}

export function profilStatusToggle(profil) {
  updateProfil(profil).then(() => getAllProfils().then(profils => types.UPDATE_PROFILS(profils)));
}
