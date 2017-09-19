package br.vandersoncamp.eplants.util;

import javax.enterprise.inject.Produces;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

public class AbstractPersist {

    @Produces
    @PersistenceContext(unitName = "eplantsPU")
    private EntityManager em;

    public EntityManager getEntityManager() {
        return em;
    }

}
