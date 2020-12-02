let table =['1','2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'];

if (table.length != 0) {
    let item = table[Math.floor(Math.random() * table.length)];
    console.log(item)
    let i;
    for (i = 1; i < 24; i++) {
        let circle = document.createElement('div');
        circle.className = "jour";
        circle.id = 'jour' + i;
        document.getElementById("calendrier").appendChild(circle);
        }
        // delete table[item];
} else {
        trace("le tableau est vide");
    }
