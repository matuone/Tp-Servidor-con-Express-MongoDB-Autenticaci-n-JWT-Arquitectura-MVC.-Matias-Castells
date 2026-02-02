# 📘 API Backend con Express + MongoDB

## 📌 Descripción del proyecto
Este proyecto es una API REST construida con **Node.js**, **Express**, **MongoDB** y **JWT** para autenticación.  
Permite registrar usuarios, iniciar sesión, obtener un token, crear tareas, listar tareas, actualizarlas y eliminarlas.  
Toda la API está protegida con autenticación basada en **Bearer Token**.

---

## 🚀 Tecnologías utilizadas
- Node.js  
- Express  
- MongoDB + Mongoose  
- JWT (jsonwebtoken)  
- Bcrypt  
- CORS  
- Bruno (para pruebas de API)

---

# 🛠️ PASO A PASO PARA INICIAR EL BACKEND

## 1️⃣ Abrir la carpeta del proyecto
Asegurarse de estar en la raíz del proyecto:

    TP-Servidor con Express-MongoDB/

---

## 2️⃣ Instalar dependencias
En la raíz del proyecto (donde está `package.json`), ejecutar:

    npm install

---

## 3️⃣ Crear archivo .env
En la **raíz del proyecto** (NO dentro de `src/`), crear un archivo llamado:

    .env

Con este contenido:

    MONGODB_URI=mongodb://127.0.0.1:27017/task-db
    JWT_SECRET=miclaveultrasecreta123

Estructura correcta del proyecto:

    TP-Servidor con Express-MongoDB/
      ├─ src/
      ├─ .env
      ├─ package.json
      └─ README.md

---
## 🗂️ Archivo .env.example

El proyecto incluye un archivo **.env.example** que sirve como plantilla para configurar las variables de entorno necesarias para ejecutar el servidor.

### 🔧 ¿Para qué sirve?
Permite que cualquier persona que descargue el proyecto pueda crear rápidamente su propio archivo `.env` sin adivinar qué variables necesita.

### 📥 Cómo usarlo

1. Ubicarse en la raíz del proyecto.
2. Hacer una copia del archivo:

       .env.example

3. Renombrar la copia a:

       .env

4. Completar o ajustar los valores si es necesario.

### 📄 Contenido del archivo .env.example

```env
MONGODB_URI=mongodb://127.0.0.1:27017/task-db
JWT_SECRET=miclaveultrasecreta123
PORT=5000
con esto el servidor ya puede iniciarse correctamente con:
npm start


## 4️⃣ Iniciar MongoDB
Asegurarse de tener MongoDB instalado y corriendo localmente.  
Si se usa Compass, la URI de conexión es:

    mongodb://127.0.0.1:27017

---

## 5️⃣ Iniciar el servidor
En la raíz del proyecto, ejecutar:

    npm start

Si todo está bien, en la consola debería aparecer algo similar a:

    🟢 MongoDB conectado
    🚀 Servidor en escucha puerto 5000

La API estará disponible en:

    http://localhost:5000

---

# 🧪 PRUEBAS CON BRUNO

A continuación se detalla cómo probar cada endpoint usando **Bruno**.  
En todos los endpoints protegidos se debe enviar el header:

    Authorization: Bearer TOKEN_AQUI

donde `TOKEN_AQUI` es el token JWT devuelto por el login o el registro.

---

## 1️⃣ Registrar usuario (obtener token)

**Método:** POST  
**URL:**

    http://localhost:5000/api/auth/register

**Body (JSON):**

    {
      "email": "profesor@test.com",
      "password": "123456"
    }

**Respuesta esperada (ejemplo):**

    {
      "message": "Usuario registrado",
      "token": "TOKEN_AQUI"
    }

---

## 2️⃣ Login (obtener token si el usuario ya existe)

**Método:** POST  
**URL:**

    http://localhost:5000/api/auth/login

**Body (JSON):**

    {
      "email": "profesor@test.com",
      "password": "123456"
    }

**Respuesta esperada (ejemplo):**

    {
      "message": "Login exitoso",
      "token": "TOKEN_AQUI"
    }

---

## 📥 Importar la colección en Bruno

Para probar la API con **Bruno**, podés importar la colección incluida en el proyecto. Bruno permite hacerlo de dos maneras: seleccionando **la carpeta completa** o importando **el archivo JSON**.

---

### 🔧 Opciones para importar la colección

### 🅰️ Opción A — Importar la carpeta completa (recomendada)

1. Abrir **Bruno**.  
2. En la barra lateral izquierda, seleccionar **Import Collection**.  
3. Elegir la carpeta: Api Backend TP que se encuentra dentro la carpeta raiz del repositorio.
4. Confirmar la importación.  
5. Bruno detectará automáticamente la estructura y mostrará las colecciones:

### 🅱️ Opción B — Importar el archivo JSON

1. Abrir **Bruno**.  
2. Seleccionar **Import Collection**.  
3. Elegir el archivo:

       Api Backend TP/bruno.json

4. Confirmar la importación.

---

### 🟢 Configurar la variable del token

La colección incluye una variable llamada **token**.

Después de registrarte o iniciar sesión, copiá el token recibido y pegalo en:

       Variables → token

Esto permite que todas las requests protegidas usen automáticamente:

       Authorization: Bearer {{token}}

---

### 🧪 Listo para probar

Una vez importada la colección (por carpeta o por JSON) y configurado el token, ya podés ejecutar:

- Registro  
- Login  
- Crear tareas  
- Listar tareas  
- Actualizar tareas  
- Eliminar tareas  

Todo desde Bruno, sin configurar nada más.

## 🔐 Uso del token en Bruno

En todas las requests protegidas agregar el header:

    Authorization: Bearer TOKEN_AQUI

Ejemplo:

    Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

---

## 3️⃣ Obtener tareas

**Método:** GET  
**URL:**

    http://localhost:5000/api/tasks

**Headers:**

    Authorization: Bearer TOKEN_AQUI

**Respuesta esperada (ejemplo):**

    [
      {
        "_id": "ID",
        "title": "Mi primera tarea",
        "completed": false,
        "user": "ID_DEL_USUARIO",
        "createdAt": "2026-02-01T00:00:00.000Z",
        "updatedAt": "2026-02-01T00:00:00.000Z"
      }
    ]

---

## 4️⃣ Crear tarea

**Método:** POST  
**URL:**

    http://localhost:5000/api/tasks

**Headers:**

    Authorization: Bearer TOKEN_AQUI
    Content-Type: application/json

**Body (JSON):**

    {
      "title": "Nueva tarea de ejemplo"
    }

**Respuesta esperada (ejemplo):**

    {
      "_id": "ID",
      "title": "Nueva tarea de ejemplo",
      "completed": false,
      "user": "ID_DEL_USUARIO",
      "createdAt": "2026-02-01T00:00:00.000Z",
      "updatedAt": "2026-02-01T00:00:00.000Z"
    }

---

## 5️⃣ Actualizar tarea

Primero obtener el `ID_DE_LA_TAREA` con el endpoint GET `/api/tasks`.

**Método:** PATCH  
**URL:**

    http://localhost:5000/api/tasks/ID_DE_LA_TAREA

**Headers:**

    Authorization: Bearer TOKEN_AQUI
    Content-Type: application/json

**Body (ejemplos):**

Actualizar solo el título:

    {
      "title": "Título actualizado"
    }

Marcar como completada:

    {
      "completed": true
    }

Actualizar título y estado:

    {
      "title": "Tarea actualizada y completada",
      "completed": true
    }

**Respuesta esperada (ejemplo):**

    {
      "_id": "ID_DE_LA_TAREA",
      "title": "Tarea actualizada y completada",
      "completed": true,
      "user": "ID_DEL_USUARIO",
      "createdAt": "2026-02-01T00:00:00.000Z",
      "updatedAt": "2026-02-01T00:05:00.000Z"
    }

---

## 6️⃣ Eliminar tarea

**Método:** DELETE  
**URL:**

    http://localhost:5000/api/tasks/ID_DE_LA_TAREA

**Headers:**

    Authorization: Bearer TOKEN_AQUI

**Respuesta esperada (ejemplo):**

    {
      "message": "Tarea eliminada"
    }

---

# 📂 Estructura del proyecto

    TP-Servidor con Express-MongoDB/
    │── src/
    │   ├── config/
    │   │   └── mongodb.js
    │   ├── controllers/
    │   ├── middlewares/
    │   ├── models/
    │   ├── routes/
    │   └── index.js
    │── .env
    │── package.json
    │── README.md

---

# 🎯 Notas finales

- El backend se inicia con `npm start`.  
- La base de datos se conecta usando la variable `MONGODB_URI` definida en el archivo `.env`.  
- La autenticación se realiza con JWT y se envía mediante el header `Authorization: Bearer TOKEN`.  
- Todas las pruebas se pueden hacer fácilmente con **Bruno** siguiendo los pasos de este README.  
- Proyecto listo para evaluación. ✅
