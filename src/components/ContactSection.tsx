import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import logo from '@/assets/logo.png';

const ContactSection = () => {
  const { t, dir } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: dir === 'rtl' ? 'تم إرسال الرسالة!' : 'Message Sent!',
      description: dir === 'rtl' 
        ? 'سنتواصل معك قريباً' 
        : 'We will get back to you soon.',
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: t.contact.address,
      value: 'Kölner Straße 56, 40211 Düsseldorf, Germany',
    },
    {
      icon: Phone,
      label: t.contact.phone,
      value: '+4915567339156',
    },
    {
      icon: Mail,
      label: t.contact.emailLabel,
      value: 'Info@DCG-Global.com',
    },
  ];

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold font-semibold text-sm uppercase tracking-wider">
            {t.contact.subtitle}
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2">
            {t.contact.title}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className={`bg-card p-8 rounded-2xl border border-border shadow-sm ${dir === 'rtl' ? 'lg:order-2' : ''}`}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  placeholder={t.contact.name}
                  required
                  className="h-12"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder={t.contact.email}
                  required
                  className="h-12"
                />
              </div>
              <div>
                <Textarea
                  placeholder={t.contact.message}
                  required
                  className="min-h-[150px] resize-none"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-gold hover:bg-gold-dark text-primary font-semibold gap-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? '...' : t.contact.send}
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className={`space-y-8 ${dir === 'rtl' ? 'lg:order-1' : ''}`}>
            <div className="bg-primary rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <img src={logo} alt="Deal Craft Group" className="h-14 w-auto object-contain" />
              </div>
              <div className="h-px bg-gold/30 mb-6" />

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center">
                      <info.icon className="h-5 w-5 text-gold" />
                    </div>
                    <div>
                      <p className="text-primary-foreground/70 text-sm mb-1">
                        {info.label}
                      </p>
                      <p className="text-primary-foreground font-medium">
                        {info.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-muted rounded-2xl h-[200px] flex items-center justify-center border border-border overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2498.549!2d6.7833!3d51.2277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDEzJzM5LjciTiA2wrA0Nyc0OS4yIkU!5e0!3m2!1sen!2sde!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="DCG Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
