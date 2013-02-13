$(document).ready(function(){
//this variable stores the id of the list currently active
var currentList;
//Creates a new list and appends it to the active area, 
$('#newlistbutton').click(function(){
		var listName = $('input[name=listnameentry]').val();
			if(listName===""){
				listName="List Name";
			}
		listNameId=listName.replace(/\s/g, "");
		$('#activearea').append('<div class="listElement" id="'+listNameId+'"></div>');
		$('#'+listNameId).append('<h3 class="headers">'+listName+'</h3> <hr>');
		currentList = listNameId;
		
	});
//activates the list with a click(allows tasks to be added), hides the siblings but allows the headings to still be visible
$(document).on('click','.listElement',function(){
	currentList=$(this).attr("id");
	console.log(currentList);
	$(this).siblings().children(".listDivs").hide();
	$(this).children().show();
	
});

//allows tasks to be added to the listElements
$(document).on('click','#enterbutton',function(){
			var taskEntry = $('input[name=listentry]').val();
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
$('#donetext').click(function(){
		$('.checkedbox').parent().remove();
	});
//This removes the table row of each clicked remove button
	$(document).on('click','.remove',function(){
		$(this).parent().remove();
		});
});

