package br.vandersoncamp.eplants.data;

import br.vandersoncamp.eplants.model.PlantaFamilia;
import br.vandersoncamp.eplants.service.PlantaFamiliaService;

import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
import java.util.List;

@RequestScoped
public class PlantaFamiliaBusiness {

    @Inject
    private PlantaFamiliaService service;


    public PlantaFamilia buscar(Long id) {
        return service.buscar(id);
    }

    public List<PlantaFamilia> pesquisar() {
        return service.pesuisar();
    }

    public void criar(PlantaFamilia familia) {
        service.gravar(familia);
    }

    public void atualizar(PlantaFamilia familia) {
        service.atualizar(familia);
    }

    public void excluir(Long id) {
        service.excluir(id);
    }
}
