
let bars=[];

function ExpenseChart(data){

let svg =  SVG(document.body, 'svg', {width:1000, height:1000, id:'SVG'});

let x = 100;
let y = 100;
//let barSpacing = 50;
for(let i=0; i<data.length; i++){
    

    bars.push(new Bar(svg,x,y,data[i].betrag, data[i].farbe));
    bars.push(new Bar(svg,200,110, data[i].betrag, data[i].farbe));
    bars.push(new Bar(svg,300,70, data[i].betrag, data[i].farbe));
    bars.push(new Bar(svg,400,40, data[i].betrag, data[i].farbe));
    bars.push(new Bar(svg,500,90, data[i].betrag, data[i].farbe));
}
//new Bar(svg, 100,100)

for (let n of bars){

    n.draw();
}
}

function Bars(){
    ExpenseChart(data);
}



function load(){
    if(!(file = document.getElementById('inputfile').files[0])){
    return;
    }

    let reader = new FileReader ();
    reader.onload = function(data) {
        const fileAsText = data.target.result;
        const rows = fileAsText.split('\r\n');
        let Data = [];
        for(let i = 1; i < rows.length; i++){
            const bar = rows[i].split(';');// pour deparer.que tu parcour le csv datei jusqua ce que tu rencontre un point virgule
            if(bar.length>=4){
                const Daten = {
                    Kategorie : bar[0].trim(),//Trim um Leere Zeile zu  Überspringen 
                    betrag : bar[1].trim(),
                    farbe : bar[2].trim(),
                };
                Data.push(Daten);
            }
        }
        
        ExpenseChart(Data);//ici doit changer en fonction de la fonction .pour moi par exemple cest ExpenseChart
                            //jai deja changer
    };
    
    reader.readAsText(file);
}