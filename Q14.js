//switch case statment

function myFunction() {
  var d = new Date();
  var n = d.getDay()
  let day;
  switch(n)
  {
	  case 0:
		day = "Sun";
		break;
	case 1:
		day = "Mon";
		break;
	case 2:
		day = "Tue";
		break;
	case 3:
		day = "Wen";
		break;
	case 4:
		day = "Thur";
		break;
	case 5:
		day = "Fri";
		break;
	case 6:
		day = "Sat";
		break;
  }
  
  console.log(day);
}
myFunction();