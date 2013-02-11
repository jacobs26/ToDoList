$(document).ready(function(){
	//$('h1').fadeOut();
	var rowCount=1;
	$('#enterButton').click(function(){
			var taskEntry = $('input[name=listEntry]').val();

			if(rowCount===0)
			{
				$(".activelist").append(
				'<tr class="rowa"> <td>'+taskEntry+'<div class="uncheckbox"></div> </td> </tr>');
				rowCount=1;
			}
			else{
				$(".activelist").append(
					'<tr class="rowb"> <td>'+taskEntry+' <div class="uncheckbox"></div> </td> </tr>');
					rowCount=0;
					}
			$(".uncheckbox").on('click',function() {
				console.log("clicked");				
				$(this).toggleClass("checkedbox");
			});
		});
	
});

