import {createAll, cleanConsole} from './data';
const companies = createAll();

cleanConsole(1, companies);
console.log('---- EXAMPLE 1 --- ', validate(companies));
export function validate(params) {
  const data = [];
  params.map((e, i) => {
    const users = e.users;
    const usersCompany = [];
    users.map((user) => {
      const dataUser = {
        firstName: orderName(user.firstName),
        lastName: orderName(user.lastName),
        age: user.age,
        car: user.car,
        id: user.id,
      };
      usersCompany.push(dataUser);
    });
    usersCompany.sort(function(a, b) {
      if (a.firstName > b.firstName) {
        return 1;
      }
      if (a.firstName < b.firstName) {
        return -1;
      }
      return 0;
    });
    const company = {
      name: orderName(e.name),
      users: usersCompany,
      isOpen: e.isOpen,
      usersLength: e.usersLength,
      id: e.id,
    };
    data.push(company);
  });
  data.sort(function(a, b) {
    return b.usersLength - a.usersLength;
  });
  return data;
}

export function orderName(params) {
  const name = params === undefined ? '' : params.charAt(0).toUpperCase() + params.substr(1).toLowerCase();
  return name;
}
// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Crear una función tomando la variable "companies" como parámetro y reemplazando
// todos los valores "undefined" en "usuarios" por un string vacío.
// El nombre de cada "company" debe tener una letra mayúscula al principio, así como
// el apellido y el nombre de cada "user".
// Las "companies" deben ordenarse por su total de "user" (orden decreciente)
// y los "users" de cada "company" deben aparecer en orden alfabético.

// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Create a function taking the variable "companies" as a parameter and replacing
// all values "undefined" in "users" by an empty string.
// The name of each "company" must have a capital letter at the beginning as well as
// the last name and first name of each "user".
// The "companies" must be sorted by their number of "user" (decreasing order)
// and the "users" of each "company" must be listed in alphabetical order.

// -----------------------------------------------------------------------------
// INSTRUCTIONS EN FRANÇAIS

// Créer une fonction prenant en paramètre la variable "companies" et remplaçant
// toutes les valeurs "undefined" dans les "users" par un string vide.
// Le nom de chaque "company" doit avoir une majuscule au début ainsi que
// le nom et le prénom de chaque "user".
// Les "companies" doivent être triées par leur nombre de "user" (ordre décroissant)
// et les "users" de chaque "company" doivent être classés par ordre alphabétique.
