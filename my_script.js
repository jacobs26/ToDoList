$(document).ready(function(){
	//$('h1').fadeOut();
	$('#enterButton').click(function(){
			var taskEntry = $('input[name=listEntry]').val();
			if(taskEntry===""){
				taskEntry="Blank Task";
			}
			$(".activelist").append(
				'<tr class="rowa"> <td><div class="remove"></div>' +taskEntry+'<div class="uncheckbox"></div> </td> </tr>');
	});

	
	$(document).on('click', '.uncheckbox',function() {
		console.log("clicked");				
		$(this).toggleClass("checkedbox");
	});
	$(document).on('click','.remove',function(){
		$(this).parent().parent().remove();
		});
	$('#nameListButton').click(function(){
			var listName = $('input[name=listNameEntry]').val();
			if(listName===""){
				listName="List Name";
			}
	});

$('#doneText').click(function(){
		$('.checkedbox').parent().parent().remove();
	});

});

