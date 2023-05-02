let eventdate;
let slip = 0;

function setup() {
  createCanvas(800, 800);
  textSize(50);
  textAlign(LEFT, CENTER);
  let jahr = year();
  
  let inp = createInput("");
  inp.position(340,21);
  inp.size(100);
  inp.input(myInputEvent);
  
  eventDate = new Date(jahr, month()-1, day(), 0, 0);
  
}

function draw() {
  background(220);
  textSize(25);
  text("Bitte geben sie ein Datum ein:",0,30);
  textSize(50);
  let eventDay = eventDate.getDay();
  let eventHours = eventDate.getHours();
  let eventMinutes = eventDate.getMinutes();
  let eventSeconds = eventDate.getSeconds();
  
  let now = new Date();
  now.setDate(now.getDate());

  let nowD = now.getDate();
  let nowM = now.getMonth()+1;
  let nowY = now.getFullYear();

    let ms = eventDate - now;
 
    let s = int(ms / 1000);
    ms = ms % 1000;
    let mi = int(s / 60);
    s = s % 60;
    let h = int(mi / 60);
    mi = mi % 60;
    let d = int(h / 24);
    h = h % 24;
    let w = int(d / 7);
    d = d % 7;
    
    text(w + " Wochen", 150, 150);
    text(d + " Tage", 150, 200);
    text(h + " Stunden", 150, 250);
  
  //Draw the current date to the screen.
  
  if(slip[2] == undefined){
    text(day() + "/" + month() + "/" + year() + " - " + nowD + "/" + nowM + "/" + nowY, 50, 350);
  }
  else
    {
  text(day() + "/" + month() + "/" + year() + " - " + slip[0] + "/" + slip[1] + "/" + slip[2], 50, 350);
    }
}


function myInputEvent() {
  slip = split(this.value(),".",3);
  //console.log(slip[0]); //tag
  //console.log(slip[1]); //monat
  //console.log(slip[2]); //jahr
  eventDate = new Date(slip[2], slip[1]-1,slip[0], 0,0);
}
