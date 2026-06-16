import { Typography, Container, Stack, Box } from '@mui/material';
import { Phone, Mail, MessageCircle, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import logo from '../assets/logo.png';

export default function TheFooter() {
  const { t } = useTranslation();

  const serviceLinks = [
    { label: t('footer.serv1'), href: '/branding/steps' },
    { label: t('footer.serv2'), href: '/branding/innovation' },
    { label: t('footer.serv3'), href: '/branding/steps' },
    { label: t('footer.serv4'), href: '/contact/faq' },
  ];

  const infoLinks = [
    { label: t('footer.info1'), href: '/branding/innovation' },
    { label: t('footer.info2'), href: '/branding/innovation' },
    { label: t('footer.info3'), href: '/news/activities-new' },
    { label: t('footer.info4'), href: '/news/videos' },
  ];

  const helpLinks = [
    { label: t('footer.help1'), href: '/content' },
    { label: t('footer.help2'), href: '/contact/faq' },
    { label: t('footer.help3'), href: '/content' },
    { label: t('footer.help4'), href: '/news/videos' },
  ];

  return (
    <footer className="bg-slate-50 pt-16 pb-8 border-t border-slate-200/60">
      <Container maxWidth="lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand & Contact */}
          <div className="lg:col-span-12 xl:col-span-5">
            <div className="mb-8">
              <img src={logo} alt="Naive Innova" className="h-10 w-auto" />
            </div>

            <div className="space-y-1 mb-8">
              <Typography variant="body2" className="text-gray-800 leading-relaxed font-semibold">
                {t('footer.desc1')}
              </Typography>
              <Typography variant="body2" className="text-gray-500 leading-relaxed font-medium">
                {t('footer.desc2')}
              </Typography>
            </div>

            <Stack spacing={2.5}>
              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="w-9 h-9 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-600 transition-all group-hover:scale-110 group-hover:bg-cyan-200">
                  <Phone size={18} />
                </div>
                <Typography variant="body2" className="text-gray-700 font-medium group-hover:text-cyan-600 transition-colors">
                  {t('footer.phones')}
                </Typography>
              </div>

              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="w-9 h-9 rounded-full bg-fuchsia-100 flex items-center justify-center text-fuchsia-600 transition-all group-hover:scale-110 group-hover:bg-fuchsia-200">
                  <Mail size={18} />
                </div>
                <Typography variant="body2" className="text-gray-700 font-medium group-hover:text-fuchsia-600 transition-colors">
                  {t('footer.email')}
                </Typography>
              </div>

              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="w-9 h-9 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-600 transition-all group-hover:scale-110 group-hover:bg-cyan-200">
                  <MessageCircle size={18} />
                </div>
                <Typography variant="body2" className="text-gray-700 font-medium group-hover:text-cyan-600 transition-colors">
                  {t('footer.line')}
                </Typography>
              </div>

              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="w-9 h-9 rounded-full bg-fuchsia-100 flex items-center justify-center text-fuchsia-600 transition-all group-hover:scale-110 group-hover:bg-fuchsia-200">
                  <MapPin size={18} />
                </div>
                <Typography variant="body2" className="text-gray-700 font-medium group-hover:text-fuchsia-600 transition-colors">
                  {t('footer.addressDetail')}
                </Typography>
              </div>
            </Stack>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-12 xl:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <Typography variant="subtitle1" className="text-gray-900 font-bold mb-6">
                {t('footer.servicesTitle')}
              </Typography>
              <Stack spacing={2.5}>
                {serviceLinks.map((link) => (
                  <Typography
                    key={link.label}
                    variant="body2"
                    component="a"
                    href={link.href}
                    className="text-gray-600 hover:text-cyan-600 transition-colors no-underline font-medium"
                  >
                    {link.label}
                  </Typography>
                ))}
              </Stack>
            </div>

            <div>
              <Typography variant="subtitle1" className="text-gray-900 font-bold mb-6">
                {t('footer.infoTitle')}
              </Typography>
              <Stack spacing={2.5}>
                {infoLinks.map((link) => (
                  <Typography
                    key={link.label}
                    variant="body2"
                    component="a"
                    href={link.href}
                    className="text-gray-600 hover:text-cyan-600 transition-colors no-underline font-medium"
                  >
                    {link.label}
                  </Typography>
                ))}
              </Stack>
            </div>

            <div>
              <Typography variant="subtitle1" className="text-gray-900 font-bold mb-6">
                {t('footer.helpTitle')}
              </Typography>
              <Stack spacing={2.5}>
                {helpLinks.map((link) => (
                  <Typography
                    key={link.label}
                    variant="body2"
                    component="a"
                    href={link.href}
                    className="text-gray-600 hover:text-cyan-600 transition-colors no-underline font-medium"
                  >
                    {link.label}
                  </Typography>
                ))}
              </Stack>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <Box className="pt-8 border-t border-slate-200 text-center">
          <Typography variant="body2" className="text-gray-400 text-xs tracking-widest uppercase font-medium">
            {t('footer.copyright')}
          </Typography>
        </Box>
      </Container>
    </footer>
  );
}
