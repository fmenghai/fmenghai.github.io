document.addEventListener('DOMContentLoaded',function(){
		document.documentElement.style.fontSize=document.documentElement.clientWidth/16+'px';
		var oBtn=document.querySelector('header .list');
		var oList=document.querySelector('header ul');
		var bFlag=true;
		oBtn.addEventListener('touchstart',function(){
			if(bFlag){
				oList.style.display='block';
			}else{
				oList.style.display='none';
			}
			bFlag=!bFlag;			
		},false);
		//轮播图
		new Swiper('.swiper-container',{
			pagination:'.swiper-pagination',
		    	autoplay: 2500,
		           autoplayDisableOnInteraction: false
		});
	},false)	