import { MessageCircle, Star } from 'lucide-react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { useState } from 'react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    loop: true,
  });

  const testimonials = [
    {
      name: 'Anh Minh',
      rating: 5,
      comment: 'Dịch vụ tuyệt vời, bác sĩ tận tâm. Tôi rất hài lòng với chất lượng khám chữa bệnh tại đây.',
      avatar: 'https://i.pravatar.cc/150?img=12',
    },
    {
      name: 'Chị Hương',
      rating: 5,
      comment: 'Phòng khám sạch sẽ, hiện đại. Nhân viên thân thiện, chu đáo. Rất đáng tin cậy!',
      avatar: 'https://i.pravatar.cc/150?img=5',
    },
    {
      name: 'Anh Tuấn',
      rating: 4,
      comment: 'Đặt lịch online rất tiện lợi, không phải chờ đợi lâu. Bác sĩ khám rất kỹ.',
      avatar: 'https://i.pravatar.cc/150?img=8',
    },
  ];
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Đánh giá của bệnh nhân</h2>
          <p className="text-xl text-gray-600">Trải nghiệm thực tế từ khách hàng</p>
        </div>

        <div className="relative bg-white rounded-2xl shadow-xl p-12">
          <MessageCircle className="absolute top-8 left-8 w-12 h-12 text-blue-600 opacity-20" />

          <div ref={sliderRef} className="keen-slider">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="keen-slider__slide">
                <div className="flex items-center gap-2 mb-6 justify-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-xl text-gray-700 text-center mb-8 italic">{testimonial.comment}</p>
                <div className="flex items-center justify-center gap-4">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-16 h-16 rounded-full" />
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">Bệnh nhân</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {loaded && instanceRef.current && (
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => instanceRef.current?.moveToIdx(index)}
                  className={`w-3 h-3 rounded-full transition ${index === currentSlide ? 'bg-blue-600 w-8' : 'bg-gray-300'}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
