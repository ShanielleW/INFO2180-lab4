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
				document.getElementById("status").innerHTML = "You Lose!! :-( Touched Wall";
				
				wall[x].setAttribute("class", "boundary youlose");
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
		
		for(x = 0; x < wall.length-1;x++){
			if(document.querySelectorAll(".youlose").length == 0){
				current.innerHTML = "Congratz You Win!! :)";
			}
		}
		location.reload();
		 
		
	});

    /*-------------------------------------------------------------*/

    /*---------------------- Exercise 6 -----------------------------*/
	maze = document.getElementById("maze");
	maze.addEventListener("mouseleave", function() {
		s = 0;
		while(s < wall.length){
			document.getElementById("status").innerHTML = "That's Cheating Stay In Bounds >:(";
			
			wall[s].setAttribute("class","boundary youlose");
			s++;
		}
	})
	
	
	
    /*---------------------------------------------------------------*/
}
