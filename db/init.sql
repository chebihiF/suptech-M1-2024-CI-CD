-- db/init.sql
CREATE DATABASE test;
USE test;
CREATE TABLE greetings (
  id INT AUTO_INCREMENT PRIMARY KEY,
  message VARCHAR(255) NOT NULL
);
INSERT INTO greetings (message) VALUES ('Hello from Docker Swarm!');
INSERT INTO greetings (message) VALUES ('Hello from Docker Swarm 2!');
