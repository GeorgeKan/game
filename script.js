function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  var values = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10];
  for(let i=0; i<=getRandomInt(700,900);i++){
    let idx1 = getRandomInt(0,values.length-1)
    let idx2 = getRandomInt(0,values.length-1)
    let temp = values[idx1];
    values[idx1] = values[idx2];
    values[idx2] = temp;
  }
  
  const divElems = document.querySelectorAll('.item');
  const movesElem = document.querySelector('.moves');
  const elems = [];
  const selected = [];
  let moves = 0;
  
  divElems.forEach((item, i) => {
    elems.push({
      id: i,
      value: values[i],
      elem: item,
      opened: false,
      clicked: false
    })
  })
  
  elems.forEach(item => {
    item.elem.addEventListener('mouseover', () => {
      if(!item.open && !item.clicked){
        item.elem.style.backgroundColor = 'blue';
      }
    })
    item.elem.addEventListener('mouseout', () => {
      if(!item.open && !item.clicked){
        item.elem.style.backgroundColor = 'white';
      }
    })
    item.elem.addEventListener('click', () => {
      if(selected.length < 2) {
      if(!item.opened && !item.clicked) {
       item.elem.innerHTML = item.value;
       item.elem.style.backgroundColor = 'grey';
       item.clicked = true;
       selected.push(item.id);
     }
      if(selected.length==2){
        movesElem.innerHTML = 'Moves : ' + ++moves;
        if(elems[selected[0]].value === elems[selected[1]].value) {
           elems[selected[0]].elem.style.backgroundColor = 'green';
           elems[selected[0]].opened = true;
           elems[selected[1]].elem.style.backgroundColor = 'green';
           elems[selected[1]].opened = true;
          selected.length = 0;
        } else {
           elems[selected[0]].elem.style.backgroundColor = 'red';
           elems[selected[1]].elem.style.backgroundColor = 'red';
           setTimeout(() => {
             elems[selected[0]].elem.style.backgroundColor = 'white';
             elems[selected[1]].elem.style.backgroundColor = 'white';
             elems[selected[0]].clicked = false;
             elems[selected[0]].elem.innerHTML = '';
             elems[selected[1]].clicked = false;
             elems[selected[1]].elem.innerHTML = '';
             selected.length = 0;
           }, 800) 
        }
      }
    }
    })
  })
  
  