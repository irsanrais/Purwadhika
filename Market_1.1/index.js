// input var apel, anggur dan jeruk
var apple, grape, orange;

var priceApple = 10000;
var priceGrape = 15000;
var priceOrange = 20000;

// inputan dari pengguna
apple = prompt("masukkan qty Apel");
grape = prompt("masukkan qty Grape");
orange = prompt("masukkan qty Orange");

var totalApple = apple * priceApple;
var totalGrape = grape * priceGrape;
var totalOrange = orange * priceOrange;
var totalAll = totalApple + totalGrape + totalOrange;

alert(`
     detail belanja buah - buahan
     apel : ${apple} x ${priceApple} = ${totalApple}
     anggur : ${grape} x ${priceGrape} = ${totalGrape}
     orange : ${orange} x ${priceOrange} = ${totalOrange}

     jumlah keseluruhan = ${totalAll}
`);
