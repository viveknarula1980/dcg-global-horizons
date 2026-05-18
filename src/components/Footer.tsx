import { useLanguage } from '@/contexts/LanguageContext';
import logo from '@/assets/logo.png';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center">
              <span className="text-primary font-display font-bold text-xl">D</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg text-primary-foreground leading-tight">
                Deal Craft Group
              </span>
              <span className="text-xs text-gold font-medium">
                {t.footer.tagline}
              </span>
            </div>
          </div>

          {/* Website */}
          <div>
            <a 
              href="https://www.dcg-global.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-foreground/70 hover:text-gold transition-colors"
            >
              www.dcg-global.com
            </a>
          </div>

          {/* Copyright */}
          <div className="text-primary-foreground/60 text-sm">
            © {currentYear} Deal Craft Group. {t.footer.rights}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
