import { motion } from 'framer-motion';
import { Typography, Container } from '@mui/material';

const contacts = [
  {
    label: 'LINE OFFICIAL',
    value: '@naivepetcare',
    sub: 'ตอบเร็วที่สุด',
  },
  {
    label: 'คุณติด',
    value: '094-888-1184',
    sub: 'ผู้เชี่ยวชาญ',
  },
  {
    label: 'CUSTOMER CARE',
    value: '052-102-588',
    sub: 'สายด่วน CS',
  },
  {
    label: 'EMAIL',
    value: 'info@naiveinnova.com',
    sub: 'ตอบภายใน 24 ชม.',
  },
];

export default function ContactSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-[40px] md:rounded-[60px] p-8 md:p-16 border border-slate-100 shadow-2xl shadow-slate-200/50 relative overflow-hidden"
        >
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">

            {/* Left: Label + Title */}
            <div className="lg:min-w-[220px]">
              <div className="inline-block px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 mb-5">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-600">CONTACT</span>
              </div>
              <Typography variant="h4" className="text-xl font-black text-slate-900 leading-snug mb-3">
                ติดต่อเรา ได้ทุกช่องทาง
              </Typography>
              <Typography variant="body2" className="text-sm text-slate-400 font-medium leading-relaxed">
                ทีม Customer Care รอดูแลคุณ จ–ส 9:00–18:00
              </Typography>
            </div>

            {/* Right: 2x2 Contact grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 flex-1 w-full">
              {contacts.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="p-5 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-md hover:border-slate-200 transition-all duration-200 cursor-default group"
                >
                  <div className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-400 mb-2 group-hover:text-slate-500 transition-colors">
                    {item.label}
                  </div>
                  <div className="text-base font-black text-slate-900 mb-1 group-hover:text-cyan-700 transition-colors">
                    {item.value}
                  </div>
                  <div className="text-xs text-slate-400 font-medium">
                    {item.sub}
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </motion.div>
      </Container>
    </section>
  );
}
