// Реализуйте и экспортируйте по умолчанию функцию,
// которая принимает на вход имя сайта и возвращает информацию о нем:
// import getDomainInfo from './domain.js';

// // Если домен передан без указания протокола,
// // то по умолчанию берется http
// getDomainInfo('yandex.ru')
// // {
// //   scheme: 'http',
// //   name: 'yandex.ru',
// // }

// getDomainInfo('https://hexlet.io');
// // {
// //   scheme: 'https',
// //   name: 'hexlet.io',
// // }

const getDomainInfo = (domainInfo) => {
  let scheme = '';
  if (domainInfo.startsWith('https')) {
    scheme = 'https';
  } else {
    scheme = 'http';
  }
  const parts = domainInfo.split('/');
  const name = parts[parts.length - 1];
  const info = { scheme: scheme, name: name };

  return info;
};

console.log(getDomainInfo('https://hexlet.io'));
