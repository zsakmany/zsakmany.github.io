function refreshHeight($target){
	$target.height($(window).height());
}
$(document).ready(function(){
	var $c=$("section");
	$(window).resize(function(){		
		refreshHeight($c);
	});
	refreshHeight($c);
});