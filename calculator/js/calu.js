var fnum="";
var snum="";
var sign="";
var result="0";
var menory="0";
function clickShuzi(num){
	if(sign==""){
		fnum=fnum+num;
	}else{
		snum=snum+num;
	}
	document.getElementById("showScreen").value=fnum+sign+snum;
}


function clickFuhao(f){
	if(sign==""&&fnum!=""){
		sign=f;
		document.getElementById("showScreen").value=fnum+sign;
	}
}

function clickpoint(){
	if(sign==""){
		if(fnum.length>0&&fnum.indexOf(".")==-1){
			fnum=fnum+".";
			}
		}else{
			if(snum.length>0&&snum.indexOf(".")==-1){
				snum=snum+".";
		}
	}
	document.getElementById("showScreen").value=fnum+sign+snum;

}

function equal(){
	if(fnum!=""&&snum!=""){
		var x=parseFloat(fnum);
		var y=parseFloat(snum);
		switch(sign){
			case '+':result=x+y;break;
			case '-':result=x-y;break;
			case '×':result=x*y;break;
			case '/':{
				if(y!=0){
					result=x/y;
				}
				else{
					alert("被除数不能为0！");
				}
				break;
			}
			case '':alert("请输入符号");
		}
		document.getElementById("showScreen").value=result;
		fnum=result;
		snum="";
		sign="";
	}
}
function AC(){
	fnum="";
    snum="";
	sign="";
	result="0";
	document.getElementById("showScreen").value=result;
}

function back(){
	if(snum.length>0){
		snum=snum.substring(0,snum.length-1);
	}else if(sign.length>0){
		sign=sign.substring(0,sign.length-1);
	}
	else if(fnum.length>0){
		fnum=fnum.substring(0,fnum.length-1);
	}
	document.getElementById("showScreen").value=fnum+sign+snum;
}
function clickzero(){
	if(sign==""){
		if(fnum.length>0){
			clickShuzi('0');
			}
		}else{
			if(snum.length>0){
				clickShuzi('0');
		}
	}
}
function savememory(){
	if(sign==""){
		memory=document.getElementById("showScreen").value;
	}
	console.log("memory:"+memory);
}
function memoryadd(){
	fnum=memory;
	snum=document.getElementById("showScreen").value;
	sign='+';
	equal();
	memory=result;
	console.log("memory:"+memory);
}
function memorysub(){
	fnum=memory;
	snum=document.getElementById("showScreen").value;
	sign='-';
	equal();
	memory=result;
	console.log("memory:"+memory);
}
function memoryreset(){
	memory="";
	
}
