'use client';

import { useState } from 'react';
import { X, Menu, Phone, Clock, Youtube, Facebook, Instagram, Stethoscope } from 'lucide-react';

import { useModalLogin } from '@/hooks/auth/useModalLogin';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const loginModal = useModalLogin();
  const handleLogin = () => {
    console.log('show login modal');
    loginModal.handleShow();
  };
  return (
    <div className="sticky top-0 z-50 bg-white shadow-md h-fit">
      <div className="max-w-[100rem] mx-auto py-[1.6rem]">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-[0.8rem]">
            <Stethoscope className="w-10 h-10 text-blue-600" />
            <div className="flex flex-col gap-[0.4rem]">
              <span className="text-[2.4rem] font-700">Phòng Khám An Khang</span>
              <p className="text-[1.2rem]">Chăm sóc sức khỏe toàn diện</p>
            </div>
          </div>

          {/* Desktop menu */}
          <nav className="hidden md:flex items-center gap-[2rem]">
            <a href="#" className="text-gray-700 hover:text-blue-600 font-500 text-[1.4rem] transition">
              Trang chủ
            </a>
            <a
              href="#doctors"
              className="text-gray-700 hover:text-blue-600 font-500 text-[1.4rem] transition"
            >
              Bác sĩ
            </a>
            <a
              href="#services"
              className="text-gray-700 hover:text-blue-600 font-500 text-[1.4rem] transition"
            >
              Dịch vụ
            </a>
            <a href="#news" className="text-gray-700 hover:text-blue-600 font-500 text-[1.4rem] transition">
              Tin tức
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-blue-600 font-500 text-[1.4rem] transition"
            >
              Liên hệ
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <button className="hidden md:block px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold hover:shadow-lg transition transform hover:scale-105">
              Đặt lịch khám
            </button>
            <button
              className="hidden md:block px-4 py-2 border-2 border-blue-600 text-blue-600 rounded-full font-semibold hover:bg-blue-50 transition"
              onClick={() => handleLogin()}
            >
              Đăng nhập
            </button>
            <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t pt-4 space-y-3">
            <a href="#" className="block text-gray-700 hover:text-blue-600 font-medium">
              Trang chủ
            </a>
            <a href="#doctors" className="block text-gray-700 hover:text-blue-600 font-medium">
              Bác sĩ
            </a>
            <a href="#services" className="block text-gray-700 hover:text-blue-600 font-medium">
              Dịch vụ
            </a>
            <a href="#news" className="block text-gray-700 hover:text-blue-600 font-medium">
              Tin tức
            </a>
            <a href="#contact" className="block text-gray-700 hover:text-blue-600 font-medium">
              Liên hệ
            </a>
            <button className="w-full px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold">
              Đặt lịch khám
            </button>
          </nav>
        )}
      </div>
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-[0.4rem]">
        <div className="max-w-[100rem] mx-auto px- flex justify-between items-center text-[1.4rem]">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="w-[2rem] h-[2rem]" />
              <span className=" flex items-center font-[600] h-[3rem]">Hotline: 1900-xxxx</span>
            </div>
            <div className="flex items-center gap-[0.4rem]">
              <Clock className="w-4 h-4" />
              <span>T2-T7: 7:00 - 21:00 | CN: 8:00 - 17:00</span>
            </div>
          </div>
          <div className="flex gap-4">
            <Facebook className="w-4 h-4 cursor-pointer hover:scale-110 transition" />
            <Youtube className="w-4 h-4 cursor-pointer hover:scale-110 transition" />
            <Instagram className="w-4 h-4 cursor-pointer hover:scale-110 transition" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
