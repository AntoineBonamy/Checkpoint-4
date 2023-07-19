DROP DATABASE IF EXISTS checkpoint4;

CREATE SCHEMA IF NOT EXISTS `checkpoint4` DEFAULT CHARACTER SET utf8;

CREATE TABLE IF NOT EXISTS `checkpoint4`.`spaceship` (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
     name VARCHAR(50) NOT NULL,
     description VARCHAR(255) NULL,
     lightspeed TINYINT NULL,
     state VARCHAR(30) NULL,
     skin VARCHAR(255) NULL);

INSERT INTO `checkpoint4`.`spaceship`(name, description, lightspeed, state, skin) VALUES("Voyager1", "Idéal pour faire ses courses aux quatre coins de la galaxie, comme au Super U Nova", 1, "Bon état", "http://localhost:5026/assets/spaceship1.jpg");
INSERT INTO `checkpoint4`.`spaceship`(name, description, lightspeed, state, skin) VALUES("SuperDestructor3000", "Pour se faire des amis. :)", 1, "Carrosserie un poil rayée", "http://localhost:5026/assets/spaceship2.jpg");
INSERT INTO `checkpoint4`.`spaceship`(name, description, lightspeed, state, skin) VALUES("InnovSecur", "Ronronne. Système de cryogénisation intégrée. N'en abusez pas.", 0, "Neuf", "http://localhost:5026/assets/spaceship3");
INSERT INTO `checkpoint4`.`spaceship`(name, description, lightspeed, state, skin) VALUES("FakeShip", "La force de frappe d'un moustique lancé à pleine vitesse", 0, "Qui s'en soucie ?", "http://localhost:5026/assets/spaceship4");
INSERT INTO `checkpoint4`.`spaceship`(name, description, lightspeed, state, skin) VALUES("GhostProtocol", "Mode furtif non intégré. Bruyant", 1, "Mauvais état", "http://localhost:5026/assets/spaceship5.jpeg");
INSERT INTO `checkpoint4`.`spaceship`(name, description, lightspeed, state, skin) VALUES("Death Star", "Non non, c'est pas le gros vaisseau de devant mais la demi boule derrière là. Peut littéralement détruire une planète. C'est prouvé scientifiquement !", 0, "Pas fini", "http://localhost:5026/assets/spaceship6.jpg");
INSERT INTO `checkpoint4`.`spaceship`(name, description, lightspeed, state, skin) VALUES("SpaceBrick", "Probablement le vaisseau le plus fiable de la galaxie", 0, "Ca passe", "http://localhost:5026/assets/spaceship7.png");
INSERT INTO `checkpoint4`.`spaceship`(name, description, lightspeed, state, skin) VALUES("DarknessInYourHands(DIYH)", "Navire de transport avant tout, mais vous faites ce que vous voulez après tout", 1, "Bon état", "http://localhost:5026/assets/spaceship8");
INSERT INTO `checkpoint4`.`spaceship`(name, description, lightspeed, state, skin) VALUES("Earthman", "Dispose d'un service restauration, qui offre boissons et repas, moyennant crédits", 1, "Très bon état", "http://localhost:5026/assets/spaceship9");
INSERT INTO `checkpoint4`.`spaceship`(name, description, lightspeed, state, skin) VALUES("Ouar à meurt Krentmil", "Petit vaisseau de guerre tout mimi pour faire la paix avec vos voisins. Par exemple.", 1, "OK", "http://localhost:5026/assets/spaceship10.jpg");
