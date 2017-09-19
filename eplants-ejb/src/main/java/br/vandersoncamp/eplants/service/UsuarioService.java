package br.vandersoncamp.eplants.service;import br.vandersoncamp.eplants.model.Usuario;import javax.ejb.Stateless;import javax.ejb.TransactionAttribute;import javax.ejb.TransactionAttributeType;import javax.inject.Inject;import javax.persistence.EntityManager;import java.util.List;@Stateless@TransactionAttribute(TransactionAttributeType.SUPPORTS)public class UsuarioService {    @Inject    private EntityManager em;    public Usuario buscar(final Long id) {        return em.find(Usuario.class, id);    }    public List<Usuario> pesquisar() {        return em.createQuery("FROM " + Usuario.class.getName()).getResultList();    }    @TransactionAttribute(TransactionAttributeType.REQUIRED)    public void gravar(Usuario usuario) {        em.persist(usuario);    }    @TransactionAttribute(TransactionAttributeType.REQUIRED)    public void atualizar(Usuario usuario) {        em.merge(usuario);    }    @TransactionAttribute(TransactionAttributeType.REQUIRED)    public void excluir(final Long id) {        em.remove(buscar(id));    }}