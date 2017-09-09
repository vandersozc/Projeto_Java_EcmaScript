package br.vandersoncamp.eplants.rest;import br.vandersoncamp.eplants.model.Usuario;import br.vandersoncamp.eplants.service.UsuarioService;import javax.inject.Inject;import javax.ws.rs.*;import javax.ws.rs.core.*;import java.util.HashMap;import java.util.Map;@Path("usuarios")public class UsuarioResource {    @Context    private HttpHeaders headers;    @Context    private UriInfo uriInfo;    @Inject    private UsuarioService service;    @GET    @Path("uri")    @Produces(MediaType.APPLICATION_JSON)    public Response pegarUriDetails() {        Map<String, String> dados = new HashMap<>();        dados.put("host", uriInfo.getBaseUri().getHost());        dados.put("path", uriInfo.getPath());        dados.put("paramTeste", uriInfo.getQueryParameters().get("teste").toString());        return Response.ok(dados).build();    }    @GET    @Path("header")    @Produces(MediaType.APPLICATION_JSON)    public Response pegarHttpHeaders() {        Map<String, String> dados = new HashMap<>();        dados.put("strHeader", headers.getHeaderString("testeheader"));        dados.put("headerInteiro", headers.toString());        return Response.ok(dados).build();    }    @GET    @Produces(MediaType.APPLICATION_JSON)    public Response pesquisar(@DefaultValue("0") @QueryParam("offset") Integer offset,                              @DefaultValue("50") @QueryParam("limit") int limit,                              @QueryParam("sort")String sort) {        Map<String, Object> usuarios = new HashMap<>();        usuarios.put("offset", offset);        usuarios.put("limit", limit);        usuarios.put("sort", sort);        return Response.ok(usuarios).build();    }    @GET    @Path("{id:[0-9][0-9]*}")    @Produces(MediaType.APPLICATION_JSON)    public Response buscar(@PathParam("id") Long id) {        Usuario usuario = service.buscar(id);        if (usuario == null) {            return Response.status(Response.Status.NOT_FOUND).build();        }        return Response.ok(usuario).build();    }    @POST    @Produces(MediaType.APPLICATION_JSON)    @Consumes(MediaType.APPLICATION_JSON)    public Response criar(Usuario usuario) {        service.criar(usuario);        return Response.status(Response.Status.CREATED).entity(usuario).build();    }}