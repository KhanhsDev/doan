import { Activity, Baby, Bone, Brain, Eye, HeartPulse } from 'lucide-react';
const Specialties = () => {
  const specialties = [
    {
      icon: <HeartPulse className="w-12 h-12" />,
      name: 'Tim mạch',
      desc: 'Khám và điều trị bệnh tim mạch',
      color: 'from-red-500 to-pink-500',
    },
    {
      icon: <Baby className="w-12 h-12" />,
      name: 'Nhi khoa',
      desc: 'Chăm sóc sức khỏe trẻ em',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <Eye className="w-12 h-12" />,
      name: 'Mắt',
      desc: 'Khám và điều trị mắt',
      color: 'from-purple-500 to-indigo-500',
    },
    {
      icon: <Bone className="w-12 h-12" />,
      name: 'Xương khớp',
      desc: 'Điều trị bệnh lý xương khớp',
      color: 'from-orange-500 to-amber-500',
    },
    {
      icon: <Brain className="w-12 h-12" />,
      name: 'Thần kinh',
      desc: 'Khám và điều trị thần kinh',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: <Activity className="w-12 h-12" />,
      name: 'Nội khoa',
      desc: 'Khám bệnh nội tổng quát',
      color: 'from-teal-500 to-cyan-500',
    },
  ];
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Chuyên khoa nổi bật</h2>
          <p className="text-xl text-gray-600">Đa dạng chuyên khoa với đội ngũ bác sĩ giàu kinh nghiệm</p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
          {specialties.map((specialty, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 text-center hover:shadow-xl transition cursor-pointer group"
            >
              <div
                className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r ${specialty.color} flex items-center justify-center text-white group-hover:scale-110 transition`}
              >
                {specialty.icon}
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">{specialty.name}</h3>
              <p className="text-sm text-gray-600">{specialty.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Specialties;
