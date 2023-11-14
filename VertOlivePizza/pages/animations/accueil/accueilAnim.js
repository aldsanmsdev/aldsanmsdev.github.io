var txt01 = {
    ele1 : {},
    ele1div : {},
    text01 : "",
    css : []
}

var prog = {
    isStart : false,
    delayL : 10,
    delayPic : 1000,
    transition : d3.easeLinear,
    index : 0
};

var pic = d3.select("#hero-content-pic");
pic.style("opacity", 0);

pic.transition()
    .duration(prog.delayPic)
    .ease(prog.transition)
    .style("opacity", 1);

txt01.ele1 = d3.select("#hero-content-info-txt01");

txt01.text01 = txt01.ele1.text();

txt01.ele1.text("");

start();

function start(){
    if(!prog.isStart){
        prog.isStart = true;
        clock();
    }
};

function pause(){
    prog.isStart = false;
}

function clock(){
    if(prog.isStart){
        updateTxt();
        prog.index ++;
        setTimeout(clock,prog.delayL);
    }
};

function updateTxt(){
    if(prog.index < txt01.text01.length){
        txt01.ele1.text(txt01.ele1.text() + txt01.text01[prog.index]);
    }else{
        pause();
    }
}