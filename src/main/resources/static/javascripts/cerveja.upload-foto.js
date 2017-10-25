//$(function() {
//	var settings = {
//		type : 'json',
//		filelimit : 1,
//		allow : '*.(jpg|jpeg|png)',
//		action : '/brewer/fotos',
//		complete : function(resposta) {
//			var inputNomeFoto = $('input[name=foto]');
//			var inputContentType = $('input[name=contentType]');
//
//			var htmlFotoCervejaTemplate = $('#foto-cerveja').html();
//			var template = Handlebars.compile(htmlFotoCervejaTemplate);
//			var htmlFotoCerveja = template({
//				nomeFoto : resposta.nome
//			});
//
//			var container = $('.js-container-foto-cerveja');
//
//			var uploadDrop = $('#upload-drop');
//
//			inputNomeFoto.val(resposta.nome);
//			inputContentType.val(resposta.contentType);
//
//			uploadDrop.addClass('hidden');
//			container.append(htmlFotoCerveja);
//
//			$('.js-remove-foto').on('click', function() {
//				$('.js-foto-cerveja').remove();
//				uploadDrop.removeClass('hidden');
//				inputNomeFoto.val('');
//				inputContentType.val('');
//			});
//		}
//	};
//
//	UIkit.uploadSelect($('#upload-select'), settings);
//	UIkit.uploadDrop($('#upload-drop'), settings);
//});

var Brewer = Brewer || {};

Brewer.UploadFoto = (function() {
	function UploadFoto() {
		this.inputNomeFoto = $('input[name=foto]');
		this.inputContentType = $('input[name=contentType]');

		this.htmlFotoCervejaTemplate = $('#foto-cerveja').html();
		this.template = Handlebars.compile(this.htmlFotoCervejaTemplate);
		this.container = $('.js-container-foto-cerveja');

		this.uploadDrop = $('#upload-drop');
	}

	UploadFoto.prototype.iniciar = function() {
		var settings = {
			type : 'json',
			filelimit : 1,
			allow : '*.(jpg|jpeg|png)',
			action : this.container.data('url-fotos'),
			complete : onUploadCompleto.bind(this)
		}

		UIkit.uploadSelect($('#upload-select'), settings);
		UIkit.uploadDrop(this.uploadDrop, settings);
		
		if (this.inputNomeFoto.val()) {
			onUploadCompleto.call(this, {nome: this.inputNomeFoto.val(), contentType: this.inputContentType.val()});
		}
	}

	function onUploadCompleto(resposta) {
		this.inputNomeFoto.val(resposta.nome);
		this.inputContentType.val(resposta.contentType);

		this.uploadDrop.addClass('hidden');
		var htmlFotoCerveja = this.template({
			nomeFoto : resposta.nome
		});
		this.container.append(htmlFotoCerveja);

		$('.js-remove-foto').on('click', onRemoverFoto.bind(this));
	}

	function onRemoverFoto() {
		$('.js-foto-cerveja').remove();
		this.uploadDrop.removeClass('hidden');
		this.inputNomeFoto.val('');
		this.inputContentType.val('');
	}

	return UploadFoto;
})();

$(function() {
	var uploadFoto = new Brewer.UploadFoto();
	uploadFoto.iniciar();
});
