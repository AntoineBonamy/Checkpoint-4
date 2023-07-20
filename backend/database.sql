DROP DATABASE IF EXISTS checkpoint4;

CREATE SCHEMA IF NOT EXISTS `checkpoint4` DEFAULT CHARACTER SET utf8;

CREATE TABLE IF NOT EXISTS `checkpoint4`.`spaceship` (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
     name VARCHAR(50) NOT NULL,
     description VARCHAR(255) NULL,
     lightspeed TINYINT DEFAULT 0 NULL,
     state VARCHAR(30) NULL,
     skin VARCHAR(255) NULL);

CREATE TABLE IF NOT EXISTS `checkpoint4`.`user` (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    password VARCHAR(100) NOT NULL);

INSERT INTO `checkpoint4`.`spaceship`(name, description, lightspeed, state, skin) VALUES("Voyager1", "Idéal pour faire ses courses aux quatre coins de la galaxie, comme au Super U Nova", 1, "Bon état", "https://as1.ftcdn.net/v2/jpg/05/61/76/14/1000_F_561761494_mGONvHcQInPDtDxJkUKzccid2TqWv7A9.jpg");
INSERT INTO `checkpoint4`.`spaceship`(name, description, lightspeed, state, skin) VALUES("SuperDestructor3000", "Pour se faire des amis. :)", 1, "Carrosserie un poil rayée", "https://img.nerdburglars.net/wp-content/uploads/2021/07/spaceship-names2.jpg");
INSERT INTO `checkpoint4`.`spaceship`(name, description, lightspeed, state, skin) VALUES("InnovSecur", "Ronronne. Système de cryogénisation intégrée. N'en abusez pas.", 0, "Neuf", "https://www.informelles.media/wp-content/uploads/2022/03/ABACA_801674_003-scaled.jpg");
INSERT INTO `checkpoint4`.`spaceship`(name, description, lightspeed, state, skin) VALUES("FakeShip", "La force de frappe d'un moustique lancé à pleine vitesse", 0, "Qui s'en soucie ?", "https://st2.depositphotos.com/1036149/9060/i/950/depositphotos_90602188-stock-photo-funny-penguin-in-spaceship.jpg");
INSERT INTO `checkpoint4`.`spaceship`(name, description, lightspeed, state, skin) VALUES("GhostProtocol", "Mode furtif non intégré. Bruyant", 1, "Mauvais état", "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2012%2F06%2Fprometheus_610_0.jpg");
INSERT INTO `checkpoint4`.`spaceship`(name, description, lightspeed, state, skin) VALUES("Death Star", "Non non, c'est pas le gros vaisseau de devant mais la demi boule derrière là. Peut littéralement détruire une planète. C'est prouvé scientifiquement !", 0, "Pas fini", "https://cdn.mos.cms.futurecdn.net/A8jzdPv6sX34KAQrKvELnQ.jpg");
INSERT INTO `checkpoint4`.`spaceship`(name, description, lightspeed, state, skin) VALUES("SpaceBrick", "Probablement le vaisseau le plus fiable de la galaxie", 0, "Ca passe", "https://ideascdn.lego.com/media/generate/entity/lego_ci/project/b48f0a29-e7a7-4fcf-b612-a73e6a106e83/1/resize:1600:900/legacy");
INSERT INTO `checkpoint4`.`spaceship`(name, description, lightspeed, state, skin) VALUES("DarknessInYourHands(DIYH)", "Navire de transport avant tout, mais vous faites ce que vous voulez après tout", 1, "Bon état", "https://assetsio.reedpopcdn.com/starfield-combat.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp");
INSERT INTO `checkpoint4`.`spaceship`(name, description, lightspeed, state, skin) VALUES("Earthman", "Dispose d'un service restauration, qui offre boissons et repas, moyennant crédits", 1, "Très bon état", "https://www.teslarati.com/wp-content/uploads/2018/11/BFR-2018-spaceship-and-booster-sep-SpaceX-crop.jpg");
INSERT INTO `checkpoint4`.`spaceship`(name, description, lightspeed, state, skin) VALUES("Ouar à meurt Krentmil", "Petit vaisseau de guerre tout mimi pour faire la paix avec vos voisins. Par exemple.", 1, "OK", "https://i.pinimg.com/736x/e8/95/20/e895200ba321be074c41caecb11fe75f.jpg");

-- Injection de données dans user

INSERT INTO `checkpoint4`.`user`(name, email, password) VALUES("Antoine", "bonamy.antoine@hotmail.fr", "Antoine");