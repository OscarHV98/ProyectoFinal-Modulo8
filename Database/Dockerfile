# ProyectoFinal/Database/Dockerfile

FROM postgres:15

# Copiar los scripts SQL al contenedor
COPY init.sql /docker-entrypoint-initdb.d/

# Puerto expuesto
EXPOSE 5432