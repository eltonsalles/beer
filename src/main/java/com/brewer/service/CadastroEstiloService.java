package com.brewer.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.brewer.model.Estilo;
import com.brewer.repository.Estilos;

@Service
public class CadastroEstiloService {

	@Autowired
	private Estilos estilos;
	
	public void salvar(Estilo estilo) {
		estilos.save(estilo);
	}
}
