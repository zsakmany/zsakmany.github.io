function refreshHeight($target){
	$target.height($(window).height());
    console.log($(window).height());
}
$(document).ready(function(){
	var $c=$(".vCentered");
	$(window).resize(function(){		
		refreshHeight($c);
	});
	refreshHeight($c);
});