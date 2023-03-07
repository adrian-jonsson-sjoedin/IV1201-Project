USE iv1201_projectdb;
CREATE TABLE applications (
application_id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
person_id INT,
application_status ENUM('accepted', 'rejected', 'unhandled') DEFAULT('unhandled'),
FOREIGN KEY (person_id) REFERENCES person(person_id)
);
-- INSERT DATA INTO THE TABLE
INSERT INTO applications (person_id) SELECT person_id FROM person
WHERE role_id = 2;