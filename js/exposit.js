
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

        if(Math.abs(sub)<Math.abs(sublap1)&&Math.abs(sub)<Math.abs(sublap2)){
            next_item(sub,0);
        }else if(Math.abs(sublap1)<Math.abs(sublap2))next_item(sublap1,0)
        else next_item(sublap2,0);
    }

    function change_color(){
        if(items[2].className.substr(items[2].className.length-1,items[2].className.length-1)=="A"){
            A.setAttribute("style","background-color: #00a1e7")
            B.setAttribute("style","background-color: #19222e")
            C.setAttribute("style","background-color: #19222e")
            D.setAttribute("style","background-color: #19222e")
    }else {
        if(items[2].className.substr(items[2].className.length-1,items[2].className.length-1)=="B"){
            A.setAttribute("style","background-color: #19222e")
            B.setAttribute("style","background-color: #fe0000")
            C.setAttribute("style","background-color: #19222e")
            D.setAttribute("style","background-color: #19222e")
    }else {
        if(items[2].className.substr(items[2].className.length-1,items[2].className.length-1)=="C"){
            A.setAttribute("style","background-color: #19222e")
            B.setAttribute("style","background-color: #19222e")
            C.setAttribute("style","background-color: #fef100")
            D.setAttribute("style","background-color: #19222e")
    }else {
        if(items[2].className.substr(items[2].className.length-1,items[2].className.length-1)=="D"){
            A.setAttribute("style","background-color: #19222e")
            B.setAttribute("style","background-color: #19222e")
            C.setAttribute("style","background-color: #19222e")
            D.setAttribute("style","background-color: #f834e9")
    }}}}
    }
    var A=document.getElementById("A");
    var B=document.getElementById("B");
    var C=document.getElementById("C");
    var D=document.getElementById("D");

    var stream = document.querySelector('.gallery__stream');
    var items = document.querySelectorAll('.gallery__item');
    var img = document.querySelectorAll(".bg")
    next_item(-2,0);

    var prev = document.querySelector('.gallery__prev');
    prev.addEventListener('click', function() {
      next_item(-1,50)
    });
    
    var next = document.querySelector('.gallery__next');
    next.addEventListener('click', function() {
      next_item(1,50)
    });
    console.log(screen.width,screen.height)

    var hs = document.querySelectorAll(".hs")

    if(2.5*screen.height<screen.width){
        console.log(screen.width,screen.height)
        console.log(document.getElementsByClassName("gallery")[0])
        document.getElementsByClassName("gallery")[0].style.height="60vh";
        for(var i=0;i<2*items.length;i+=2){
            hs[i].className="hs h12"
            hs[i+1].className="hs h22"
        }
    }

    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    var captionH1 = document.getElementById("h1-caption");
    var captionH2 = document.getElementById("h2-caption");
    var hs = document.querySelectorAll(".hs")

    for(var i=0;i<items.length;i++){
        items[i].addEventListener('click', function() {
            modal.style.display = "block";
            modalImg.src = img[parseInt(this.id,10)-1].src;
            captionH1.innerHTML = "Aluno: "+hs[0].textContent;
            captionH2.innerHTML = "Fonte: "+hs[1].textContent;
          });
    }

    var span = document.getElementsByClassName("close")[0];
    
    span.onclick = function() {
      modal.style.display = "none";
    }
    
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