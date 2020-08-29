-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 2019-09-07 03:42:33
-- 服务器版本： 5.7.14
-- PHP Version: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `prize`
--

-- --------------------------------------------------------

--
-- 表的结构 `prizechild`
--

CREATE TABLE `prizechild` (
  `ID` tinyint(3) NOT NULL,
  `kinds` varchar(20) NOT NULL COMMENT '奖品类名：1：谢谢参与 2：获得房卡 3：翻倍奖励',
  `shengyu` varchar(5) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `prizechild`
--

INSERT INTO `prizechild` (`ID`, `kinds`, `shengyu`) VALUES
(1, '1', '9000'),
(2, '2', '598'),
(3, '3', '400');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `prizechild`
--
ALTER TABLE `prizechild`
  ADD PRIMARY KEY (`ID`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `prizechild`
--
ALTER TABLE `prizechild`
  MODIFY `ID` tinyint(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
