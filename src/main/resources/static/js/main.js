
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

document.addEventListener('DOMContentLoaded', getClients());

document.addEventListener('click', (e) => {
    if(e.target.id == "btn-ver"){
        location = '/client.html?id=' + e.target.dataset.id;
    }
})