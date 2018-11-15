var toDoList = Array();
$(document).ready(function(){
	
	$("#task").keypress(function(e){
		if (event.which == 13){
			console.log('Working');
			e.preventDefault();
			addelements();
		}
	});
	
});

function addelements(){
	var x = $("#task").val();
		toDoList.push(x);
		$("#task").val("");
		$("p").html(function(i,old){
			return old + "<p>" + x +"</p>" ;
		});
}
/*$("#submit").click(function(){
		addelements();
	}); */