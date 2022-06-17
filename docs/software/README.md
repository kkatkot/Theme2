# Реалізація інформаційного та програмного забезпечення

В рамках проекту розробляється: 
- SQL-скрипт для створення на початкового наповнення бази даних
- RESTfull сервіс для управління даними



SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
--
-- Schema theme2
--
CREATE SCHEMA IF NOT EXISTS 'theme2' DEFAULT CHARACTER SET utf8 USE 'theme2'
--
-- Table structure for table `action`
--

DROP TABLE IF EXISTS `action`;

CREATE TABLE `action` (
  `Id` int NOT NULL,
  `action_type` varchar(10) DEFAULT NULL,
  `groupe_id` int DEFAULT NULL,
  PRIMARY KEY (`Id`),
  KEY `fk_action_groupe_idx` (`groupe_id`),
  CONSTRAINT `fk_action_groupe` FOREIGN KEY (`groupe_id`) REFERENCES `groupe` (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


--
-- Dumping data for table `action`
--

LOCK TABLES `action` WRITE;

INSERT INTO `action` VALUES (1,'Upload',NULL),(2,'Delete',NULL),(3,'Alter',NULL),(4,'Comment',NULL),(5,'Sign up',NULL);

UNLOCK TABLES;

--
-- Table structure for table `groupe`
--

DROP TABLE IF EXISTS `groupe`;

CREATE TABLE `groupe` (
  `Id` int NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `description` mediumtext,
  `role_id` int DEFAULT NULL,
  `statistic_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`Id`),
  KEY `fk_groupe_role_idx` (`role_id`),
  KEY `fk_groupe_statistic_idx` (`statistic_id`),
  KEY `fk_groupe_user_idx` (`user_id`),
  CONSTRAINT `fk_groupe_role` FOREIGN KEY (`role_id`) REFERENCES `role` (`Id`),
  CONSTRAINT `fk_groupe_statistic` FOREIGN KEY (`statistic_id`) REFERENCES `statistic` (`Id`),
  CONSTRAINT `fk_groupe_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


--
-- Dumping data for table `groupe`
--

LOCK TABLES `groupe` WRITE;

INSERT INTO `groupe` VALUES (1,'Ultra right','Everything must be right',NULL,NULL,NULL),(2,'Numizmats','Do you have sime coins?',NULL,NULL,NULL),(3,'About glass','It can be shattered',NULL,NULL,NULL);

UNLOCK TABLES;

--
-- Table structure for table `meta`
--

DROP TABLE IF EXISTS `meta`;

CREATE TABLE `meta` (
  `Id` int NOT NULL,
  `name` varchar(250) DEFAULT NULL,
  `info` varchar(250) DEFAULT NULL,
  `type_access` varchar(11) DEFAULT NULL,
  `User_Id` int DEFAULT NULL,
  PRIMARY KEY (`Id`),
  UNIQUE KEY `name_UNIQUE` (`name`),
  UNIQUE KEY `type_access_UNIQUE` (`type_access`),
  KEY `fk_meta_user_idx` (`User_Id`),
  CONSTRAINT `fk_meta_user` FOREIGN KEY (`User_Id`) REFERENCES `user` (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


--
-- Dumping data for table `meta`
--

LOCK TABLES `meta` WRITE;

INSERT INTO `meta` VALUES (1,'Author','Author of info','Full',NULL),(2,'License','Information license','Partly',NULL);

UNLOCK TABLES;

--
-- Table structure for table `meta_tags_relations`
--

DROP TABLE IF EXISTS `meta_tags_relations`;

CREATE TABLE `meta_tags_relations` (
  `Id` int NOT NULL,
  `tag_id` int DEFAULT NULL,
  `meta_id` int DEFAULT NULL,
  PRIMARY KEY (`Id`),
  KEY `fk_meta_tags_relations_meta1_idx` (`meta_id`),
  KEY `fk_meta_tags_relations_tag1_idx` (`tag_id`),
  CONSTRAINT `fk_meta_tags_relations_meta1` FOREIGN KEY (`meta_id`) REFERENCES `meta` (`Id`),
  CONSTRAINT `fk_meta_tags_relations_tag1` FOREIGN KEY (`tag_id`) REFERENCES `tag` (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


--
-- Dumping data for table `meta_tags_relations`
--

LOCK TABLES `meta_tags_relations` WRITE;

INSERT INTO `meta_tags_relations` VALUES (234355,NULL,NULL),(343755,NULL,NULL),(353235,NULL,NULL);

UNLOCK TABLES;

--
-- Table structure for table `role`
--

DROP TABLE IF EXISTS `role`;

CREATE TABLE `role` (
  `Id` int NOT NULL,
  `role` varchar(11) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


--
-- Dumping data for table `role`
--

LOCK TABLES `role` WRITE;

INSERT INTO `role` VALUES (1,'Guest'),(2,'View'),(3,'Publisher'),(4,'Admin');

UNLOCK TABLES;

--
-- Table structure for table `statistic`
--

DROP TABLE IF EXISTS `statistic`;

CREATE TABLE `statistic` (
  `Id` int NOT NULL,
  `raiting` int DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


--
-- Dumping data for table `statistic`
--

LOCK TABLES `statistic` WRITE;

INSERT INTO `statistic` VALUES (1,5),(2,4),(3,3),(4,2),(5,0);

UNLOCK TABLES;

--
-- Table structure for table `tag`
--

DROP TABLE IF EXISTS `tag`;

CREATE TABLE `tag` (
  `Id` int NOT NULL,
  `Name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


--
-- Dumping data for table `tag`
--

LOCK TABLES `tag` WRITE;

INSERT INTO `tag` VALUES (1,'politics'),(2,'study'),(3,'comics');

UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `Id` int NOT NULL,
  `email` varchar(50) DEFAULT NULL,
  `name` varchar(50) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`Id`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  UNIQUE KEY `name_UNIQUE` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;

INSERT INTO `user` VALUES (1,'martin@email.com','martin','heuhfs567.'),(2,'kolya@email.com','Kolya','485960543k./d'),(3,'sophia@email.com','Sophia','2h454re21g22'),(4,'star@email.com','Star','gr21g5ery'),(5,'some@mail.com','Someone','12t1441ss1');

UNLOCK TABLES;


-- Dump completed on 2022-06-17 14:17:02
