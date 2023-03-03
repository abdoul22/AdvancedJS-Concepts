document.getElementById("btn").addEventListener("click", () => {
  console.log("clicked.");
  let firstNumber = document.getElementById("firstNumber").value;
  let secondNumber = document.getElementById("secondNumber").value;
  
  try{
      let calc = divid(firstNumber, secondNumber); 
     document.getElementById("result").innerHTML = calc;
}catch(error){
    console.log(error)
     document.getElementById('result').innerHTML = error
}
});
