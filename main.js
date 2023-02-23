var btnVisible = document.querySelector('.btn-1');


btnVisible.addEventListener('click', () => {
  let rullBlock = document.querySelector("#rullHiden")
  rullBlock.classList.toggle("visible")
 
  if (  !rullBlock.classList.contains('.visible')) {
    document.querySelector('.section-rull').scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
  }
  

  
});


let auth = localStorage.getItem('authorizationData');
let linkBtn = document.querySelectorAll(".btn")
if (auth) {
  for (i = 0; i < linkBtn.length;i++){
    linkBtn[i].href="https://melbet.ng/en/sport/popup/cashier"
  }
}





