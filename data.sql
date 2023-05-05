CREATE DATABASE  IF NOT EXISTS `laptop_store` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci
 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `laptop_store`;
-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: laptop_store
-- ------------------------------------------------------
-- Server version	8.0.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `almacenamiento`
--

DROP TABLE IF EXISTS `almacenamiento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `almacenamiento` (
  `id` int NOT NULL AUTO_INCREMENT,
  `almacenamiento` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `almacenamiento`
--

LOCK TABLES `almacenamiento` WRITE;
/*!40000 ALTER TABLE `almacenamiento` DISABLE KEYS */;
INSERT INTO `almacenamiento` VALUES (1,'2 TB SSD K.2 5280 PCIe Gen8 WTLC'),(2,'1 TB SSD M.2 2280 PCIe Gen4 TLC'),(3,'500 GB SSD P.2 45280 PCIe Gen3.5 GLC'),(4,'256 GB SSD G.1.7 1280 RCIe Gen2.8 WPC');
/*!40000 ALTER TABLE `almacenamiento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `is_admin`
--

DROP TABLE IF EXISTS `is_admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `is_admin` (
  `id` int NOT NULL AUTO_INCREMENT,
  `is_admin` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `is_admin`
--

LOCK TABLES `is_admin` WRITE;
/*!40000 ALTER TABLE `is_admin` DISABLE KEYS */;
INSERT INTO `is_admin` VALUES (1,'si'),(2,'no');
/*!40000 ALTER TABLE `is_admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `memoria`
--

DROP TABLE IF EXISTS `memoria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `memoria` (
  `id` int NOT NULL AUTO_INCREMENT,
  `memoria` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `memoria`
--

LOCK TABLES `memoria` WRITE;
/*!40000 ALTER TABLE `memoria` DISABLE KEYS */;
INSERT INTO `memoria` VALUES (1,'16 GB DDR5-4800MHz (SODIMM) (2 x 8 GB)'),(2,'12 GB DDR5-3800MHz (SODIMM) (3 x 4 GB)'),(3,'8 GB DDR5-2800MHz (SODIMM) (1 x 8 GB)'),(4,'4 GB DDR5-1800MHz (SODIMM) (2 x 2 GB))');
/*!40000 ALTER TABLE `memoria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pantalla`
--

DROP TABLE IF EXISTS `pantalla`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pantalla` (
  `id` int NOT NULL AUTO_INCREMENT,
  `pantalla` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pantalla`
--

LOCK TABLES `pantalla` WRITE;
/*!40000 ALTER TABLE `pantalla` DISABLE KEYS */;
INSERT INTO `pantalla` VALUES (1,'13\" FHD (2420 x 1880), IPS, Anti-Glare, Non-Touch, 100%sRGB, 400 nits, 165Hz, LED Backlight'),(2,'14\" FHD (1920 x 1080), IPS, Anti-Glare, Non-Touch, 100%sRGB, 300 nits, 165Hz, LED Backlight, Narrow Bezel'),(3,'15,6\" FHD (2220 x 1680), IPS, Anti-Glare, 100%sRGB, 600 nits, 165Hz, LED Backlight, Narrow Bezel');
/*!40000 ALTER TABLE `pantalla` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `procesador`
--

DROP TABLE IF EXISTS `procesador`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `procesador` (
  `id` int NOT NULL AUTO_INCREMENT,
  `procesador` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `procesador`
--

LOCK TABLES `procesador` WRITE;
/*!40000 ALTER TABLE `procesador` DISABLE KEYS */;
INSERT INTO `procesador` VALUES (1,'12th Generation Intel® Core™ i5-12700H Processor (E-cores up to 3.50 GHz P-cores up to 4.70 GHz'),(2,'14th Generation Intel® Core™ i7-15700H Processor (E-cores up to 4.50 GHz P-cores up to 5.70 GHz'),(3,'AMD-Rynzen 7 Processor (8-cores up to 3.50 GHz P-cores up to 4.70 GHz)');
/*!40000 ALTER TABLE `procesador` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `productos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `marca` varchar(200) NOT NULL,
  `referencia` varchar(200) NOT NULL,
  `destacado` varchar(45) NOT NULL,
  `precio` int NOT NULL,
  `spec` varchar(300) NOT NULL,
  `img` varchar(200) NOT NULL,
  `pantalla` int NOT NULL,
  `procesador` int NOT NULL,
  `memoria` int NOT NULL,
  `almacenamiento` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_procesador_idx` (`procesador`),
  KEY `id_pantalla_idx` (`pantalla`),
  KEY `id_memoria_idx` (`memoria`),
  KEY `id_almacenamiento_idx` (`almacenamiento`),
  CONSTRAINT `id_almacenamiento` FOREIGN KEY (`almacenamiento`) REFERENCES `almacenamiento` (`id`),
  CONSTRAINT `id_memoria` FOREIGN KEY (`memoria`) REFERENCES `memoria` (`id`),
  CONSTRAINT `id_pantalla` FOREIGN KEY (`pantalla`) REFERENCES `pantalla` (`id`),
  CONSTRAINT `id_procesador` FOREIGN KEY (`procesador`) REFERENCES `procesador` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (1,'Acer','Pro Gaming X3 DB CRUD','si',4444,'    Configurations badged with Creator Edition have been carefully selected for those with a passion for content creation—be it photography, graphic design, music production or beyond. Powered by new dedicated hardware, that unlocks unmatched laptop performance in 3D rendering','product-1677798947256_img.png',1,1,1,1),(2,'Acer','Pro Gaming X3','no',5,'   Configurations badged with Creator Edition have been carefully selected for those with a passion for content creation—be it photography, graphic design, music production or beyond. Powered by new dedicated hardware, that unlocks unmatched laptop performance in 3D rendering','product-1677798947256_img.png',1,1,2,3),(3,'Acer','Gaming KTX3','no',200,'Configurations badged with Creator Edition have been carefully selected for those with a passion for content creation—be it photography, graphic design, music production or beyond. Powered by new dedicated hardware, that unlocks unmatched laptop performance in 3D rendering','product-1677798947256_img.png',3,2,1,4),(4,'Asus','Book Pro 45TW lolo','si',333,'    Configurations badged with Creator Edition have been carefully selected for those with a passion for content creation—be it photography, graphic design, music production or beyond. Powered by new dedicated hardware, that unlocks unmatched laptop performance in 3D rendering','product-1677798947256_img.png',1,1,2,2),(5,'Dell','XPS PRO 15','no',230,'Configurations badged with Creator Edition have been carefully selected for those with a passion for content creation—be it photography, graphic design, music production or beyond. Powered by new dedicated hardware, that unlocks unmatched laptop performance in 3D rendering','product-1677798947256_img.png',3,3,3,3),(6,'Asus','Zen 18 Pro GA','no',260,'Configurations badged with Creator Edition have been carefully selected for those with a passion for content creation—be it photography, graphic design, music production or beyond. Powered by new dedicated hardware, that unlocks unmatched laptop performance in 3D rendering','product-1677798947256_img.png',1,2,3,1),(7,'Dell','Inspiron Gaming 56','si',450,'Configurations badged with Creator Edition have been carefully selected for those with a passion for content creation—be it photography, graphic design, music production or beyond. Powered by new dedicated hardware, that unlocks unmatched laptop performance in 3D rendering','product-1677798947256_img.png',1,3,3,4),(8,'Lenovo','Yoga P45','si',156,'Configurations badged with Creator Edition have been carefully selected for those with a passion for content creation—be it photography, graphic design, music production or beyond. Powered by new dedicated hardware, that unlocks unmatched laptop performance in 3D rendering','product-1677798947256_img.png',1,3,1,1),(9,'HP','Pavilon 457XG','no',210,'Configurations badged with Creator Edition have been carefully selected for those with a passion for content creation—be it photography, graphic design, music production or beyond. Powered by new dedicated hardware, that unlocks unmatched laptop performance in 3D rendering','product-1677798947256_img.png',2,1,2,3),(10,'MSI','Pro Book 45TW','si',350,'Configurations badged with Creator Edition have been carefully selected for those with a passion for content creation—be it photography, graphic design, music production or beyond. Powered by new dedicated hardware, that unlocks unmatched laptop performance in 3D rendering','product-1677798947256_img.png',2,3,2,2),(11,'Asus','XT56','si',234,'Nuevo laptop gamer','product-1680143272786_img.webp',2,3,3,3),(13,'HP','GT Creado con DB CRUD','si',334,'Portatil gamer de ultima generación, que se crea como prueba para el crud con base de datos ','product-1680739482152_img.webp',3,2,2,2),(14,'Lenovo','Legion 5i Gen 7 Inte','si',347,'Play over 100 high-quality games with your new Lenovo Legion PC and three months of Xbox Game Pass-including EA Play. With new games added all the time, there\'s always something new to play','product-1681086394283_img.jpg',3,1,3,3);
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `first_name` varchar(100) NOT NULL,
  `last_name` varchar(100) NOT NULL,
  `adress` varchar(100) NOT NULL,
  `pais` varchar(45) NOT NULL,
  `is_admin` int NOT NULL,
  `avatar` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_siAdmin_idx` (`is_admin`),
  CONSTRAINT `id_siAdmin` FOREIGN KEY (`is_admin`) REFERENCES `is_admin` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (9,'test15@gmail.com','$2a$10$HGIEaZ5JG.ALaOyl6qUVbOmeFw6nOmbIBIaTLh63grXdcnEJzYS2G','Elvis','Presley','Calle 23 # 234 ','argentina',2,'generic-user-img.png'),(10,'test10@gmail.com','$2a$10$Sn3wd5/cjVwyHo0EzaX8CeaoU95O2yLUioEirfn9GQarvroFkc5su','Will','Smith','Calle 234 # 12','argentina',1,'generic-user-img.png'),(11,'test11@gmail.com','$2a$10$c1GUofpTfN6ryQeyQehEF.pg2ENAxM0lvTM4PrYSN0Nz4jkC97SEC','Jack','Black','123 Street #123','argentina',1,'user-1681090681637_img.jpeg'),(12,'test12@gmail.com','$2a$10$hhSlNjFIxOndHhO0wcpOcOk8YROTnzU6Utvf0UC..M75U3q971jI6','Charlie','Day','Mario world 23','argentina',1,'user-1681090904896_img.jpeg'),(13,'test13@gmail.com','$2a$10$1WIfcQIR095f8gbYwJVP8e4dK6OgxqsaI2N9a7nZsQia9Puv/f0sm','Margot','Robie','Calle 23 #452','argentina',1,'user-1681091140443_img.jpeg'),(14,'test14@gmail.com','$2a$10$j3uttWiX2wKTobYla6UgKulXREugZ81nZMYJVl/a9VybKTABCmRJ.','Julia','Roberts','Calle 43 #32','argentina',2,'user-1681091293745_img.jpeg'),(15,'test16@gmail.com','$2a$10$ns9WeVme4dJ.Yi6Oxz16tOeBjNtdp94eC/F6lq4JYOGW4CdJLolbS','Chris','Rock','calle 2 # 123','argentina',2,'user-1681091549710_img.jpeg');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-04-10 19:15:42
