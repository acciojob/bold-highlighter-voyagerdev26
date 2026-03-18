
let bolds=document.querySelectorAll("strong");
function highlight() {
    //Write your code here
	for(let b of bolds){
		b.style.color="rgb(0, 128, 0)";
	}


}


function return_normal() {
    //Write your code here
	for(let b of bolds){
		b.style.color="rgb(0, 0, 0)";
	}

    
}
