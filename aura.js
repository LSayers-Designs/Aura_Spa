"use strict"

/*Name: Letisha Rahming
Project Title:  Aura_Spa
File Name: aura.js
Description:  Challenge Excercise using JS, HTML and CSS
Creation Date:	1/10/2020
Date Completed: In Progress
Last Updated: 1/15/2020*/


var clientName = window.prompt("Welcome to the Aura Spa!  My name is Java.  What is your name precious soul?");
var color = window.prompt("Tell me, what color speaks to you today? \nCrimson \nSienna \nGold \nTurquoise \nAqua \nIndigo or Lavendar perhaps? \nFeel free to enter a different color, just don't include any spaces."
);
	
if(clientName =="" || color ==""){
	alert("It's ok to be shy.  Perhaps we'll chat further next time.");
	document.getElementsByTagName("body")[0].style.backgroundColor="slateblue";
	document.getElementById("clientName").textContent = "May the hue of this background bring harmony to your soul.  Namaste."
}
	else{
		document.getElementById("clientName").textContent = "It is a pleasure to meet you, "+clientName+".The hue of this background is now harmonized with your soul.  Namaste.";
		document.getElementsByTagName("body")[0].style.backgroundColor=color;
	}
