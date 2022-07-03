const encrypt = (message = "") => {
  return message;
}
const key1 = {
  'щ' : 'б',
  'ш' : 'в',
  'ч' : 'г',
  'ц' : 'д',
  'х' : 'ж',
  'ф' : 'з',
  'т' : 'к',
  'с' : 'л',
  'р' : 'м',
  'п' : 'н',
};
const decrypt = (message = "") => {
  return message;
}
const key2 = {
  'б' : 'щ',
  'в' : 'ш',
  'г' : 'ч',
  'д' : 'ц',
  'ж' : 'х',
  'з' : 'ф',
  'к' : 'т',
  'л' : 'с',
  'м' : 'р',
  'н' : 'п',  
}
module.exports = { encrypt, decrypt }