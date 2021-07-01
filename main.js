var add = document.querySelector('.add');
var todoWrap = document.querySelector('.todo-wrap');
var doneWrap = document.querySelector('.done-wrap');
var taskField = document.querySelector('#task');
var h5;
// var error = document.querySelector('.error');
// var duomenys = [{
//         todo: 'Pirmas',
//         done: true,
//     },
//     {
//         todo: 'Antras',
//         done: false,
//     },
//     {
//         todo: 'Trecias',
//         done: false,
//     },
// ];
// localStorage.setItem('Sarasas', JSON.stringify(duomenys));

// var duomenys = localStorage.getItem('Sarasas');
// duomenys = JSON.parse(duomenys);

add.addEventListener('click', function() {
    var task = taskField.value;
    if (task.length > 0) {
        todoWrap.innerHTML += `
    <div class="card">
        <div class="card-body">
            <h5 class="card-title">${task}</h5>
        </div>
        <div class="d-flex card-body">
            <button type="button" class="btn btn-danger todelete">Delete</button>
            <button type="button" class="btn btn-success todone">Move to Done</button>
            <button type="button" class="btn btn-warning edit" data-bs-toggle="modal" data-bs-target="#myModal">Edit</button>
        </div>
    </div>`;
        taskField.value = '';
        // jei neuzpildytas laukas, gausim klaida ir paraudonima
    } else {
        taskField.style.border = 'solid 2px red';
        taskField.setAttribute('placeholder', 'Please enter a task');
        taskField.classList.add('red');
        // error.style.color = 'red';
        // error.innerHTML = 'Please fill in the name of the task';
    }
});
// nuresetinti klaidos teksta ir paraudoninima kuomet ivedinejama kazkas. globaliai, nes daugiau inputu nera
document.addEventListener('input', function() {
    taskField.style.border = '';
    taskField.setAttribute('placeholder', 'Enter a task');
    taskField.classList.remove('red');
    // error.innerHTML = '';
});

// istrynimas
document.addEventListener('click', function(e) {
    if (e.target.matches('.todelete')) {
        e.target.closest('.card').remove();
    }
});

// "judinimo" mygtuku veikimas. keiciant klases, keiciasi logika, kur bus judinama korta. Taip pat, keiciamas mygtuko tekstas
document.addEventListener('click', function(e) {
    var pagauta = e.target.closest('.card');
    var paspaustas = e.target;
    if (e.target.matches('.todone')) {
        paspaustas.innerText = 'Move Back';
        paspaustas.classList.toggle('todone', false);
        paspaustas.classList.toggle('totodo', true);
        doneWrap.appendChild(pagauta);
    } else if (e.target.matches('.totodo')) {
        paspaustas.innerText = 'Move to Done';
        paspaustas.classList.toggle('totodo', false);
        paspaustas.classList.toggle('todone', true);
        todoWrap.appendChild(pagauta);
    }
});

// jei paspaudziama ant edit (po tuo mygtuku yra modalas), capture'inam ir i kintama isidedam, kurio todo cardo headeris tai yra, nuo jo nuskaitom verte (kuri paskui dedama kaip default input verte) ir issaugant nauja verte paimam i headeri (kortos pavadinima)
document.addEventListener('click', function(e) {
    if (e.target.matches('.edit')) {
        h5 = e.target.closest('.card').querySelector('div.card-body > h5');
        var h5Text = h5.innerText;
        taskEdit.value = h5Text;
    } else if (e.target.matches('.taskSave')) {
        h5.innerText = taskEdit.value;
    }
});



//----------------------------SCRIPTO pabaiga----------------------------------
// var [pavadinimas] = [reiksme]; - kintamojo sukurimas
// console.log('c reiksme lygi:', c); - reiksmiu atvaizdavimas
// += - prideda prie jau buvusios reiksmes
// var ilgis = document.getElementById('ilgis'); - sukuria paemima elemento pagal ID is HTML
//elementas.innerHTML = h; - iraso reiksme HTMLE
// ** 2 - pakelt kvadratu
// ** 0.5 - istraukti kvadratine reiksme

// if ([logine salyga]) {
//     console.log([TRUE condition]);
// }else 
//     console.log([FALSE condition]);
// }
// vykdo, kol suveikia!
//  salygoje gali buti papildomu loginiu israisku. pvz, OR || arba AND &&.
//  jei nera skliaustu, o pirmiau parasyta ||, paskui &&, pirmiau vykdo &&. Jei uzdedami skliaustai, tada pirma vertina tai, kas skliaustuose
// if ([var_name]) { [salyga ]} - vykdo tik tada, kai 'var_name' egzistuoja

// Math.round({var_name}) - apvalina 
// Math.round([var_name] * 100) / 100; - grazina verte su kiek skaiciu po kableliu. PALIEKA SKAICIUMI
// [var_name]=[var_name].toFixed(2);  - 2 skaiciai po kablelio. VERCIA I TEKSTA!

// var [var_name] = []; - sukuriamas masyvas. gali buti tuscias
// var [var_name] = new Array (); - sukuriamas masyvas. analogikskai. prideti galime skliausteliuose vertes
// konsoleje matosi, 'length : 0' rodo masyvo dydi - lementu skaiciu. 
// kableliu atskiriam elemetus. gali buti masyvas masyve
// console.log([var_name][sekos numeris]);
// [var_name][sekos numeris] = [nauja reiksme] - pakeiciama konkretaus elemento verte i nauja
// 4 masyvu metodai:
// 1) [var_name].pop(); - isimti 1 paskutini elementa is masyvo
// var [new_var] = [var_name].pop(); -galim isimta elementa isideti i kitnama
// 2) [var_name].push([kasidedama i gala]); - pakeiciamas elementas gale
// 3) [var_name].shift(); - išimti pirmą elementą masyve
// 4) [var_name].unshift([ka idedame i prieki]); - atvirkscias pushui

// document.querySelector([adresas iki elemento, lygiai taip, kaip su CSS])
//  jei kartojasi (tipas arba klase), tai paimamas pirmas HTMLe nuo virsaus
// document.querySelectorAll ([tipas arba klase]) - paima visus, atitinkancius kriterijus


// CIKLAI

//WHILE

// WHILE paprastas

//kintamasis pagal kuri kontroliuojam cikla
// var i = 0;
// while (i < 5) {
//     console.log(i);
//     console.log('viso gero');
//     i++;
// }

// WHILE masyve

// var m = [1, 246, 54, 354184, 287651, 2541, 326787, 65498, 31468, 1268767]

// var j = 0;
// // kintamasis, kur bus saugoma suma
// var suma = 0;
// while (j < m.length) {
//     if (m[j] < 2542) {
//         // galim naudoti 'parseInt(m[j])', kad jei butu kabutese skaicius (realiai, tekstas), verstu i teksta
//         suma += m[j];
//     }
//     j++;
//     console.log(suma);
// }
// var vidurkis = suma / m.length;
// console.log('vidurkis: ' + vidurkis);

// FOR

// var m = [1, 7, 5, 8, 67, 78, 7, 5, 21, 7]

// // kad imtu is kito galo:
// for (var k = m.length - 1; k >= 0; k--) {
//     console.log(m[k]);
// }

// FOR su ciklu isvaizdavimu
// var j = 0
// var i, suma = 0;
// for (i = 1; suma < 5; i++) {
//     j++
//     suma += i;
//     i += 2;
//     console.log('ciklas: ', j, '| suma=', suma);
//     console.log('ciklas: ', j, '| i=', i);
// }


//FUNKCIJOS
// funkcijos sukurimas
// function [funkcijos pavadinimas](parametras1, parametras2, ...) {
//     [ka daro funkcija ];
// }

// funkcijos iskvietimas
// [funkcijos pavadinimas](parametras1, parametras2, ...)

// function kubu(x) {
// var a = x * x * x;
// //priskiriama reiksme funkcijai
// return a;}
// var skaicius = kubu(4);

// var [var_name] = function() {}  - sukuriama funkcija su var_name pavadinimu


// function musuFunkcija(x, y) {
//     document.querySelector('h1').innerHTML += x * y + '<br>';
//     console.log('Funkcija buvo iskviesta!');
// }

// musuFunkcija(3, 6);
// musuFunkcija(2, 5);
// musuFunkcija(100, 7);

// function kubu(z) {
//     var a = z * z * z;
//     return a;
// }
// var skaicius = kubu(4);
// console.log(z + 'kubu yra: ' + skaicius);

//EVENTAI

// kad ivykiai issauktu funkcijas
//  bet koks elemento paspaudimas gali tureti reakcija

//document.querySelector('.class').style.color = 'black';  - keiciam stiliu


// OBJEKTAI

// var var_name = {
//     key1: 'sring1',
//     key2: ['value1', 'value2'], - paprastas masyvas
//     key3: {}, - kitas objektas
//     key4: [{}, {}] - masyvas su objektais
// }
// Isikviesti is objektu masyvo konkretu elementa:
// console.log(masyvas[sekos_numeris].key1)

// užkeiciama verte tisiog prilyginant naujai
// masyvas[sekos_numeris].key1 = nauja_verte

// pridedam naują attributą (key)
// masyvas[sekos_numeris].key5 = verte
// gali buti prilygintas kazkokiam kintamjam, kuris susikurtas anskciau


// Trinam clickas - pasiimam ta clicka, kuris buo pasirinktas ir tam cardui trinam elementa
//  e.target yra ten, kur paspaudem

// document.addEventListener('click', function(e) {
//     if (e.target.matches('.delete')) {
//         // closest pasirinka artimiausia auksciau esanti elementa
//         e.target.closest('.col-3').remove();
//     }
// });

// isirenkam visus tagus po pasirinktu elementu. k - indeksas elemento
// var maxRow = lentele.getElementsByTagName('tr')[k];

// pridedam stiliu:
// variable.style.color = "red";

// TRINAM VISUS VIENOS RUSIES TAGUS
// var tds = document.getElementsByTagName('td');
// for (var l = tds.length - 1; l >= 0; l--) {
//     // trina pats save. td parent yra tr, o tr child yra td, todel trina td
//     tds[l].parentNode.removeChild(tds[l]);
// }

// specifinio cell'o vertes paemimas:
// lenta.rows[r].cells[c].innerHTML
// pavyzdys, kaip visas reiksmes issitraukti:
//function GetCellValues() {
//    var table = document.getElementById('mytable');
//    for (var r = 0, n = table.rows.length; r < n; r++) {/
//        for (var c = 0, m = table.rows[r].cells.length; c < m; c++) {
//            alert(table.rows[r].cells[c].innerHTML);
//        }
//    }
//}

// DOM

// createElement - sukuria html elementa. per atskiras eilutes kuriama klase, vertes ir tt
// pvz., sukurti div'a:
// var elementas = document.createElement('div');
// pvz., sukurti klase:
// elementas.classList.add('klase');
// pvz., ideti verte
// elementas.innerText = 'verte';

// classList:
// elementas.classList.remove('isimtina_klase');
// elementas.classList.contains('patikritna_ar_egzistuoja_klase');

// pavyzdys - uzdedama klase (su stiliumi CSSe) po veiksmo (paspaudimo ant elemento)
// var p = document.getElementById('p');
// p.addEventListener('click', function () (
//     p.classList.toggle('uzdedamos_nuimamos_klases_pavadinimas')
// ));

// AppendChild
// jei norim dadeti i vidu kita HTML! lementa (kitnamaji) I GALA
// p.appendChild(elementas);
// I PRIEKi
// p.prepend(elementas);

// jei yra tevinis elementas, po kuriuo yra veiksmas, tai stopPropagation stabdo to veiksmo taikyma child elementui
// elementas.addEventListener('click', function(e){
// e.stopPropagation();
// });

// pasiimti atributa (viena)
// a.getAttribute('href');
// a.getAttribute('class');

// pakeisti atributa:
// a.setAttribute('id', 'kuom_ji_pakeisti');