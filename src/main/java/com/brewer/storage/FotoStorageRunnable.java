package com.brewer.storage;

import org.springframework.web.context.request.async.DeferredResult;
import org.springframework.web.multipart.MultipartFile;

import com.brewer.dto.FotoDto;

public class FotoStorageRunnable implements Runnable {

	private MultipartFile[] files;
	private DeferredResult<FotoDto> resultado;
	private FotoStorage fotoStorage;
	
	public FotoStorageRunnable(MultipartFile[] files, DeferredResult<FotoDto> resultado, FotoStorage fotoStorage) {
		this.files = files;
		this.resultado = resultado;
		this.fotoStorage = fotoStorage;
	}

	@Override
	public void run() {
		String nome = this.fotoStorage.salvarTemporariamente(files);
		String contentType = files[0].getContentType();
		this.resultado.setResult(new FotoDto(nome, contentType));
	}
}
