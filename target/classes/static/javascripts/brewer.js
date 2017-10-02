$(function() {
	var decimal = $('.js-decimal');
	decimal.maskMoney();
	
	var int = $('.js-int');
	int.maskMoney({precision: 0});
});