CREATE DATABASE courses;

CREATE TABLE IF NOT EXISTS courses (
  id varchar(255),
  name varchar(255),
  duration varchar(255)
);

INSERT INTO courses (id, name, duration) VALUES
('1', 'Java', '3 months');
