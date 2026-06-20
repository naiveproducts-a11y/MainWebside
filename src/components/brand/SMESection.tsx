import { Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { FlaskConical, Cpu, Package } from 'lucide-react';

import diff1Img from '../../assets/brand/nano_particles.png';
import diff2Img from '../../assets/brand/green_pipette.png';
import diff3Img from '../../assets/brand/thai_presenter.png';

const differences = [
  {
    num: '01',
    icon: FlaskConical,
    color: 'from-cyan-500 to-cyan-600',
    lightBg: 'bg-cyan-50',
    lightText: 'text-cyan-600',
    lightBorder: 'border-cyan-100',
    img: diff1Img,
    title: 'มีทีม R&D นาโน เป็นของตัวเอง',
    desc: 'ปรับสูตรได้ภายใน 5–7 วัน ไม่ใช่โรงงานที่แค่ผสม-บรรจุ-ส่ง เรามีนักวิทยาศาสตร์ที่พัฒนาสูตรใหม่ได้จริง',
  },
  {
    num: '02',
    icon: Cpu,
    color: 'from-fuchsia-500 to-fuchsia-600',
    lightBg: 'bg-fuchsia-50',
    lightText: 'text-fuchsia-600',
    lightBorder: 'border-fuchsia-100',
    img: diff2Img,
    title: 'เทคโนโลยีที่ คู่แข่งทำไม่ได้',
    desc: 'EcoGuard Plus และ Nano-Encapsulation 84 นาโนเมตร — สิทธิบัตรและงานวิจัยระดับนานาชาติรองรับ',
  },
  {
    num: '03',
    icon: Package,
    color: 'from-emerald-500 to-emerald-600',
    lightBg: 'bg-emerald-50',
    lightText: 'text-emerald-600',
    lightBorder: 'border-emerald-100',
    img: diff3Img,
    title: 'สนับสนุน SME เริ่มที่ 100 ชิ้น',
    desc: 'MOQ ต่ำสุดในตลาด เริ่มได้ตั้งแต่หลักพัน ไม่ต้องลงทุนใหญ่ก่อนจะรู้ว่าแบรนด์จะขายดีแค่ไหน',
  },
];

export default function SMESection() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* BG glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-50/60 rounded-full blur-[120px] -translate-y-1/3 translate-x-1/4 pointer-events-none" />

      <Container maxWidth="lg" className="relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-white border border-slate-200 mb-6 shadow-sm">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">The Naive Difference</span>
            </div>
            <Typography variant="h2" className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              3 จุดต่าง{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-fuchsia-500">
                จากโรงงาน OEM ทั่วไป
              </span>
            </Typography>
          </motion.div>
        </div>

        {/* 3-column cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {differences.map((item, idx) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: idx * 0.1 }}
              className="group"
            >
              <div className="h-full bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />

                  {/* Step badge on image */}
                  <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${item.lightBg} ${item.lightText} border ${item.lightBorder} backdrop-blur-sm`}>
                    {item.num}
                  </div>

                  {/* Icon floating on image bottom */}
                  <div className={`absolute bottom-4 right-4 w-11 h-11 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-lg`}>
                    <item.icon size={20} strokeWidth={1.75} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-7 flex flex-col flex-1">
                  <Typography variant="h5" className="text-lg font-black text-slate-900 mb-3 leading-snug tracking-tight">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" className="text-slate-500 text-sm leading-relaxed flex-1">
                    {item.desc}
                  </Typography>
                </div>

                {/* Bottom accent strip */}
                <div className={`h-1 w-full bg-gradient-to-r ${item.color}`} />
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
