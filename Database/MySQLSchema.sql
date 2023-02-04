-- Schema for the project database
-- Import this to MySQL to facilitate the data migration from PostgreSQL
-- To understand the changes, visit:
-- https://dev.mysql.com/doc/workbench/en/wb-migration-database-postgresql-typemapping.html

/*
SET @@session.wait_timeout = 0;
SET @@session.lock_wait_timeout = 0;
SET @@session.interactive_timeout = 0;
SET @@session.character_set_client = 'utf8';
SET @@session.sql_mode = 'STRICT_ALL_TABLES,NO_ENGINE_SUBSTITUTION';
SELECT SCHEMA();
SET @@session.sql_check = false;
SET @@session.xml_mode = 'NO_AUTO_EVALUATE';
SET @@session.message_level = 'warning';

SET @@session.default_tablespace = '';

SET @@session.default_storage_engine = 'InnoDB';
*/


CREATE TABLE IF NOT EXISTS `iv1201_projectdb`.`availability` (
  `availability_id` INT NOT NULL AUTO_INCREMENT,
  `person_id` INT,
  `from_date` DATE,
  `to_date` DATE,
  PRIMARY KEY (`availability_id`)
);

CREATE TABLE IF NOT EXISTS `iv1201_projectdb`.`competence` (
    `competence_id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255),
    PRIMARY KEY (`competence_id`)
);

CREATE TABLE IF NOT EXISTS `iv1201_projectdb`.`competence_profile` (
    `competence_profile_id` INT NOT NULL AUTO_INCREMENT,
    `person_id` INT,
    `competence_id` INT,
    `years_of_experience` DECIMAL(4,2),
    PRIMARY KEY (`competence_profile_id`)
);

CREATE TABLE IF NOT EXISTS `iv1201_projectdb`.`person` (
    `person_id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255),
    `surname` VARCHAR(255),
    `pnr` VARCHAR(255),
    `email` VARCHAR(255),
    `password` VARCHAR(255),
    `role_id` INT,
    `username` VARCHAR(255),
    PRIMARY KEY (`person_id`)
);

CREATE TABLE IF NOT EXISTS `iv1201_projectdb`.`role` (
    `role_id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255),
    PRIMARY KEY (`role_id`)
);

ALTER TABLE `iv1201_projectdb`.`availability`
    ADD CONSTRAINT `availability_person_id_fkey` FOREIGN KEY (`person_id`)
    REFERENCES `iv1201_projectdb`.`person` (`person_id`)
    ON UPDATE NO ACTION
    ON DELETE NO ACTION;

ALTER TABLE `iv1201_projectdb`.`competence_profile`
    ADD CONSTRAINT `competence_profile_competence_id_fkey` FOREIGN KEY (`competence_id`)
    REFERENCES  `iv1201_projectdb`.`competence`(`competence_id`)
    ON UPDATE NO ACTION
    ON DELETE NO ACTION;

ALTER TABLE `iv1201_projectdb`.`competence_profile`
    ADD CONSTRAINT `competence_profile_person_id_fkey` FOREIGN KEY (`person_id`)
    REFERENCES `iv1201_projectdb`.`person` (`person_id`)
    ON UPDATE NO ACTION
    ON DELETE NO ACTION;

ALTER TABLE `iv1201_projectdb`.`person`
    ADD CONSTRAINT `person_role_id_fkey` FOREIGN KEY (`role_id`)
    REFERENCES `iv1201_projectdb`.`role` (`role_id`)
    ON UPDATE NO ACTION
    ON DELETE NO ACTION;