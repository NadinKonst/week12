const txt = document.querySelector(".text");
const myTxt = txt.innerText;

console.log(`1. Количество символов в тексте: ${myTxt.length}`);

const result = myTxt.replace(/;/g, "\n");
console.log(`2. Текст с переносами строк: \n ${result}`);

const substring = result.replace(/s/g, "");
console.log(`3. Текст с удалёнными пробелами: \n ${substring}`);

const newText = result.substring(28, 50);
console.log(`4. Извлечение подстроки: ${newText}`);

const replacedText = newText.replace(/клён/g, "дубе");
console.log(`5. Замена "клён" на "дубе": ${replacedText}`);

const replacedText2 = result.toUpperCase();
console.log(`6. Строка result в верхнем регистре: \n ${replacedText2}`);

const replacedText3 = result.replace(/клён/gi, "дуб");
console.log(
  `7. Замена "клён" на "дуб" (все вхождения) в переменной result: \n ${replacedText3}`
);
const index = result.indexOf("моря");
console.log(`8. Индекс первого вхождения "моря": ${index}`);

const modifiedText = replacedText[0].toUpperCase() + replacedText.slice(1);
console.log(`9. Строка с измененной первой буквой: ${modifiedText}`);
