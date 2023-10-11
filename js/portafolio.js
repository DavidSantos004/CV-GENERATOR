import {env} from "./config.js";     
const apiUrl = `${env.ssl + env.hotsName}:${env.port}/perfiles`;
const perfilesContainer = document.getElementById("section-formularios")
const search =document.getElementById("search")
const formito = document.querySelector(".formularito")
const input = document.querySelector(".form-control");
const boton= document.querySelector("#boton_bsuqueda");

addEventListener("DOMContentLoaded", async () =>{
    formito.addEventListener('submit', async (e) => {
        e.preventDefault()
          let valor = input.value;
          console.log(valor)
          let res = await (await fetch(apiUrl)).json();
          
          res.forEach(i => {
           
            if ((valor) === i.id) {
                console.log("valor = id")
                console.log(i.imageUrl)
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
                                <button type="button" class="btn btn-outline-danger">Eliminar</button>
                                <button type="button" class="btn btn-outline-danger">Editar</button>
    
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
                                <button type="button" class="btn btn-outline-danger">Eliminar</button>
                                <button type="button" class="btn btn-outline-danger">Editar</button>
    
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

//Buscar usuario



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
                            <button type="button" class="btn btn-outline-danger">Eliminar</button>
                            <button type="button" class="btn btn-outline-danger">Editar</button>

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

