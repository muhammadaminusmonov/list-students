const masala1 = (word) => {
  i = 0;
  for (const index of word) {
    i++;
  }
  console.log(i);
};
// masala1("Najot talim");

const masala2 = (n) => {
  n = 2000;
  let res = Math.trunc(n / 5 / 5);
  console.log(res);
};
// masala2(2000);

const masala3 = (find) => {
  let a = "";
  let hiddenWord = find.split(/[A-Z]/);

  for (const iterator of hiddenWord) {
    a += iterator;
  }
  console.log(a);
};
// masala3("WSDVnSCSaVBMjoCtYSCVABCVDSKS");

const masala4 = (number1, number2, number3) => {
  console.log(number1 % 2 === 0 || number1 % 2 === 1 ? true : false);
  console.log(number2 % 2 === 0 || number2 % 2 === 1 ? true : false);
  console.log(number3 % 2 === 0 || number3 % 2 === 1 ? true : false);
};
// masala4(45.7, 34, 64.13);

const masala5 = (value1, value2, value3) => {
  console.log(Math.max(value1, value2, value3));
};
masala5(23, 43, 12);
