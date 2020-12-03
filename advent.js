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
let DayCompte = [];
while (i != 1) {
    i--;
    let randomNumber = Math.floor(Math.random() * i); //
    var circle = document.createElement('div');
    circle.id = 'circle' + box[randomNumber];
    day = box[randomNumber];
    box.splice(randomNumber, 1);
    circle.className = "circle";
    circle.innerHTML = '<a href="" data-toggle="modal" data-target="#m" onclick="myFunction()"><img src="img/' + day + '.png"></a>';
    document.getElementById("calendrier").appendChild(circle);
    DayCompte.push(day);

}

function myFunction() {
    let i;
    if( i=0, i<=DayCompte.length, i++){
        let nuberOfDay = DayCompte[i];
    document.getElementById("day").innerHTML = i;
    let today = new Date();
    let calDate = new Date('2020-12-' + nuberOfDay);
    calDate.setDate(calDate.getDate());
    if (calDate >= today) {
        this.modal = 'Hep Hep Hep, on ne triche pas !'
    } else {
        this.modal = 'message.content';
    }
    
}
    
}
