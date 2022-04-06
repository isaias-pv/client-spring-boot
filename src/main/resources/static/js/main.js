
function getClients(){
    axios.get('http://localhost:8080/api/clientes/')
    .then((response) => {
            loadClients(response.data);
        });
}


function loadClients(data = []){

    const $tbody = document.getElementById('tbody');

    data.forEach((client) => {
        const $tr = document.createElement("tr");
        $tr.innerHTML = `
        <td>${client.documento}</td>
        <td>${client.nombres + client.apellidos}</td>        
        <td>${client.email}</td>
        <td><button type="button" class="btn btn-primary" id="btn-ver" data-id="${client.idcliente}">Ver</button><td>
        `;

        $tbody.appendChild($tr);
    });

}

function saveClient(){
    axios.post(`http://localhost:8080/api/clientes/`, {
         documento: document.getElementById('document').value,
         tipdoc: document.getElementById('typeDocument').value,
         nombres: document.getElementById('name').value,
         apellidos: document.getElementById('lastName').value,
         direccion: document.getElementById('direction').value,
         email: document.getElementById('email').value
        })
        .then((response) => {
            location = `/`
            console.log(response);
        });
}

document.addEventListener('DOMContentLoaded', getClients());

document.addEventListener('click', (e) => {
    if(e.target.id == "btn-ver"){
        location = '/client.html?id=' + e.target.dataset.id;
    }else if(e.target.id == "btnGuardar"){
        saveClient();
    }
})