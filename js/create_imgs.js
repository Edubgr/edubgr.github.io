document.addEventListener('DOMContentLoaded', function() {
    function create_itens(turma,TURMA,cont,total){
        for(var i=1;i<=total;i++){
            tem=i+cont
            var stream = document.querySelector('.gallery__stream');
            var element = document.createElement("div");
            element.setAttribute("class","gallery__item "+TURMA)
            element.setAttribute("id",tem)
            stream.appendChild(element);

            var div= document.getElementById(tem)
            var element = document.createElement("img");
            element.setAttribute("class","bg")
            element.setAttribute("src",""+"/img/"+turma+"/"+i+".jpg");
            var img = new Image();
            img.src = '/img/'+turma+"/"+i+".jpg";
            
            div.appendChild(element);

            var element = document.createElement("div");
            element.setAttribute("class","item__name")
            element.setAttribute("id",turma+tem)
            div.appendChild(element);

            var div = document.getElementById(turma+tem);
            var h1 = document.createElement("h1");
            h1.setAttribute("class","h1 hs")
            var text = document.createTextNode("Eduardo");
            h1.appendChild(text);
            var h2 = document.createElement("h2");
            h2.setAttribute("class","h2 hs")
            var text = document.createTextNode("Autoria própria");
            h2.appendChild(text);

            div.appendChild(h1);
            div.appendChild(h2);
        }
    }
    var num_a=5;
    var num_b=5;
    var num_c=5;
    var num_d=5;

    create_itens("a","A",0,num_a)
    create_itens("b","B",num_a,num_b)
    create_itens("c","C",num_a+num_b,num_c)
    create_itens("d","D",num_a+num_b+num_c,num_d)
  });
