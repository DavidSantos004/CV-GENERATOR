import {env} from "./config.js";


const myForm = document.querySelector(".container")
const nombre = document.querySelector("#name_input")
const email = document.querySelector("#email_input")
const telefono = document.querySelector("#telephone_input")
const genero = document.querySelector("#subject_input")
const nDocumento = document.querySelector("#document_input")
const img = document.querySelector("#image-url-input")
const linkedin = document.querySelector("#linkedin")
const github = document.querySelector("#github")
const hobbies = document.querySelector("#hoobies")
const skills = document.querySelector("#Skills")
const Info = document.querySelector("#message_input")
const botonSubmit = document.querySelector("#form_button")
const uri = `${env.ssl + env.hotsName}:${env.port}`;
const config = {method: undefined, headers: {"Content-Type": "application/json"}};



export const getAll = async()=>{
    config.method = "GET";
    // config.body = "";
    let res = await (await fetch(`${uri}/perfiles`, config)).json();
    return res;
}


// botonSubmit.addEventListener("click", () => {
//   const userName = nombre.textContent;
//   const userEmail = email.textContent;
//   const userTelefono = telefono.textContent;
//   const userGenero = genero.textContent;
//   const userNDocumento = nDocumento.textContent;
//   const userImg = img.textContent;
//   const userLinkedin = linkedin.textContent;
//   const userGithub = github.textContent;
//   const userSkills = skills.textContent;
//   const userInfo = Info.textContent;
// });

// const userData = {
//   nombre: userName,
//   email: userEmail,
//   telefono: userTelefono,
//   documento: userNDocumento,
//   img: userImg,
//   linkedin: userLinkedin,
//   github: userGithub,
//   skills: userSkills,
//   info: userInfo,
// };

// fetch(api, {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(userData),
// })
//   .then((response) => response.json())
//   .then((data) => {
//     console.log("Datos guardados exitosamente:", data);
//   })
//   .catch((error) => {
//     console.error("Error al guardar datos:", error);
//   });
