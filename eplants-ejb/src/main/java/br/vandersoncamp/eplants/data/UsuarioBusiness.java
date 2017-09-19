package br.vandersoncamp.eplants.data;

import br.vandersoncamp.eplants.model.Usuario;
import br.vandersoncamp.eplants.service.UsuarioService;

import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
import java.util.List;

@RequestScoped
public class UsuarioBusiness {

    @Inject
    private UsuarioService service;


    public Usuario buscar(Long id) {
        return service.buscar(id);
    }

    public List<Usuario> pesquisar() {
        return service.pesuisar();
    }

    public void criar(Usuario usuario) {
        service.gravar(usuario);
    }

    public void atualizar(Usuario usuario) {
        service.atualizar(usuario);
    }

    public void excluir(Long id) {
        service.excluir(id);
    }
}
