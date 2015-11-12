import qajax from 'qajax';


export function getAllProfils() {
  return qajax.getJSON('/api/profils');
}
