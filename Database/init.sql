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
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Crear la tabla 'professions'
CREATE TABLE professions (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Crear la tabla 'locations'
CREATE TABLE locations (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
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
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Crear la tabla 'offers_users'
CREATE TABLE offers_users (
    offerId INT REFERENCES offers(id),
    userId INT REFERENCES users(id),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (offerId, userId)
);

-- Insertar datos en 'users'
INSERT INTO users (username, email, password, name, last_name, phone, address, "createdAt", "updatedAt") VALUES
('juanperez', 'juan@example.com', 'hashedpassword1', 'Juan', 'Perez', '123456789', 'Calle 123', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('mariagarcia', 'maria@example.com', 'hashedpassword2', 'Maria', 'Garcia', '987654321', 'Avenida 456', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('carlossoto', 'carlos@example.com', 'hashedpassword3', 'Carlos', 'Soto', '112233445', 'Boulevard 789', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- Insertar datos en 'professions'
INSERT INTO professions (name, "createdAt", "updatedAt") VALUES
('Desarrollador Web', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Diseñador Gráfico', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Electricista', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- Insertar datos en 'locations'
INSERT INTO locations (name, "createdAt", "updatedAt") VALUES
('La Paz', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Cochabamba', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Santa Cruz', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- Insertar datos en 'offers'
INSERT INTO offers (title, description, price, userId, professionId, locationId) VALUES
('Desarrollo de Página Web', 'Se necesita un desarrollador web para crear un sitio en React.', 500.00, 1, 1, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Diseño de Logotipo', 'Se requiere un diseñador gráfico para un nuevo logotipo.', 200.00, 2, 2, 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Reparación Eléctrica', 'Servicio de reparación eléctrica para una casa.', 150.00, 3, 3, 3, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
