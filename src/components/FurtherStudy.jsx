import { motion } from 'framer-motion'
import { ExternalLink, FileText, BookOpen, Users, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const FurtherStudy = () => {
  const researchPapers = [
    {
      title: "A Machine Learning Framework for Predicting Loan Default Risk in Peer-to-Peer Lending",
      authors: "Noorelsalam Almakki, Madiha Maikzada, Myint Myat Zaw, Ahmed Hussein, Al-Hassan Sabeeh, Dadi Ishimwe",
      year: "2025",
      description: "The DataCents Technical Paper presents a comprehensive machine learning framework for predicting loan default risk in peer-to-peer lending platforms. Our analysis of over 2.2 million loan records from LendingClub reveals key predictors and introduces the DataCents Risk Score.",
      url: "#",
      type: "Technical Paper",
      relevance: "Primary Research"
    }
  ]

  const additionalResources = [
    {
      title: "LendingClub Dataset Documentation",
      description: "Official documentation and data dictionary for the LendingClub loan dataset used in our research.",
      type: "Dataset",
      icon: FileText
    },
    {
      title: "Scikit-learn Machine Learning Library",
      description: "Comprehensive documentation for the machine learning library used in our model implementations.",
      type: "Documentation",
      icon: BookOpen
    },
    {
      title: "TensorFlow Neural Networks Guide",
      description: "Official guide for implementing neural networks using TensorFlow, relevant to our deep learning approach.",
      type: "Tutorial",
      icon: TrendingUp
    },
    {
      title: "Financial Risk Management Principles",
      description: "Academic resources on traditional risk management approaches in financial services.",
      type: "Academic",
      icon: Users
    }
  ]

  const futureDirections = [
    {
      title: "Time-Series Analysis",
      description: "Modeling loan performance over time to predict default earlier in the loan lifecycle."
    },
    {
      title: "Bias and Fairness Audit",
      description: "Investigating the model for any demographic biases to ensure equitable outcomes."
    },
    {
      title: "DataCents Risk Score Deployment",
      description: "Developing a user-facing dashboard or API for real-time risk assessment using our composite metric."
    },
    {
      title: "Enhanced Feature Engineering",
      description: "Exploring additional features and advanced preprocessing techniques to improve model performance."
    }
  ]

  const relatedTopics = [
    "Credit Scoring Models",
    "Financial Machine Learning",
    "Risk Management",
    "Fintech Innovation",
    "Alternative Lending",
    "Behavioral Finance",
    "Regulatory Technology",
    "Data Science in Finance"
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
              <span className="text-gradient">DataCents</span> Technical Paper
            </h1>
            <p className="subtitle text-muted-foreground max-w-4xl mx-auto">
              Comprehensive documentation of our machine learning framework for predicting loan default risk 
              in peer-to-peer lending, including methodology, results, and the <span className="text-accent font-semibold">DataCents Risk Score</span>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Research Papers */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="text-center space-y-4">
              <h2 className="heading-lg">
                <span className="text-gradient">Technical Paper</span> Details
              </h2>
              <p className="subtitle text-muted-foreground max-w-3xl mx-auto">
                Complete documentation of the <span className="text-accent font-semibold">DataCents project</span> methodology, findings, and implementation details.
              </p>
            </div>

            <div className="grid gap-8">
              {researchPapers.map((paper, index) => (
                <motion.div
                  key={paper.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="glass-effect hover:scale-105 transition-transform duration-300">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="space-y-2 flex-1">
                          <CardTitle className="heading-md leading-tight">{paper.title}</CardTitle>
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <span>{paper.authors}</span>
                            <span>•</span>
                            <span>{paper.year}</span>
                            <span>•</span>
                            <span className="px-2 py-1 bg-primary/20 text-primary rounded">{paper.type}</span>
                            <span className="px-2 py-1 bg-secondary/20 text-secondary rounded">
                              {paper.relevance} Relevance
                            </span>
                          </div>
                        </div>
                        <Button asChild variant="outline" size="sm">
                          <a href={paper.url} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-body text-muted-foreground">{paper.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* DataCents Technical Paper Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="text-center space-y-4">
              <h2 className="heading-lg">
                <span className="text-gradient">Paper</span> Content Overview
              </h2>
              <p className="subtitle text-muted-foreground max-w-3xl mx-auto">
                Key sections and findings from the <span className="text-accent font-semibold">DataCents Technical Paper</span>.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="glass-effect transform -rotate-1">
                <CardContent className="p-6 space-y-4">
                  <h3 className="heading-sm font-bold">Abstract</h3>
                  <p className="text-body-sm text-muted-foreground">
                    Peer-to-peer (P2P) lending platforms have democratized access to credit, but face the persistent 
                    challenge of managing borrower default risk. This paper presents the <span className="text-accent font-semibold">DataCents project</span>, a 
                    data-driven initiative to identify the key predictors of loan default using a large-scale dataset 
                    from <span className="text-accent font-semibold">LendingClub</span>.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-effect transform rotate-2">
                <CardContent className="p-6 space-y-4">
                  <h3 className="heading-sm font-bold">Dataset</h3>
                  <p className="text-body-sm text-muted-foreground">
                    Our primary data source is the publicly available <span className="text-accent font-semibold">LendingClub loan dataset</span>, spanning from <span className="text-accent font-semibold">2007 
                    to 2018</span>. This dataset contains over <span className="text-gradient font-bold">2.2 million loan records</span> with more than <span className="text-accent font-semibold">150 features</span> per loan.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-effect transform -rotate-1">
                <CardContent className="p-6 space-y-4">
                  <h3 className="heading-sm font-bold">Methodology</h3>
                  <p className="text-body-sm text-muted-foreground">
                    We employed a comparative approach, evaluating <span className="text-accent font-semibold">Logistic Regression</span>, <span className="text-accent font-semibold">Random Forest</span>, and <span className="text-accent font-semibold">XGBoost</span> 
                    models to predict loan outcomes. The dataset was split into <span className="text-accent font-semibold">training (80%)</span> and <span className="text-accent font-semibold">testing (20%)</span> sets.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-effect transform rotate-1">
                <CardContent className="p-6 space-y-4">
                  <h3 className="heading-sm font-bold">Key Results</h3>
                  <p className="text-body-sm text-muted-foreground">
                    <span className="text-accent font-semibold">XGBoost</span> emerged as the superior model with <span className="text-gradient font-bold">ROC AUC of 0.72</span>. Feature importance analysis 
                    identified <span className="text-accent font-semibold">interest rate</span>, <span className="text-accent font-semibold">loan grade</span>, and <span className="text-accent font-semibold">FICO score</span> as primary predictors of default risk.
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="text-center space-y-4">
              <h2 className="heading-lg">
                Additional <span className="text-gradient">Resources</span>
              </h2>
              <p className="subtitle text-muted-foreground max-w-3xl mx-auto">
                Helpful resources, documentation, and tools for understanding and implementing 
                machine learning in financial applications.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {additionalResources.map((resource, index) => (
                <motion.div
                  key={resource.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`${index % 2 === 0 ? 'lg:translate-y-4' : 'lg:-translate-y-4'}`}
                >
                  <Card className="glass-effect h-full hover:scale-105 transition-transform duration-300">
                    <CardContent className="p-6 space-y-4">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                          <resource.icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="heading-sm font-bold">{resource.title}</h3>
                          <span className="text-body-xs text-primary">{resource.type}</span>
                        </div>
                      </div>
                      <p className="text-body-sm text-muted-foreground">{resource.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Future Directions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="text-center space-y-4">
              <h2 className="heading-lg">
                Future <span className="text-gradient">Work</span>
              </h2>
              <p className="subtitle text-muted-foreground max-w-3xl mx-auto">
                Planned extensions and improvements to the <span className="text-accent font-semibold">DataCents framework</span> and methodology.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {futureDirections.map((direction, index) => (
                <motion.div
                  key={direction.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`${index % 2 === 0 ? 'lg:translate-y-6' : 'lg:-translate-y-6'}`}
                >
                  <Card className="glass-effect h-full">
                    <CardContent className="p-6 space-y-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                          <span className="text-white font-bold text-sm">{index + 1}</span>
                        </div>
                        <h3 className="heading-sm font-bold">{direction.title}</h3>
                      </div>
                      <p className="text-body-sm text-muted-foreground">{direction.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Topics */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="text-center space-y-4">
              <h2 className="heading-lg">
                Related <span className="text-gradient">Topics</span>
              </h2>
              <p className="subtitle text-muted-foreground max-w-3xl mx-auto">
                Key areas of study and research topics related to our work in <span className="text-accent font-semibold">P2P lending</span> 
                and <span className="text-accent font-semibold">financial machine learning</span>.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {relatedTopics.map((topic, index) => (
                <motion.span
                  key={topic}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="px-6 py-3 bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 rounded-full text-lg font-medium hover:scale-105 transition-transform duration-200"
                >
                  {topic}
                </motion.span>
              ))}
            </div>
          </motion.div>
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
              Explore the <span className="text-gradient">DataCents Framework</span>
            </h2>
            <p className="subtitle text-muted-foreground max-w-3xl mx-auto">
              Interested in learning more about our methodology or implementing the <span className="text-accent font-semibold">DataCents Risk Score</span>? 
              We'd love to hear from you and discuss potential applications.
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
                  <ExternalLink className="mr-2 h-5 w-5" />
                  View Our Repository
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="/documentation">
                  Technical Documentation
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default FurtherStudy

