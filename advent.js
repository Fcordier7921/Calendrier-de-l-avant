// let increm = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];



//     for(i=1; i<25 ; i++) {
//         let item = increm[Math.floor(Math.random() * increm.length)];

//         let circle = document.createElement('div');
//         circle.className = "jour";
//         circle.id = 'jour' + item;
//         circle.innerHTML= '<img src="img/'+item+'.png">';
//         document.getElementById("calendrier").appendChild(circle);
//         increm.splice(item, 1);

//         console.log(increm)  
//     }while(increm.length = 0){
//         trace("le tableau est vide");
//     }


var box = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
var i = box.length //nobre de case dans mon tableau
var modal = document.getElementById('modal');
let DayCompte = [];

while (i != 1) {
    i--;
    let randomNumber = Math.floor(Math.random() * i);
    var circle = document.createElement('div');
    circle.id = 'circle' + box[randomNumber];
    day = box[randomNumber];
    box.splice(randomNumber, 1);
    circle.className = "circle";
    circle.innerHTML = '<a href="" data-toggle="modal" data-target="#m" onclick="myFunction(' + day + ')"><img src="img/' + day + '.png"></a>';
    document.getElementById("calendrier").appendChild(circle);
    DayCompte.push(day);

}

function myFunction(day) {
    let i;
    let nuberOfDay = 0;
    for (i = 0; i <= DayCompte.length; i++) {
        nuberOfDay = DayCompte[i];
        //console.log(nuberOfDay)

        let today = new Date();
        newToday = today.toString();
        const theDay = newToday.split(' ');

        console.log(newToday);

        
        if ((day - 1) >= theDay[2]) {
            document.getElementById('day').innerHTML = 'Hep Hep Hep, on ne triche pas !';
        } else {
            document.getElementById('day').innerHTML = 'Nous somme le ' + day;
            document.getElementById('me').innerHTML = '<img src="img/' + day + '.gif">';
            
        }
    }

}

// function creerCookie(nom, valeur, jours) {
//     if (jours) {
//         var date = new Date();
//         date.setTime(date.getTime() + (jours * 24 * 60 * 60 * 1000));
//         var expires = ''; expires = '' + date.toGMTString();
//     } else var expires = '';

//     document.cookie = nom + '=' + valeur + expires + '; path = /';
// }


// function recupererCookie(nom)
// {
// var nomRC = nom + '=';
// var ca = document.cookie.split(';');

// for(var i=0;i < ca.length; i++)
// {
// var c = ca[i];
// while (c.charAt(0)==' ') c = c.substring(1,c.length);

// if (c.indexOf(nomRC) == 0)
// return c.substring(nomRC.length, c.length);
// }
// return 'inconnu';
// }