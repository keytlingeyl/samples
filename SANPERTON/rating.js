
const rate = document.querySelector('.rate');
const emoji = document.querySelector('.emoji');
const feedback = document.querySelector('.rate textarea');
const pindutan = document.querySelector('.pindutan');

emoji.addEventListener('click',(e) =>{
	if(e.target.className.includes('emoji')) return;
	feedback.classList.add('feedback--active');
	pindutan.classList.add('pindutan--active');
})

rate.addEventListener('mouseleave',()=>{
	feedback.classList.remove('feedback--active');
	pindutan.classList.remove('pindutan--active');
})


