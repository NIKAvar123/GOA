function saveInputs() {
  const val1 = document.getElementById('input1').value;
  const val2 = document.getElementById('input2').value;
  const val3 = document.getElementById('input3').value;

  // შენახვა localStorage-ში
  localStorage.setItem('input1', val1);
  localStorage.setItem('input2', val2);
  localStorage.setItem('input3', val3);

  // წაღება და კონსოლში გამოტანა
  const data1 = localStorage.getItem('input1');
  const data2 = localStorage.getItem('input2');
  const data3 = localStorage.getItem('input3');

  console.log('Input1:', data1);
  console.log('Input2:', data2);
  console.log('Input3:', data3);
}
