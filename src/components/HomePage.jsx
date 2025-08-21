import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp, Shield, Users, Brain } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Link } from 'react-router-dom'
import heroElements from '../assets/hero_3d_elements.png'
import definition from '../../definition.png'
import diagram from '../../diagram.png'
import noorelsalam from '../assets/noorelsalam.jpeg'
import madiha from '../assets/madiha.jpeg'
import charm from '../assets/charm.jpeg'
import ahmed from '../assets/ahmed.jpeg'
import hasan from '../assets/hasan.jpeg'
import dadi from '../assets/dadi.jpeg'

const HomePage = () => {
  const insights = [
    {
      icon: TrendingUp,
      title: "Interest Rates Tell the Story",
      description: "Loans with higher interest rates are 3x more likely to default. It's the single biggest red flag we found."
    },
    {
      icon: Shield,
      title: "FICO Scores Still Matter",
      description: "Borrowers with lower credit scores are significantly more likely to struggle with repayments."
    },
    {
      icon: Users,
      title: "Platform Grades Are Key",
      description: "The platform's own risk assessment is surprisingly accurate at predicting loan success."
    },
    {
      icon: Brain,
      title: "Debt Load is Critical",
      description: "Borrowers with high debt-to-income ratios are walking a financial tightrope."
    }
  ]

  const teamMembers = [
    { name: "Noorelsalam Almakki", role: "Machine Learning Specialist", image: noorelsalam },
    { name: "Madiha Maikzada", role: "Data Analyst", image: madiha },
    { name: "Myint Myat Zaw", role: "Statistical Analyst", image: charm },
    { name: "Ahmed Hussein", role: "Research Lead", image: ahmed },
    { name: "Al-Hassan Sabeeh", role: "Financial Risk Expert", image: hasan },
    { name: "Dadi Ishimwe", role: "Full-Stack Engineer", image: dadi }
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-50"></div>
        
        {/* Floating 3D Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.img
            src={heroElements}
            alt="3D Elements"
            className="absolute top-20 right-10 w-96 h-96 object-contain floating-element opacity-80"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.8, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 space-y-8"
            >
              <h1 className="heading-hero">
                <span className="text-foreground block mb-2 text-5xl leading-relaxed text-gradient">Applying data-driven research to understand default risk in P2P lending markets</span>
                <span className=" block text-5xl">DataCents</span>
              </h1>
              
              <p className="subtitle-lg text-white max-w-2xl text-lg">
                The global P2P lending market reached USD <span className="text-accent font-semibold">209</span> billion in 2023 with a projected <span className="text-accent font-semibold">25% CAGR through 2032</span>.
                Despite these growth opportunities, persistent credit risk remains the primary challenge affecting
                investor confidence and platform stability across major segments.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="pulse-glow h-12 border-1">
                  <Link to="/documentation">
                    Explore Research <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-12">
                  <a 
                    href="https://github.com/MIT-Emerging-Talent/ET6-CDSP-group-15-repo" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    View on GitHub
                  </a>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 relative lg:-translate-y-8"
            >
              {/* Research Impact section commented out for future implementation */}
              {/* 
              <div className="glass-effect rounded-2xl p-8 space-y-6 lg:ml-8">
                <h3 className="heading-sm text-center">Research Impact</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary">0.72</div>
                    <div className="text-sm text-muted-foreground">XGBoost ROC AUC</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-secondary">2.2M+</div>
                    <div className="text-sm text-muted-foreground">Loan Records</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-accent">3</div>
                    <div className="text-sm text-muted-foreground">ML Models Tested</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-chart-4">150+</div>
                    <div className="text-sm text-muted-foreground">Features Analyzed</div>
                  </div>
                </div>
              </div>
              */}
            </motion.div>
          </div>
        </div>
      </section>


      {/* Problem Statement */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* LEFT SIDE: Text Content */}
            <div className="space-y-8 text-left">
              <h2 className="heading-xl text-[#BFA242]">Problem Statement</h2>
              <p className="subtitle text-white">
                Despite rapid growth, peer-to-peer lending platforms face a fundamental 
                challenge: traditional credit scoring systems fail to capture the full 
                range of borrower behaviors. This blind spot leads to misclassified loans, 
                higher default rates, reduced investor confidence, and long-term platform 
                instability.
              </p>

              <ul className="space-y-4 text-white">
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  High default risk due to incomplete borrower assessment.
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  Investor confidence shaken by unpredictable loan outcomes.
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  Platform sustainability threatened by rising credit risk.
                </li>
              </ul>

              <div className="mt-8">
                <h3 className="heading-lg text-gradient">Research Question</h3>
                <p className="subtitle text-white">
                  How can alternative borrower and loan-level features, beyond traditional 
                  credit scoring, be used to more accurately predict default risk in 
                  peer-to-peer lending platforms?
                </p>
              </div>
            </div>

            {/* RIGHT SIDE: Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl transform rotate-3 scale-105"></div>
              <img 
                src={diagram} 
                alt="How P2P Lending Platforms Work" 
                className="rounded-2xl shadow-2xl w-full relative z-10 transform -rotate-1"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>


      {/* Solution Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-6 lg:col-start-2"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl transform -rotate-2 scale-105"></div>
                <img 
                  src={definition} 
                  alt="P2P Lending Definition" 
                  className="rounded-2xl shadow-2xl relative z-10 transform rotate-1"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:col-span-4 space-y-8"
            >
              <h2 className="heading-lg">
                Our <span className="text-gradient">Data-Driven</span> Solution
              </h2>
              <p className="subtitle text-white">
                We tested multiple approaches to find the most reliable way to predict loan success. 
                Our <span className="text-gradient font-semibold">XGBoost model</span> emerged as the clear winner, 
                achieving <span className="text-accent font-semibold">72% accuracy</span> in identifying which loans are likely to succeed 
                and which ones carry hidden risks.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 bg-primary rounded-full"></div>
                  <span className="subtitle-sm font-semibold"><span className="text-accent">XGBoost:</span> <span className="text-gradient font-bold">0.72 ROC AUC</span> <span className="text-muted-foreground">(Best Performance)</span></span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 bg-secondary rounded-full"></div>
                  <span className="subtitle-sm font-semibold"><span className="text-accent">Logistic Regression:</span> <span className="text-gradient font-bold">0.71 ROC AUC</span></span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 bg-accent rounded-full"></div>
                  <span className="subtitle-sm font-semibold"><span className="text-accent">Random Forest:</span> <span className="text-gradient font-bold">0.71 ROC AUC</span></span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Insights */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-8 mb-16"
          >
            <h2 className="heading-xl">
              <span className="text-gradient">What We Discovered</span> That Changes Everything
            </h2>
            <p className="subtitle text-white max-w-3xl mx-auto">
              After analyzing millions of loans, we found the <span className="text-accent font-semibold">key factors</span> that separate successful investments from risky ones.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {insights.map((insight, index) => (
              <motion.div
                key={insight.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`${index % 2 === 0 ? 'lg:translate-y-4' : 'lg:-translate-y-4'}`}
              >
                <Card className="glass-effect h-full hover:scale-105 transition-transform duration-300">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                      <insight.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="heading-sm font-bold">{insight.title}</h3>
                    <p className="text-body-sm text-white">{insight.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-8 mb-16"
          >
            <h2 className="heading-xl">
              Meet the <span className="text-gradient">Data Detectives</span>
            </h2>
            <p className="subtitle text-white max-w-3xl mx-auto">
              Our team of <span className="text-accent font-semibold">researchers and analysts</span> spent months diving deep into the data 
              to uncover the patterns that could revolutionize how we think about P2P lending.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`${index % 3 === 0 ? 'lg:translate-y-6' : index % 3 === 1 ? 'lg:-translate-y-3' : 'lg:translate-y-0'}`}
              >
                <Card className="glass-effect text-center">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-16 h-16 rounded-full mx-auto overflow-hidden border-2 border-primary/20">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="heading-sm font-bold">{member.name}</h3>
                    <p className="text-body-xs text-white">{member.role}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Button asChild size="lg" variant="outline">
              <Link to="/about">
                Learn More About Our Team <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-8"
          >
            <h2 className="heading-xl">
              Ready to <span className="text-gradient">See the Full Picture?</span>
            </h2>
            <p className="subtitle text-white max-w-4xl mx-auto">
              This is just the beginning. Our complete analysis covers <span className="text-accent font-semibold">12 years of LendingClub data</span> 
              and introduces the <span className="text-gradient font-semibold">DataCents Risk Score</span>—a powerful new tool that could 
              transform how lending platforms and investors make decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="pulse-glow">
                <Link to="/documentation">
                  View Documentation <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a 
                  href="https://github.com/MIT-Emerging-Talent/ET6-CDSP-group-15-repo" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  GitHub Repository
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/further-study">
                  Research Papers
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default HomePage

