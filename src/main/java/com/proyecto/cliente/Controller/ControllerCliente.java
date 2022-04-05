package com.proyecto.cliente.Controller;

import java.util.List;
import java.util.Optional;

import com.proyecto.cliente.Model.Cliente;
import com.proyecto.cliente.Repository.RepositoryCliente;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMethod;

@RestController
@RequestMapping("/api/clientes")
@CrossOrigin(origins = "*", methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE})
public class ControllerCliente {
    
    @Autowired
    private RepositoryCliente repository;

    @GetMapping("/")
    public List<Cliente> allClients(){
        return repository.findAll();
    }

	@GetMapping("/{id}")
    public Optional<Cliente> oneClients(@PathVariable int id){
        return repository.findById(id);
    }


    @PostMapping("/")
	public Cliente createClient(@RequestBody Cliente client) {
		return repository.save(client);
	}
	
	@PutMapping("/")
	public Cliente updateCliente(@RequestBody Cliente client) {
		if(client.getIdcliente()!=null){
            Optional<Cliente> cAux = repository.findById(client.getIdcliente());
            if(!cAux.isEmpty()){
				if(client.getDocumento()!=null){
                    cAux.get().setDocumento(client.getDocumento());
                }
				if(client.gettipdoc()!=null){
                    cAux.get().settipdoc(client.gettipdoc());
                }
                if(client.getNombres()!=null){
					cAux.get().setNombres(client.getNombres());
                }
				if(client.getApellidos()!=null){
                    cAux.get().setApellidos(client.getApellidos());
                }
				if(client.getDireccion()!=null){
                    cAux.get().setDireccion(client.getDireccion());
                }
				if(client.getEmail()!=null){
					cAux.get().setEmail(client.getEmail());
				}
                
                repository.save(cAux.get());
                return cAux.get();
            }else{
                return client;
            }
        }else{
            return client;
        }
	}
	
	@DeleteMapping("/{id}")
	public void deleteClient(@PathVariable("id") Integer id) {
		repository.deleteById(id);
	}
}
