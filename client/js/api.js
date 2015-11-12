import qajax from 'qajax';


export function getAllProfils() {
  return qajax.getJSON('/api/profils');
}

export function updateProfil(profil) {
  return qajax({
    method: 'PUT',
    url: '/api/profil',
    data: profil
  })
  .then(qajax.filterSuccess)
  .then(qajax.toJSON);
}
