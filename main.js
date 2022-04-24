// Bài 1
const form1 = document.getElementById("bai1");
const day1 = document.getElementById("day1");
const month1 = document.getElementById("month1");
const year1 = document.getElementById("year1");
const ketqua1_1 = document.getElementById("ketqua1_1");
const ketqua1_2 = document.getElementById("ketqua1_2");

form1.addEventListener("submit", function (e) {
  console.log("def");
  e.preventDefault();
  ketqua1_1.innerText = `${parseInt(day1.value) + 1} / ${month1.value} / ${
    year1.value
  }`;
  ketqua1_2.innerText = `${day1.value - 1} / ${month1.value} / ${year1.value}`;
});

// Bài 2
const form2 = document.getElementById("bai2");
const day2 = document.getElementById("day2");
const month2 = document.getElementById("month2");
const year2 = document.getElementById("year2");
const ketqua2 = document.getElementById("ketqua2");
const btn2 = document.getElementById("btn_b2");

form2.addEventListener("submit", function (e) {
  e.preventDefault();
  switch (parseInt(month2.value)) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      ketqua2.innerText = "Tháng có 30 ngày";
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      ketqua2.innerText = "Tháng có 31 ngày";
      break;
    case 2:
      if (year2.value % 4 == 0) {
        ketqua2.innerText = "Tháng có 29 ngày vì là năm nhuận ";
      } else {
        console.log("áhdahfaf1312312");

        ketqua2.innerText = "tháng có 28 ngày";
      }
      break;
    default:
      break;
  }
});

// Bài 3
const form3 = document.getElementById("bai3");
let number1 = document.getElementById("number1");
const ketqua3 = document.getElementById("ketqua3");


form3.addEventListener("submit", function (e) {
  e.preventDefault();
  let soDonVi = number1.value % 10;
  let soHangChuc = (number1.value / 10) % 10;
  let soHangTram = number1.value / 10 / 10;
  let cachDoc = "";

  switch (parseInt(soHangTram.toString().slice(0, 1))) {
    case 1:
      cachDoc += "Một trăm ";
      break;
    case 2:
      cachDoc += "Hai trăm ";
      break;
    case 3:
      cachDoc += "Ba trăm ";
      break;
    case 4:
      cachDoc += "Bốn trăm ";
      break;
    case 5:
      cachDoc += "Năm trăm ";
      break;
    case 6:
      cachDoc += "Sáu trăm ";
      break;
    case 7:
      cachDoc += "Bảy trăm ";
      break;
    case 8:
      cachDoc += "Tám trăm ";
      break;
    case 9:
      cachDoc += "Chín trăm ";
      break;
    default:
      break;
  }
  switch (parseInt(soHangChuc.toString().slice(0, 1))) {
    case 1:
      cachDoc += "Một mươi ";
      break;
    case 2:
      cachDoc += "Hai mươi ";
      break;
    case 3:
      cachDoc += "Ba mươi ";
      break;
    case 4:
      cachDoc += "Bốn mươi ";
      break;
    case 5:
      cachDoc += "Năm mươi ";
      break;
    case 6:
      cachDoc += "Sáu mươi ";
      break;
    case 7:
      cachDoc += "Bảy mươi ";
      break;
    case 8:
      cachDoc += "Tám mươi ";
      break;
    case 9:
      cachDoc += "Chín mươi ";
      break;
    default:
      break;
  }
  switch (soDonVi) {
    case 1:
      cachDoc += "Mốt ";
      break;
    case 2:
      cachDoc += "Hai ";
      break;
    case 3:
      cachDoc += "Ba ";
      break;
    case 4:
      cachDoc += "Bốn ";
      break;
    case 5:
      cachDoc += "Năm ";
      break;
    case 6:
      cachDoc += "Sáu ";
      break;
    case 7:
      cachDoc += "Bảy ";
      break;
    case 8:
      cachDoc += "Tám ";
      break;
    case 9:
      cachDoc += "Chín ";
      break;
    default:
      break;
  }

  ketqua3.innerText = `${cachDoc}`;
});


// Bài 4
const form4 = document.getElementById("bai4");
var data = [
    {
        name: document.getElementById("sv1"),
        khoangCach: document.getElementById("sv1_d")
    },
    {
        name: document.getElementById("sv2"),
        khoangCach: document.getElementById("sv2_d")
    },
    {
        name: document.getElementById("sv3"),
        khoangCach: document.getElementById("sv3_d")
    }
];
const ketqua4 = document.getElementById("ketqua4");
let result = "";
let flag = 0;
form4.addEventListener("submit", function(e){
    e.preventDefault();
    data.forEach((item) => {
        if(item.khoangCach.value > flag){
            flag = item.khoangCach.value;
            result = item.name.value;
        }
    });
    ketqua4.innerText = `${result}`;
})
