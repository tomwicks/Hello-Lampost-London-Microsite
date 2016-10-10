// =================================================================
// 	Mediapreview
// 	Global Javascript
// =================================================================

// Lazy Load The Image 
$("img.lazy").lazyload({
	threshold : 200,
	effect : "fadeIn"
});
$(".js-to-top").click(function() {
	$("html, body").animate({ scrollTop: 0 }, "slow");
	return false;
});