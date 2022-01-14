const list = document.querySelector('.mac__list');
const elbtns = document.querySelectorAll('.mac-btn');
const elradio = document.querySelectorAll('.radios');
const elColor = document.querySelectorAll('.radio__color');
const elspan = document.querySelector('.sum');
const eldecr = document.querySelector('.btn-increase');
const elicr = document.querySelector('.btn-decrease');
const elvalue = document.querySelector('.span');
let def = 0;
eldecr.addEventListener('click',()=>{
  let decrim = elvalue.textContent;
  decrim = Number(decrim)+1;
  elvalue.textContent = decrim;
  elspan.textContent = parseInt(elspan.textContent) + def + " so'm";
});
elicr.addEventListener('click',()=>{
  if(elvalue.textContent > 1){
    let decrim = elvalue.textContent;
    decrim = Number(decrim)-1;
    elvalue.textContent = decrim;
    elspan.textContent = parseInt(elspan.textContent) - def + " so'm";
  }
});
function corent(){
  let hard1 = document.querySelector('#hard1');
  let ram8 = document.querySelector('#rams8');
  let resulPrice = 0;
  for(let i = 0; i < elradio.length; i++){
    if(elradio[i].checked){
      if(elradio[i].id == 'ram8'){
        hard1.style.display = 'none';
      }
      if(elradio[i].id == 'ram16'){
        hard1.style.display = 'inline-block';
      }
      if(elradio[i].id == 'mem1'){
        ram8.style.display = 'none'
      }
      if(elradio[i].id == 'mem256' || elradio[i].id == 'mem512'){
        ram8.style.display = 'inline-block'
      }
      for(let j in prises){
        console.log(elradio[i].checked);
        if(elradio[i].id == j){
          resulPrice += prises[j];
          def = resulPrice;
        }
      }
    }
  }
  return resulPrice;
}
corent()
elradio.forEach((i)=>{
  i.addEventListener('change',()=>{
    elspan.textContent = corent() + ' so\'m';
  });
});
let resul = 0;
elbtns.forEach((i)=>{
  i.addEventListener('click',(item)=>{
    let initem = item.target.parentElement;
    console.log(initem);
    if(initem.classList.contains('img1')){
      list.style.transform = " translateX(0)";
    }
    if(initem.classList.contains('img2')){
      list.style.transform = " translateX(-700px)";
    }
    if(initem.classList.contains('img3')){
      list.style.transform = " translateX(-1400px)";
    }
    if(initem.classList.contains('img4')){
      list.style.transform = " translateX(-2100px)";
    }
    if(initem.classList.contains('img5')){
      list.style.transform = " translateX(-2800px)";
    }
    
    for(let i of elbtns){
      i.classList.remove('mac-btn-active');
    }
    if(initem.classList.contains('mac-btn')){
      initem.classList.add('mac-btn-active');
    }
  });
});
elColor.forEach((i)=>{
  i.addEventListener('change',(item)=>{
    renderImg(item.target.value)
  });
});
function renderImg(val){
  list.innerHTML="";
  for(let i = 0; i < imgs[val].length; i++){
    let li = document.createElement('li');
    li.className = 'mac__item tranzin';
    li.style.transition = "all .4s"
    li.innerHTML = `<img id="1" src="${imgs[val][i]}" alt="MacBook" class="current-img">`
    list.append(li);
    elbtns[i].innerHTML = `<img src="${imgs[val][i]}" alt="MacBook">`
  }
}
renderImg(0);
