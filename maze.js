/*INFO2180 - Web Development 1 - Lab 4
Created by Shanielle A. Williams - 620085201 */

window.onload = main;
    
function main() {
    /*-------------------- Exercise 1 --------------------*/
    
	let wallColor = document.getElementById("boundary1");
	wallColor.addEventListener("mouseover", function() {
        	this.setAttribute("class","boundary youlose");
    	});
    
    /*-----------------------------------------------------*/

    /*---------------------- Exercise 2 -------------------*/
    	let wall = document.querySelectorAll(".boundary");
    	for(x = 0; x < wall.length-1;x++){
		wall[x].addEventListener("mouseover",function() {
			for(x = 0; x < wall.length-1;x++){
				document.getElementById("status").innerHTML = "Sorry You Lose!! :-(";
				wall[x].setAttribute("class", "boundary you lose");
			}
		});
    	}

    /*------------------------------------------------------*/

    
    /*---------------------- Exercise 4 ----------------------*/
	restart = document.getElementById("start");
	restart.addEventListener("click", function() {
		var walls = document.querySelectorAll(".boundary");
		if (walls.length != 0){
			for(var i = 0; i < walls.length; i++){
				if(walls[i].className == "boundary example"){
					continue;
				}
				walls[i].className = "boundary";
			}
		}

		status.innerHTML = "Move your mouse over the \"S\" to begin.";

		//location.reload();
}
	});
    /*---------------------------------------------------------*/

    /*---------------------- Exercise 5 -------------------------*/
	var finish = document.getElementById("end");
	var current = document.getElementById("status");
	finish.addEventListener("mouseover", function() {
		switch(document.querySelectorAll(".youlose").length){
			case 0:
				current.innerHTML = "Congratz You Win!! :)";
			default:
				current.innerHTML = "Sorry You Lose :(";
		}
	});

    /*-------------------------------------------------------------*/
}
