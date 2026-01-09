import { useLanguage } from '@/contexts/LanguageContext';
import { Building2, Users, FileText, TrendingUp } from 'lucide-react';

const ServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Building2,
      title: t.services.companyAnalysis.title,
      description: t.services.companyAnalysis.description,
    },
    {
      icon: Users,
      title: t.services.investorMatching.title,
      description: t.services.investorMatching.description,
    },
    {
      icon: FileText,
      title: t.services.contractStructuring.title,
      description: t.services.contractStructuring.description,
    },
    {
      icon: TrendingUp,
      title: t.services.marketAssessment.title,
      description: t.services.marketAssessment.description,
    },
  ];

  return (
    <section id="services" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold font-semibold text-sm uppercase tracking-wider">
            {t.services.subtitle}
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2">
            {t.services.title}
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 bg-card rounded-2xl border border-border hover:border-gold/50 transition-all duration-300 hover:shadow-lg"
            >
              <div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                <service.icon className="h-7 w-7 text-gold" />
              </div>
              <h3 className="font-display font-bold text-xl text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
