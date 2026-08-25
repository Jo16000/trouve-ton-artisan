CREATE DATABASE IF NOT EXISTS trouve_ton_artisan CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE trouve_ton_artisan;

CREATE TABLE IF NOT EXISTS categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS specialties (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    categoryId INT,
    FOREIGN KEY (categoryId) REFERENCES categories(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS artisans (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    specialtyId INT,
    location VARCHAR(255) NOT NULL,
    note DECIMAL(2,1) NOT NULL,
    about TEXT,
    email VARCHAR(255),
    phone VARCHAR(50),
    website VARCHAR(255),
    isTop BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (specialtyId) REFERENCES specialties(id) ON DELETE SET NULL
);