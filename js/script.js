const list = document.querySelector('.mac__list');
const elbtns = document.querySelectorAll('.mac-btn');
const elradio = document.querySelectorAll('.radios');
const elColor = document.querySelectorAll('.radio__color');
const elspan = document.querySelector('.sum');
function corent(){
  let resulPrice = 0;
  for(let i = 0; i < elradio.length; i++){
    if(elradio[i].checked){
      for(let j in prises){
        console.log(elradio[i].checked);
        if(elradio[i].id == j){
          resulPrice += prises[j];
        }
      }
    }
  }
  return resulPrice;
}
corent()
elradio.forEach((i)=>{
  i.addEventListener('change',()=>{
    elspan.textContent = corent() + 'so\'m';
  });
});
let resul = 0;
elbtns.forEach((i)=>{
  i.addEventListener('click',(item)=>{
    let initem = item.target.parentElement
    resul = 700 * initem.value;
    list.style.left = `-${resul - 700}px`;
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
    li.className = 'mac__item';
    li.innerHTML = `<img id="1" src="${imgs[val][i]}" alt="MacBook" class="current-img">`
    list.append(li);
    elbtns[i].innerHTML = `<img src="${imgs[val][i]}" alt="MacBook">`
  }
}