// const vardas = 'Sigita Bernotiene';
// const raidziuSkaicius = vardas.length;
// const fullName = vardas.split(' ');
// console.log(fullName);
// const vardasMazosiomis = vardas.toLowerCase();
// const vardasDidziosiomis = vardas.toUpperCase();
// const apkeistaRaide = vardas.replace('i', 'I')
// console.log(apkeistaRaide);

const transliacija = `
 32   36   44 16  22      18     8   30   12      86   44
  54   10  64       6         60    84         2       98
40 20     32  44   10        4   172       4   108
     12 120 168    0 10   24        4 196     44   9 188 4
 7 16    18  22    8    11 9   4 15 6 43 22
27 5       32              3 30 42 1       49 20

10     16    22      5  2 86
2 54    6    60 84  0   5    12      2  98 22 40     74 4
`;

const transliacijaBeNewLine = transliacija.replaceAll('\n', ' ');
const masyvasSuTarpais = transliacijaBeNewLine.split(' ');
const skaiciuMasyvas = masyvoValytuvas(masyvasSuTarpais);

console.log(skaiciuMasyvas);

function masyvoValytuvas(masyvasKuriReikiaIsvalyt) {
  const tikSkaiciai = [];

  for (let i = 0; i < masyvasKuriReikiaIsvalyt.length; i++) {
    if (masyvasKuriReikiaIsvalyt[i] === '') {
      //nedarom nieko
    } else {
      tikSkaiciai.push(masyvasKuriReikiaIsvalyt[i]);
    }
  }
  const paskutiniai40Skaiciu = tikSkaiciai.slice(-40);
  return paskutiniai40Skaiciu;
}



// const fullTransliacija = transliacija.split('');
// const svariTransliacija = []
// for (let i = 0; i < fullTransliacija.length; i ++){ 
//     if (fullTransliacija[i] === '\n'|| fullTransliacija[i] === '') {
//     } else {
//         svariTransliacija.push(fullTransliacija[i]);
    
//     }
// }

// const svariTransliacija = [];
// for (let i = 0; i < svariTransliacija.length; i++) {
//     console.log(svariTransliacija[i]);
//     const array = svariTransliacija[i].split('\n');
    
// }
// const visaiSvariTransliacija = [];
// for (let i = 0; i < svariTransliacija)
// //console.log(svariTransliacija);



