/*INFO2180 - Web Development 1 - Lab 4
Created by Shanielle A. Williams - 620085201 */

window.onload = main;
    
function main() {
    /*-------------------- Exercise 1 --------------------*/
    
	let wallColor = document.getElementById("boundary1");
	wallColor.onmouseover = function() {
        	this.className = "boundary youlose";
    	});
    
    /*-----------------------------------------------------*/

    /*---------------------- Exercise 2 -------------------*/
    	let wall = document.querySelectorAll(".boundary");
    	for(x = 0; x < wall.length;x++){
		wall[x].addEventListener("mouseover",function() {
			for(x = 0; x < wall.length;x++){
				document.getElementById("status").textContent = "Sorry You Lose!! :-(";
				wall[x].setAttribute("class", "boundary you lose");
			}
		});
    	}

    /*------------------------------------------------------*/

    
    /*---------------------- Exercise 4 ----------------------*/
	restart = document.getElementById("start");
	restart.addEventListener("click", function() {
		location.reload();
	});
    /*---------------------------------------------------------*/

    /*---------------------- Exercise 5 -------------------------*/
	var finish = document.getElementById("end");
	var current = document.getElementById("status");
	finish.addEventListener("mouseover", function() {
		switch(document.querySelectorAll(".youlose").length){
			case 0:
				current.textContent = "Congratz You Win!! :)";
			default:
				current.textContent = "Sorry You Lose :(";
		}
	});

    /*-------------------------------------------------------------*/
}
