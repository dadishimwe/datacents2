import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, MapPin, Clock, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      description: "Send us an email for research inquiries or collaboration opportunities",
      contact: "research@mit-p2p-lending.edu",
      action: "mailto:research@mit-p2p-lending.edu"
    },
    {
      icon: Github,
      title: "GitHub",
      description: "Explore our code, contribute, or report issues on our repository",
      contact: "MIT-Emerging-Talent/ET6-CDSP-group-15-repo",
      action: "https://github.com/MIT-Emerging-Talent/ET6-CDSP-group-15-repo"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      description: "Connect with our team members for professional networking",
      contact: "MIT Emerging Talent Program",
      action: "#"
    }
  ]

  const officeInfo = [
    {
      icon: MapPin,
      title: "Global Team",
      info: "North America, Europe, Asia"
    },
    {
      icon: Clock,
      title: "Response Time",
      info: "Within 24-48 hours"
    }
  ]

  const researchAreas = [
    "Machine Learning in Finance",
    "Risk Assessment Models",
    "P2P Lending Platforms",
    "Financial Technology",
    "Data Science Applications",
    "Regulatory Compliance"
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
            <h1 className="heading-xl">
              <span className="text-gradient">Get in Touch</span>
            </h1>
            <p className="subtitle text-muted-foreground max-w-4xl mx-auto">
              We're always excited to discuss our research, explore collaboration opportunities, 
              or answer questions about <span className="text-accent font-semibold">machine learning applications</span> in financial technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="glass-effect h-full hover:scale-105 transition-transform duration-300">
                  <CardContent className="p-8 text-center space-y-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto flex items-center justify-center">
                      <method.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="heading-md font-bold">{method.title}</h3>
                      <p className="text-body-sm text-muted-foreground">{method.description}</p>
                    </div>
                    <div className="space-y-4">
                      <p className="font-medium text-primary">{method.contact}</p>
                      <Button asChild className="w-full">
                        <a href={method.action} target="_blank" rel="noopener noreferrer">
                          Connect
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

      {/* Global Presence */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-8 mb-16"
          >
            <h2 className="heading-lg">
              <span className="text-gradient">Global Research</span> Network
            </h2>
            <p className="subtitle text-white max-w-3xl mx-auto">
              Our team spans three continents, bringing diverse perspectives and expertise 
              to advance financial technology research worldwide.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="glass-effect h-full text-center">
                <CardContent className="p-8 space-y-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mx-auto flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">NA</span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="heading-md font-bold">North America</h3>
                    <p className="text-body-sm text-white">Cambridge, MA, USA</p>
                    <p className="text-body-xs text-white">Leading research hub for financial technology and machine learning applications</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="glass-effect h-full text-center">
                <CardContent className="p-8 space-y-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full mx-auto flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">EU</span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="heading-md font-bold">Europe</h3>
                    <p className="text-body-sm text-white">London, UK & Berlin, Germany</p>
                    <p className="text-body-xs text-white">Financial innovation center with expertise in regulatory compliance and risk modeling</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="glass-effect h-full text-center">
                <CardContent className="p-8 space-y-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full mx-auto flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">AS</span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="heading-md font-bold">Asia</h3>
                    <p className="text-body-sm text-white">Singapore & Tokyo, Japan</p>
                    <p className="text-body-xs text-white">Emerging fintech powerhouse with focus on digital lending and mobile finance</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="glass-effect">
                <CardHeader>
                  <CardTitle className="heading-lg">Send us a Message</CardTitle>
                  <p className="text-body text-muted-foreground">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john.doe@example.com" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="organization">Organization (Optional)</Label>
                    <Input id="organization" placeholder="Your University or Company" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="Research Collaboration Inquiry" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your interest in our research or how we can help..."
                      rows={6}
                    />
                  </div>
                  
                  <Button className="w-full pulse-glow" size="lg">
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Office Info */}
              <Card className="glass-effect">
                <CardHeader>
                  <CardTitle className="heading-md">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {officeInfo.map((info, index) => (
                    <div key={info.title} className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                        <info.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="subtitle-sm font-semibold">{info.title}</h3>
                        <p className="text-body-sm text-muted-foreground">{info.info}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Research Areas */}
              <Card className="glass-effect">
                <CardHeader>
                  <CardTitle className="heading-md">Research Areas</CardTitle>
                  <p className="text-body-sm text-muted-foreground">
                    Topics we're actively researching and open to discussing
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {researchAreas.map((area, index) => (
                      <div 
                        key={area}
                        className="flex items-center space-x-2 p-3 bg-muted/50 rounded-lg"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-body-xs">{area}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* FAQ */}
              <Card className="glass-effect">
                <CardHeader>
                  <CardTitle className="heading-md">Frequently Asked</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="subtitle-sm font-semibold">Can I use your research in my project?</h4>
                    <p className="text-body-xs text-muted-foreground">
                      Yes! Our research is open source. Please cite our work appropriately 
                      and check the license in our GitHub repository.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="subtitle-sm font-semibold">Are you available for speaking engagements?</h4>
                    <p className="text-body-xs text-muted-foreground">
                      We're open to presenting our research at conferences and academic events. 
                      Please reach out with details about your event.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="subtitle-sm font-semibold">How can I collaborate with your team?</h4>
                    <p className="text-body-xs text-muted-foreground">
                      We welcome collaboration opportunities. Send us an email describing 
                      your research interests and how you'd like to work together.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-8"
          >
            <h2 className="heading-lg">
              Let's <span className="text-gradient">Advance Research</span> Together
            </h2>
            <p className="subtitle text-muted-foreground max-w-3xl mx-auto">
              Whether you're a researcher, student, industry professional, or just curious 
              about our work, we'd love to connect and explore how we can collaborate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="pulse-glow">
                <a href="mailto:research@mit-p2p-lending.edu">
                  <Mail className="mr-2 h-5 w-5" />
                  Email Us Directly
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a 
                  href="https://github.com/MIT-Emerging-Talent/ET6-CDSP-group-15-repo" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-5 w-5" />
                  View Our Code
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Contact

