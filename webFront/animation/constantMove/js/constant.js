window.onload=function(){
			var oDiv=document.getElementById('div1');
			oDiv.onmouseover=function(){
				startMove(0);
			}
			oDiv.onmouseout=function(){
				startMove(-200)
			}
		}
timer=null;
function startMove(target){
		clearInterval(timer);
		var oDiv=document.getElementById('div1');
		timer=setInterval(function(){
			var speed=0;
			if(oDiv.offsetLeft>target){
				speed=-10;
			}else{
				speed=10;
			}
		
		if(oDiv.offsetLeft==target){
			clearInterval()
		}else{
			oDiv.style.left=oDiv.offsetLeft+speed+'px'
		}
		
	},30)
}
