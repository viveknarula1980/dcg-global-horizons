import { useLanguage } from '@/contexts/LanguageContext';
import { Target, Eye } from 'lucide-react';
import aboutImage from '@/assets/about-team.jpg';

const AboutSection = () => {
  const { t, dir } = useLanguage();

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold font-semibold text-sm uppercase tracking-wider">
            {t.about.subtitle}
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2">
            {t.about.title}
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className={`relative ${dir === 'rtl' ? 'lg:order-2' : ''}`}>
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img
                src={aboutImage}
                alt="Deal Craft Group Team"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold/20 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-gold/30 rounded-2xl -z-10" />
          </div>

          {/* Text Content */}
          <div className={dir === 'rtl' ? 'lg:order-1' : ''}>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {t.about.description}
            </p>

            {/* Mission & Vision Cards */}
            <div className="space-y-6">
              <div className="flex gap-4 p-6 bg-secondary rounded-xl border border-border">
                <div className="flex-shrink-0 w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center">
                  <Target className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-foreground mb-2">
                    {t.about.mission}
                  </h3>
                  <p className="text-muted-foreground">
                    {t.about.missionText}
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-6 bg-secondary rounded-xl border border-border">
                <div className="flex-shrink-0 w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center">
                  <Eye className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-foreground mb-2">
                    {t.about.vision}
                  </h3>
                  <p className="text-muted-foreground">
                    {t.about.visionText}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
