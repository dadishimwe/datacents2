import { motion } from 'framer-motion'
import { Linkedin, Github, Mail, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import noorelsalam from '../assets/noorelsalam.jpeg'
import madiha from '../assets/madiha.jpeg'
import charm from '../assets/charm.jpeg'
import ahmed from '../assets/ahmed.jpeg'
import hasan from '../assets/hasan.jpeg'
import dadi from '../assets/dadi.jpeg'

const AboutTeam = () => {
  const teamMembers = [
    {
      name: "Noorelsalam Almakki",
      role: "Machine Learning Specialist",
      bio: "Experienced in developing and implementing machine learning models for financial risk assessment. Specializes in XGBoost and ensemble methods.",
      skills: ["Machine Learning", "Python", "XGBoost", "Data Science"],
      linkedin: "#",
      github: "#",
      email: "noorelsalam.almakki@datacents.com",
      image: noorelsalam
    },
    {
      name: "Madiha Malikzada",
      role: "Data Data Scientist and Software Engineer",
      bio: "Expert in financial data analysis and risk modeling. Brings deep understanding of P2P lending markets and feature engineering.",
      skills: ["Financial Analysis", "Risk Modeling", "Statistics", "Python"],
      linkedin: "https://www.linkedin.com/in/madiha-malik/",
      github: "https://github.com/MadiMalik",
      email: "madiha.maikzada@datacents.com",
      image: madiha
    },
    {
      name: "Myint Myat Zaw",
      role: "Statistical Analyst",
      bio: "Focuses on statistical validation and model evaluation. Ensures research methodology meets academic standards and reproducibility requirements.",
      skills: ["Statistics", "Model Validation", "Research Methods", "R"],
      linkedin: "#",
      github: "#",
      email: "myint.zaw@datacents.com",
      image: charm
    },
    {
      name: "Ahmed Hussein",
      role: "Research Lead",
      bio: "Leads the DataCents project with expertise in machine learning applications for financial technology. Coordinates research efforts and methodology development.",
      skills: ["Project Leadership", "Machine Learning", "Financial Tech", "Research Design"],
      linkedin: "#",
      github: "#",
      email: "ahmed.hussein@datacents.com",
      image: ahmed
    },
    {
      name: "Al-Hassan Sabeeh",
      role: "Financial Risk Expert",
      bio: "Expert in financial risk assessment and credit scoring models. Provides domain expertise for P2P lending risk evaluation.",
      skills: ["Financial Risk", "Credit Scoring", "Regulatory Compliance", "Risk Modeling"],
      linkedin: "#",
      github: "#",
      email: "al-hassan.sabeeh@datacents.com",
      image: hasan
    },
    {
      name: "Dadi Ishimwe",
      role: "Full-Stack Engineer",
      bio: "Responsible for implementing research findings into practical applications. Experienced in building scalable web applications and data pipelines.",
      skills: ["React", "Node.js", "Python", "Database Design"],
      linkedin: "#",
      github: "#",
      email: "dadi.ishimwe@datacents.com",
      image: dadi
    }
  ]

  const teamValues = [
    {
      title: "Innovation",
      description: "We push the boundaries of traditional risk assessment using cutting-edge machine learning techniques."
    },
    {
      title: "Collaboration",
      description: "Our diverse team brings together expertise from finance, technology, and academia for comprehensive solutions."
    },
    {
      title: "Transparency",
      description: "We believe in open research and reproducible results that benefit the entire financial technology community."
    },
    {
      title: "Impact",
      description: "Our goal is to create practical solutions that make P2P lending safer and more accessible for everyone."
    }
  ]

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            <h1 className="text-5xl lg:text-6xl font-bold">
              Meet Our <span className="text-gradient">Research Team</span>
            </h1>
            <p className="subtitle text-muted-foreground max-w-4xl mx-auto">
              A dedicated team of researchers, developers, and analysts working on the <span className="text-accent font-semibold">DataCents project</span>, 
              focused on revolutionizing peer-to-peer lending risk assessment through advanced machine learning 
              and the development of the <span className="text-gradient font-semibold">DataCents Risk Score</span>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`${index % 2 === 0 ? 'lg:translate-y-6' : 'lg:-translate-y-6'}`}
              >
                <Card className="glass-effect h-full hover:scale-105 transition-transform duration-300">
                  <CardContent className="p-8 space-y-6">
                    {/* Avatar and Basic Info */}
                    <div className="flex items-start space-x-6">
                      <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-primary/20 flex-shrink-0">
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="heading-md font-bold">{member.name}</h3>
                        <p className="subtitle-sm text-primary font-medium">{member.role}</p>
                      </div>
                    </div>

                    {/* Bio */}
                    <p className="text-body text-muted-foreground">{member.bio}</p>

                    {/* Skills */}
                    <div className="space-y-3">
                                              <h4 className="subtitle-sm font-semibold">Expertise</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.skills.map((skill) => (
                          <span 
                            key={skill}
                            className="px-3 py-1 bg-muted rounded-full text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Contact Links */}
                    <div className="flex space-x-4 pt-4">
                      <Button variant="outline" size="sm" asChild>
                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                          <Linkedin className="h-4 w-4" />
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a href={member.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a href={`mailto:${member.email}`}>
                          <Mail className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-8 mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold">
              Our <span className="text-gradient">Values</span>
            </h2>
            <p className="subtitle text-muted-foreground max-w-3xl mx-auto">
              The principles that guide our research and drive our commitment to advancing 
              financial technology through responsible innovation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`${index % 4 === 0 ? 'lg:translate-y-8' : index % 4 === 1 ? 'lg:-translate-y-4' : index % 4 === 2 ? 'lg:translate-y-2' : 'lg:-translate-y-6'}`}
              >
                <Card className="glass-effect h-full text-center">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">{index + 1}</span>
                    </div>
                    <h3 className="heading-sm font-bold">{value.title}</h3>
                    <p className="text-body-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About MIT Emerging Talent */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="glass-effect">
              <CardContent className="p-12 space-y-8">
                <div className="text-center space-y-6">
                  <h2 className="text-4xl font-bold">
                    About <span className="text-gradient">DataCents Project</span>
                  </h2>
                  <p className="subtitle text-muted-foreground max-w-4xl mx-auto">
                    The <span className="text-accent font-semibold">DataCents project</span> is a comprehensive machine learning framework designed to identify 
                    key predictors of loan default in peer-to-peer lending. Our research spans from <span className="text-accent font-semibold">2007-2018</span> 
                    with over <span className="text-gradient font-bold">2.2 million loan records</span>, providing robust insights for credit risk assessment.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mt-12">
                  <div className="text-center space-y-4 transform -rotate-2">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto flex items-center justify-center">
                      <ExternalLink className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="heading-sm font-bold">Global Collaboration</h3>
                    <p className="text-body-sm text-muted-foreground">
                      Working with talented individuals from around the world to solve complex problems.
                    </p>
                  </div>
                  <div className="text-center space-y-4 transform rotate-1">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto flex items-center justify-center">
                      <ExternalLink className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="heading-sm font-bold">Cutting-Edge Research</h3>
                    <p className="text-body-sm text-muted-foreground">
                      Applying the latest advances in machine learning to real-world challenges.
                    </p>
                  </div>
                  <div className="text-center space-y-4 transform -rotate-1">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto flex items-center justify-center">
                      <ExternalLink className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="heading-sm font-bold">Open Innovation</h3>
                    <p className="text-body-sm text-muted-foreground">
                      Sharing our findings and tools with the broader research community.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-8"
          >
            <h2 className="text-4xl font-bold">
              Interested in <span className="text-gradient">Collaborating?</span>
            </h2>
            <p className="subtitle text-muted-foreground max-w-3xl mx-auto">
              We're always open to discussing our research, exploring collaboration opportunities, 
              or sharing insights about machine learning in financial technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="pulse-glow">
                <a href="/contact">
                  Get in Touch
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a 
                  href="https://github.com/MIT-Emerging-Talent/ET6-CDSP-group-15-repo" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-5 w-5" />
                  View Our Work
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default AboutTeam

