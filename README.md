# Academy Backend database

<details>
  <summary>Contenido 📝</summary>
  <ol>
    <li><a href="#objetivo">Objetivo</a></li>
    <li><a href="#sobre-el-proyecto">Sobre el proyecto</a></li>
    <li><a href="#stack">Stack</a></li>
    <li><a href="#diagrama-bd">Diagrama</a></li>
    <li><a href="#instalación-en-local">Instalación</a></li>
    <li><a href="#endpoints">Endpoints</a></li>
    
  </ol>
</details>

## Objetivo
El proyecto final de Bootcamp Full Stack consta de dos partes, Frontend y Backend. Se espera que el alumnado demuestre todos los conocimientos adquiridos a lo largo de la formación.
Respecto a la parte backend, el alumnado combinará los conocimientos adquiridos en las diferentes tecnologías Backend: Node.js + Express, combinado bien con MySQL/TypeORM o con MongoDB.

## Sobre el proyecto
Una vez analizadas las necesidades del proyecto, de libre temática, se espera que el alumnado desarrolle una API REST para nutrir las vistas de frontend. La cual sea capaz de:

1. Registro de usuarios.
2. Login de usuarios + token + middleware.
3. Middleware para los roles de usuario.
4. CRUD de los diferentes modelos.
5. Al menos una relación many-to-many y otra one-to-many.
6. Migraciones.
7. Seeders para las diferentes tablas.
8. Requisitos imprescindibles del proyecto:
- Buen naming en las variables.
- Uso de servicios para no sobrecargar los controladores.
- Homogeneidad de código.
- Aplicación de buenas prácticas de desarrollo, tales como:
    > Utilizar nombres de variables, funciones y clases descriptivos y significativos.
    > Escribir código legible y fácil de entender, con una estructura clara y coherente.
    > Escribir comentarios claros y concisos que expliquen el propósito y la funcionalidad del código.
    > Utilizar constantes en lugar de valores literales para hacer el código más fácil de mantener y modificar.
    > Dividir el código en funciones o métodos más pequeños y específicos, para hacerlo más fácil de entender y depurar.
    > Evitar la duplicación de código, utilizando funciones o métodos genéricos en su lugar.
    > Utilizar estructuras de control de flujo de forma clara y coherente, evitando anidaciones excesivas.
    > Utilizar excepciones para manejar errores y situaciones imprevistas, en lugar de usar comprobaciones condicionales complejas.
    > Realizar pruebas unitarias para asegurarse de que el código funcione correctamente en todas las situaciones previstas.
    > Uso correcto de Gl T.
    > Presentación de README imprescindible.
- Extras:
    > Sistema de paginación.
    > Proyecto dockerizado.





## Stack
1. Para el desarrollo del backend se utilizará TypeOrm.
2. Debemos usar ES6 o TS, se valorará el dominio sobre las promesas, así como
la funcionalidad de async/await.
3. El proyecto se subirá a un repositorio público de GitHub y se valorará la existencia de ramas o trabajo en features (Git Flow), así como diversos commits con la evolución del proyecto.

## Endpoints
<details>
<summary>Endpoints</summary>

- REGISTER/LOGIN

    //ADMIN, PROFESSOR, STUDENT
    - Registro de usuarios.

            POST http://localhost:3000/api/users/create
        body:
        ``` js
            {
		         "firstName": "Beatriz",
		         "email": "student@gmail.com",
		         "password": "12345678"
            }
        ```

    //ADMIN PROFESSOR, STUDENT
    - Login de usuarios. 

            POST http://localhost:3000/api/auth/login  
        body:
        ``` js
            {
                "email": "Ozella.Bosco@yahoo.com",
                "password": "12345678"
            }
        ```
    
- APPOINTMENTS INFO

    //ADMIN, PROFESSOR
    - Creación de citas/tutorías.
    
            POST http://localhost:3000/api/appointments/create
        
        body:
        ```js
            {
                "day_date": "2024-09-03T15:48:02.000Z",
                "description": "blablabla",
                "professor":4,
                "student":"43",
                "price": "123"
                
            }

    
    //STUDENT
    - Ver todas las citas que tengo como estudiante (solo las propias).
        
            GET http://localhost:3000/api/appointments/student/appointments


    //ADMIN, PROFESSOR, STUDENT
    - Eliminación de citas
    
            DELETE http://localhost:3000/api/appointments/2
    
    
    //ADMIN, PROFESSOR
    - Editar citas.
    
            PUT http://localhost:3000/api/appointments/3

        body:
        ```js
            {
                "day_date": "2024-08-03T15:48:02.000Z",
	            "description": "Lorem ipsum.",
	            "professor":5,
	            "student":9,
	            "price": 9734
                
            }

    //PROFESSOR
    - Ver todas las citas existentes conmigo (como profesor).
    
            GET http://localhost:3000/api/appointments/professor/appointment


- USERS INFO

    //ADMIN, PROFESSOR, STUDENT
    - Ver mi perfil de usuario.
            
            GET http://localhost:3000/api/users/profile/
    

    //ADMIN, PROFESSOR, STUDENT
    - Modificación de mis datos de perfil.
    
            PUT http://localhost:3000/api/users/profile/update

         body:
        ```js
            {
	                  "id": 80,
	                  "firstName": "beaTRIZ",
	                  "lastName": null,
	                  "email": "bcarre@gmail.com",
                      "phone": null,
	                  "isActive": true,
                      "name": "client"
            }

- PROFESSOR LIST

    //ADMIN, PROFESSOR, STUDENT (PUBLIC)
    - Listar profesores
            
            GET http://localhost:3000/api/professors
    


</details>
