document.getElementById("btn").addEventListener("click", () => {
  console.log("clicked.");
  let firstNumber = document.getElementById("firstNumber").value;
  let secondNumber = document.getElementById("secondNumber").value;
  let calc = divid(firstNumber, secondNumber);
  let result = (document.getElementById("result").innerHTML = calc);
});
