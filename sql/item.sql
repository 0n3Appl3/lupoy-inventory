-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Feb 27, 2022 at 08:42 PM
-- Server version: 5.7.30
-- PHP Version: 7.4.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `jedd`
--

-- --------------------------------------------------------

--
-- Table structure for table `item`
--

CREATE TABLE `item` (
  `id` int(11) NOT NULL,
  `name` varchar(20) NOT NULL,
  `make` varchar(50) NOT NULL,
  `model` varchar(50) NOT NULL,
  `category` int(11) NOT NULL,
  `location` int(11) NOT NULL,
  `purchased_from` varchar(50) NOT NULL,
  `purchase_date` varchar(50) NOT NULL,
  `quantity` int(11) NOT NULL,
  `price` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `item`
--

INSERT INTO `item` (`id`, `name`, `make`, `model`, `category`, `location`, `purchased_from`, `purchase_date`, `quantity`, `price`) VALUES
(1, 'Jedd\'s iPhone', 'Apple', 'iPhone 13 Pro', 5, 16, 'Apple', '2021-09-18', 1, '1799'),
(2, 'Janna\'s iPhone', 'Apple', 'iPhone XS', 5, 15, 'Apple', '2018-09-23', 1, '1899'),
(3, 'Mama\'s iPhone', 'Apple', 'iPhone 12 Pro', 5, 13, 'Apple', '2020-10-25', 1, '1899'),
(4, 'Papa\'s iPhone', 'Apple', 'iPhone 13 Pro Max', 5, 13, 'Apple', '2021-09-18', 1, '1999');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `item`
--
ALTER TABLE `item`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `item`
--
ALTER TABLE `item`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
