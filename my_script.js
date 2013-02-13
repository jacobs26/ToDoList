$(document).ready(function(){

var currentList;
//Creates a new list and appeneds it to the active area,hiding old lists

$('#newListButton').click(function(){
		//$('#activearea div').hide();
		var listName = $('input[name=listNameEntry]').val();
			if(listName===""){
				listName="List Name";
			}
		listNameId=listName.replace(/\s/g, "");
		$('#activearea').append('<div id="'+listNameId+'"></div>');
		$('#'+listNameId).append('<hr> <h3 class="headers">'+listName+'</h3> <hr>');
		$('#'+listNameId).append('<table class="listTable"></table>');
		currentList=
	});

$(document).on('click','.headers',function(){
	console.log("here");
	$(this).siblings().show();
	$(this).parent().siblings().children(".listTable").hide();
	//$(this).parent().addClass('.currentList');
});

$(document).on('click','#enterButton',function(){
			var taskEntry = $('input[name=listEntry]').val();
			if(taskEntry===""){
				taskEntry="Blank Task";
			}
			$('.currentList').children('.listTable').append(
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

