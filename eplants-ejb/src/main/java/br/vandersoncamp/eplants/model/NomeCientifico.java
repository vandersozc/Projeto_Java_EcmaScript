package br.vandersoncamp.eplants.model;import javax.persistence.*;import javax.validation.constraints.NotNull;import javax.validation.constraints.Size;import javax.xml.bind.annotation.XmlRootElement;import java.io.Serializable;@Entity@XmlRootElement@Table(name = "nomes_cientificos")@SequenceGenerator(name = "seq_nome_cientifico", sequenceName = "seq_nome_cientifico", initialValue = 1, allocationSize = 1)public class NomeCientifico implements Serializable {    private static final long serialVersionUID = 1L;    @Id    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seq_nome_cientifico")    private Long id;    @NotNull    @Size(max = 255)    @Column(name = "nome", nullable = false)    private String nome;    @NotNull    @Column(name = "registro_padrao", nullable = false, columnDefinition="boolean default false")    private Boolean registroPadrao;    public Long getId() {        return id;    }    public void setId(Long id) {        this.id = id;    }    public String getNome() {        return nome;    }    public void setNome(String nome) {        this.nome = nome;    }    public Boolean getRegistroPadrao() {        return registroPadrao;    }    public void setRegistroPadrao(Boolean registroPadrao) {        this.registroPadrao = registroPadrao;    }}