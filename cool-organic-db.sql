-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 07, 2022 at 07:57 AM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 7.4.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cool-organic-db`
--

-- --------------------------------------------------------

--
-- Table structure for table `catagorys`
--

CREATE TABLE `catagorys` (
  `catagoryId` varchar(10) COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `catagoryName` varchar(30) COLLATE utf8mb4_vietnamese_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

--
-- Dumping data for table `catagorys`
--

INSERT INTO `catagorys` (`catagoryId`, `catagoryName`) VALUES
('LSP0002', 'Rau củ sạch'),
('LSP0151', 'Thịt tươi sống'),
('LSP0407', 'Trái cây tươi'),
('LSP0469', 'Thực phẩm dinh dưỡng'),
('LSP0568', 'Thực phẩm khô'),
('LSP0585', 'Thực phẩm nhập khẩu'),
('LSP0760', 'Gia vi'),
('LSP0860', 'Hải sản tươi sống');

-- --------------------------------------------------------

--
-- Table structure for table `chitietdonhang`
--

CREATE TABLE `chitietdonhang` (
  `ctdh_id` varchar(30) COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `ctdh_madonhang` varchar(20) COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `ctdh_masanpham` varchar(15) COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `ctdh_soluong` int(11) NOT NULL,
  `ctdh_donvitinh` varchar(10) COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `ctdh_hinhanh` varchar(200) COLLATE utf8mb4_vietnamese_ci DEFAULT NULL,
  `ctdh_tongtien` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

--
-- Dumping data for table `chitietdonhang`
--

INSERT INTO `chitietdonhang` (`ctdh_id`, `ctdh_madonhang`, `ctdh_masanpham`, `ctdh_soluong`, `ctdh_donvitinh`, `ctdh_hinhanh`, `ctdh_tongtien`) VALUES
('CTDH001240517591961156', 'DH00458775942942', 'SP00424009', 3, '500g', 'NhoUc.jpg', 177500),
('CTDH001335468048060247', 'DH00639546979639', 'SP00424009', 1, '1kg', 'NhoUc.jpg', 355000),
('CTDH001657540114899475', 'DH00699947185934', 'SP00362741', 3, '500g', 'dao.jpg', 100000),
('CTDH001694364178802708', 'DH00156778544503', 'SP00362741', 2, '500g', 'dao.jpg', 100000),
('CTDH001742924237035577', 'DH00629431998837', 'SP00672622', 1, '1kg', 'tom-kho-size-s.jpg', 450000),
('CTDH001926153308152606', 'DH00890597263152', 'SP00540604', 1, '1kg', 'thit_bo.jpg', 380000),
('CTDH002014500888245116', 'DH00729870943611', 'SP00540604', 1, '1kg', 'thit_bo.jpg', 380000),
('CTDH002264969079959489', 'DH00557732441259', 'SP00540604', 1, '500g', 'thit_bo.jpg', 190000),
('CTDH002528707165401904', 'DH00791267517497', 'SP00424009', 2, '1kg', 'NhoUc.jpg', 710000),
('CTDH002787022917963930', 'DH00888823964016', 'SP00540604', 1, '1kg', 'thit_bo.jpg', 380000),
('CTDH003504282033872631', 'DH00967144808244', 'SP00534609', 1, '1kg', 'ca_hoi.jpg', 250000),
('CTDH003723757889333754', 'DH00422130857399', 'SP00534609', 2, '1kg', 'ca_hoi.jpg', 500000),
('CTDH004078854154401267', 'DH00251639392127', 'SP00540604', 1, '1kg', 'thit_bo.jpg', 380000),
('CTDH004204879271651275', 'DH00811989633918', 'SP00408964', 3, '500g', 'tao.jpg', 82500),
('CTDH004364159084023855', 'DH00921777212587', 'SP00424009', 1, '1kg', 'NhoUc.jpg', 355000),
('CTDH004688023058758094', 'DH00373141736066', 'SP00943749', 3, '1kg', 'Kiwi.jpg', 870000),
('CTDH004784355313083678', 'DH00245300312995', 'SP00893200', 1, '1kg', 'vai-thieu.jpg', 78000),
('CTDH004832462024099427', 'DH00302854407097', 'SP00580005', 1, '1kg', 'bong_cai.jpg', 25000),
('CTDH005180243822128646', 'DH00240765502603', 'SP00523605', 1, '500g', 'chanh.jpg', 17000),
('CTDH005256947622034285', 'DH00631494139763', 'SP00362741', 3, '500g', 'dao.jpg', 300000),
('CTDH007080480524261632', 'DH00372481138354', 'SP00540604', 1, '1kg', 'thit_bo.jpg', 380000),
('CTDH007379203504814763', 'DH00162992925745', 'SP00540604', 1, '500g', 'thit_bo.jpg', 190000),
('CTDH007567043778313092', 'DH00780907261673', 'SP00408964', 4, '1kg', 'tao.jpg', 220000),
('CTDH008323112778837639', 'DH00156778544503', 'SP00523605', 1, '500g', 'chanh.jpg', 17000),
('CTDH008422390214784092', 'DH00328874852474', 'SP00834951', 1, '1kg', 'ca-hoi-fillet2.jpg', 410000),
('CTDH008454143342171867', 'DH00786289001357', 'SP00237105', 3, '500g', 'CaRot.jpg', 37500),
('CTDH008920781611434719', 'DH00276076784613', 'SP00523605', 2, '1Kg', 'chanh.jpg', 68000),
('CTDH009039457730952704', 'DH00366661189559', 'SP00362741', 3, '500g', 'dao.jpg', 300000),
('CTDH009370597571711562', 'DH00930214520139', 'SP00834951', 1, '1kg', 'ca-hoi-fillet2.jpg', 410000),
('CTDH009824068104377666', 'DH00240765502603', 'SP00362741', 2, '500g', 'dao.jpg', 100000),
('CTDH009874462423948026', 'DH00897065298790', 'SP00362741', 1, '1kg', 'dao.jpg', 200000);

-- --------------------------------------------------------

--
-- Table structure for table `donhang`
--

CREATE TABLE `donhang` (
  `dh_id` varchar(20) COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `dh_taikhoan` varchar(15) COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `dh_ngaydathang` datetime NOT NULL,
  `dh_trangthai` varchar(15) COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `dh_diachi` varchar(300) COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `dh_sodienthoai` varchar(15) COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `dh_hinhthucthanhtoan` varchar(15) COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `dh_thanhtoan` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

--
-- Dumping data for table `donhang`
--

INSERT INTO `donhang` (`dh_id`, `dh_taikhoan`, `dh_ngaydathang`, `dh_trangthai`, `dh_diachi`, `dh_sodienthoai`, `dh_hinhthucthanhtoan`, `dh_thanhtoan`) VALUES
('DH00156778544503', '0987654321', '2020-08-12 22:09:19', 'THANHCONG', 'xc zxczxc, Xã Phước Hoà, Thị xã Phú Mỹ, Bà Rịa - Vũng Tàu', '0987654321', 'offline', 109500),
('DH00162992925745', '0201234567', '2022-04-06 14:34:17', 'DANGGIAO', 'ABC/123, Phường 03, Quận 3, Hồ Chí Minh', '0201234567', 'online', 212500),
('DH00240765502603', '0987654321', '2022-03-13 21:32:54', 'THANHCONG', 'czxc, Thị trấn Long Hải, Huyện Long Điền, Bà Rịa - Vũng Tàu', '0987654321', 'offline', 109500),
('DH00245300312995', '0123456789', '2020-04-12 22:14:38', 'THANHCONG', 'cxvcxvxcv, Phường 11, Thành phố Vũng Tàu, Bà Rịa - Vũng Tàu', '0123456789', 'offline', 100500),
('DH00276076784613', '098763434', '2022-04-07 12:52:48', 'CHOXACNHAN', 'xcxcxc, Xã Hòa Nhơn, Huyện Hòa Vang, Đà Nẵng', '098763434', 'offline', 90500),
('DH00302854407097', '0201234567', '2022-04-06 14:38:25', 'DANGGIAO', 'BCA, Phường 03, Quận 4, Hồ Chí Minh', '0201234567', 'online', 47500),
('DH00328874852474', '0707730850', '2022-03-12 22:32:45', 'THANHCONG', 'xzczxc, Xã Phong Thạnh, Thị xã Giá Rai, Bạc Liêu', '0707730850', 'offline', 372500),
('DH00366661189559', '0123456789', '2022-01-12 22:25:50', 'THANHCONG', 'czvxcvxcv, Phường 3, Thành phố Vũng Tàu, Bà Rịa - Vũng Tàu', '0123456789', 'offline', 302500),
('DH00372481138354', '0987654321', '2022-03-13 07:06:37', 'THANHCONG', 'asdasdasd, Xã Tân Hải, Thị xã Phú Mỹ, Bà Rịa - Vũng Tàu', '0987654321', 'online', 402500),
('DH00373141736066', '0987654321', '2020-06-12 22:12:27', 'THANHCONG', 'xcxzc zcxzcxzc, Phường 5, Thành phố Vũng Tàu, Bà Rịa - Vũng Tàu', '0987654321', 'online', 892500),
('DH00422130857399', '0123456789', '2020-01-12 22:14:12', 'THANHCONG', 'vcxvxcvxvxc, Phường 05, Quận 5, Hồ Chí Minh', '0123456789', 'online', 522500),
('DH00458775942942', '088888888', '2022-03-13 07:35:55', 'DANGGIAO', 'dzfvzdxfsdf, Xã Hiệp Xương, Huyện Phú Tân, An Giang', '088888888', 'online', 200000),
('DH00557732441259', '098765432', '2022-04-06 10:57:32', 'THANHCONG', 'ABC/123, Phường 03, Quận 3, Hồ Chí Minh', '098765432', 'online', 212500),
('DH00629431998837', '0123987654', '2021-01-12 22:30:08', 'DAHUY', 'asdsdsad, Xã Dương Quang, Thành Phố Bắc Kạn, Bắc Kạn', '0123987654', 'online', 472500),
('DH00631494139763', '0707730850', '2022-02-12 22:31:33', 'THANHCONG', 'dzxczxc, Phường 3, Thành phố Vũng Tàu, Bà Rịa - Vũng Tàu', '0707730850', 'offline', 322500),
('DH00729870943611', '0707730850', '2021-03-12 22:32:25', 'DANHANDON', 'zxcxzc, Xã Hợp Đức, Huyện Tân Yên, Bắc Giang', '0707730850', 'online', 402500),
('DH00780907261673', '0707730850', '2021-01-12 22:31:52', 'DANHANDON', 'cxzczxc, Xã Bình Trung, Huyện Châu Đức, Bà Rịa - Vũng Tàu', '0707730850', 'offline', 242500),
('DH00786289001357', '0987654321', '2020-11-12 22:08:10', 'THANHCONG', 'czxcvxzcz czxvcu, Phường Mân Thái, Quận Sơn Trà, Đà Nẵng', '0987654321', 'online', 60000),
('DH00791267517497', '0987654321', '2020-03-12 22:11:35', 'THANHCONG', 'zczxczc  dsasdasd, Phường 4, Thành phố Vũng Tàu, Bà Rịa - Vũng Tàu', '0987654321', 'online', 732500),
('DH00811989633918', '0123456789', '2020-10-12 22:13:37', 'THANHCONG', 'dsfdfdsf, Xã Nông Thượng, Thành Phố Bắc Kạn, Bắc Kạn', '0123456789', 'offline', 105000),
('DH00888823964016', '0123987654', '2022-03-13 07:13:40', 'THANHCONG', 'xfvxfgvdf, Phường Hòa Khánh Bắc, Quận Liên Chiểu, Đà Nẵng', '0123987654', 'online', 402500),
('DH00890597263152', '0987654321', '2022-03-12 22:28:37', 'DANGGIAO', 'dzczxcz, Phường 3, Thành phố Vũng Tàu, Bà Rịa - Vũng Tàu', '0987654321', 'online', 402500),
('DH00897065298790', '088888888', '2022-03-13 07:33:55', 'THANHCONG', 'xcvsdf, Xã Hà Vị, Huyện Bạch Thông, Bắc Kạn', '088888888', 'online', 222500),
('DH00921777212587', '0987654321', '2021-05-12 22:28:05', 'THANHCONG', 'sddxvcxcv, Xã Tân Hải, Thị xã Phú Mỹ, Bà Rịa - Vũng Tàu', '0987654321', 'offline', 357500),
('DH00930214520139', '0123987654', '2022-01-12 22:30:32', 'DAHUY', 'cxzczxc, Phường Đồng Nguyên, Thị xã Từ Sơn, Bắc Ninh', '0123987654', 'offline', 372500),
('DH00967144808244', '0123456789', '2021-09-12 22:26:27', 'THANHCONG', 'zxcxzczxcz, Xã Nghĩa Trung, Huyện Việt Yên, Bắc Giang', '0123456789', 'online', 272500);

-- --------------------------------------------------------

--
-- Table structure for table `giohang`
--

CREATE TABLE `giohang` (
  `gh_id` varchar(15) COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `gh_sodienthoai` varchar(15) COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `gh_masanpham` varchar(15) COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `gh_donvitinh` varchar(20) COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `gh_dongia` float NOT NULL CHECK (`gh_dongia` >= 0),
  `gh_soluong` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

--
-- Dumping data for table `giohang`
--

INSERT INTO `giohang` (`gh_id`, `gh_sodienthoai`, `gh_masanpham`, `gh_donvitinh`, `gh_dongia`, `gh_soluong`) VALUES
('GH00517370082', '0707730850', 'SP00362741', '500g', 100000, 1),
('GH00683444123', '0201234567', 'SP00540604', '500g', 190000, 1),
('GH00864802482', '0701234567', 'SP00424009', '1kg', 355000, 1),
('GH00898467133', '0987654321', 'SP00653698', '1Lít', 25000, 1),
('GH00961119042', '0707730850', 'SP00237105', '500g', 12500, 3);

-- --------------------------------------------------------

--
-- Table structure for table `khachhang`
--

CREATE TABLE `khachhang` (
  `kh_ma` varchar(15) COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `kh_hoten` varchar(30) COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `kh_gioitinh` varchar(10) COLLATE utf8mb4_vietnamese_ci DEFAULT NULL,
  `kh_sodienthoai` varchar(15) COLLATE utf8mb4_vietnamese_ci DEFAULT NULL,
  `kh_diachi` varchar(300) COLLATE utf8mb4_vietnamese_ci DEFAULT NULL,
  `kh_taikhoan` varchar(15) COLLATE utf8mb4_vietnamese_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

--
-- Dumping data for table `khachhang`
--

INSERT INTO `khachhang` (`kh_ma`, `kh_hoten`, `kh_gioitinh`, `kh_sodienthoai`, `kh_diachi`, `kh_taikhoan`) VALUES
('KH0011390845', 'Phạm Hoàng Tuấn', '', '0707730850', '', '0707730850'),
('KH0012917802', 'Nguyen Phuoc Nhan', '', '0987654321', '', '0987654321'),
('KH0020203283', 'Hoang Tuan', '', '098763434', '', '098763434'),
('KH0028990454', 'Pham Thi My Linh', '', '0123456789', '', '0123456789'),
('KH0068158455', 'Truong Minh Tam', '', '0123', '', '0123'),
('KH0076959459', 'Mỹ Uyên', '', '0201234567', '', '0201234567'),
('KH0080432325', 'Nguyễn Thanh Thiện', '', '088888888', '', '088888888');

-- --------------------------------------------------------

--
-- Table structure for table `khuyenmai`
--

CREATE TABLE `khuyenmai` (
  `khmai_id` varchar(15) COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `khmai_nhan` varchar(15) COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `kmai_mota` varchar(1000) COLLATE utf8mb4_vietnamese_ci DEFAULT NULL,
  `kmai_giatri` float DEFAULT NULL,
  `kmai_giamtoida` float DEFAULT NULL,
  `kmai_dieukien` float NOT NULL,
  `kmai_ngaybatdau` date NOT NULL,
  `kmai_ngayketthuc` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

--
-- Dumping data for table `khuyenmai`
--

INSERT INTO `khuyenmai` (`khmai_id`, `khmai_nhan`, `kmai_mota`, `kmai_giatri`, `kmai_giamtoida`, `kmai_dieukien`, `kmai_ngaybatdau`, `kmai_ngayketthuc`) VALUES
('DEAL20', '20%', 'Giảm 20% cho đơn từ 150.000đ', 0.2, 20000, 150000, '2022-02-15', '2022-03-15'),
('OFFSALE50', '50%', 'Giảm 50% cho đơn từ 400.000đ', 0.5, 60000, 400000, '2022-02-15', '2022-03-15'),
('SALE30K', '30K', 'Giảm 30.000đ cho đơn từ 100.000đ', 30000, NULL, 100000, '2022-02-15', '2022-03-15');

-- --------------------------------------------------------

--
-- Table structure for table `loaisanpham`
--

CREATE TABLE `loaisanpham` (
  `lsp_id` varchar(15) COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `lsp_tenloai` varchar(30) COLLATE utf8mb4_vietnamese_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

--
-- Dumping data for table `loaisanpham`
--

INSERT INTO `loaisanpham` (`lsp_id`, `lsp_tenloai`) VALUES
('LSP0002', 'Rau củ sạch'),
('LSP0151', 'Thịt tươi sống'),
('LSP0407', 'Trái cây tươi'),
('LSP0437', 'Nước ép'),
('LSP0469', 'Thực phẩm dinh dưỡng'),
('LSP0568', 'Thực phẩm khô'),
('LSP0585', 'Thực phẩm nhập khẩu'),
('LSP0860', 'Hải sản tươi sống');

-- --------------------------------------------------------

--
-- Table structure for table `nhanvien`
--

CREATE TABLE `nhanvien` (
  `nv_id` varchar(15) COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `nv_hoten` varchar(30) COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `nv_gioitinh` varchar(10) COLLATE utf8mb4_vietnamese_ci DEFAULT NULL,
  `nv_ngaysinh` date DEFAULT NULL,
  `nv_sodienthoai` varchar(15) COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `nv_diachi` varchar(300) COLLATE utf8mb4_vietnamese_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

--
-- Dumping data for table `nhanvien`
--

INSERT INTO `nhanvien` (`nv_id`, `nv_hoten`, `nv_gioitinh`, `nv_ngaysinh`, `nv_sodienthoai`, `nv_diachi`) VALUES
('NV0001', 'Phạm Hoàng Tuấn', 'Nam', '2000-07-28', '0707730850', 'C166D đường Trần Văn Hoài, phường Xuân Khánh, quận Ninh Kiều, Cần Thơ'),
('NV0002', 'Phạm Thị Mỹ Linh', 'Nữ', '2001-08-14', '0123456789', 'C166D đường Trần Văn Hoài, phường Xuân Khánh, quận Ninh Kiều, Cần Thơ'),
('NV0003', 'Trương Minh Tâm', 'Nam', '2000-05-12', '0135798642', 'C166D đường Trần Văn Hoài, phường Xuân Khánh, quận Ninh Kiều, Cần Thơ'),
('NV0004', 'Lâm Thị Kiều Diễm', 'Nữ', '2000-02-09', '0975312468', 'C166D đường Trần Văn Hoài, phường Xuân Khánh, quận Ninh Kiều, Cần Thơ'),
('NV0005', 'Nguyễn Thanh Thiện', 'Nam', '2000-01-15', '0998877665', 'C166D đường Trần Văn Hoài, phường Xuân Khánh, quận Ninh Kiều, Cần Thơ'),
('NV0006', 'Edogawa Conan', 'Nam', '2002-07-29', '0122334455', 'C166D đường Trần Văn Hoài, phường Xuân Khánh, quận Ninh Kiều, Cần Thơ'),
('NV0007', 'Cao Mỹ Hương', 'Nữ', '2001-02-09', '0901111111', 'C166D đường Trần Văn Hoài, phường Xuân Khánh, quận Ninh Kiều, Cần Thơ');

-- --------------------------------------------------------

--
-- Table structure for table `quyenhantaikhoan`
--

CREATE TABLE `quyenhantaikhoan` (
  `qhtk_id` varchar(10) COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `qhtk_quyenhan` varchar(30) COLLATE utf8mb4_vietnamese_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

--
-- Dumping data for table `quyenhantaikhoan`
--

INSERT INTO `quyenhantaikhoan` (`qhtk_id`, `qhtk_quyenhan`) VALUES
('NHANVIEN', 'Nhân viên'),
('QUANLY', 'Quản lý');

-- --------------------------------------------------------

--
-- Table structure for table `sanpham`
--

CREATE TABLE `sanpham` (
  `sp_id` varchar(15) COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `sp_tensanpham` varchar(30) COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `sp_gia` float NOT NULL CHECK (`sp_gia` >= 0),
  `sp_hinhanh` varchar(500) COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `sp_donvitinh` varchar(10) COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `sp_tonkho` int(11) NOT NULL CHECK (`sp_tonkho` >= 0),
  `sp_maloai` varchar(15) COLLATE utf8mb4_vietnamese_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

--
-- Dumping data for table `sanpham`
--

INSERT INTO `sanpham` (`sp_id`, `sp_tensanpham`, `sp_gia`, `sp_hinhanh`, `sp_donvitinh`, `sp_tonkho`, `sp_maloai`) VALUES
('SP00237105', 'Cà rốt', 25000, 'CaRot.jpg', 'Kg', 5, 'LSP0002'),
('SP00345343', 'Thịt gà', 67000, 'thit_ga.jpg', 'Kg', 10, 'LSP0151'),
('SP00362741', 'Đào Hàn Quốc', 200000, 'dao.jpg', 'Kg', 4, 'LSP0407'),
('SP00401432', 'Trứng gà', 3000, 'trung-ga-2.jpg', 'Trứng', 59, 'LSP0568'),
('SP00408964', 'Táo xanh', 55000, 'tao.jpg', 'Kg', 16, 'LSP0407'),
('SP00424009', 'Nho không hạt', 355000, 'NhoUc.jpg', 'Kg', 20, 'LSP0407'),
('SP00455589', 'Gạo', 30000, 'gao-2.jpg', 'Kg', 120, 'LSP0568'),
('SP00523506', 'Nước ép thơm', 35000, 'nuoc-ep-khom.jpg', 'Lít', 3, 'LSP0437'),
('SP00523605', 'Chanh Đà Lạt', 34000, 'chanh.jpg', 'Kg', 12, 'LSP0002'),
('SP00534609', 'Cá hồi Nhật', 250000, 'ca_hoi.jpg', 'Kg', 15, 'LSP0860'),
('SP00540604', 'Thịt bò Úc', 380000, 'thit_bo.jpg', 'Kg', 10, 'LSP0151'),
('SP00580005', 'Bông cải xanh', 25000, 'bong_cai.jpg', 'Kg', 90, 'LSP0002'),
('SP00653698', 'Nước ép xoài', 25000, 'nuoc-ep-xoai.jpg', 'Lít', 0, 'LSP0437'),
('SP00672293', 'Dưa chuột', 14000, 'DuaChuot2.png', 'Kg', 23, 'LSP0002'),
('SP00672622', 'Tôm khô', 450000, 'tom-kho-size-s.jpg', 'Kg', 15, 'LSP0568'),
('SP00678778', 'Me Thái', 35000, 'MeThai.jpg', 'Kg', 15, 'LSP0407'),
('SP00691776', 'Đùi vịt', 68000, 'dui-vit.jpg', 'Kg', 7, 'LSP0151'),
('SP00765650', 'Cam', 45000, 'cam.jpg', 'Kg', 0, 'LSP0407'),
('SP00823100', 'Trứng cá hồi', 300000, 'trung-ca-hoi.jpg', 'Kg', 2, 'LSP0151'),
('SP00834951', 'Cá hồi', 410000, 'ca-hoi-fillet2.jpg', 'Kg', 3, 'LSP0585'),
('SP00881615', 'Ớt chuông Đà Lạt', 55000, 'OtChuong.jpg', 'Kg', 0, 'LSP0002'),
('SP00888005', 'Nước ép cam', 55000, 'nuoc-ep-cam-2.png', 'Lít', 9, 'LSP0437'),
('SP00893200', 'Vãi thiều', 78000, 'vai-thieu.jpg', 'Kg', 33, 'LSP0407'),
('SP00935754', 'Nước ép dưa hấu', 45000, 'nuoc-ep-dua-hau.jpg', 'Lít', 10, 'LSP0437'),
('SP00936410', 'Hành Tây', 26000, 'HanhTayDL.jpg', 'Kg', 0, 'LSP0002'),
('SP00943749', 'Kiwi New Zealand', 290000, 'Kiwi.jpg', 'Kg', 25, 'LSP0407'),
('SP00995096', 'Thịt heo', 66000, 'thit_heo.jpg', 'Kg', 25, 'LSP0151');

-- --------------------------------------------------------

--
-- Table structure for table `sanphamkhuyenmai`
--

CREATE TABLE `sanphamkhuyenmai` (
  `spkm_id` varchar(15) COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `spkm_masanpham` varchar(15) COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `spkm_tylegiam` int(11) DEFAULT NULL CHECK (`spkm_tylegiam` >= 0),
  `spkm_ngaybatdau` datetime DEFAULT NULL,
  `spkm_ngayketthuc` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

--
-- Dumping data for table `sanphamkhuyenmai`
--

INSERT INTO `sanphamkhuyenmai` (`spkm_id`, `spkm_masanpham`, `spkm_tylegiam`, `spkm_ngaybatdau`, `spkm_ngayketthuc`) VALUES
('KM0002345679', 'SP00881615', 30, '2022-01-29 00:00:00', '2022-02-28 00:00:00'),
('KM0010340570', 'SP00893200', 30, '2022-01-29 00:00:00', '2022-02-28 00:00:00'),
('KM0012020570', 'SP00834951', 30, '2022-01-29 00:00:00', '2022-02-28 00:00:00'),
('KM0012300679', 'SP00765650', 30, '2022-01-29 00:00:00', '2022-02-28 00:00:00'),
('KM0012345678', 'SP00943749', 30, '2022-02-28 00:00:00', '2022-01-29 04:41:15');

-- --------------------------------------------------------

--
-- Table structure for table `taikhoankhachhang`
--

CREATE TABLE `taikhoankhachhang` (
  `tkkh_sodienthoai` varchar(15) COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `tkkh_matkhau` varchar(30) COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `tkkh_hoten` varchar(30) COLLATE utf8mb4_vietnamese_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

--
-- Dumping data for table `taikhoankhachhang`
--

INSERT INTO `taikhoankhachhang` (`tkkh_sodienthoai`, `tkkh_matkhau`, `tkkh_hoten`) VALUES
('0123456789', 'linh123', 'Phạm Thị Mỹ Linh'),
('0123987654', '123', 'Trương Minh Tâm'),
('0201234567', '123', 'Mỹ Uyên'),
('0707730850', 'tuan123', 'Phạm Hoàng Tuấn'),
('088888888', '123', 'Nguyễn Thanh Thiện'),
('098763434', '123', 'Hoang Tuan'),
('0987654321', 'nhan456', 'Nguyễn Phước Nhân');

-- --------------------------------------------------------

--
-- Table structure for table `taikhoanquantri`
--

CREATE TABLE `taikhoanquantri` (
  `tkqt_tendangnhap` varchar(20) COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `tkqt_matkhau` varchar(30) COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `tkqt_manhanvien` varchar(15) COLLATE utf8mb4_vietnamese_ci DEFAULT NULL,
  `tkqt_quyenhan` varchar(10) COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `tkqt_trangthai` varchar(10) COLLATE utf8mb4_vietnamese_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

--
-- Dumping data for table `taikhoanquantri`
--

INSERT INTO `taikhoanquantri` (`tkqt_tendangnhap`, `tkqt_matkhau`, `tkqt_manhanvien`, `tkqt_quyenhan`, `tkqt_trangthai`) VALUES
('CMHUONG007', 'cmhuong007', 'NV0007', 'NHANVIEN', 'LOCK'),
('ECONAN006', 'econan006', 'NV0006', 'QUANLY', 'LOCK'),
('LKDIEM004', 'lkdiem004', 'NV0004', 'NHANVIEN', 'OPEN'),
('NTTHIEN005', 'ntthien005', 'NV0005', 'NHANVIEN', 'LOCK'),
('PHTUAN001', 'phtuan001', 'NV0001', 'QUANLY', 'OPEN'),
('PMLINH002', 'pmlinh002', 'NV0002', 'NHANVIEN', 'OPEN'),
('TMTAM003', 'tmtam003', 'NV0003', 'NHANVIEN', 'OPEN');

-- --------------------------------------------------------

--
-- Table structure for table `trangthaidonhang`
--

CREATE TABLE `trangthaidonhang` (
  `ttdh_id` varchar(15) COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `ttdh_trangthai` varchar(30) COLLATE utf8mb4_vietnamese_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

--
-- Dumping data for table `trangthaidonhang`
--

INSERT INTO `trangthaidonhang` (`ttdh_id`, `ttdh_trangthai`) VALUES
('CHOXACNHAN', 'Chờ xác nhận'),
('DAHUY', 'Đã hủy'),
('DANGGIAO', 'Đang giao'),
('DANHANDON', 'Đã nhận đơn'),
('THANHCONG', 'Giao thành công');

-- --------------------------------------------------------

--
-- Table structure for table `trangthaitaikhoan`
--

CREATE TABLE `trangthaitaikhoan` (
  `tttk_id` varchar(10) COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `tttk_trangthai` varchar(30) COLLATE utf8mb4_vietnamese_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

--
-- Dumping data for table `trangthaitaikhoan`
--

INSERT INTO `trangthaitaikhoan` (`tttk_id`, `tttk_trangthai`) VALUES
('LOCK', 'Bị khóa'),
('OPEN', 'Hoạt động');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `catagorys`
--
ALTER TABLE `catagorys`
  ADD PRIMARY KEY (`catagoryId`);

--
-- Indexes for table `chitietdonhang`
--
ALTER TABLE `chitietdonhang`
  ADD PRIMARY KEY (`ctdh_id`);

--
-- Indexes for table `donhang`
--
ALTER TABLE `donhang`
  ADD PRIMARY KEY (`dh_id`);

--
-- Indexes for table `giohang`
--
ALTER TABLE `giohang`
  ADD PRIMARY KEY (`gh_id`);

--
-- Indexes for table `khachhang`
--
ALTER TABLE `khachhang`
  ADD PRIMARY KEY (`kh_ma`);

--
-- Indexes for table `khuyenmai`
--
ALTER TABLE `khuyenmai`
  ADD PRIMARY KEY (`khmai_id`);

--
-- Indexes for table `loaisanpham`
--
ALTER TABLE `loaisanpham`
  ADD PRIMARY KEY (`lsp_id`);

--
-- Indexes for table `nhanvien`
--
ALTER TABLE `nhanvien`
  ADD PRIMARY KEY (`nv_id`);

--
-- Indexes for table `quyenhantaikhoan`
--
ALTER TABLE `quyenhantaikhoan`
  ADD PRIMARY KEY (`qhtk_id`);

--
-- Indexes for table `sanpham`
--
ALTER TABLE `sanpham`
  ADD PRIMARY KEY (`sp_id`);

--
-- Indexes for table `sanphamkhuyenmai`
--
ALTER TABLE `sanphamkhuyenmai`
  ADD PRIMARY KEY (`spkm_id`);

--
-- Indexes for table `taikhoankhachhang`
--
ALTER TABLE `taikhoankhachhang`
  ADD PRIMARY KEY (`tkkh_sodienthoai`);

--
-- Indexes for table `taikhoanquantri`
--
ALTER TABLE `taikhoanquantri`
  ADD PRIMARY KEY (`tkqt_tendangnhap`);

--
-- Indexes for table `trangthaidonhang`
--
ALTER TABLE `trangthaidonhang`
  ADD PRIMARY KEY (`ttdh_id`);

--
-- Indexes for table `trangthaitaikhoan`
--
ALTER TABLE `trangthaitaikhoan`
  ADD PRIMARY KEY (`tttk_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
