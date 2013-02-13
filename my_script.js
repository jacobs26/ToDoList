$(document).ready(function(){

var currentList;
//Creates a new list and appeneds it to the active area,hiding old lists

$('#newListButton').click(function(){
		var listName = $('input[name=listNameEntry]').val();
			if(listName===""){
				listName="List Name";
			}
		listNameId=listName.replace(/\s/g, "");
		$('#activearea').append('<div class="listElement" id="'+listNameId+'"></div>');
		$('#'+listNameId).append('<h3 class="headers">'+listName+'</h3> <hr>');
		currentList = listNameId;
		
	});

$(document).on('click','.listElement',function(){
	currentList=$(this).attr("id");
	console.log(currentList);
	$(this).siblings().children(".listDivs").hide();
	$(this).children().show();
	
});


$(document).on('click','#enterButton',function(){
			var taskEntry = $('input[name=listEntry]').val();
			if(taskEntry===""){
				taskEntry="Blank Task";
			}
			$('#'+currentList).append('<div class="listDivs"><div class="remove"></div>'+taskEntry+'<div class="uncheckbox"></div></div>');
		});


//This toggles the check boxes between checked and unchecked
	$(document).on('click', '.uncheckbox',function() {			
		$(this).toggleClass("checkedbox");
	});
//Removes  the checked boxes of each item in class .checkedbox
$('#doneText').click(function(){
		$('.checkedbox').parent().remove();
	});
//This removes the table row of each clicked remove button
	$(document).on('click','.remove',function(){
		$(this).parent().remove();
		});





});

