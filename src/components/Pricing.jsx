import React from 'react';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: '$0',
    period: '/mo',
    highlight: false,
    features: [
      'Connect 1 account',
      '10 AI generations/month',
      'Basic scheduler',
      'Community support',
    ],
    cta: 'Start free',
  },
  {
    name: 'Pro',
    price: '$19',
    period: '/mo',
    highlight: true,
    features: [
      'Up to 3 accounts',
      'Unlimited AI generations',
      'Smart scheduler + queues',
      'Auto-replies & DMs',
      'Advanced analytics',
    ],
    cta: 'Get Pro',
  },
  {
    name: 'Agency',
    price: '$59',
    period: '/mo',
    highlight: false,
    features: [
      'Up to 10 accounts',
      'Brand voice profiles',
      'Team workflow & approvals',
      'Priority support',
    ],
    cta: 'Contact sales',
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Simple, transparent pricing</h2>
          <p className="mt-3 text-neutral-300">Choose a plan that scales with you. Cancel anytime.</p>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {tiers.map((t, i) => (
            <div
              key={i}
              className={`relative rounded-2xl border ${t.highlight ? 'border-sky-400/40 bg-sky-500/5' : 'border-white/10 bg-white/5'} p-6 flex flex-col`}
            >
              {t.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-sky-400/40 bg-sky-500/20 px-3 py-1 text-xs text-sky-100">
                  Most popular
                </div>
              )}
              <div className="flex items-baseline gap-2">
                <h3 className="text-xl font-semibold">{t.name}</h3>
              </div>
              <div className="mt-2 flex items-end gap-1">
                <span className="text-4xl font-extrabold">{t.price}</span>
                <span className="text-neutral-400">{t.period}</span>
              </div>
              <ul className="mt-6 space-y-3 text-sm">
                {t.features.map((f, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check size={16} className="mt-0.5 text-emerald-400" />
                    <span className="text-neutral-200">{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <a
                  href="#"
                  className={`inline-flex w-full h-11 items-center justify-center rounded-md text-sm font-semibold transition-colors ${
                    t.highlight
                      ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-lg shadow-sky-500/20 hover:shadow-sky-500/30'
                      : 'border border-white/10 bg-white/5 text-white/90 hover:bg-white/10'
                  }`}
                >
                  {t.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-neutral-400">No credit card required for Starter. Prices in USD.</p>
      </div>
    </section>
  );
};

export default Pricing;
