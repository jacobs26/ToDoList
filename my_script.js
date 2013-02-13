$(document).ready(function(){

/*
//checking to see if a previous sessioin for the site has been logged
	if(localStorage.lastSessionBody)
		{
			$('head').html(localStorage.lastSessionHead);
			$('body').html(localStorage.lastSessionBody);
		}
*/

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
		$('#'+listNameId).append('<h3 class="headers">'+listName+'</h3>');
		$('#'+listNameId).append('<div class="removeList"><div>');
		currentList = listNameId;
		
	});
//activates the list with a click(allows tasks to be added), hides the siblings but allows the headings to still be visible
$(document).on('click','.listElement',function(){
	currentList=$(this).attr("id");
	console.log(currentList);
	$(this).siblings().children(".listDivs").hide("highlight");
	$(this).children().show("highlight");
	
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
		$('.checkedbox').parent().hide("highlight",function(){
			$('.checkedbox').parent().remove()});
	});
//This removes the row of each clicked remove button
	$(document).on('click','.remove',function(){
		$(this).parent().remove()});
//removes lists
	$(document).on('click','.removeList',function(){
		$(this).parent().remove()});

	//observes changes to head and body and stores to local storage
	/*
	MutationObserver = window.MutationObserver || WebKitMutationObserver;
		var changeObserver=new MutationObserver(function(){
			localStorage.lastSessionHead = $('head').html();
			localStorage.lastSessionBody=$('body').html();
		});

	changeObserver.observe(document,{
		subtree:true,
		attribute:true,
		childList:true
		});
	*/

});

