let fractionOne;
let fractionTwo;
document.querySelector(".btn").addEventListener("click", function () {
  fractionOne = document.querySelector(".input--0").value;
  fractionTwo = document.querySelector(".input--1").value;
  let f1 =
    (100 / Number(fractionOne.charAt(2))) * Number(fractionOne.charAt(0));
  let f2 =
    (100 / Number(fractionTwo.charAt(2))) * Number(fractionTwo.charAt(0));
  function c() {
    console.log(`${f1}, ${f2}, ${f1 - f2}%, ${f2 - f1}%`);
  }
  if (f1 > f2) {
    document.querySelector(
      ".text"
    ).textContent = `${fractionOne} is larger than ${fractionTwo}.`;
  } else if (f1 < f2) {
    document.querySelector(
      ".text"
    ).textContent = `${fractionTwo} is larger than ${fractionOne}.`;
  } else if ((f1 = f2)) {
    document.querySelector(
      ".text"
    ).textContent = `${fractionOne} is equal to ${fractionTwo}.`;
  }
});
