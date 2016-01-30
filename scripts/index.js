window.onload=function(){
	var hsc=document.getElementById('hpingmu');
var hnums=document.getElementsByClassName('hnum');
var hops=document.getElementsByClassName('hoprator');
var hdetele=document.getElementById('hdetele');
var hequl=document.getElementById('hdenghao');
var aaa = document.getElementsByClassName('aaa');
var hfirstNumber='',hsecondNumber='',hyunsuanfu='';

		for(var i=0;i<hnums.length;i++){
		hnums[i].onclick=function(){
			if(this.innerHTML!='.'||hfirstNumber.indexOf('.')==-1){
			// hfirstNumber='';
				if(!hyunsuanfu){
					hfirstNumber=hfirstNumber+this.innerHTML;
					hsc.innerHTML=hfirstNumber;
					}else{
						hsecondNumber+=this.innerHTML;
						hsc.innerHTML=hsecondNumber;
					}
				}
			}	
		}


		for(j=0;j<hops.length;j++){
		hops[j].onclick=function(){
			hyunsuanfu=this.innerHTML;
		}
	}
	hequl.onclick=function(){
	if(hyunsuanfu=='EE'){
	hresult=Number(hfirstNumber)*Math.pow(10,Number(hsecondNumber))}
	if(hyunsuanfu=='½'){
	hresult=Math.sqrt(Number(hfirstNumber),Number(hsecondNumber))}
	if(hyunsuanfu=='xⁿ'){
	hresult=Math.pow(Number(hfirstNumber),Number(hsecondNumber))}
	if(hyunsuanfu=='+'){
		hresult=Number(hfirstNumber)+Number(hsecondNumber);
	}
	if(hyunsuanfu=='-'){
	hresult=Number(hfirstNumber)-Number(hsecondNumber);}
	if(hyunsuanfu=='*'){
	hresult=Number(hfirstNumber)*Number(hsecondNumber);}
	if(hyunsuanfu=='/'){
	hresult=Number(hfirstNumber)/Number(hsecondNumber);}
	hsc.innerHTML=hresult;
	hfirstNumber=hsc.innerHTML;
	hsecondNumber='';hyunsuanfu='';
	}

	// 清除
	hdetele.onclick=function(){
		location.reload();
	}

for(k=0;k<aaa.length;k++){
	aaa[k].onclick = function(){
		if(this.innerHTML=="x²"){
			hsc.innerHTML = Math.pow(Number(hfirstNumber),2);
			hfirstNumber='';
		}
		if(this.innerHTML=="xˉ¹"){
			hsc.innerHTML = 1/Number(hfirstNumber);
			hfirstNumber='';
		}
		if(this.innerHTML=="x³"){
			hresult= Math.pow(Number(hfirstNumber),3);
			hsc.innerHTML=hresult;
			hfirstNumber='';
		}

		if(this.innerHTML=="%"){
			hresult= Number(hfirstNumber)/100;
			hsc.innerHTML=hresult;
			hfirstNumber='';
		}
		if(this.innerHTML=="x!"){
		var y=1;
			for(var h=Number(hfirstNumber);h>0;h--){
				y*=h;
				hsc.innerHTML=y;
			}
		}

		if(this.innerHTML=="∫"){
			hresult= Math.sqrt(Number(hfirstNumber),2);
			hsc.innerHTML=hresult;
			hfirstNumber='';
		}
		if(this.innerHTML=="log"){
			hresult=Math.log(Number(hfirstNumber));
			hsc.innerHTML=hresult;
			hfirstNumber='';
		}
		if(this.innerHTML=="sin"){
			hresult=Math.sin(Math.PI/(180/Number(hfirstNumber)));
			hsc.innerHTML=hresult;
			hfirstNumber='';
		}
		if(this.innerHTML=="cos"){
			hresult=Math.cos(Math.PI/(180/Number(hfirstNumber)));
			hsc.innerHTML=hresult;
			hfirstNumber='';
		}
		if(this.innerHTML=="tan"){
			hresult=Math.tan(Math.PI/(180/Number(hfirstNumber)));
			hsc.innerHTML=hresult;
			hfirstNumber='';
		}
		if(this.innerHTML=="sinh"){
			hresult=Math.sinh(Number(hfirstNumber));
			hsc.innerHTML=hresult;
			hfirstNumber='';
		}
		if(this.innerHTML=="cosh"){
			hresult=Math.cosh(Number(hfirstNumber));
			hsc.innerHTML=hresult;
			hfirstNumber='';
		}
		if(this.innerHTML=="tanh"){
			hresult=Math.tanh(Number(hfirstNumber));
			hsc.innerHTML=hresult;
			hfirstNumber='';
		}
		if(this.innerHTML=="e"){
			hresult=Math.E;
			hsc.innerHTML=hresult;
			hfirstNumber='';
		}
		if(this.innerHTML=="π"){
			hresult=Math.PI;
			hsc.innerHTML=hresult;
			hfirstNumber=hsc.innerHTML;
			hsecondNumber='';hyunsuanfu='';
		}
		if(this.innerHTML=="Rand"){
			hresult=Math.random();
			hsc.innerHTML=hresult;
			hfirstNumber='';
		}
		if(this.innerHTML=="Rad"){
			hresult='Rad';
			hsc.style.textAlign='left';
			hsc.style.fontSize='10px';
			hsc.style.lineHeight='70px';
			hrc.innerHTML=hresult;
			hfirstNumber='';
		}
		if(this.innerHTML=="%"){
			hresult=Number(hfirstNumber)/100;
			hrc.innerHTML=hresult;
			hfirstNumber='';
		}
		if(this.innerHTML=="+/-"){
			hresult=Number(hfirstNumber);
			hrc.innerHTML=hresult;
			hfirstNumber='';
		}
	}
}
window.onmousedown=function(e){
	e.preventDefault();
}
}