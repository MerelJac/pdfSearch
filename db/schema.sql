DROP DATABASE IF EXISTS files_db;
CREATE DATABASE files_db;

USE files_db;

CREATE TABLE savedData (
    id INT NOT NULL,
    file_name TEXT NOT NULL
)

CREATE TABLE keywords (
    id INT NOT NULL, 
    keyword,
    notes,
    file_id INT NOT NULL
    FOREIGN KEY (file_id) REFERENCES savedData(id)
)