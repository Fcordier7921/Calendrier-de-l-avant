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
var i = box.length
while (i != 1) {
i--
let randomNumber = Math.floor(Math.random() * i)
box.splice(randomNumber, 1);
console.log(box)
let circle = document.createElement('div');
        circle.className = "jour";
        circle.id = 'jour' + i;
        circle.innerHTML= '<img src="img/'+i+'.png">';
        document.getElementById("calendrier").appendChild(circle);
} 
    


        