import {env} from "./config.js";     
const apiUrl = `${env.ssl + env.hotsName}:${env.port}/perfiles`;
const perfilesContainer = document.getElementById("section-formularios")
const formito = document.querySelector(".formularito")
const input = document.querySelector(".form-control");
const eliminar = document.getElementById("eliminar")


addEventListener("DOMContentLoaded", async () =>{
    formito.addEventListener('submit', async (e) => {
        //Buscar usuario
        e.preventDefault()
          let valor = input.value;
          console.log(valor)
          let res = await (await fetch(apiUrl)).json();
          
          res.forEach(i => {
           
            if ((valor) === i.id) {
                console.log("valor = id")
                perfilesContainer.innerHTML = `
                <div class="container-fluid py-5" id="about">
                <div class="container">
                    <div class="position-relative d-flex align-items-center justify-content-center">
                        <h1 class="display-1 text-uppercase text-white" style="-webkit-text-stroke: 1px #dee2e6;">About</h1>
                        <h1 class="position-absolute text-uppercase text-primary">About Me</h1>
                    </div>
                    <div class="row align-items-center">
                        <div class="col-lg-5 pb-4 pb-lg-0" style="
                        display: flex;
                        justify-content: center;
                    ">
                            <img class="img-fluid rounded w-100" src="${i.imageUrl}" alt="">
                        </div>
                        <div class="col-lg-7">
                            <h3 class="mb-4">${i.profesion}</h3>
                        <h4 class="mb-4">ID de identificacion: <b>${i.id}</b></h4>
                            
                            
                            <p>${i.message}</p>
                            <div class="row mb-3">
                                <div class="col-sm-6 py-2"><h6>Name: <span class="text-secondary">${i.name}</span></h6></div>
                                <div class="col-sm-6 py-2"><h6>Genero: <span class="text-secondary">${i.subject}</span></h6></div>
                                <div class="col-sm-6 py-2"><h6>Birthday: <span class="text-secondary">${i.birthday} </span></h6></div>
                                <div class="col-sm-6 py-2"><h6>Estudios: <span class="text-secondary">${i.estudios} </span></h6></div>
                                <div class="col-sm-6 py-2"><h6>Skills: <span class="text-secondary">${i.skills} </span></h6></div>
                                <div class="col-sm-6 py-2"><h6>Experience: <span class="text-secondary">${i.yearsExperience} Years</span></h6></div>
                                <div class="col-sm-6 py-2"><h6>Phone: <span class="text-secondary">${i.telephone}</span></h6></div>
                                <div class="col-sm-6 py-2"><h6>Email: <span class="text-secondary">${i.email}</span></h6></div>
                                <div class="col-sm-6 py-2"><h6>Linkedin: <span class="text-secondary"><a href="${i.linkedin} ">Dale un vistazo :)</a></span></h6></div>
                                <div class="col-sm-6 py-2"><h6>Github: <span class="text-secondary"><a href="${i.github} ">Dale un vistazo :)</a></span></h6></div>
                                <button type="button" class="btn btn-outline-danger" data-id="${i.id}" id="eliminar">Eliminar</button>
                                <button type="button" class="btn btn-outline-danger" data-id="${i.id}" id="eliminar">Editar</button>
    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr>
            <hr>
                  `;
            } 
            else if (valor === "") {
                perfilesContainer.innerHTML = "";
                for (let i = 0; i < res.length; i++) {
                  perfilesContainer.insertAdjacentHTML(
                    "beforeend",
                    `
                <div class="container-fluid py-5" id="about">
                <div class="container">
                    <div class="position-relative d-flex align-items-center justify-content-center">
                        <h1 class="display-1 text-uppercase text-white" style="-webkit-text-stroke: 1px #dee2e6;">About</h1>
                        <h1 class="position-absolute text-uppercase text-primary">About Me</h1>
                    </div>
                    <div class="row align-items-center">
                        <div class="col-lg-5 pb-4 pb-lg-0" style="
                        display: flex;
                        justify-content: center;
                    ">
                            <img class="img-fluid rounded w-100" src="${res[i].imageUrl}" alt="">
                        </div>
                        <div class="col-lg-7">
                            <h3 class="mb-4">${res[i].profesion}</h3>
                        <h4 class="mb-4">ID de identificacion: <b>${res[i].id}</b></h4>
                            <p>${res[i].message}</p>
                            <div class="row mb-3">
                                <div class="col-sm-6 py-2"><h6>Name: <span class="text-secondary">${res[i].name}</span></h6></div>
                                <div class="col-sm-6 py-2"><h6>Genero: <span class="text-secondary">${res[i].subject}</span></h6></div>
                                <div class="col-sm-6 py-2"><h6>Birthday: <span class="text-secondary">${res[i].birthday} </span></h6></div>
                                <div class="col-sm-6 py-2"><h6>Estudios: <span class="text-secondary">${res[i].estudios} </span></h6></div>
                                <div class="col-sm-6 py-2"><h6>Skills: <span class="text-secondary">${res[i].skills} </span></h6></div>
                                <div class="col-sm-6 py-2"><h6>Experience: <span class="text-secondary">${res[i].yearsExperience} Years</span></h6></div>
                                <div class="col-sm-6 py-2"><h6>Phone: <span class="text-secondary">${res[i].telephone}</span></h6></div>
                                <div class="col-sm-6 py-2"><h6>Email: <span class="text-secondary">${res[i].email}</span></h6></div>
                                <div class="col-sm-6 py-2"><h6>Linkedin: <span class="text-secondary"><a href="${res[i].linkedin} ">Dale un vistazo :)</a></span></h6></div>
                                <div class="col-sm-6 py-2"><h6>Github: <span class="text-secondary"><a href="${res[i].github} ">Dale un vistazo :)</a></span></h6></div>
                                <button type="button" class="btn btn-outline-danger"data-id="${res.id}" id="eliminar" >Eliminar</button>
                                <button type="button" class="btn btn-outline-danger" data-id="${res.id}" id="editar">Editar</button>
    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr>
            <hr>
                  `
                  );
                }
              
            }
             
            });
          });
          
    
})

//metodo GET
fetch(apiUrl)
    .then((response) => {
        if (!response.ok){
            throw new Error(`No se pudo obtener los datos. Codigo de estado: ${response.status}`)
        }
        return response.json();
    })
    .then((data)=>{

        data.forEach((perfil)=>{
            const perfilElement = document.createElement("div")
            perfilElement.innerHTML=`
        <div class="container-fluid py-5" id="about">
            <div class="container">
                <div class="position-relative d-flex align-items-center justify-content-center">
                    <h1 class="display-1 text-uppercase text-white" style="-webkit-text-stroke: 1px #dee2e6;">About</h1>
                    <h1 class="position-absolute text-uppercase text-primary">About Me</h1>
                </div>
                <div class="row align-items-center">
                    <div class="col-lg-5 pb-4 pb-lg-0" style="
                    display: flex;
                    justify-content: center;
                ">
                        <img class="img-fluid rounded w-100" src="${perfil.imageUrl}" alt="">
                    </div>
                    <div class="col-lg-7">
                        
                        <h3 class="mb-4">${perfil.profesion}</h3>
                        <h4 class="mb-4">ID de identificacion: <b>${perfil.id}</b></h4>

                        <p>${perfil.message}</p>
                        <div class="row mb-3">
                            <div class="col-sm-6 py-2"><h6>Name: <span class="text-secondary">${perfil.name}</span></h6></div>
                            <div class="col-sm-6 py-2"><h6>Genero: <span class="text-secondary">${perfil.subject}</span></h6></div>
                            <div class="col-sm-6 py-2"><h6>Birthday: <span class="text-secondary">${perfil.birthday} </span></h6></div>
                            <div class="col-sm-6 py-2"><h6>Estudios: <span class="text-secondary">${perfil.estudios} </span></h6></div>
                            <div class="col-sm-6 py-2"><h6>Skills: <span class="text-secondary">${perfil.skills} </span></h6></div>
                            <div class="col-sm-6 py-2"><h6>Experience: <span class="text-secondary">${perfil.yearsExperience} Years</span></h6></div>
                            <div class="col-sm-6 py-2"><h6>Phone: <span class="text-secondary">${perfil.telephone}</span></h6></div>
                            <div class="col-sm-6 py-2"><h6>Email: <span class="text-secondary">${perfil.email}</span></h6></div>
                            <div class="col-sm-6 py-2"><h6>Linkedin: <span class="text-secondary"><a href="${perfil.linkedin} ">Dale un vistazo :)</a></span></h6></div>
                            <div class="col-sm-6 py-2"><h6>Github: <span class="text-secondary"><a href="${perfil.github} ">Dale un vistazo :)</a></span></h6></div>
                            <button type="button" class="btn btn-outline-danger" data-id="${perfil.id}" id="eliminar">Eliminar</button>
                            <button type="button" class="btn btn-outline-danger" data-id="${perfil.id}" id="editar">Editar</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr>
        <hr>
            `
            perfilesContainer.appendChild(perfilElement)
        })
    })
.catch((error)=>{
    console.error("Error", error)
})

//metodo delete
document.addEventListener('DOMContentLoaded', function () {
    
    document.addEventListener('click', function (e) {
        if (e.target && e.target.id === 'eliminar') {
            console.log("aaaaaaaa")
          const perfilId = e.target.getAttribute('data-id');
          console.log(perfilId)
          eliminarPerfil(perfilId);
        }
      });
    });
    
    function eliminarPerfil(perfilId) {

        const url = `${apiUrl}/${perfilId}`
        fetch(url, {
            method:'DELETE',
            headers:{
                'Content-Type': 'application/json',
            }
        })
        .then(response =>{
            if (response.ok){
                console.log(`Perfil con ID ${perfilId} eliminado exitosamente.`)
            }
            else{
                console.error(`Error al eliminar el perfil con ID ${perfilId}.`);
            }
        })
        .catch(error =>{
            console.error('Error en la solicitud DELETE:', error);
        })
        //funciona porfissss
}


document.addEventListener('click', function (e) {
    if (e.target && e.target.id === 'editar') {
        console.log("aaaaaaaa")
      const perfilId = e.target.getAttribute('data-id');
      console.log('Editar perfil con ID:', perfilId);
  
      // Muestra el modal
      const modal = document.getElementById('modal');
      modal.style.display = 'block';
  
      fetch(`${apiUrl}/${perfilId}`, {
        method:"GET",
        headers:{
            'Content-Type': 'application/json',
        },
      })
      .then((response)=>{
        if (response.ok){
            return response.json();
        }
        else{
            throw new error(`No se pudo obtener los datos del usuario. Codigo de estado: ${response.status}`)
        }
      })
      .then((usuario)=>{
        document.getElementById('name_input').value = usuario.name
        document.getElementById('email_input').value = usuario.email
        document.getElementById('telephone_input').value = usuario.telephone
        document.getElementById('subject_input').value = usuario.subject
        document.getElementById('document_input').value = usuario.id
        document.getElementById('image-url-input').value = usuario.imageUrl
        document.getElementById('profesion').value = usuario.profesion
        document.getElementById('estudios').value = usuario.estudios
        console.log(usuario)
        document.getElementById('yearsExperience').value = usuario.yearsExperience
        document.getElementById('Birthday').value = usuario.birthday
        document.getElementById('linkedin').value = usuario.linkedin
        document.getElementById('github').value = usuario.github
        document.getElementById('hoobies').value = usuario.hobbies
        document.getElementById('Skills').value = usuario.skills
        document.getElementById('message_input').value = usuario.message

      })
    }
  });
  
 
  document.addEventListener('click', function (e) {
    if (e.target && e.target.className === 'close') {
      const modal = document.getElementById('modal');
      modal.style.display = 'none';
    }
  });
  
  
  document.getElementById('editarForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const updatedUserData={
        id: document.getElementById('document_input').value ,
        name: document.getElementById('name_input').value ,
        email: document.getElementById('email_input').value,
        telephone:document.getElementById('telephone_input').value , 
        subject:document.getElementById('subject_input').value , 
        imageUrl:document.getElementById('image-url-input').value ,
        profesion:document.getElementById('profesion').value ,
        yearsExperience:document.getElementById('yearsExperience').value ,
        birthday:document.getElementById('Birthday').value ,
        linkedin:document.getElementById('linkedin').value ,
        github:document.getElementById('github').value ,
        hobbies:document.getElementById('hoobies').value ,
        skills:document.getElementById('Skills').value ,
        message:document.getElementById('message_input').value 
    }
    const usuarioId = document.getElementById('document_input').value
    fetch(`${apiUrl}/${usuarioId}`,{
        method: 'PUT',
        headers:{
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedUserData),
    })
    .then((response)=>{
        if (response.ok){
            console.log(`Datos del usuario con ID ${usuarioId} actualizados exitosamente.`);
            const modal = document.getElementById('modal');
            modal.style.display = 'none';
        }
        else{
            throw new Error(`Error al actualizar los datos del usuario. Código de estado: ${response.status}`);
        }
    })
    .catch((error) => {
        console.error('Error al actualizar los datos del usuario:', error);
      });


    
  });
  

