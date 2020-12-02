let increm = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];


    
    for(i=1; i<25 ; i++) {
        let item = increm[Math.floor(Math.random() * increm.length)];
        let circle = document.createElement('div');
        circle.className = "jour";
        circle.id = 'jour' + item;
        circle.innerHTML= '<img src="img/'+item+'.png">';
        document.getElementById("calendrier").appendChild(circle);
        
            delete increm[item-1];
        console.log(increm)  
    }while(increm.length = 0){
        trace("le tableau est vide");
    }
    
    


        