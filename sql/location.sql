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
-- Table structure for table `location`
--

CREATE TABLE `location` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `location`
--

INSERT INTO `location` (`id`, `name`) VALUES
(1, 'Entrance'),
(2, 'Hallway'),
(3, 'Garage'),
(4, 'Backyard'),
(5, 'Lounge'),
(6, 'Living Room'),
(7, 'Dining Area'),
(8, 'Study Nook'),
(9, 'Storage'),
(10, 'Kitchen'),
(11, 'Bathroom'),
(12, 'Toilet'),
(13, 'Master Bedroom'),
(14, 'Master Bathroom'),
(15, 'Bedroom 2'),
(16, 'Bedroom 3'),
(17, 'Bedroom 4');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `location`
--
ALTER TABLE `location`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `location`
--
ALTER TABLE `location`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
