package com.brewer.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.brewer.model.Cerveja;
import com.brewer.repository.Cervejas;

@Service
public class CadastroCervejaService {
	
	@Autowired
	private Cervejas cervejas;
	
	
	public void salvar(Cerveja cerveja) {
		cervejas.save(cerveja);
	}
}
