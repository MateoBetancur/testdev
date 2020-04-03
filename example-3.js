import {cleanConsole, createAll} from './data';
import {validate} from './example-1';

const companies = createAll();

cleanConsole(3, companies);
console.log('---- EXAMPLE 3 --- ', validateCompany(companies));
function order(company) {
  company.sort(function(a, b) {
    return b.usersLength - a.usersLength;
  });
  for (let i = 0; i < company.length; i++) {
    company[i].users.sort(function(a, b) {
      return a.id - b.id;
    });
  }
  return company;
}
function validateCompany(par) {
  let date = validate(par);
  par = order(par);
  date = order(date);
  console.log(par, 'Par');
  console.log(date, 'Date');
  const companies = [];
  let valid = false;
  let validName = false;
  for (let l = 0; l < par.length; l++) {
    const users = [];
    if (par[l].name == date[l].name) {
      valid = true;
    };
    for (let i = 0; i < par[l].users.length; i++) {
      const user = {
        firstName: par[l].users[i].firstName,
        lastName: par[l].users[i].lastName,
      };
      if (par[l].users[i].firstName==date[l].users[i].firstName&&par[l].users[i].lastName==date[l].users[i].lastName) {
        validName = true;
      };
      user['validName'] = validName;
      users.push(user);
      validName = false;
    }
    const data = {
      name: par[l].name,
      users,
      valid,
    };
    companies.push(data);
    valid = false;
  }
  return companies;
}
// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Cree una función tomando la variable "companies" como parámetro y devolviendo
// un booleano que valida que todos los nombres de las empresas y los atributos
// "firstName" y "lastName" de "users" están en mayúsculas.
// Debes probar la operación de esta función importando la función creada
// en el "example-1.js".

// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Create a function taking the "companies" variable as a parameter and returning
// a boolean validating that all the names of the companies and the attributes "firstName"
// and "lastName" of "users" are capitalized. You must test the operation
// of this function by importing the function created for "example-1.js".

// -----------------------------------------------------------------------------
// INSTRUCTIONS EN FRANÇAIS

// Créer une fonction prenant en paramètre la variable "companies" et renvoyant
// un booléen validant que tous les noms des "company" et les attributs "firstName"
// et "lastName" des "users" sont en majuscules. Vous devez tester le fonctionnement
// de cette fonction en important la fonction créée pour "example-1.js".
