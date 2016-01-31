/**
 * Created by Administrator on 2016/1/31.
 */

var can=document.getElementById("canvas");
var context=can.getContext('2d');


var squres=[];
can.width=document.body.offsetWidth;
can.height=document.body.offsetHeight;
var middle=can.width*.5;
var mouseX=can.width/2;
setSqure()
setInterval(function () {
    context.clearRect(0,0,can.width,can.height);
    drawBackground();
    updateSquer()
    drawAll()
},30)
function setSqure(){
    for(var i=0;i<10;i++){
        var asqure={
            x:Math.random()*10-5+i*can.width/10,
            y:can.height,
            width:Math.random(),
            rotate:Math.random()*3
        }
        squres.push(asqure);
    }

}
function updateSquer(){
    for(var i=0;i<squres.length;i++){
        if(squres[i].y+squres[i].width*450+50<0)
            resetSquer(squres[i],i);
        squres[i].y-=(squres[i].width*3 +.7);
        squres[i].x+=(squres[i].width +.5)*(mouseX-middle)/100;
        squres[i].rotate+=0.01
    }
    middle+=(mouseX-middle)/50;
}
function resetSquer(squer,index){
    squer.width=Math.random();
    squer.y=can.height;
    squer.x=Math.random()*10-5+index*can.width/10
}
function drawAll(){
    for(var i=0;i<squres.length;i++){
        drawSqure(squres[i].x,squres[i].y,squres[i].width,squres[i].rotate);
    }
}

function drawSqure(x,y,width,rotate){
    context.beginPath()
    context.save()
    context.translate(x,y+width*150+50)
    context.rotate(rotate)
    context.fillStyle="rgba(255,255,255,"+ (.5-width/3)+")"
//            context.fillRect(x,y,width*150+50,width*150+50)
    context.fillRect(-.5*(width*150+50),-.5*(width*150+50),(width*150+50),(width*150+50))
    context.restore()
}
function drawBackground(){
    context.beginPath();
    var bg = context.createLinearGradient(0,0, can.width *.7, can.height);
    bg.addColorStop(0, '#34CCB9');
    bg.addColorStop(1, '#8BE8DD');
    context.fillStyle = bg;
    context.fillStyle=bg;
    context.fillRect(0,0,can.width,can.height);
}
document.onmousemove= function () {
        mouseX=event.clientX
    }
