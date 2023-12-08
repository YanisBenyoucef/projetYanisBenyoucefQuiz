var form = document.getElementById("quiz-form");
const paras = document.querySelectorAll('.question-item')
var cong = document.getElementById("alert");
form.addEventListener(
  "submit",
  function (event) {
    let tab=[]
    var data = new FormData(form);
    console.log(data)
    for (const element of data) {
        if( element[1]=="true"){
            if(element[0]=="answer-1"){paras[0].style.color = 'green'};
            if(element[0]=="answer-2"){paras[1].style.color = 'green'};
            if(element[0]=="answer-3"){paras[2].style.color = 'green'};}
        else if( element[1]=="false"){
            if(element[0]=="answer-1"){paras[0].style.color = 'red'};
            if(element[0]=="answer-2"){paras[1].style.color = 'red'};
            if(element[0]=="answer-3"){paras[2].style.color = 'red'};}    
            tab.push(element)
      ;
    }
    console.log(tab)
    
    event.preventDefault();
    let test = tab.every((a)=>a[1]=="true");
    if(test){cong.style.display = "block" ;
    cong.style.color= "green"

  }
    else{cong.style.display = "none" }
  },
  false,
);