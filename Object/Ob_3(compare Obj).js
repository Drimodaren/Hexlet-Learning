// Реализуйте и экспортируйте по умолчанию функцию, которая сравнивает объекты по совпадению данных,
// а не по ссылкам. Эта функция принимает на вход две компании и возвращает true,
// если их структура одинаковая, и false в обратном случае. Проверка должна проходить по свойствам name,
// state, website.

// const company1 = { name: 'Hexlet', state: 'published', website: 'https://hexlet.io' };
// const company2 = { name: 'Hexlet', state: 'published', website: 'https://hexlet.io' };
// is(company1, company2); // true

const compare = (company1, company2) => {
  if (
    company1.name === company2.name &&
    company1.state === company2.state &&
    company1.website === company2.website
  ) {
    return true;
  } else {
    return false;
  }
};

console.log(
  compare(
    { name: 'Hexlet', state: 'published', website: 'https://hexlet.io' },
    { name: 'Hexlet', state: 'published', website: 'https://hexlet.io' }
  )
); // true
