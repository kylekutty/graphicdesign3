

var w = window.innerHeight;
var h = window.innerHeight;




// document.getElementById('wrapper3').onclick = function() {
    

// var className = ' ' + wrapper3.className + ' ';

//     this.className = ~className.indexOf(' active ') ?
//                          className.replace(' active ', ' ') :
//                          this.className + ' active';

// }


var isOpen = true;



function openNav() {
    document.getElementById("totalnav").style.height = "100%";
    document.getElementById("packagingnav").style.height = "900px";
    document.getElementById("nutritionnav").style.height = "900px";
    document.getElementById("blurb").style.height = "50%";
    isOpen = true; 

}

function closeNav() {
    document.getElementById("totalnav").style.height = "0%";
    document.getElementById("packagingnav").style.height = "0px";
    document.getElementById("nutritionnav").style.height = "0px";
    document.getElementById("blurb").style.height = "0%";
    isOpen = false; 
}


// function openNav() {
//     document.getElementById("totalnav").style.visibility = "visible";
//     document.getElementById("packagingnav").style.visibility = "visible";
//     document.getElementById("nutritionnav").style.visibility = "visible";
//     document.getElementById("blurb").style.visibility = "visible";
//     isOpen = true; 

// }

// function closeNav() {
//     document.getElementById("totalnav").style.visibility = "hidden";
//     document.getElementById("packagingnav").style.visibility = "hidden";
//     document.getElementById("nutritionnav").style.visibility = "hidden";
//     document.getElementById("blurb").style.visibility = "hidden";
//     isOpen = false; 
// }


function toggleNav () {
	if (isOpen===false){
		openNav();
	}
	else{
		closeNav();
        document.getElementById('wrapper3').style.visibility = "visible";
	}

}

console.log(isOpen);




