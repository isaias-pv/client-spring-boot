package com.proyecto.cliente.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.proyecto.cliente.Model.Cliente;

@Repository
public interface RepositoryCliente extends JpaRepository<Cliente, Integer>{
    // List<Cliente> findByName(String name);
}