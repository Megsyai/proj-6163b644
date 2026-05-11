
import React, { useState } from 'react';
import { Coffee, MapPin, Phone, Instagram, Facebook, Twitter, Mail, Send, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => (
  <nav className="fixed w-full z-50 bg-[#2a1b0f]/90 backdrop-blur-md text-[#d4a373] py-4 px-6 md:px-12 flex justify-between items-center border-b border-[#3d2b1f]">
    <div className="text-3xl font-bold font-serif tracking-widest">بن العرب</div>
    <div className="hidden md:flex gap-8 font-medium">
      <a href="#home" className="hover:text-white transition-colors">الرئيسية</a>
      <a href="#about" className="hover:text-white transition-colors">من نحن</a>
      <a href="#products" className="hover:text-white transition-colors">منتجاتنا</a>
      <a href="#contact" className="hover:text-white transition-colors">تواصل معنا</a>
    </div>
    <button className="bg-[#d4a373] text-[#2a1b0f] px-6 py-2 rounded-full font-bold hover:bg-[#c39362] transition-colors">
      اطلب الآن
    </button>
  </nav>
);

const Hero = () => (
  <section id="home" className="relative h-screen flex items-center justify-center coffee-gradient">
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center text-white px-4"
    >
      <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-tight">أصالة الماضي وعبق الحاضر</h1>
      <p className="text-xl md:text-2xl mb-10 text-gray-200 max-w-2xl mx-auto">
        نختار لكم أجود حبات البن من مزارع العالم لنقدمها لكم في فنجان من السعادة
      </p>
      <div className="flex flex-col md:flex-row gap-4 justify-center">
        <a href="#products" className="bg-[#d4a373] text-[#2a1b0f] px-10 py-4 rounded-lg font-bold text-lg hover:scale-105 transition-transform">
          اكتشف القائمة
        </a>
        <a href="#about" className="border-2 border-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-[#2a1b0f] transition-all">
          قصتنا
        </a>
      </div>
    </motion.div>
  </section>
);

const ProductCard = ({ title, price, description, image }: any) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100"
  >
    <div className="h-64 overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
    </div>
    <div className="p-6 text-right">
      <h3 className="text-2xl font-serif font-bold mb-2 text-[#3d2b1f]">{title}</h3>
      <p className="text-gray-600 mb-4 h-12 overflow-hidden">{description}</p>
      <div className="flex justify-between items-center border-t pt-4">
        <span className="text-xl font-bold text-[#8b5e34]">{price} ر.س</span>
        <button className="bg-[#fcf8f1] p-2 rounded-full text-[#8b5e34] hover:bg-[#8b5e34] hover:text-white transition-colors">
          <Coffee size={24} />
        </button>
      </div>
    </div>
  </motion.div>
);

const App = () => {
  const [formSent, setFormSent] = useState(false);

  const products = [
    {
      title: "خلطة بن العرب الخاصة",
      price: "85",
      description: "مزيج فاخر من البن الهرري والبرازيلي مع الهيل والزعفران.",
      image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "بن هرري درجة أولى",
      price: "95",
      description: "قهوة إثيوبية أصيلة تتميز بنكهتها القوية وحموضتها المتوازنة.",
      image: "https://images.unsplash.com/photo-1580915411954-282cb1b0d780?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "قهوة تركية بالبندق",
      price: "45",
      description: "تحميص داكن مع نكهة البندق المحمص الطبيعية لأوقات هادئة.",
      image: "https://images.unsplash.com/photo-1541167760496-162955ed8a9f?auto=format&fit=crop&q=80&w=600"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
    setTimeout(() => setFormSent(false), 5000);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />

      {/* About Section */}
      <section id="about" className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#d4a373] rounded-full opacity-20 -z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800" 
              className="rounded-3xl shadow-2xl relative z-10"
              alt="قصتنا"
            />
          </div>
          <div className="text-right">
            <h2 className="text-4xl font-serif font-bold text-[#3d2b1f] mb-6">رحلة بن العرب</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              بدأت رحلتنا في "بن العرب" من عشقنا للقهوة العربية الأصيلة. نحن نؤمن أن القهوة ليست مجرد مشروب، بل هي تراث يربطنا بجذورنا وقيم الكرم العربي الأصيل.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              كل حبة بن تمر بمراحل دقيقة من الفرز والتحميص اليدوي لضمان وصول أفضل نكهة ممكنة إلى فنجانكم. نلتزم بالجودة العالية والاستدامة في جميع مراحل إنتاجنا.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-[#8b5e34]" />
                <span className="font-bold">تحميص طازج</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-[#8b5e34]" />
                <span className="font-bold">مكونات طبيعية</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 px-6 md:px-12 bg-[#fcf8f1]">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-[#3d2b1f] mb-4">أصنافنا المختارة</h2>
          <div className="w-24 h-1 bg-[#d4a373] mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {products.map((p, i) => (
            <ProductCard key={i} {...p} />
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-16">
          <div className="md:w-1/2 text-right">
            <h2 className="text-4xl font-serif font-bold text-[#3d2b1f] mb-6">تواصل معنا</h2>
            <p className="text-lg text-gray-600 mb-8">نحن هنا للإجابة على جميع استفساراتكم واقتراحاتكم.</p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 justify-end">
                <div>
                  <h4 className="font-bold">العنوان</h4>
                  <p className="text-gray-600">الرياض، حي النخيل، شارع الأمير نايف</p>
                </div>
                <div className="bg-[#fcf8f1] p-4 rounded-full text-[#8b5e34]">
                  <MapPin />
                </div>
              </div>
              
              <div className="flex items-center gap-4 justify-end">
                <div>
                  <h4 className="font-bold">اتصل بنا</h4>
                  <p className="text-gray-600">966+ 555 123 456</p>
                </div>
                <div className="bg-[#fcf8f1] p-4 rounded-full text-[#8b5e34]">
                  <Phone />
                </div>
              </div>

              <div className="flex items-center gap-4 justify-end">
                <div>
                  <h4 className="font-bold">البريد الإلكتروني</h4>
                  <p className="text-gray-600">info@bin-al-arab.sa</p>
                </div>
                <div className="bg-[#fcf8f1] p-4 rounded-full text-[#8b5e34]">
                  <Mail />
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 bg-[#2a1b0f] p-8 rounded-3xl text-white">
            {formSent ? (
              <div className="h-full flex flex-col items-center justify-center text-center">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mb-6">
                  <Send size={40} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">تم الإرسال بنجاح!</h3>
                <p className="text-gray-300">سوف نتواصل معك في أقرب وقت ممكن.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="text-right">
                  <label className="block mb-2 font-medium">الاسم الكامل</label>
                  <input required type="text" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-[#d4a373] text-right" />
                </div>
                <div className="text-right">
                  <label className="block mb-2 font-medium">البريد الإلكتروني</label>
                  <input required type="email" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-[#d4a373] text-right" />
                </div>
                <div className="text-right">
                  <label className="block mb-2 font-medium">الرسالة</label>
                  <textarea required rows={4} className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-[#d4a373] text-right"></textarea>
                </div>
                <button type="submit" className="w-full bg-[#d4a373] text-[#2a1b0f] py-4 rounded-xl font-bold text-lg hover:bg-white transition-colors mt-4">
                  إرسال الرسالة
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a110a] text-white py-12 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-3xl font-serif font-bold text-[#d4a373]">بن العرب</div>
          
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#d4a373] transition-colors"><Instagram /></a>
            <a href="#" className="hover:text-[#d4a373] transition-colors"><Facebook /></a>
            <a href="#" className="hover:text-[#d4a373] transition-colors"><Twitter /></a>
          </div>

          <div className="text-gray-500 text-sm">
            © {new Date().getFullYear()} بن العرب. جميع الحقوق محفوظة.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
