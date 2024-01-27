function color(){
	for(i = 0; i < 70; i++){
		switch (document.getElementsByTagName("marquee")[i].style.color){
			case "aqua":
				document.getElementsByTagName("marquee")[i].style.color = "blue";
				break;
			case "blue":
				document.getElementsByTagName("marquee")[i].style.color = "purple";
				break;
			case "purple":
				document.getElementsByTagName("marquee")[i].style.color = "pink";
				break;
			case "pink":
				document.getElementsByTagName("marquee")[i].style.color = "white";
				break;
			case "white":
				document.getElementsByTagName("marquee")[i].style.color = "gray";
				break;
			case "gray":
				document.getElementsByTagName("marquee")[i].style.color = "red";
				break;
			case "red":
				document.getElementsByTagName("marquee")[i].style.color = "orange";
				break;
			case "orange":
				document.getElementsByTagName("marquee")[i].style.color = "yellow";
				break;
			case "yellow":
				document.getElementsByTagName("marquee")[i].style.color = "green";
				break;
			default:
				document.getElementsByTagName("marquee")[i].style.color = "aqua";
		}
	}

}