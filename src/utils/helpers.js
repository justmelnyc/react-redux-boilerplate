import faker from 'faker';

export function generateFakeList(quantity) {
  const list = [];
  for (let i = 1; i < quantity + 1; i += 1) {
    list.push({
      id: i.toString(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName()
    });
  }
  return list;
}

let id = 0;

export function genaratorId() {
  id += 1;
  return id.toString();
}

export function generateFakeEmployees(quantity) {
  const employees = [];
  for (let i = 1; i < quantity + 1; i += 1) {
    employees.push({
      id: genaratorId(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName()
    });
  }
  return employees;
}

export function generateFakeCompanies(quantity) {
  const companies = [];
  for (let i = 1; i < quantity + 1; i += 1) {
    companies.push({
      id: i.toString(),
      companyName: faker.company.companyName(),
      employees: generateFakeEmployees(6)
    });
  }
  return companies;
}