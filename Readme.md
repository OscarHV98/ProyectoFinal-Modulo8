# Proyecto Final: Plataforma de Búsqueda de Empleos

Este proyecto es una aplicación web desarrollada como parte de un programa de diplomado. La plataforma permite a los usuarios buscar ofertas de empleo, registrarse, aplicar a ofertas y gestionar su perfil. La aplicación está contenerizada usando Docker y utiliza tecnologías modernas como React, Node.js, Express y PostgreSQL.

## Tecnologías Utilizadas

- **Frontend:** React.js
- **Backend:** Node.js con Express
- **Base de Datos:** PostgreSQL
- **Contenerización:** Docker y Docker Compose
- **Control de Versiones:** GitHub

## Estructura del Proyecto

```
/proyectoFinal
├── FrontEndReact/            # Aplicación Frontend en React
│   ├── src/                  # Código fuente del frontend
│   ├── Dockerfile            # Dockerfile para el contenedor del frontend
├── BackendExpressJS/         # Aplicación Backend en Node.js y Express
│   ├── src/                  # Código fuente del backend
│   ├── Dockerfile            # Dockerfile para el contenedor del backend
├── Database/                 # Configuración de la base de datos
│   ├── init.sql              # Script SQL para crear tablas y datos iniciales
│   ├── Dockerfile            # Dockerfile para el contenedor de la base de datos
├── docker-compose.yml        # Archivo de configuración de Docker Compose
├── README.md                 # Documentación del proyecto
```

## Servidores

- Frontend: Se ejecutará en el servidor http://localhost:8383/.

- Backend: Se ejecutará en el servidor http://localhost:3000/.

## Requisitos Previos

- Docker instalado en tu sistema.
- Docker Compose instalado.
- Cuenta en Docker Hub *(opcional, para subir las imágenes).*

## Instalación y Ejecución

### 1. Clonar el Repositorio

```bash
git clone https://github.com/OscarHV98/ProyectoFinal-Modulo8.git
```
#### Frontend
- Navega al directorio frontEndReact y ejecuta:

```bash
cd FrontEndReact
npm install
```
#### Backend
- Navega al directorio backendExpressJS y ejecuta:

```bash
cd BackendExpressJS
npm install
```

### 2. Construir y Ejecutar los Contenedores

```bash
docker-compose up --build
```

Esto construye las imágenes y levanta los siguientes servicios:

- **Frontend:** Disponible en [http://localhost:8383](http://localhost:8383)
- **Backend:** Disponible en [http://localhost:3000](http://localhost:3000)
- **Base de Datos:** PostgreSQL en el contenedor `postgres-db`

### 3. Detener los Contenedores

```bash
docker-compose down
```

## Comandos ## Comandos \u00dátiles

### Ver Contenedores en Ejecución

```bash
docker ps
```

### Conectarse a la Base de Datos

```bash
docker exec -it postgres-db psql -U postgres -d db_backend_express
```

### Ver Tablas en la Base de Datos

```sql
\dt
```

### Ver Estructura de una Tabla

```sql
\d users
```

### Insertar Datos en una Tabla

```sql
INSERT INTO professions (name) VALUES ('Desarrollador Frontend');
```

### Consultar Datos

```sql
SELECT * FROM professions;
```

## Subir Imágenes a Docker Hub

### 1. Etiquetar las Imágenes

```bash
docker tag proyectoFinal_frontend tu-usuario-dockerhub/frontend:latest
docker tag proyectoFinal_backend tu-usuario-dockerhub/backend:latest
docker tag proyectoFinal_db tu-usuario-dockerhub/database:latest
```

### 2. Subir las Imágenes

```bash
docker push tu-usuario-dockerhub/frontend:latest
docker push tu-usuario-dockerhub/backend:latest
docker push tu-usuario-dockerhub/database:latest
```

## Documentación Adicional

### Diagrama de Base de Datos

El diagrama de la base de datos incluye las siguientes tablas:

- **users:** Almacena información de los usuarios.
- **professions:** Almacena las profesiones disponibles.
- **locations:** Almacena las ubicaciones de las ofertas.
- **offers:** Almacena las ofertas de empleo.
- **offers_users:** Tabla de unión para la relación muchos-a-muchos entre users y offers.

### Diagrama de Arquitectura

La arquitectura de la aplicación consta de tres contenedores:

- **Frontend:** Aplicación React.
- **Backend:** API en Node.js y Express.
- **Base de Datos:** PostgreSQL.

## Contribuidores

- **Oscar Herbas Velasco:** Desarrollador FrontEnd.
- **Victor Mauricio Vera Zambrana:** Desarrollador FrontEnd.
- **Rodrigo Iturri Munoz:** Desarrollador Backend.
- **Roberto Ascarrunz Quispe:** Desarrollador Backend.
- **Mijail Lazcano Ballesteros:** Administrador de Base de Datos.
- **Alvaro Joaquin Navarro Cors:** Ingeniero DevOps.

## Licencia

Este proyecto está bajo la licencia MIT. Para más detalles, consulta el archivo [LICENSE](LICENSE).

🔗 **Repositorio:** [GitHub](https://github.com/OscarHV98/ProyectoFinal-Modulo8.git)

