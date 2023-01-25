let goed = 0;
let count = 1;

function check() {

while (count < 11){
    let vraag ='vraag' + count;
      count++;

    if (document.getElementById(vraag).checked) {goed++;}    

    console.log(goed)
    console.log(vraag)
}

let naam = document.getElementById('text').value;
let cijfer = goed * 10;

result.innerHTML = naam + ' je resultaat = ' + cijfer + '%';

}
