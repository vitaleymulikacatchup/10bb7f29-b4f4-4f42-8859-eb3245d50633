"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TagAbout from '@/components/sections/about/TagAbout';
import FeatureCardSeven from '@/components/sections/feature/FeatureCardSeven';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import MetricCardThree from '@/components/sections/metric/MetricCardThree';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Building2, CreditCard, Globe, HelpCircle, MessageCircle, Rocket, Shield, Sparkles, TrendingUp, Users, Zap } from 'lucide-react';

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="background-highlight"
      borderRadius="pill"
      contentWidth="small"
      sizing="medium"
      background="floatingGradient"
      cardStyle="glass-elevated"
      primaryButtonStyle="layered-depth"
      secondaryButtonStyle="glass"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          logoSrc="https://pixabay.com/get/gc2a49b6d091d52948b2fb65c15ee0e55bcee4d9f7b9fc8eb3a379127537a5dc2b2bd11d9ed6c01845d50f591f1b4fd7de8e83eeea1046e6110f57dbdf4731edb_1280.jpg"
          logoAlt="SaaS Platform Logo"
          brandName="SaasFlow"
          button={{
            text: "Get Started",
            href: "https://app.saasflow.com/signup"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Scale Your Business with Smart SaaS Solutions"
          description="Streamline operations, boost productivity, and drive growth with our comprehensive platform designed for modern businesses."
          tag="All-in-One Platform"
          tagIcon={Sparkles}
          buttons={[
            {
              text: "Start Free Trial",
              href: "https://app.saasflow.com/trial"
            },
            {
              text: "Watch Demo",
              href: "demo"
            }
          ]}
          imageSrc="https://pixabay.com/get/gd9b4ab7c6cf7db3711470dca89e096cd6bfbb5024696304b9fe5f4e0bfa006d3c9cacd337892cb2806e3df8ef6c681c911bdb1a6d3fc562c553f370f1318f08b_1280.jpg"
          imageAlt="SaaS dashboard interface showing analytics and workflows"
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <TagAbout
          tag="Why SaasFlow"
          description="We built SaasFlow for ambitious teams who refuse to settle for mediocre tools. Our platform combines powerful automation, deep analytics, and seamless integrations to help you achieve more with less effort."
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardSeven
          title="Everything You Need to Succeed"
          description="Powerful features designed to streamline your workflow and accelerate growth"
          tag="Core Features"
          tagIcon={Zap}
          textboxLayout="default"
          animationType="slide-up"
          features={[
            {
              id: 1,
              title: "Advanced Analytics",
              description: "Get deep insights into your business performance with real-time analytics, custom dashboards, and automated reporting.",
              imageSrc: "https://pixabay.com/get/g37aeb4d8620af286fa12491b5f7c387f3c0bcca84134d0f5ff6695e16c164335a9ebbb89a5b12359dfc197ca1b0a35fce80d0ca2037f760b6f5c8e7ea57c6003_1280.jpg",
              imageAlt: "Analytics dashboard with charts and metrics"
            },
            {
              id: 2,
              title: "Workflow Automation",
              description: "Automate repetitive tasks and streamline your processes with our intuitive workflow builder and smart triggers.",
              imageSrc: "https://pixabay.com/get/ge92cb3d248c812f1240f8da2af8373006006fcdc1f9b48e569b6a34348d177bc359a0d14917e48cecdbae4b44ed147492874a57c565e768301f9b5fd202fff8d_1280.jpg",
              imageAlt: "Workflow automation diagram"
            },
            {
              id: 3,
              title: "Seamless Integrations",
              description: "Connect with 100+ popular tools and services through our robust API and pre-built integrations.",
              imageSrc: "https://pixabay.com/get/g6d88e9274a8b0ddc3b30607429bed2c3d28afe5d6f9c3657ea64793381caf8de96f194e354e2ee4fee7c15bafae544d6e484799afe953e6a34bd00b2202bfda9_1280.jpg",
              imageAlt: "Integration connections diagram"
            },
            {
              id: 4,
              title: "Enterprise Security",
              description: "Protect your data with bank-level security, SOC 2 compliance, and advanced encryption protocols.",
              imageSrc: "https://pixabay.com/get/gf36f570d1aaa8737e303651c1858daa18ec6713ee55a1dbfc02af7a7ac351aecd2aa11f8f5072a42c634ba623cbb40ac3c164ee1e6086b97610dcb4531296847_1280.jpg",
              imageAlt: "Security shield and protection icons"
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardThree
          title="Simple, Transparent Pricing"
          description="Choose the perfect plan for your team size and needs"
          tag="Pricing Plans"
          tagIcon={CreditCard}
          textboxLayout="default"
          animationType="slide-up"
          plans={[
            {
              id: "starter",
              price: "$29/month",
              name: "Starter",
              features: [
                "Up to 5 team members",
                "Basic analytics dashboard",
                "Email support",
                "50GB storage",
                "API access"
              ],
              buttons: [
                {
                  text: "Start Free Trial",
                  href: "https://app.saasflow.com/trial"
                },
                {
                  text: "Learn More",
                  href: "pricing"
                }
              ]
            },
            {
              id: "professional",
              badge: "Most Popular",
              badgeIcon: Sparkles,
              price: "$79/month",
              name: "Professional",
              features: [
                "Up to 25 team members",
                "Advanced analytics & reporting",
                "Priority support",
                "500GB storage",
                "Workflow automation",
                "Custom integrations"
              ],
              buttons: [
                {
                  text: "Start Free Trial",
                  href: "https://app.saasflow.com/trial"
                },
                {
                  text: "Learn More",
                  href: "pricing"
                }
              ]
            },
            {
              id: "enterprise",
              price: "$199/month",
              name: "Enterprise",
              features: [
                "Unlimited team members",
                "Enterprise analytics suite",
                "24/7 phone support",
                "Unlimited storage",
                "Advanced automation",
                "Custom development",
                "Dedicated success manager"
              ],
              buttons: [
                {
                  text: "Contact Sales",
                  href: "https://saasflow.com/contact-sales"
                },
                {
                  text: "View Details",
                  href: "enterprise"
                }
              ]
            }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardThree
          title="Trusted by Growing Companies Worldwide"
          description="Join thousands of businesses scaling with SaasFlow"
          tag="Our Impact"
          tagIcon={TrendingUp}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="uniform-all-items-equal"
          metrics={[
            {
              id: "1",
              icon: Users,
              title: "Active Users",
              value: "50K+"
            },
            {
              id: "2",
              icon: Building2,
              title: "Companies",
              value: "2,500+"
            },
            {
              id: "3",
              icon: Globe,
              title: "Countries",
              value: "120+"
            },
            {
              id: "4",
              icon: Zap,
              title: "Tasks Automated",
              value: "10M+"
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardOne
          title="Meet Our Team"
          description="The passionate people building the future of business automation"
          tag="Our Team"
          tagIcon={Users}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="uniform-all-items-equal"
          members={[
            {
              id: "1",
              name: "Alex Chen",
              role: "CEO & Founder",
              imageSrc: "https://pixabay.com/get/gae6364e1b4a79c45cee6da9a3eabeac21d93574ff8b0d8cc76d45b641a6b401757daf7bf7f4e25c7d8df405aba21b41404ae69bda8fce95a2cb6076cc8ff6ab7_1280.jpg",
              imageAlt: "Alex Chen, CEO & Founder"
            },
            {
              id: "2",
              name: "Sarah Kim",
              role: "VP of Product",
              imageSrc: "https://pixabay.com/get/g2b9c93f24338263c5f9a1e0d87a3227d518d012028dbb4fc22f73bf0f8345334a7303dd2d6d2016f843b6979552bff246defd9ae2950dc456e356c09e2bf68c5_1280.jpg",
              imageAlt: "Sarah Kim, VP of Product"
            },
            {
              id: "3",
              name: "Marcus Johnson",
              role: "CTO",
              imageSrc: "https://pixabay.com/get/ga614588818b1845f211d17d01bc38b0a36f312808a510fc6d747ec1fdf6daad2f8c406936b7336ed8df4a86fbf6b4293ca0e7fd36421d8ebe5a9326a6b29cf00_1280.jpg",
              imageAlt: "Marcus Johnson, CTO"
            },
            {
              id: "4",
              name: "Emily Rodriguez",
              role: "Head of Design",
              imageSrc: "https://pixabay.com/get/gc3042343b9c7a05f65f8302593873325c9b5c077229abf15637d340900c0673ec51a0d053a5f1889defc5d32f30b142ec6c24627c35ae4c8abe5673d2916b846_1280.jpg",
              imageAlt: "Emily Rodriguez, Head of Design"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="What Our Customers Say"
          description="Real feedback from teams who've transformed their operations with SaasFlow"
          tag="Customer Success"
          tagIcon={MessageCircle}
          textboxLayout="default"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Jennifer Martinez",
              role: "Operations Director at TechCorp",
              testimonial: "SaasFlow has completely transformed how we manage our workflows. The automation features alone have saved us 20 hours per week.",
              imageSrc: "https://pixabay.com/get/g2b9c93f24338263c5f9a1e0d87a3227d518d012028dbb4fc22f73bf0f8345334a7303dd2d6d2016f843b6979552bff246defd9ae2950dc456e356c09e2bf68c5_1280.jpg",
              imageAlt: "Jennifer Martinez"
            },
            {
              id: "2",
              name: "David Thompson",
              role: "Founder of StartupXYZ",
              testimonial: "The analytics dashboard gives us insights we never had before. We can now make data-driven decisions that actually move the needle.",
              imageSrc: "https://pixabay.com/get/gae6364e1b4a79c45cee6da9a3eabeac21d93574ff8b0d8cc76d45b641a6b401757daf7bf7f4e25c7d8df405aba21b41404ae69bda8fce95a2cb6076cc8ff6ab7_1280.jpg",
              imageAlt: "David Thompson"
            },
            {
              id: "3",
              name: "Lisa Chen",
              role: "Product Manager at InnovateInc",
              testimonial: "Implementation was seamless and the support team is incredible. SaasFlow feels like it was built specifically for our needs.",
              imageSrc: "https://pixabay.com/get/gc3042343b9c7a05f65f8302593873325c9b5c077229abf15637d340900c0673ec51a0d053a5f1889defc5d32f30b142ec6c24627c35ae4c8abe5673d2916b846_1280.jpg",
              imageAlt: "Lisa Chen"
            },
            {
              id: "4",
              name: "Michael Brown",
              role: "CEO of GrowthCo",
              testimonial: "Since switching to SaasFlow, our team productivity has increased by 40%. The ROI has been absolutely phenomenal.",
              imageSrc: "https://pixabay.com/get/ga614588818b1845f211d17d01bc38b0a36f312808a510fc6d747ec1fdf6daad2f8c406936b7336ed8df4a86fbf6b4293ca0e7fd36421d8ebe5a9326a6b29cf00_1280.jpg",
              imageAlt: "Michael Brown"
            }
          ]}
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofOne
          title="Trusted by Industry Leaders"
          description="Join thousands of companies that rely on SaasFlow for their daily operations"
          tag="Trusted Partners"
          tagIcon={Shield}
          textboxLayout="default"
          logos={[
            "https://pixabay.com/get/g76710e216e16bfb3fee978604abd7c00b160e8f9327667bf707a93b72332f73289d5e582e1a18a795a65aae90c386169cc0ff481de26270405351ecfeabf27fc_1280.jpg",
            "https://pixabay.com/get/ga4d4c2a0010e3c02b962aee01d892f62a86e4da242efff533483d71effd7848a2c5a99cddba5930dcd522b7b143ab693d1d9271ddad36d65ed5e8e721087e5d0_1280.jpg",
            "https://pixabay.com/get/gb27bd0595ea616328845c4e61bcb0a0d5590683154388b482105ba6546b03ac64409a1070ba1918bc7e5b5c41ba75256e309ad675bd7e0457214d07835afa5fa_1280.jpg",
            "https://pixabay.com/get/g58c1f539946fa021e8684fb804223168d19eb9efd511fc08e8ccd4421f9d41ad9e7975877571966448b905429cb21c7509ed958eaf22e7dbb495a4c6ab5d4223_1280.jpg",
            "https://pixabay.com/get/g6e6ee7ad6462224ba4c9093658c2b90520a47e829ad01549e325bfc302cf1b94e66b277af0b335e381683c55b8d5fe16eb34e65ac026e16155365cd0f4775475_1280.jpg",
            "https://pixabay.com/get/g606e2e44ef591d127dcf8a827bf844dc16c2f715c0fc9ca07bc5fddc69a5528cb1f96c3d81804e329c6ca2a4606acf4bc23c39b2dd8e37cfeff51ea41f84608d_1280.jpg",
            "https://pixabay.com/get/gb69610d2d516af64dcc03d95fee98873f09cc4ba138518fe7d8d12e41c6466588479349a9391f8ac506b130c22d720ae4bf43ad6bec4dbb3f8e65c39b08ba719_1280.jpg"
          ]
          speed={35}
          showCard={true}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Everything you need to know about SaasFlow and how it can help your business"
          tag="FAQ"
          tagIcon={HelpCircle}
          textboxLayout="default"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "How quickly can we get started with SaasFlow?",
              content: "You can start using SaasFlow immediately after signing up. Our onboarding process takes just a few minutes, and we provide guided tutorials to help you set up your first workflows."
            },
            {
              id: "2",
              title: "Do you offer integrations with other tools?",
              content: "Yes! SaasFlow integrates with over 100 popular business tools including Slack, Google Workspace, Microsoft 365, Salesforce, HubSpot, and many more. We also provide a robust API for custom integrations."
            },
            {
              id: "3",
              title: "What kind of support do you provide?",
              content: "We offer comprehensive support including email support for all plans, priority support for Professional plans, and 24/7 phone support for Enterprise customers. We also have extensive documentation and video tutorials."
            },
            {
              id: "4",
              title: "Is my data secure with SaasFlow?",
              content: "Absolutely. We use bank-level encryption, are SOC 2 compliant, and follow industry best practices for data security. Your data is encrypted both in transit and at rest, and we undergo regular security audits."
            },
            {
              id: "5",
              title: "Can I change my plan at any time?",
              content: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing adjustments. There are no long-term contracts or cancellation fees."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Get Started"
          tagIcon={Rocket}
          title="Ready to Transform Your Business?"
          description="Join thousands of companies already using SaasFlow to streamline their operations and accelerate growth. Start your free trial today."
          inputPlaceholder="Enter your work email"
          buttonText="Start Free Trial"
          termsText="By signing up, you agree to our Terms of Service and Privacy Policy. No credit card required for the trial."
          onSubmit={(email) => console.log('Trial signup:', email)}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoSrc="https://pixabay.com/get/gc2a49b6d091d52948b2fb65c15ee0e55bcee4d9f7b9fc8eb3a379127537a5dc2b2bd11d9ed6c01845d50f591f1b4fd7de8e83eeea1046e6110f57dbdf4731edb_1280.jpg"
          logoAlt="SaasFlow Logo"
          logoText="SaasFlow"
          columns={[
            {
              items: [
                {
                  label: "Features",
                  href: "features"
                },
                {
                  label: "Pricing",
                  href: "pricing"
                },
                {
                  label: "Integrations",
                  href: "integrations"
                },
                {
                  label: "API Docs",
                  href: "https://docs.saasflow.com"
                }
              ]
            },
            {
              items: [
                {
                  label: "About Us",
                  href: "about"
                },
                {
                  label: "Careers",
                  href: "https://saasflow.com/careers"
                },
                {
                  label: "Blog",
                  href: "https://blog.saasflow.com"
                },
                {
                  label: "Press Kit",
                  href: "https://saasflow.com/press"
                }
              ]
            },
            {
              items: [
                {
                  label: "Help Center",
                  href: "https://help.saasflow.com"
                },
                {
                  label: "Contact Support",
                  href: "https://saasflow.com/support"
                },
                {
                  label: "Status Page",
                  href: "https://status.saasflow.com"
                },
                {
                  label: "Community",
                  href: "https://community.saasflow.com"
                }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}