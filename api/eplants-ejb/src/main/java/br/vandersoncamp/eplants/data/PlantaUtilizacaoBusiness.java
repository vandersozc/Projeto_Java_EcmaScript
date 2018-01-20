package br.vandersoncamp.eplants.data;

import br.vandersoncamp.eplants.model.PlantaUtilizacao;
import br.vandersoncamp.eplants.service.PlantaUtilizacaoService;

import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
import java.util.List;

@RequestScoped
public class PlantaUtilizacaoBusiness {

    @Inject
    private PlantaUtilizacaoService service;


    public PlantaUtilizacao buscar(Long id) {
        return service.buscar(id);
    }

    public List<PlantaUtilizacao> pesquisar(String filterField, String filterData, String order) {
        return service.pesquisar(filterField, filterData, order);
    }

    public void criar(PlantaUtilizacao utilizacao) {
        service.gravar(utilizacao);
    }

    public void atualizar(PlantaUtilizacao utilizacao) {
        service.atualizar(utilizacao);
    }

    public void excluir(Long id) {
        service.excluir(id);
    }
}
