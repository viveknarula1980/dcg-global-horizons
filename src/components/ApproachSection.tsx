import { useLanguage } from '@/contexts/LanguageContext';

const ApproachSection = () => {
  const { t, dir } = useLanguage();

  const steps = [
    { number: '01', title: t.approach.step1.title, description: t.approach.step1.description },
    { number: '02', title: t.approach.step2.title, description: t.approach.step2.description },
    { number: '03', title: t.approach.step3.title, description: t.approach.step3.description },
    { number: '04', title: t.approach.step4.title, description: t.approach.step4.description },
  ];

  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gold rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gold rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold font-semibold text-sm uppercase tracking-wider">
            {t.approach.subtitle}
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mt-2">
            {t.approach.title}
          </h2>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div
                  className={`hidden lg:block absolute top-8 ${dir === 'rtl' ? 'left-0 -translate-x-1/2' : 'right-0 translate-x-1/2'} w-full h-0.5 bg-gold/30`}
                  style={{ width: 'calc(100% - 80px)', [dir === 'rtl' ? 'right' : 'left']: '80px' }}
                />
              )}

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold text-primary font-display font-bold text-xl mb-4">
                  {step.number}
                </div>
                <h3 className="font-display font-bold text-xl text-primary-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-primary-foreground/70">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
