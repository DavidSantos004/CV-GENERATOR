import {env} from "./config.js";


document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact_form");

    form.addEventListener("submit", function (event) {
      event.preventDefault(); 

      
      const name = document.getElementById("name_input").value;
      const email = document.getElementById("email_input").value;
      const telephone = document.getElementById("telephone_input").value;
      const subject = document.getElementById("subject_input").value;
      const documentNumber = document.getElementById("document_input").value;
      const imageUrl = document.getElementById("image-url-input").value;
      const profesion = document.getElementById("profesion").value
      const yearsExperience = document.getElementById("yearsExperience").value
      const birthday = document.getElementById("Birthday").value;
      const estudios = document.getElementById("estudios").value;
      const linkedin = document.getElementById("linkedin").value;
      const github = document.getElementById("github").value;
      const hobbies = document.getElementById("hoobies").value;
      const skills = document.getElementById("Skills").value;
      const message = document.getElementById("message_input").value;

     
      const apiUrl = `${env.ssl + env.hotsName}:${env.port}/perfiles`;
                    
      //metodo POST:
      fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: documentNumber,
          name,
          email,
          telephone,
          subject,
          imageUrl,
          profesion,
          estudios,
          yearsExperience,
          birthday,
          linkedin,
          github,
          hobbies,
          skills,
          message,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Respuesta del servidor:", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    });
  });
