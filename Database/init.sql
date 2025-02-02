-- Crear la tabla 'users'
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(20) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL,
    name VARCHAR(50),
    last_name VARCHAR(50),
    phone VARCHAR(15),
    address VARCHAR(100),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,  -- Valor por defecto
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP   -- Valor por defecto
);

-- Crear la tabla 'professions'
CREATE TABLE professions (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,  -- Valor por defecto
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP   -- Valor por defecto
);

-- Crear la tabla 'locations'
CREATE TABLE locations (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,  -- Valor por defecto
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP   -- Valor por defecto
);

-- Crear la tabla 'offers'
CREATE TABLE offers (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    price FLOAT NOT NULL,
    userId INT REFERENCES users(id),
    professionId INT REFERENCES professions(id),
    locationId INT REFERENCES locations(id),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,  -- Valor por defecto
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP   -- Valor por defecto
);

-- Crear la tabla 'offers_users'
CREATE TABLE offers_users (
    offerId INT REFERENCES offers(id),
    userId INT REFERENCES users(id),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,  -- Valor por defecto
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP   -- Valor por defecto
    PRIMARY KEY (offerId, userId)
);