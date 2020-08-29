-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 2019-09-03 07:52:28
-- 服务器版本： 5.7.14
-- PHP Version: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `data`
--

-- --------------------------------------------------------

--
-- 表的结构 `datatable`
--

CREATE TABLE `datatable` (
  `ID` tinyint(5) NOT NULL,
  `username` varchar(10) NOT NULL,
  `score` tinyint(3) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `datatable`
--

INSERT INTO `datatable` (`ID`, `username`, `score`) VALUES
(1, '张三', 40),
(2, '李四', 60),
(3, '王健康', 79),
(4, '刘丽', 56),
(5, '李玲', 89),
(6, '王丽', 45),
(7, '黎明', 69),
(8, '冯丽', 68),
(9, '李辉', 67),
(10, '张志峰', 68),
(11, '张家', 65),
(12, '章里', 56),
(13, '王看', 59),
(14, '贺礼', 45),
(15, '何柳', 89),
(16, '邓莉', 23),
(17, '邓丽滴', 56),
(18, '张开', 89),
(19, '何林', 45),
(20, '张大夫', 56),
(21, '张宇', 69),
(22, '龚刘', 56),
(23, '龚刘', 56),
(24, '龚刘', 78),
(25, '龚刘', 78),
(26, '龚刘', 12),
(27, '龚刘', 56),
(28, '龚刘', 78),
(29, '龚刘', 98),
(30, '龚刘', 12);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `datatable`
--
ALTER TABLE `datatable`
  ADD PRIMARY KEY (`ID`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `datatable`
--
ALTER TABLE `datatable`
  MODIFY `ID` tinyint(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
