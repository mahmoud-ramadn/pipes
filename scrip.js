
let spans=document.querySelectorAll('.box span');
let tezr=document.querySelectorAll('.tex')

console.log(spans);

console.log(tezr);
    


spans[0].onclick=()=>{

  spans.forEach((e)=>{
    e.classList.remove('active')
  })
    spans[0].classList.add('active');
    tezr.forEach((e)=>{
        e.style.display='none'
    })
    tezr[0].style.display='block'
}
spans[1].onclick=()=>{

  spans.forEach((e)=>{
    e.classList.remove('active')
  })
    spans[1].classList.add('active')

      tezr.forEach((e)=>{
        e.style.display='none'
    })
    tezr[1].style.display='block'
}
spans[2].onclick=()=>{
 
  spans.forEach((e)=>{
    e.classList.remove('active')
  })
   spans[2].classList.add('active')
     tezr.forEach((e)=>{
        e.style.display='none'
    })
    tezr[2].style.display='block'
}
spans[3].onclick=()=>{
 
  spans.forEach((e)=>{
    e.classList.remove('active')
  })
   spans[3].classList.add('active')
     tezr.forEach((e)=>{
        e.style.display='none'
    })
    tezr[3].style.display='block'
}
spans[4].onclick=()=>{

  spans.forEach((e)=>{
    e.classList.remove('active')
  })
    spans[4].classList.add('active')
      tezr.forEach((e)=>{
        e.style.display='none'
    })
    tezr[4].style.display='block'
}






