/*INFO2180 - Web Development 1 - Lab 4
Created by Shanielle A. Williams - 620085201 */

window.onload = main;
    
function main() {
    /*------------ Exercise 1 ---------------*/
    
    let wallColor = document.getElementById("boundary1");
    wallColor.onmouseover = function() {
        this.className = "boundary youlose";
    });
    
    /*---------------------------------------*/
}
