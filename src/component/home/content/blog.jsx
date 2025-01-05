import React from 'react';
import { Shield, Clock, BadgeCheck, Trophy } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all">
      <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-amber-500 rounded-full flex items-center justify-center mb-6 shadow-md">
        <Icon className="text-white w-8 h-8" />
      </div>
      <h3 className="text-xl font-extrabold mb-4 text-gray-800">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

const Blog = ({id}) => {
  const features = [
    {
      icon: Shield,
      title: "ความไว้วางใจจากลูกค้า",
      description: "เราให้บริการแก่ลูกค้าหลายพันราย ค้นหาบ้านในฝันด้วยความไว้วางใจและความน่าเชื่อถือ"
    },
    {
      icon: Clock,
      title: "ความหลากหลาย",
      description: "เลือกชมโครงการที่หลากหลายของเราที่ตอบโจทย์ทุกความต้องการและงบประมาณ"
    },
    {
      icon: BadgeCheck,
      title: "จัดการสินเชื่อง่าย",
      description: "ด้วยความร่วมมือกับสถาบันการเงินชั้นนำ ทำให้การขอสินเชื่อบ้านของคุณเป็นเรื่องง่าย ไร้กังวล"
    },
    {
      icon: Trophy,
      title: "รับประกันราคาดีที่สุด",
      description: "เรารับประกันว่าคุณจะได้รับมูลค่าที่คุ้มค่าที่สุดสำหรับการลงทุนของคุณ"
    }
  ];

  return (
    <section id={id} className="py-20 bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <span className="text-amber-500 font-semibold uppercase tracking-wide mb-4 block">
            ทำไมคุณถึงต้องเลือกเรา ?
          </span>
          <h2 className="text-4xl font-extrabold mb-6 text-gray-800">
            จุดเด่นของไกรเลิศ
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            ให้เราดูแลคุณ ด้วยทีมงานคุณภาพมากประสบการณ์กว่า 30 ปี ยินดีให้คำแนะนำและปรึกษาแก่ลูกค้า เพื่อให้คุณได้รับสิ่งที่ไม่ใช่แค่ดีที่สุด แต่ยังได้รับความคุ้มค่าและความรู้สึกประทับใจ
          </p>
        </div>
        <div className="relative mb-12 flex justify-center">
          <iframe
            src="https://www.youtube.com/embed/44W1S5tMV5o"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="md:w-[50rem] md:h-[30rem] w-full max-h-screen rounded-lg shadow-lg"
          ></iframe>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;