/*M!999999\- enable the sandbox mode */ 
-- MariaDB dump 10.19-12.0.2-MariaDB, for Linux (x86_64)
--
-- Host: localhost    Database: pos
-- ------------------------------------------------------
-- Server version	12.0.2-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*M!100616 SET @OLD_NOTE_VERBOSITY=@@NOTE_VERBOSITY, NOTE_VERBOSITY=0 */;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `productos` (
  `codigo_producto` int(10) unsigned NOT NULL CHECK (`codigo_producto` > 0),
  `nombre_producto` varchar(255) NOT NULL CHECK (octet_length(trim(`nombre_producto`)) > 0),
  `precio_producto` double(10,2) unsigned NOT NULL CHECK (`precio_producto` >= 0.10),
  PRIMARY KEY (`codigo_producto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
set autocommit=0;
INSERT INTO `productos` (`codigo_producto`, `nombre_producto`, `precio_producto`) VALUES
('1', 'Suéter Elegante Deportivo Verde Militar', 490.24),
('2', 'Jersey Moderno Verde Oliva', 166.79),
('3', 'Chaleco de Punto Vintage Negro', 736.60),
('4', 'Sweater Oversize Deportivo Azul Cielo', 806.42),
('5', 'Cardigan Elegante Verde Oliva', 612.50),
('6', 'Suéter con Botones Básico Naranja', 534.45),
('7', 'Sweater Oversize Elegante Beige', 617.44),
('8', 'Suéter de Cuello Alto Artesanal Amarillo', 451.86),
('9', 'Jersey Moderno Azul Marino', 502.31),
('10', 'Suéter de Cuello Alto Moderno Verde Militar', 444.42),
('11', 'Suéter con Botones Minimalista Rosa', 804.11),
('12', 'Cardigan Moderno Mostaza', 713.14),
('13', 'Hoodie Minimalista Morado', 260.89),
('14', 'Suéter Deportivo Elegante Turquesa', 922.26),
('15', 'Suéter Elegante Minimalista Verde Oliva', 801.58),
('16', 'Chaleco de Punto Elegante Morado', 303.40),
('17', 'Suéter Deportivo Elegante Beige', 670.10),
('18', 'Suéter Casual Básico Gris Claro', 235.93),
('19', 'Suéter Vintage Ligero Celeste', 581.88),
('20', 'Suéter Vintage Básico Amarillo', 536.72),
('21', 'Sweater Oversize Abrigador Gris Claro', 343.35),
('22', 'Jersey Minimalista Celeste', 350.04),
('23', 'Cardigan Minimalista Morado', 324.24),
('24', 'Suéter con Botones Moderno Celeste', 993.98),
('25', 'Suéter Estampado Juvenil Rojo Vino', 171.89),
('26', 'Cardigan Largo Abrigador Mostaza', 778.72),
('27', 'Cardigan Largo Vintage Mostaza', 757.07),
('28', 'Cardigan Largo Moderno Amarillo', 849.80),
('29', 'Suéter Elegante Deportivo Rosa', 600.52),
('30', 'Suéter Casual Elegante Lila', 685.57),
('31', 'Suéter Estampado Clásico Rosa', 945.31),
('32', 'Suéter Estampado Deportivo Celeste', 493.83),
('33', 'Cardigan Largo Clásico Mostaza', 528.51),
('34', 'Suéter Vintage Básico Verde Oliva', 689.56),
('35', 'Cardigan Básico Verde Oliva', 485.16),
('36', 'Jersey Artesanal Gris Oscuro', 745.29),
('37', 'Chaleco de Punto Básico Azul Cielo', 445.44),
('38', 'Suéter Elegante Casual Rojo Vino', 482.25),
('39', 'Suéter Vintage Artesanal Verde Militar', 446.70),
('40', 'Suéter Vintage Blanco', 340.99),
('41', 'Hoodie Oversize Beige', 743.42),
('42', 'Suéter Estampado Básico Beige', 319.26),
('43', 'Cardigan Largo Ligero Negro', 964.33),
('44', 'Suéter con Botones Abrigador Gris Claro', 203.61),
('45', 'Chaleco de Punto Juvenil Beige', 622.91),
('46', 'Suéter Elegante Con Estilo Verde Militar', 181.85),
('47', 'Hoodie Casual Gris Oscuro', 630.49),
('48', 'Pull Over Abrigador Beige', 610.35),
('49', 'Suéter Elegante Vintage Beige', 258.15),
('50', 'Suéter Estampado Elegante Amarillo', 218.74),
('51', 'Hoodie Deportivo Verde Oliva', 793.90),
('52', 'Pull Over Moderno Celeste', 981.94),
('53', 'Jersey Juvenil Verde Militar', 700.80),
('54', 'Pull Over Elegante Celeste', 420.13),
('55', 'Chaleco de Punto Básico Gris Oscuro', 736.11),
('56', 'Chaleco de Punto Casual Rojo Vino', 636.28),
('57', 'Cardigan Largo Oversize Celeste', 568.45),
('58', 'Suéter Casual Artesanal Rosa', 722.37),
('59', 'Pull Over Juvenil Negro', 670.58),
('60', 'Suéter Elegante Casual Gris Claro', 276.03),
('61', 'Suéter Casual Ligero Beige', 282.22),
('62', 'Suéter Estampado Clásico Rosa', 826.06),
('63', 'Suéter Artesanal Verde Militar', 154.50),
('64', 'Pull Over Ligero Marrón', 384.08),
('65', 'Suéter Deportivo Oversize Negro', 398.58),
('66', 'Pull Over Ligero Naranja', 315.56),
('67', 'Suéter Vintage Turquesa', 694.99),
('68', 'Suéter Vintage Juvenil Mostaza', 547.09),
('69', 'Suéter Básico Morado', 302.39),
('70', 'Suéter Estampado Deportivo Rojo', 661.31),
('71', 'Suéter de Cuello Alto Premium Naranja', 537.09),
('72', 'Suéter Deportivo Oversize Gris Oscuro', 277.64),
('73', 'Suéter Vintage Minimalista Blanco', 651.80),
('74', 'Sweater Oversize Ligero Verde Oliva', 618.88),
('75', 'Suéter Casual Premium Verde Oliva', 346.26),
('76', 'Suéter con Botones Casual Turquesa', 419.33),
('77', 'Cardigan Largo Oversize Gris Claro', 398.47),
('78', 'Suéter Deportivo Moderno Amarillo', 358.22),
('79', 'Suéter Elegante Artesanal Azul Cielo', 779.69),
('80', 'Suéter Casual Premium Rosa', 512.69),
('81', 'Suéter Premium Morado', 466.91),
('82', 'Suéter Oversize Beige', 397.25),
('83', 'Chaleco de Punto Oversize Morado', 457.84),
('84', 'Suéter Casual Abrigador Verde Militar', 964.62),
('85', 'Suéter Vintage Casual Azul Cielo', 124.06),
('86', 'Chaleco de Punto Clásico Rosa', 460.35),
('87', 'Cardigan Largo Oversize Rosa', 570.69),
('88', 'Cardigan Clásico Gris Claro', 262.95),
('89', 'Suéter Estampado Casual Rojo Vino', 231.07),
('90', 'Suéter Deportivo Vintage Negro', 320.56),
('91', 'Cardigan Abrigador Mostaza', 710.32),
('92', 'Suéter con Botones Clásico Gris Oscuro', 720.55),
('93', 'Jersey Minimalista Azul Marino', 641.67),
('94', 'Suéter con Botones Juvenil Celeste', 182.70),
('95', 'Suéter con Botones Vintage Amarillo', 433.95),
('96', 'Cardigan Abrigador Beige', 691.50),
('97', 'Suéter con Botones Juvenil Verde Oliva', 842.45),
('98', 'Cardigan Artesanal Naranja', 395.40),
('99', 'Pull Over Ligero Naranja', 815.36),
('100', 'Hoodie Artesanal Lila', 845.03);

/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;
commit;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb3 */ ;
/*!50003 SET character_set_results = utf8mb3 */ ;
/*!50003 SET collation_connection  = utf8mb3_uca1400_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER trim_producto_insert
BEFORE INSERT ON productos
FOR EACH ROW
BEGIN
    SET NEW.nombre_producto = TRIM(NEW.nombre_producto);
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb3 */ ;
/*!50003 SET character_set_results = utf8mb3 */ ;
/*!50003 SET collation_connection  = utf8mb3_uca1400_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER trim_producto_update
BEFORE UPDATE ON productos
FOR EACH ROW
BEGIN
    SET NEW.nombre_producto = TRIM(NEW.nombre_producto);
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `ventas`
--

DROP TABLE IF EXISTS `ventas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `ventas` (
  `id_venta` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `fecha` date NOT NULL DEFAULT curdate(),
  `hora` time NOT NULL DEFAULT curtime(),
  PRIMARY KEY (`id_venta`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ventas`
--

LOCK TABLES `ventas` WRITE;
/*!40000 ALTER TABLE `ventas` DISABLE KEYS */;
set autocommit=0;
INSERT INTO `ventas` VALUES
(1,'2025-10-22','19:48:25');
/*!40000 ALTER TABLE `ventas` ENABLE KEYS */;
UNLOCK TABLES;
commit;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb3 */ ;
/*!50003 SET character_set_results = utf8mb3 */ ;
/*!50003 SET collation_connection  = utf8mb3_uca1400_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER force_autoincrement_venta
BEFORE INSERT ON ventas
FOR EACH ROW
BEGIN
    SET NEW.id_venta = NULL;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*M!100616 SET NOTE_VERBOSITY=@OLD_NOTE_VERBOSITY */;

-- Dump completed on 2025-10-22 19:54:23
