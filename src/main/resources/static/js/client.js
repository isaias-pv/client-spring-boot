const loadParam = () => {
    const url = window.location.search;
    const urlParams = new URLSearchParams(url);
    var param = urlParams.get('id');

    if(param){
        axios.get(`http://localhost:8080/api/clientes/${param}`)
            .then(function (response) {
                loadInfo(response.data);
            })
            .catch((error) => {
                location = '/'
            })
    }else{
        location = '/'
    }
        
}
    
function loadInfo(data){
    const $idClient = document.getElementById('idClient'), 
        $document = document.getElementById('document'),
        $typeDocument = document.getElementById('typeDocument'),
        $name    = document.getElementById('name'),
        $lastName = document.getElementById('lastName'),
        $direction = document.getElementById('direction'),
        $email = document.getElementById('email')

    $idClient.value = data.idcliente
    $document.value = data.documento;
    $typeDocument.value = data.tipdoc;
    $name.value = data.nombres;
    $lastName.value = data.apellidos;
    $direction.value = data.direccion;
    $email.value = data.email;
}

function editInfo(){
    axios.put(`http://localhost:8080/api/clientes/`, {
        idcliente: document.getElementById('idClient').value,
         documento: document.getElementById('document').value,
         tipdoc: document.getElementById('typeDocument').value,
         nombres: document.getElementById('name').value,
         apellidos: document.getElementById('lastName').value,
         direccion: document.getElementById('direction').value,
         email: document.getElementById('email').value
        })
        .then((response) => {
            location = `/client.html?id=${document.getElementById('idClient').value}`
            console.log(response);
        });
}

function deleteInfo(){
    axios.delete(`http://localhost:8080/api/clientes/${document.getElementById('idClient').value}`)
    .then((response) => {
        location = '/'
    });
}

document.addEventListener('click', (e) => {
    if(e.target.id == 'btnEditar') editInfo();

    if(e.target.id == 'btnEliminar') deleteInfo();
    
    if(e.target.id == 'btnRegresar') location = '/';
});


document.addEventListener('DOMContentLoaded', loadParam());