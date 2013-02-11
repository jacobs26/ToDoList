$(document).ready(function(){
	var rowCount=0;
	if(rowCount===0)
	{
		$(".activelist").append(
			"<tr class='rowa'> <td>Task 1</td> </tr>");
			rowCount=1;
	}
	else{
		$(".activelist").append(
			"<tr class='rowb'> <td>Task 1</td> </tr>");
		rowCount=0;
	}
});