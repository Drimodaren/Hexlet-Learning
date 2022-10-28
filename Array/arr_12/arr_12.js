/*
Реализуйте функцию buildDefinitionList(), которая генерирует HTML список определений (теги <dl>, <dt> и <dd>) и возвращает получившуюся строку. 
При отсутствии элементов в массиве функция возвращает пустую строку. Экспортируйте функцию по умолчанию.
Параметры функции
Список определений следующего формата:

 const definitions = [
  ['definition1', 'description1'],
  ['definition2', 'description2']
];
То есть каждый элемент входного списка сам является массивом, содержащим два элемента: термин и его определение.

Пример использования
const definitions = [
  ['Блямба', 'Выпуклость, утолщения на поверхности чего-либо'],
  ['Бобр', 'Животное из отряда грызунов'],
];
 
buildDefinitionList(definitions);
// '<dl><dt>Блямба</dt><dd>Выпуклость, утолщение на поверхности чего-либо</dd><dt>Бобр</dt><dd>Животное из отряда грызунов</dd></dl>';
Подсказки
Описания тэгов: dl, dt, dd
*/
/**
 *
 * @param {Array<any>} arr
 * @returns {string}
 */

const buildDefinitionList = (arr) => {
  let arrResult = [];
  let result = "";
  if (arr.length === 0) {
    return "";
  }
  for (const item of arr) {
    arrResult.push(`<dt>${item[0]}</dt><dd>${item[1]}</dd>`);
  }
  const innerValue = arrResult.join("");
  result = `<dl>${innerValue}</dl>`;

  return result;
};

console.log(
  buildDefinitionList([
    ["Блямба", "Выпуклость, утолщения на поверхности чего-либо"],
    ["Бобр", "Животное из отряда грызунов"],
  ])
);
// '<dl><dt>Блямба</dt><dd>Выпуклость, утолщение на поверхности чего-либо</dd><dt>Бобр</dt><dd>Животное из отряда грызунов</dd></dl>';


/*const buildDefinitionList = (coll) => {
  if (coll.length > 0) {
    const parts = [];
    for (let i = 0; i < coll.length - 1; i += 1) {
      parts.push(`<dt>${coll[0][0]}</dt>`);
      for (let i = 0; i < coll.length - 1; i += 1) {
        parts.push(`<dd>${coll[0][1]}</dd>`);
      }
    }
    for (let i = 0; i < coll.length - 1; i += 1) {
      parts.push(`<dt>${coll[1][0]}</dt>`);
      for (let i = 0; i < coll.length - 1; i += 1) {
        parts.push(`<dd>${coll[1][1]}</dd>`);
      }
    }
    const innerValue = parts.join('');
    const result = `<dl>${innerValue}</dl>`;
    return result;
  }
  else {
    return ''
  }
}*/