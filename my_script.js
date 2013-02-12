$(document).ready(function(){
	

//Creates a new list and appeneds it to the active area
$('#newListButton').click(function(){
		$('#activearea table').hide();
		var listName = $('input[name=listNameEntry]').val();
			if(listName===""){
				listName="List Name";
			}
		listNameId=listName.replace(/\s/g, "");
		$('#activearea').append('<div id="'+listNameId+'"> </div>');
		$('#'+listNameId).append('<h3>'+listName+'</h3>');
		//$('#listPanel').append('<div class="listElement" id="'+listNameId+'">'+listName+'</div>');
		//tableListId="table"+listNameId;
		$('#'+listNameId).append('<table> </table>');
		$('#'+listNameId).append('<div class="hideButton">'+listName+'</div>');
	});

$('#enterButton').click(function(){
			var taskEntry = $('input[name=listEntry]').val();
			if(taskEntry===""){
				taskEntry="Blank Task";
			}
			$("#"+tableListId).append(
				'<tr><td class="rowa"><div class="remove"></div>'+taskEntry+'<div class="uncheckbox"></div> </td> </tr>');
		});

		
$(document).on('click','.listElement',function(){
	var currentID=$(this).attr('id');
	$('#activearea').children().hide();
	$('#'+currentID).show();
});





//This toggles the check boxes between checked and unchecked
	$(document).on('click', '.uncheckbox',function() {			
		$(this).toggleClass("checkedbox");
	});
//Removes  the checked boxes of each item in class .checkedbox
$('#doneText').click(function(){
		$('.checkedbox').parent().parent().remove();
	});
//This removes the table row of each clicked remove button
	$(document).on('click','.remove',function(){
		$(this).parent().parent().remove();
		});





});

