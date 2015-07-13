(function($){
	$.fn.giro = function(){
		return this.each(function() {
			var element = $(this);						
			if (element.data('giro')) return;
			var myplugin = new giro(this);
			element.data('giro', myplugin);
			element.data('giro').methods.init();
			
		});
	};
	
	var giro = function(target){
		var componentObj = {
			index: 1,
			methods:{
				init:function(){
					window.setInterval(function(){
						componentObj.methods.next();
					}, (325));
				},
				next:function(){
					$(target).css({
						'background-image':'url("'+urlIndepth+'images/360/'+componentObj.index+'.png")'
					});
					if(componentObj.index < 9){
						componentObj.index++;
					}else{
						componentObj.index = 1;
					}
				}
			}
		};
		return componentObj;
	};	
})(jQuery);
$(document).ready(function(){
	$("#indepth_ball").giro();
});