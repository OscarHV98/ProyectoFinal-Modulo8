# FROM postgres:15
# ENV POSTGRES_USER=postgres
# ENV POSTGRES_PASSWORD=admin
# ENV POSTGRES_DB=db_backend_express
# VOLUME /var/lib/postgresql/data
# EXPOSE 5432

# ProyectoFinal/database/Dockerfile
FROM postgres:15

# Copiar los scripts SQL al contenedor
COPY init.sql /docker-entrypoint-initdb.d/

# Variables de entorno para la configuración de PostgreSQL
ENV POSTGRES_USER=postgres
ENV POSTGRES_PASSWORD=admin
ENV POSTGRES_DB=db_backend_express

# Puerto expuesto
EXPOSE 5432