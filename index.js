//7-masala
//let a = [1, 2, 3, 4, 5, 6];
//let b = a.filter(e => e % 2 === 0);
//let c = a.filter(e => e % 2 !== 0);
//console.log("Juftlar:", b);
//console.log("Toqlar:", c);
//8-masala
//let a = [1, 2, 2, 3, 4, 4, 5];
//let b = a.filter((e, i) => a.indexOf(e) === i); 
//console.log(b);
//9-masala
//let a = [
//  {id: 1, nom: "Noutbuk", narx: 5000, reyting: 4.2, chegirma: 10},
//  {id: 2, nom: "Telefon", narx: 3000, reyting: 4.7, chegirma: 15},
//  {id: 3, nom: "Monitor", narx: 4000, reyting: 4.1, chegirma: 20}
//];
//let b = a.sort((x, y) => x.narx - y.narx);
//console.log(b);
//10-masala
//let a = [
//  {id: 1, nom: "Noutbuk", narx: 5000, reyting: 4.2, chegirma: 10},
//  {id: 2, nom: "Telefon", narx: 3000, reyting: 4.7, chegirma: 15},
//  {id: 3, nom: "Monitor", narx: 4000, reyting: 4.1, chegirma: 20}
//];
//let b = a.sort((x, y) => y.reyting - x.reyting)[0];
//console.log("Eng kuchli mahsulot:", b);
//11-masala
//let a = [
//  {id: 1, nom: "Noutbuk", narx: 5000, reyting: 4.2, chegirma: 10},
//  {id: 2, nom: "Telefon", narx: 3000, reyting: 4.7, chegirma: 15},
//  {id: 3, nom: "Monitor", narx: 4000, reyting: 4.1, chegirma: 20}
//];
//let b = a.sort((x, y) => x.narx - y.narx)[0];
//console.log("Eng arzon mahsulot:", b);
//12-masala
//let a = [
//  {id: 1, nom: "Noutbuk", narx: 5000, reyting: 4.2, chegirma: 10},
//  {id: 2, nom: "Telefon", narx: 3000, reyting: 4.7, chegirma: 15},
//  {id: 3, nom: "Monitor", narx: 4000, reyting: 4.1, chegirma: 20}
//];
//let b = a.reduce((sum, x) => sum + x.narx, 0);
//console.log("Barcha mahsulotlar narxi yig‘indisi:", b);
//13-masala
//let a = [
//  {id: 1, nom: "Noutbuk", narx: 5000, reyting: 4.2, chegirma: 10},
//  {id: 2, nom: "Telefon", narx: 3000, reyting: 4.7, chegirma: 15},
//  {id: 3, nom: "Monitor", narx: 4000, reyting: 4.1, chegirma: 20}
//];
//let b = a.map(x => x.nom); 
//console.log(b);
//14-masala
//let a = [
//  {id: 1, nom: "Noutbuk", narx: 5000, reyting: 4.2, chegirma: 10},
//  {id: 5, nom: "Telefon", narx: 3000, reyting: 4.7, chegirma: 15},
//  {id: 3, nom: "Monitor", narx: 4000, reyting: 4.1, chegirma: 20}
//];
//let b = a.find(x => x.id === 5);
//console.log(b.nom);
//15-masala
//let a = [
//  {id: 1, nom: "Noutbuk", narx: 5000, reyting: 4.2, chegirma: 10},
//  {id: 4, nom: "Televizor", narx: 8000, reyting: 4.5, chegirma: 25},
//  {id: 3, nom: "Monitor", narx: 4000, reyting: 4.1, chegirma: 20}
//];
//let b = a.filter(x => x.id !== 4); 
//console.log(b);
//17-masala
//let a = [false, 1, 10, "", null, "abdulaziz", 1.13, 0];
//let b = {
//  truthy: a.filter(x => x),
//  falsy: a.filter(x => !x)
//};
//console.log(b);
//18-masala
//let a = "Men Mahmudhon Programmerman"
//let b = a.split(' ').map(x => x.length);
//console.log(b);
//19-masala
//let a = "Men Mahmudhon Programmerman"
//let b = a.split('').some(x => x === ' ');
//console.log(b);
//20-masala
//let a = {a: 2, b: 5, c: 7};
//let b = Object.entries(a).map(([k, v]) => k + v);
//console.log(b);
//21-masala
//function raqamlarYigindisi(n) {
//  if (n === 0) return 0;
//  return n % 10 + raqamlarYigindisi(Math.floor(n / 10));
//}
//let a = 1234;
//console.log(raqamlarYigindisi(a)); 
//22-masala
//let oquvchilar = [
//  {ism: "Elbek", protsent: 95},
//  {ism: "Zafar", protsent: 78},
//  {ism: "Aziz", protsent: 83},
//  {ism: "Jasur", protsent: 88},
//  {ism: "Bobur", protsent: 66},
//  {ism: "Kamron", protsent: 75}
//];
//let o = oquvchilar.reduce((jami, oquvchi) => jami + oquvchi.protsent, 0) / oquvchilar.length;
//console.log("O'rtacha protsent:", o);
//23-masala
//let a = oquvchilar.map(oquvchi => {
//  let baho;
//  if (oquvchi.protsent >= 90) baho = 5;
//  else if (oquvchi.protsent >= 80) baho = 4;
//  else if (oquvchi.protsent >= 70) baho = 3;
//  else baho = 2;
//  return {...oquvchi, baho: baho};
//});
//console.log(a);
//24-masala
//let a = oquvchilar.map(oquvchi => ({
//  ...oquvchi,
//  isPassed: oquvchi.protsent >= 70
//}));
//console.log(a);
//25-masala
//let natija = oquvchilar.reduce((hisob, oquvchi) => {
//  if (oquvchi.protsent >= 70) hisob.otdi++;
//  else hisob.otolmadi++;
//  return hisob;
//}, {otdi: 0, otolmadi: 0});
//console.log("O'tganlar:", natija.otdi, "O'tolmaganlar:", natija.otolmadi);