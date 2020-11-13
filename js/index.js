
document.addEventListener('DOMContentLoaded', function() {

    function next_item (num,temp){
        if(num>0){
            for(var i=0;i<num;i++){
            setTimeout(function () {
                stream.appendChild(items[0]);
                items = document.querySelectorAll('.gallery__item');
                change_color();
              }, temp)
            }
        }else{
            for(var i=0;i<Math.abs(num);i++){
            setTimeout(function() {
                stream.insertBefore(items[items.length - 1], items[0]);
                items = document.querySelectorAll('.gallery__item');
                change_color();
                }, temp) 
            }
        }
    }

    function turm (first, current){
        
        var sub=first-parseInt(current,10);
        var sublap1=items.length+parseInt(current,10)-first;
        if(parseInt(current,10)<first) sublap1=-sublap1
        var sublap2=-parseInt(current,10)+first+items.length;

        console.log(sub,current,first,sublap1,sublap2)

        if(Math.abs(sub)<Math.abs(sublap1)&&Math.abs(sub)<Math.abs(sublap2)){
            next_item(sub,300);
        }else if(Math.abs(sublap1)<Math.abs(sublap2))next_item(sublap1,300)
        else next_item(sublap2,300);
    }

    function change_color(){
        if(items[2].className.substr(items[2].className.length-1,items[2].className.length-1)=="A"){
            A.setAttribute("style","background-color: blue")
            B.setAttribute("style","background-color: black;")
            C.setAttribute("style","background-color: black;")
            D.setAttribute("style","background-color: black;")
    }else {
        if(items[2].className.substr(items[2].className.length-1,items[2].className.length-1)=="B"){
            A.setAttribute("style","background-color: black;")
            B.setAttribute("style","background-color: red")
            C.setAttribute("style","background-color: black;")
            D.setAttribute("style","background-color: black;")
    }else {
        if(items[2].className.substr(items[2].className.length-1,items[2].className.length-1)=="C"){
            A.setAttribute("style","background-color: black")
            B.setAttribute("style","background-color: black")
            C.setAttribute("style","background-color: yellow")
            D.setAttribute("style","background-color: black")
    }else {
        if(items[2].className.substr(items[2].className.length-1,items[2].className.length-1)=="D"){
            A.setAttribute("style","background-color: black")
            B.setAttribute("style","background-color: black")
            C.setAttribute("style","background-color: black")
            D.setAttribute("style","background-color: pink")
    }}}}
    }
    var A=document.getElementById("A");
    var B=document.getElementById("B");
    var C=document.getElementById("C");
    var D=document.getElementById("D");

    var stream = document.querySelector('.gallery__stream');
    var items = document.querySelectorAll('.gallery__item');
    next_item(-2,0);

    var prev = document.querySelector('.gallery__prev');
    prev.addEventListener('click', function() {
      next_item(-1,50)
    });
    
    var next = document.querySelector('.gallery__next');
    next.addEventListener('click', function() {
      next_item(1,50)
    });
    
    var classA=document.getElementsByClassName("A");
    var classB=document.getElementsByClassName("B");
    var classC=document.getElementsByClassName("C");
    var classD=document.getElementsByClassName("D");

    var turma=document.getElementsByClassName("turma")

    A.addEventListener('click', function() {
        turm(1,items[2].id)
        console.log(items[2].className.substr(items[2].className.length-1,items[2].className.length-1))
        change_color();
    });
    B.addEventListener('click', function() {
        turm(classA.length+1,items[2].id)
        change_color();
    });
    C.addEventListener('click', function() {
        turm(classA.length+classB.length+1,items[2].id)
        change_color();
    });
    D.addEventListener('click', function() {
        turm(classA.length+classB.length+classC.length+1,items[2].id)
        change_color();
    });
    console.log(items[2])
  });