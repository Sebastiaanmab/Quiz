function check(){

   

            

            let Goed = 0;

            result = document.getElementById('result');



                if (document.getElementById('symptom').checked) {

                    Goed++;

                }

                if (document.getElementById('symptom1').checked) {

                    Goed++;

                }

                if (document.getElementById('symptom2').checked) {

                    Goed++;

                }

                if (document.getElementById('symptom3').checked) {

                    Goed++;

                }

                if (document.getElementById('symptom4').checked) {

                    Goed++;

                }

                if (document.getElementById('symptom5').checked) {

                    Goed++;

                }

                if (document.getElementById('symptom6').checked) {

                    Goed++;

                }

                if (document.getElementById('symptom7').checked) {

                    Goed++;

                }

                if (document.getElementById('symptom8').checked) {

                    Goed++;

                }

                if (document.getElementById('symptom9').checked) {

                    Goed++;

                }

                let numSymptoms = Goed * 10;



                if (Goed >= 1000) {

                    result.innerHTML = 'Alles Goed';

                } else {

                    result.innerHTML = 'Resultaat: ' + numSymptoms + '%';

                }

                return false;

}
