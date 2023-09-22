-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 22, 2023 at 11:08 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pver`
--

-- --------------------------------------------------------

--
-- Table structure for table `ampher`
--

CREATE TABLE `ampher` (
  `code` varchar(20) COLLATE utf8_thai_520_w2 NOT NULL,
  `ampher` varchar(30) COLLATE utf8_thai_520_w2 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_thai_520_w2;

--
-- Dumping data for table `ampher`
--

INSERT INTO `ampher` (`code`, `ampher`) VALUES
('5010', 'เชียงดาว'),
('5011', 'ฝาง'),
('5012', 'แม่อาย'),
('5013', 'เวียงแหง'),
('5014', 'ไชยปราการ'),
('5618', 'เชียงคำ'),
('5619', 'ภูซาง'),
('5701', 'แม่ฟ้าหลวง'),
('5702', 'แม่สาย'),
('5703', 'เชียงแสน'),
('5704', 'แม่จัน'),
('5705', 'เทิง'),
('5706', 'เชียงของ'),
('5707', 'พญาเม็งราย'),
('5708', 'เวียงแก่น'),
('5709', 'เวียงเชียงรุ้ง'),
('5815', 'เมืองแม่ฮ่องสอน'),
('5816', 'แม่สะเรียง'),
('5817', 'ปางมะผ้า');

-- --------------------------------------------------------

--
-- Table structure for table `ban`
--

CREATE TABLE `ban` (
  `code` varchar(20) COLLATE utf8_thai_520_w2 NOT NULL,
  `ban` varchar(30) COLLATE utf8_thai_520_w2 NOT NULL,
  `mo` varchar(10) COLLATE utf8_thai_520_w2 NOT NULL,
  `tambon_code` varchar(10) COLLATE utf8_thai_520_w2 NOT NULL,
  `ampher_code` varchar(10) COLLATE utf8_thai_520_w2 NOT NULL,
  `province_code` varchar(10) COLLATE utf8_thai_520_w2 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_thai_520_w2;

--
-- Dumping data for table `ban`
--

INSERT INTO `ban` (`code`, `ban`, `mo`, `tambon_code`, `ampher_code`, `province_code`) VALUES
('50100101', 'เมืองนะ', '1', '501001', '5010', '50'),
('50100110', 'อรุโณทัย(ใหม่สามัคคี)', '10', '501001', '5010', '50'),
('50100207', 'ห้วยลึก', '7', '501002', '5010', '50'),
('50110114', 'ขอบด้ง(นอแล)', '14', '501101', '5011', '50'),
('50110115', 'หนองไผ่', '15', '501101', '5011', '50'),
('50120114', 'ร่มไทย', '14', '501201', '5012', '50'),
('50120212', 'จะนะ(นามะอื้น)', '12', '501202', '5012', '50'),
('50130101', 'เปียงหลวง(หลักแต่ง)', '1', '501301', '5013', '50'),
('50130105', 'ห้วยไคร้', '5', '501301', '5013', '50'),
('50140110', 'ใหม่หนองบัว', '10', '501401', '5014', '50'),
('56180113', 'ประชาภักดี', '13', '561801', '5618', '56'),
('56190110', 'คอดยาว', '10', '561901', '5619', '56'),
('56190203', 'ฮวก(หมู่ 3)', '3', '561902', '5619', '56'),
('56190212', 'ฮวก(หมู่ 12)', '12', '561902', '5619', '56'),
('56190309', 'หล่าย', '9', '561903', '5619', '56'),
('57010109', 'ม้งเก้าหลัง', '9', '570101', '5701', '57'),
('57010111', 'พญาไพรลิทู่', '11', '570101', '5701', '57'),
('57010210', 'จะลอ(ป่าซาง)', '10', '570102', '5701', '57'),
('57010212', 'ป่าซางนาเงิน', '12', '570102', '5701', '57'),
('57020101', 'ปางห้า', '1', '570201', '5702', '57'),
('57020105', 'ป่าแดง', '5', '570201', '5702', '57'),
('57020210', 'อีก้อผาฮี้', '10', '570202', '5702', '57'),
('57020211', 'มูเซอร์ผาฮี้', '11', '570202', '5702', '57'),
('57020306', 'ผาหมี', '6', '570203', '5702', '57'),
('57030104', 'วังลาว', '4', '570301', '5703', '57'),
('57030208', 'สวนดอก', '8', '570302', '5703', '57'),
('57030305', 'เวียงแก้ว', '5', '570303', '5703', '57'),
('57040106', 'ห้วยไร่', '6', '570401', '5704', '57'),
('57050112', 'แผ่นดินทอง', '12', '570501', '5705', '57'),
('57050119', 'ร่มโพธิ์ทอง', '19', '570501', '5705', '57'),
('57060110', 'เวียงหมอก', '10', '570601', '5706', '57'),
('57060201', 'หาดบ้าย', '1', '570602', '5706', '57'),
('57060202', 'เมืองกาญจน์', '2', '570602', '5706', '57'),
('57060206', 'กิ่วกาญจน์', '6', '570602', '5706', '57'),
('57070104', 'เย้าแม่ต๋ำ(บ้านใหม่สุขสันต์)', '4', '570701', '5707', '57'),
('57070109', 'รักษ์พนา', '9', '570701', '5707', '57'),
('57080104', 'ห้วยลึก', '4', '570801', '5708', '57'),
('57080108', 'ไทยเจริญ', '8', '570801', '5708', '57'),
('57080208', 'ห้วยคุ', '8', '570802', '5708', '57'),
('57080209', 'ห้วยหาน', '9', '570802', '5708', '57'),
('57080305', 'แจมป๋อง', '5', '570803', '5708', '57'),
('57090109', 'ป่าสักงาม(เวียงคำฟ้า)', '9', '570901', '5709', '57'),
('58150106', 'รักไทย', '6', '581501', '5815', '58'),
('58150203', 'ห้วยผึ้ง', '3', '581502', '5815', '58'),
('58160101', 'เสาหิน', '1', '581601', '5816', '58'),
('58170107', 'ไม้ลัน', '7', '581701', '5817', '58'),
('58170202', 'แอโก๋(แสนคำลือ)', '2', '581702', '5817', '58'),
('58170203', 'วนาหลวง', '3', '581702', '5817', '58');

-- --------------------------------------------------------

--
-- Table structure for table `master_complete`
--

CREATE TABLE `master_complete` (
  `id` int(11) NOT NULL,
  `f_id` varchar(20) COLLATE utf8_thai_520_w2 NOT NULL COMMENT 'รหัสแบบสอบถาม',
  `member_id` int(11) NOT NULL COMMENT 'รหัสผู้บันทึก',
  `p0_user` int(11) DEFAULT NULL COMMENT 'ผู้บันทึก',
  `p0_time` datetime DEFAULT NULL COMMENT 'เวลาบันทึก',
  `p1_user` int(11) DEFAULT NULL COMMENT 'ผู้บันทึก',
  `p1_time` datetime DEFAULT NULL COMMENT 'เวลาบันทึก',
  `p3_user` int(11) DEFAULT NULL COMMENT 'ผู้บันทึก',
  `p3_time` datetime DEFAULT NULL COMMENT 'เวลาบันทึก',
  `p4_user` int(11) DEFAULT NULL COMMENT 'ผู้บันทึก',
  `p4_time` datetime DEFAULT NULL COMMENT 'เวลาบันทึก',
  `p5_user` int(11) DEFAULT NULL COMMENT 'ผู้บันทึก',
  `p5_time` datetime DEFAULT NULL COMMENT 'เวลาบันทึก',
  `p6_user` int(11) DEFAULT NULL COMMENT 'ผู้บันทึก',
  `p6_time` datetime DEFAULT NULL COMMENT 'เวลาบันทึก',
  `p7_user` int(11) DEFAULT NULL COMMENT 'ผู้บันทึก',
  `p7_time` datetime DEFAULT NULL COMMENT 'เวลาบันทึก',
  `p8_user` int(11) DEFAULT NULL COMMENT 'ผู้บันทึก',
  `p8_time` datetime DEFAULT NULL COMMENT 'เวลาบันทึก',
  `p9_user` int(11) DEFAULT NULL COMMENT 'ผู้บันทึก',
  `p9_time` datetime DEFAULT NULL COMMENT 'เวลาบันทึก',
  `p10_user` int(11) DEFAULT NULL COMMENT 'ผู้บันทึก',
  `p10_time` datetime DEFAULT NULL COMMENT 'เวลาบันทึก',
  `p11_user` int(11) DEFAULT NULL COMMENT 'ผู้บันทึก',
  `p11_time` datetime DEFAULT NULL COMMENT 'เวลาบันทึก',
  `p12_user` int(11) DEFAULT NULL COMMENT 'ผู้บันทึก',
  `p12_time` datetime DEFAULT NULL COMMENT 'เวลาบันทึก',
  `p13_user` int(11) DEFAULT NULL COMMENT 'ผู้บันทึก',
  `p13_time` datetime DEFAULT NULL COMMENT 'เวลาบันทึก',
  `p14_user` int(11) DEFAULT NULL COMMENT 'ผู้บันทึก',
  `p14_time` datetime DEFAULT NULL COMMENT 'เวลาบันทึก',
  `p15_user` int(11) DEFAULT NULL COMMENT 'ผู้บันทึก',
  `p15_time` datetime DEFAULT NULL COMMENT 'เวลาบันทึก',
  `p16_user` int(11) DEFAULT NULL COMMENT 'ผู้บันทึก',
  `p16_time` datetime DEFAULT NULL COMMENT 'เวลาบันทึก',
  `p17_user` int(11) DEFAULT NULL COMMENT 'ผู้บันทึก',
  `p18_time` datetime DEFAULT NULL COMMENT 'เวลาบันทึก'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_thai_520_w2;

--
-- Dumping data for table `master_complete`
--

INSERT INTO `master_complete` (`id`, `f_id`, `member_id`, `p0_user`, `p0_time`, `p1_user`, `p1_time`, `p3_user`, `p3_time`, `p4_user`, `p4_time`, `p5_user`, `p5_time`, `p6_user`, `p6_time`, `p7_user`, `p7_time`, `p8_user`, `p8_time`, `p9_user`, `p9_time`, `p10_user`, `p10_time`, `p11_user`, `p11_time`, `p12_user`, `p12_time`, `p13_user`, `p13_time`, `p14_user`, `p14_time`, `p15_user`, `p15_time`, `p16_user`, `p16_time`, `p17_user`, `p18_time`) VALUES
(1, '05200', 1, 1, '2023-09-21 15:06:13', 1, '2023-09-22 15:03:32', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `member`
--

CREATE TABLE `member` (
  `m_id` int(11) NOT NULL COMMENT 'รหัส',
  `m_fname` varchar(60) COLLATE utf8_thai_520_w2 NOT NULL COMMENT 'ชื่อ',
  `m_lname` varchar(60) COLLATE utf8_thai_520_w2 NOT NULL COMMENT 'นามสกุล',
  `m_idcard` varchar(13) COLLATE utf8_thai_520_w2 NOT NULL COMMENT 'เลขบัตร ปชช',
  `m_email` varchar(60) COLLATE utf8_thai_520_w2 NOT NULL COMMENT 'อีเมล์',
  `m_username` varchar(100) COLLATE utf8_thai_520_w2 NOT NULL COMMENT 'ชื่อผู้ใช้',
  `m_password` varchar(100) COLLATE utf8_thai_520_w2 NOT NULL COMMENT 'รหัสผ่าน',
  `m_phone` varchar(20) COLLATE utf8_thai_520_w2 NOT NULL COMMENT 'เบอร์โทรศัพท์',
  `m_address` text COLLATE utf8_thai_520_w2 NOT NULL COMMENT 'ที่อยู่',
  `m_level` enum('m','a') COLLATE utf8_thai_520_w2 NOT NULL DEFAULT 'm' COMMENT 'สิทธิ์ใช้งาน'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_thai_520_w2;

--
-- Dumping data for table `member`
--

INSERT INTO `member` (`m_id`, `m_fname`, `m_lname`, `m_idcard`, `m_email`, `m_username`, `m_password`, `m_phone`, `m_address`, `m_level`) VALUES
(1, 'Peerapt', 'Mueangmo', '1549988550368', 'new@gmail.com', 'new', '$2a$10$3J7FCI0ptsFQDqV/hinNLuAPtRODqzjSc6QfyY0adJC0xoD60XJDC', '0808430385', '-', 'm');

-- --------------------------------------------------------

--
-- Table structure for table `province`
--

CREATE TABLE `province` (
  `code` varchar(20) COLLATE utf8_thai_520_w2 NOT NULL,
  `province` varchar(20) COLLATE utf8_thai_520_w2 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_thai_520_w2;

--
-- Dumping data for table `province`
--

INSERT INTO `province` (`code`, `province`) VALUES
('50', 'เชียงใหม่'),
('56', 'พะเยา'),
('57', 'เชียงราย'),
('58', 'แม่ฮ่องสอน');

-- --------------------------------------------------------

--
-- Table structure for table `tambon`
--

CREATE TABLE `tambon` (
  `code` varchar(20) COLLATE utf8_thai_520_w2 NOT NULL,
  `tambon` varchar(30) COLLATE utf8_thai_520_w2 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_thai_520_w2;

--
-- Dumping data for table `tambon`
--

INSERT INTO `tambon` (`code`, `tambon`) VALUES
('501001', 'เมืองนะ'),
('501002', 'ปิงโค้ง'),
('501101', 'ม่อนปิ่น'),
('501201', 'ท่าตอน'),
('501202', 'แม่อาย'),
('501301', 'เปียงหลวง'),
('501401', 'หนองบัว'),
('561801', 'ร่มเย็น'),
('561901', 'ทุ่งกล้วย'),
('561902', 'ภูซาง'),
('561903', 'สบบง'),
('570101', 'เทอดไทย'),
('570102', 'แม่ฟ้าหลวง'),
('570201', 'เกาะช้าง'),
('570202', 'โป่งงาม'),
('570203', 'เวียงพางคำ'),
('570301', 'เวียง'),
('570302', 'บ้านแซว'),
('570303', 'ศรีดอนมูล'),
('570401', 'แม่ไร่'),
('570501', 'ตับเต่า'),
('570601', 'ห้วยซ้อ'),
('570602', 'ริมโขง'),
('570701', 'ตาดควัน'),
('570801', 'ม่วงยาย'),
('570802', 'ปอ'),
('570803', 'หล่ายงาว'),
('570901', 'ดงมหาวัน'),
('581501', 'หมอกจำแป่'),
('581502', 'ห้วยผา'),
('581601', 'เสาหิน'),
('581701', 'ปางมะผ้า'),
('581702', 'ถ้ำลอด');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `ampher`
--
ALTER TABLE `ampher`
  ADD PRIMARY KEY (`code`);

--
-- Indexes for table `ban`
--
ALTER TABLE `ban`
  ADD PRIMARY KEY (`code`),
  ADD KEY `tambon_code` (`tambon_code`,`ampher_code`,`province_code`),
  ADD KEY `province_code` (`province_code`),
  ADD KEY `ampher_code` (`ampher_code`);

--
-- Indexes for table `master_complete`
--
ALTER TABLE `master_complete`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `f_id` (`f_id`);

--
-- Indexes for table `member`
--
ALTER TABLE `member`
  ADD PRIMARY KEY (`m_id`),
  ADD UNIQUE KEY `email` (`m_email`),
  ADD UNIQUE KEY `m_idcard` (`m_idcard`),
  ADD UNIQUE KEY `m_email` (`m_email`),
  ADD UNIQUE KEY `m_username` (`m_username`),
  ADD UNIQUE KEY `m_password` (`m_password`);

--
-- Indexes for table `province`
--
ALTER TABLE `province`
  ADD PRIMARY KEY (`code`);

--
-- Indexes for table `tambon`
--
ALTER TABLE `tambon`
  ADD PRIMARY KEY (`code`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `master_complete`
--
ALTER TABLE `master_complete`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `member`
--
ALTER TABLE `member`
  MODIFY `m_id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'รหัส', AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `ban`
--
ALTER TABLE `ban`
  ADD CONSTRAINT `ban_ibfk_1` FOREIGN KEY (`province_code`) REFERENCES `province` (`code`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ban_ibfk_2` FOREIGN KEY (`ampher_code`) REFERENCES `ampher` (`code`);

--
-- Constraints for table `tambon`
--
ALTER TABLE `tambon`
  ADD CONSTRAINT `tambon_ibfk_1` FOREIGN KEY (`code`) REFERENCES `ban` (`tambon_code`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
