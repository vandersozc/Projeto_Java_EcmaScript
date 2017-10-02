package br.vandersoncamp.eplants.data;

import br.vandersoncamp.eplants.model.Planta;
import br.vandersoncamp.eplants.service.PlantaService;

import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
import java.util.List;

@RequestScoped
public class PlantaBusiness {

    @Inject
    private PlantaService service;


    public Planta buscar(Long id) {
        return service.buscar(id);
    }

    public List<Planta> pesquisar() {
        return service.pesuisar();
    }

    public void criar(Planta planta) {
        service.gravar(planta);
    }

    public void atualizar(Planta planta) {
        service.atualizar(planta);
    }

    public void excluir(Long id) {
        service.excluir(id);
    }
}
