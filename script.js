function clickButton() {
  let monthInput = parseInt(document.getElementById("monthInput").value);
  let resultOutput = document.getElementById("resultOutput");
  switch (monthInput) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      resultOutput.innerText = `Thang ${monthInput} co 31 ngay`;
      break;
    case 2:
      resultOutput.innerText = `Thang ${monthInput} co 28 hoac 29 ngay ngay`;
      break;
    case 6:
    case 9:
    case 11:
      resultOutput.innerText = `Thang ${monthInput} co 30 ngay`;
    default:
  }
}
