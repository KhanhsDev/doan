'use client';

import React, { useState } from 'react';
import {
  X,
  Zap,
  Star,
  Clock,
  Award,
  Users,
  Heart,
  Phone,
  Shield,
  Share2,
  Package,
  Calendar,
  FileText,
  Activity,
  Bookmark,
  CheckCircle,
  AlertCircle,
  ChevronRight,
  MessageCircle,
  BookmarkCheck,
} from 'lucide-react';

interface IService {
  id: number;
  name: string;
  slug: string;
  specialty: string;
  tagline: string;
  pricing: {
    [key in PackageKey]: {
      name: string;
      price: number;
      originalPrice: number;
      discount: number;
      duration: number;
      popular?: boolean;
      bestValue?: boolean;
      premium?: boolean;
    };
  };
  images: string[];
  videoUrl: string;
  description: string;
  highlights: string[];
  includes: {
    [key in PackageKey]: string[];
  };
  process: {
    step: number;
    title: string;
    description: string;
    duration: string;
    icon: React.ReactNode;
  }[];
  benefits: {
    icon: React.ReactNode;
    title: string;
    description: string;
  }[];
  preparation: string[];
  suitableFor: string[];
  stats: {
    totalBookings: number;
    satisfaction: number;
    rating: number;
    reviews: number;
  };
  faqs: {
    q: string;
    a: string;
  }[];
  reviews: {
    id: number;
    name: string;
    avatar: string;
    rating: number;
    date: string;
    package: string;
    comment: string;
    helpful: number;
  }[];
  relatedServices: {
    id: number;
    name: string;
    image: string;
    price: number;
    rating: number;
  }[];
}
type PackageKey = 'basic' | 'standard' | 'premium';

export default function ServiceDetailPage() {
  const [selectedPackage, setSelectedPackage] = useState('basic');
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Service Data
  const service: IService = {
    id: 1,
    name: 'Gói Khám Sức Khỏe Tim Mạch Toàn Diện',
    slug: 'goi-kham-tim-mach-toan-dien',
    specialty: 'Tim mạch',
    tagline: 'Phát hiện sớm, phòng ngừa hiệu quả các bệnh lý tim mạch',

    pricing: {
      basic: {
        name: 'Gói Cơ Bản',
        price: 1500000,
        originalPrice: 2000000,
        discount: 25,
        duration: 120,
        popular: true,
        bestValue: false,
      },
      standard: {
        name: 'Gói Tiêu Chuẩn',
        price: 3500000,
        originalPrice: 4500000,
        discount: 22,
        duration: 180,
        popular: true,

        bestValue: true,
      },
      premium: {
        name: 'Gói Cao Cấp',
        price: 6000000,
        originalPrice: 8000000,
        discount: 25,
        duration: 240,
        bestValue: false,
        premium: true,
      },
    },

    images: [
      'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1581594549595-35f6edc7b762?w=800&h=500&fit=crop',
    ],

    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',

    description:
      'Gói khám sức khỏe Tim Mạch Toàn Diện được thiết kế để phát hiện sớm và đánh giá toàn diện tình trạng sức khỏe tim mạch của bạn. Với đội ngũ bác sĩ chuyên khoa đầu ngành và trang thiết bị y tế hiện đại nhất, chúng tôi cam kết mang đến dịch vụ chăm sóc sức khỏe chất lượng cao nhất.',

    highlights: [
      'Đội ngũ bác sĩ Tim mạch giàu kinh nghiệm',
      'Trang thiết bị hiện đại (Siêu âm 4D, ECG tự động)',
      'Kết quả nhanh chóng trong ngày',
      'Tư vấn chi tiết từ chuyên gia',
      'Theo dõi sức khỏe sau khám',
      'Hỗ trợ thanh toán BHYT',
    ],

    includes: {
      basic: [
        'Khám lâm sàng với bác sĩ chuyên khoa',
        'Điện tim (ECG) 12 chuyển đạo',
        'Xét nghiệm máu cơ bản (Lipid, Glucose, HbA1c)',
        'X-quang ngực',
        'Tư vấn kết quả và chế độ ăn uống',
      ],
      standard: [
        'Tất cả dịch vụ trong Gói Cơ Bản',
        'Siêu âm tim Doppler màu',
        'Holter ECG 24 giờ',
        'Xét nghiệm máu toàn diện (bao gồm Troponin)',
        'Test gắng sức (nếu cần)',
        'Tư vấn chế độ ăn uống và vận động chi tiết',
        'Tái khám miễn phí 1 lần trong 30 ngày',
      ],
      premium: [
        'Tất cả dịch vụ trong Gói Tiêu Chuẩn',
        'Khám với PGS.TS đầu ngành',
        'Siêu âm tim 4D',
        'Holter huyết áp 24 giờ',
        'CT mạch vành 64 dãy (nếu cần)',
        'Test gắng sức có siêu âm tim',
        'Tư vấn dinh dưỡng cá nhân hóa',
        'Theo dõi qua app trong 3 tháng',
        'Tái khám miễn phí 3 lần',
        'Ưu tiên đặt lịch khám',
      ],
    },

    process: [
      {
        step: 1,
        title: 'Đăng ký & Tiếp nhận',
        description: 'Check-in, xác minh thông tin và nhận phiếu khám',
        duration: '10 phút',
        icon: <FileText className="w-6 h-6" />,
      },
      {
        step: 2,
        title: 'Xét nghiệm máu',
        description: 'Lấy mẫu máu và tiến hành các xét nghiệm cần thiết',
        duration: '15 phút',
        icon: <Activity className="w-6 h-6" />,
      },
      {
        step: 3,
        title: 'Khám lâm sàng',
        description: 'Bác sĩ khám tổng quát, đo huyết áp, nghe tim phổi',
        duration: '20 phút',
        icon: <Heart className="w-6 h-6" />,
      },
      {
        step: 4,
        title: 'Chẩn đoán hình ảnh',
        description: 'ECG, Siêu âm tim, X-quang ngực',
        duration: '45 phút',
        icon: <Zap className="w-6 h-6" />,
      },
      {
        step: 5,
        title: 'Tư vấn kết quả',
        description: 'Bác sĩ giải thích kết quả và tư vấn điều trị',
        duration: '30 phút',
        icon: <Users className="w-6 h-6" />,
      },
    ],

    benefits: [
      {
        icon: <Shield className="w-8 h-8" />,
        title: 'An toàn tuyệt đối',
        description: 'Quy trình khám chuẩn quốc tế, đảm bảo vô trùng',
      },
      {
        icon: <Award className="w-8 h-8" />,
        title: 'Chất lượng hàng đầu',
        description: 'Bác sĩ giàu kinh nghiệm, trang thiết bị hiện đại',
      },
      {
        icon: <Zap className="w-8 h-8" />,
        title: 'Kết quả nhanh chóng',
        description: 'Nhận kết quả trong ngày, không phải chờ lâu',
      },
      {
        icon: <Users className="w-8 h-8" />,
        title: 'Tư vấn tận tâm',
        description: 'Bác sĩ giải thích chi tiết, dễ hiểu',
      },
    ],

    preparation: [
      'Nhịn ăn ít nhất 8 tiếng trước khi khám (chỉ uống nước lọc)',
      'Mang theo CMND/CCCD và thẻ BHYT (nếu có)',
      'Mang theo đơn thuốc và kết quả xét nghiệm cũ (nếu có)',
      'Mặc quần áo thoải mái, dễ cởi',
      'Không uống rượu bia 24h trước khám',
      'Ngủ đủ giấc trước ngày khám',
    ],

    suitableFor: [
      'Người trên 40 tuổi muốn kiểm tra sức khỏe định kỳ',
      'Người có tiền sử gia đình mắc bệnh tim mạch',
      'Người có triệu chứng: đau ngực, khó thở, tim đập nhanh',
      'Người có yếu tố nguy cơ: hút thuốc, béo phì, đái tháo đường',
      'Người muốn đánh giá sức khỏe trước khi tập luyện thể thao',
    ],

    stats: {
      totalBookings: 2500,
      satisfaction: 98,
      rating: 4.9,
      reviews: 456,
    },

    faqs: [
      {
        q: 'Tôi có cần nhịn ăn trước khi khám không?',
        a: 'Có, bạn cần nhịn ăn ít nhất 8 tiếng trước khi khám để kết quả xét nghiệm máu chính xác. Bạn có thể uống nước lọc.',
      },
      {
        q: 'Thời gian khám mất bao lâu?',
        a: 'Tùy vào gói khám, thời gian dao động từ 2-4 giờ. Gói Cơ Bản khoảng 2 giờ, Gói Tiêu Chuẩn khoảng 3 giờ, Gói Cao Cấp khoảng 4 giờ.',
      },
      {
        q: 'Khi nào tôi nhận được kết quả?',
        a: 'Hầu hết kết quả bạn sẽ nhận được trong ngày. Một số xét nghiệm đặc biệt có thể mất 1-2 ngày.',
      },
      {
        q: 'Tôi có thể sử dụng BHYT không?',
        a: 'Có, chúng tôi chấp nhận BHYT. Tuy nhiên một số dịch vụ cao cấp có thể không được BHYT chi trả.',
      },
      {
        q: 'Tôi có thể hủy hoặc đổi lịch hẹn không?',
        a: 'Có, bạn có thể hủy hoặc đổi lịch trước 24 giờ. Vui lòng liên hệ hotline 1900-xxxx để được hỗ trợ.',
      },
    ],

    reviews: [
      {
        id: 1,
        name: 'Anh Nguyễn Văn A',
        avatar: 'https://i.pravatar.cc/150?img=12',
        rating: 5,
        date: '15/01/2024',
        package: 'Gói Tiêu Chuẩn',
        comment:
          'Dịch vụ rất tốt, bác sĩ tận tâm. Máy móc hiện đại, kết quả nhanh. Tôi rất hài lòng và sẽ giới thiệu cho bạn bè.',
        helpful: 45,
      },
      {
        id: 2,
        name: 'Chị Trần Thị B',
        avatar: 'https://i.pravatar.cc/150?img=5',
        rating: 5,
        date: '10/01/2024',
        package: 'Gói Cao Cấp',
        comment: 'Được khám với PGS rất chi tiết. Siêu âm 4D cho hình ảnh rất rõ nét. Đáng giá từng đồng!',
        helpful: 38,
      },
      {
        id: 3,
        name: 'Anh Lê Văn C',
        avatar: 'https://i.pravatar.cc/150?img=8',
        rating: 4,
        date: '05/01/2024',
        package: 'Gói Cơ Bản',
        comment: 'Gói cơ bản đã đủ cho người khỏe mạnh muốn kiểm tra định kỳ. Giá cả hợp lý.',
        helpful: 32,
      },
    ],

    relatedServices: [
      {
        id: 2,
        name: 'Gói Khám Sức Khỏe Tổng Quát',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=250&fit=crop',
        price: 1200000,
        rating: 4.8,
      },
      {
        id: 3,
        name: 'Gói Khám Nhi Tổng Quát',
        image: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=400&h=250&fit=crop',
        price: 800000,
        rating: 4.9,
      },
      {
        id: 4,
        name: 'Gói Khám Sản Phụ Khoa',
        image: 'https://images.unsplash.com/photo-1579684453423-f84349ef60b0?w=400&h=250&fit=crop',
        price: 1500000,
        rating: 4.7,
      },
    ],
  };

  const currentPackage = service.pricing[selectedPackage as PackageKey];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-[100rem] mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <a href="/" className="hover:text-blue-600">
              Trang chủ
            </a>
            <ChevronRight className="w-4 h-4" />
            <a href="/dich-vu" className="hover:text-blue-600">
              Dịch vụ
            </a>
            <ChevronRight className="w-4 h-4" />
            <a href={`/chuyen-khoa/${service.specialty}`} className="hover:text-blue-600">
              {service.specialty}
            </a>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 font-semibold">{service.name}</span>
          </div>
        </div>
      </div>

      <div className="max-w-[100rem] mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Hero Section */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* Image Gallery */}
              <div className="relative h-96">
                <img
                  src={service.images[activeImageIndex]}
                  alt={service.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                  {service.images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImageIndex(i)}
                      className={`w-3 h-3 rounded-full transition ${
                        i === activeImageIndex ? 'bg-white w-8' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
                <button
                  onClick={() => setIsBookmarked(!isBookmarked)}
                  className="absolute top-4 right-4 p-3 bg-white/90 backdrop-blur rounded-full hover:bg-white transition"
                >
                  {isBookmarked ? (
                    <BookmarkCheck className="w-6 h-6 text-blue-600" />
                  ) : (
                    <Bookmark className="w-6 h-6 text-gray-600" />
                  )}
                </button>
              </div>

              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                        {service.specialty}
                      </span>
                      <div className="flex items-center gap-1">
                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        <span className="font-bold">{service.stats.rating}</span>
                        <span className="text-gray-600">({service.stats.reviews} đánh giá)</span>
                      </div>
                    </div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">{service.name}</h1>
                    <p className="text-lg text-gray-600">{service.tagline}</p>
                  </div>
                  <button className="p-3 bg-gray-50 rounded-full hover:bg-gray-100 transition">
                    <Share2 className="w-6 h-6 text-gray-600" />
                  </button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 p-4 bg-blue-50 rounded-xl mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{service.stats.totalBookings}+</div>
                    <div className="text-sm text-gray-600">Lượt khám</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{service.stats.satisfaction}%</div>
                    <div className="text-sm text-gray-600">Hài lòng</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{service.stats.rating}★</div>
                    <div className="text-sm text-gray-600">Đánh giá</div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 leading-relaxed mb-6">{service.description}</p>

                {/* Highlights */}
                <div className="bg-green-50 rounded-xl p-6">
                  <h3 className="font-bold text-lg text-gray-900 mb-4">✨ Điểm nổi bật</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {service.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Package Selection */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Chọn Gói Khám</h2>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {Object.entries(service.pricing).map(([key, pkg]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedPackage(key as PackageKey)}
                    className={`relative p-6 rounded-2xl border-2 transition ${
                      selectedPackage === key
                        ? 'border-blue-600 bg-blue-50'
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    {pkg.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                        PHỔ BIẾN
                      </div>
                    )}
                    {pkg.bestValue && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                        GIÁ TỐT NHẤT
                      </div>
                    )}
                    {pkg.premium && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                        CAO CẤP
                      </div>
                    )}

                    <div className="text-center">
                      <h3 className="font-bold text-lg text-gray-900 mb-2">{pkg.name}</h3>
                      <div className="mb-2">
                        <div className="text-sm text-gray-500 line-through">
                          {pkg.originalPrice.toLocaleString()}đ
                        </div>
                        <div className="text-2xl font-bold text-blue-600">{pkg.price.toLocaleString()}đ</div>
                        <div className="text-sm text-green-600 font-semibold">Tiết kiệm {pkg.discount}%</div>
                      </div>
                      <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                        <Clock className="w-4 h-4" />
                        <span>{pkg.duration} phút</span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Package Includes */}
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-4">📋 {currentPackage?.name} bao gồm:</h3>
                <ul className="space-y-3">
                  {service.includes[selectedPackage as PackageKey]?.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Process */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Quy Trình Khám</h2>
              <div className="space-y-6">
                {service.process.map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 flex-shrink-0">
                        {step.icon}
                      </div>
                      {index < service.process.length - 1 && (
                        <div className="w-0.5 h-full bg-blue-200 my-2" />
                      )}
                    </div>
                    <div className="flex-1 pb-8">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="text-sm font-bold text-blue-600">Bước {step.step}</div>
                        <div className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600">
                          ⏱ {step.duration}
                        </div>
                      </div>
                      <h3 className="font-bold text-lg text-gray-900 mb-1">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-lg p-8 text-white">
              <h2 className="text-2xl font-bold mb-6">Lợi Ích Khi Khám Tại Đây</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {service.benefits.map((benefit, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center flex-shrink-0">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">{benefit.title}</h3>
                      <p className="text-blue-100">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Preparation */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">📝 Chuẩn Bị Trước Khi Khám</h2>
              <div className="space-y-3">
                {service.preparation.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-yellow-50 rounded-xl">
                    <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Suitable For */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">👥 Phù Hợp Với</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {service.suitableFor.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-blue-50 rounded-xl">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQs */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">❓ Câu Hỏi Thường Gặp</h2>
              <div className="space-y-4">
                {service.faqs.map((faq, i) => (
                  <details key={i} className="group border-2 border-gray-200 rounded-xl overflow-hidden">
                    <summary className="p-6 cursor-pointer hover:bg-gray-50 transition flex justify-between items-center">
                      <span className="font-semibold text-gray-900">{faq.q}</span>
                      <ChevronRight className="w-5 h-5 text-blue-600 group-open:rotate-90 transition" />
                    </summary>
                    <div className="px-6 pb-6 text-gray-700 border-t">
                      <p className="pt-4">{faq.a}</p>
                    </div>
                  </details>
                ))}
              </div>
            </div>

            {/* Reviews */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">⭐ Đánh Giá Từ Khách Hàng</h2>
              <div className="space-y-6">
                {service.reviews.map(review => (
                  <div key={review.id} className="border-2 border-gray-200 rounded-xl p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full" />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <div className="font-bold text-gray-900">{review.name}</div>
                            <div className="text-sm text-gray-500">{review.date}</div>
                          </div>
                          <div className="flex gap-1">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                        </div>
                        <div className="text-sm text-blue-600 bg-blue-50 px-3 py-1 rounded-full inline-block mb-3">
                          {review.package}
                        </div>
                        <p className="text-gray-700 mb-3">{review.comment}</p>
                        <button className="text-sm text-gray-500 hover:text-blue-600">
                          👍 Hữu ích ({review.helpful})
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Related Services */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Dịch Vụ Liên Quan</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {service.relatedServices.map(related => (
                  <a key={related.id} href={`/en/service/${related.id}`} className="group">
                    <div className="relative h-40 rounded-xl overflow-hidden mb-4">
                      <img
                        src={related.image}
                        alt={related.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                      />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition h-[4.8rem] leading-[2.4rem]">
                      {related.name}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-blue-600">
                        {related.price.toLocaleString()}đ
                      </span>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-semibold">{related.rating}</span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Booking Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-4">
              <div className="mb-6">
                <div className="text-sm text-gray-500 mb-1">Giá từ</div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-blue-600">
                    {currentPackage.price.toLocaleString()}đ
                  </span>
                  <span className="text-lg text-gray-400 line-through">
                    {currentPackage.originalPrice.toLocaleString()}đ
                  </span>
                </div>
                <div className="text-sm text-green-600 font-semibold mt-1">
                  Tiết kiệm {currentPackage.discount}%
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <button
                  onClick={() => setShowBookingModal(true)}
                  className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-bold hover:shadow-lg transition"
                >
                  <Calendar className="inline w-5 h-5 mr-2" />
                  Đặt Lịch Ngay
                </button>
                <button className="w-full py-4 border-2 border-blue-600 text-blue-600 rounded-full font-bold hover:bg-blue-50 transition">
                  <Phone className="inline w-5 h-5 mr-2" />
                  Gọi 1900-xxxx
                </button>
                <button className="w-full py-4 border-2 border-gray-300 text-gray-700 rounded-full font-bold hover:bg-gray-50 transition">
                  <MessageCircle className="inline w-5 h-5 mr-2" />
                  Tư vấn trực tuyến
                </button>
              </div>

              <div className="border-t pt-6 space-y-4 text-sm">
                <div className="flex items-center gap-3 text-gray-700">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <span>Thời gian: {currentPackage.duration} phút</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <Package className="w-5 h-5 text-blue-600" />
                  <span>Gói: {currentPackage.name}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <Shield className="w-5 h-5 text-blue-600" />
                  <span>Bảo hành kết quả</span>
                </div>
              </div>

              <div className="border-t mt-6 pt-6">
                <div className="bg-green-50 rounded-xl p-4 text-center">
                  <div className="text-green-700 font-bold mb-1">🎉 Ưu đãi đặc biệt</div>
                  <div className="text-sm text-green-600">Giảm thêm 100.000đ khi đặt lịch hôm nay!</div>
                </div>
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-4">Cần hỗ trợ?</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <div>
                    <div className="font-semibold text-gray-900">Hotline</div>
                    <a href="tel:1900xxxx" className="text-blue-600 hover:underline">
                      1900-xxxx
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MessageCircle className="w-5 h-5 text-blue-600" />
                  <div>
                    <div className="font-semibold text-gray-900">Chat với chúng tôi</div>
                    <button className="text-blue-600 hover:underline">Bắt đầu chat</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      {showBookingModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-8 relative">
            <button
              onClick={() => setShowBookingModal(false)}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full"
            >
              <X className="w-6 h-6" />
            </button>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">Đặt Lịch Khám</h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Họ tên</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none"
                  placeholder="Nguyễn Văn A"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Số điện thoại</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none"
                  placeholder="0912345678"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Ngày khám</label>
                <input
                  type="date"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Gói khám</label>
                <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none">
                  <option value="basic">Gói Cơ Bản - {service.pricing.basic.price.toLocaleString()}đ</option>
                  <option value="standard">
                    Gói Tiêu Chuẩn - {service.pricing.standard.price.toLocaleString()}đ
                  </option>
                  <option value="premium">
                    Gói Cao Cấp - {service.pricing.premium.price.toLocaleString()}đ
                  </option>
                </select>
              </div>

              <button className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-bold hover:shadow-lg transition">
                Xác Nhận Đặt Lịch
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
