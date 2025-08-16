import { motion } from 'framer-motion'
import { Code, Database, BarChart3, GitBranch, FileText, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const Documentation = () => {
  const processSteps = [
    {
      icon: Database,
      title: "Data Collection",
      description: "Gathered LendingClub dataset with loan information, borrower details, and default outcomes.",
      details: ["Historical loan data", "Borrower demographics", "Financial metrics", "Default indicators"]
    },
    {
      icon: Code,
      title: "Data Preprocessing",
      description: "Cleaned and prepared the data for machine learning analysis.",
      details: ["Missing value handling", "Feature engineering", "Data normalization", "Outlier detection"]
    },
    {
      icon: BarChart3,
      title: "Model Training",
      description: "Implemented and trained three different machine learning models.",
      details: ["Logistic Regression", "Random Forest", "Neural Networks", "Cross-validation"]
    },
    {
      icon: GitBranch,
      title: "Model Evaluation",
      description: "Compared model performance against LendingClub's baseline system.",
      details: ["Accuracy metrics", "Precision & Recall", "ROC curves", "Feature importance"]
    }
  ]

  const scripts = [
    {
      name: "data_preprocessing.py",
      description: "Handles data cleaning, feature engineering, and preparation for model training.",
      language: "Python"
    },
    {
      name: "model_training.py",
      description: "Implements and trains the three machine learning models used in the research.",
      language: "Python"
    },
    {
      name: "evaluation.py",
      description: "Evaluates model performance and generates comparison metrics.",
      language: "Python"
    },
    {
      name: "visualization.py",
      description: "Creates charts and visualizations for research findings.",
      language: "Python"
    }
  ]

  const technologies = [
    { name: "Python", description: "Primary programming language for data analysis and machine learning" },
    { name: "Pandas", description: "Data manipulation and analysis library" },
    { name: "Scikit-learn", description: "Machine learning library for model implementation" },
    { name: "TensorFlow", description: "Deep learning framework for neural network implementation" },
    { name: "Matplotlib/Seaborn", description: "Data visualization libraries" },
    { name: "Jupyter Notebooks", description: "Interactive development environment for research" }
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
            <h1 className="heading-hero">
              <span className="text-gradient">Research</span> Documentation
            </h1>
            <p className="subtitle text-white max-w-4xl mx-auto">
              Comprehensive documentation of the <span className="text-accent font-semibold">DataCents project</span> - a machine learning framework for predicting 
              loan default risk in peer-to-peer lending, including methodology, implementation details, and technical specifications.
            </p>
            <Button asChild size="lg" className="pulse-glow">
              <a 
                href="https://github.com/MIT-Emerging-Talent/ET6-CDSP-group-15-repo" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <GitBranch className="mr-2 h-5 w-5" />
                View Full Repository
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="overview" className="space-y-8">
            <TabsList className="grid w-full grid-cols-4 glass-effect relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg transform rotate-1"></div>
              <TabsTrigger value="overview" className="relative z-10">Overview</TabsTrigger>
              <TabsTrigger value="process" className="relative z-10">Process</TabsTrigger>
              <TabsTrigger value="scripts" className="relative z-10">Scripts</TabsTrigger>
              <TabsTrigger value="tech" className="relative z-10">Technology</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Card className="glass-effect">
                  <CardHeader>
                    <CardTitle className="heading-lg">Research Overview</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-body text-white">
                      The <span className="text-accent font-semibold">DataCents project</span> focuses on improving default prediction in peer-to-peer lending using 
                      advanced machine learning techniques. We analyzed over <span className="text-gradient font-bold">2.2 million LendingClub loan records</span> 
                      to develop models that provide robust risk assessment capabilities.
                    </p>
                    
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="text-center space-y-2 transform -rotate-1">
                        <div className="text-3xl font-bold text-primary">3</div>
                        <div className="text-sm text-white">ML Models Tested</div>
                      </div>
                      <div className="text-center space-y-2 transform rotate-1">
                        <div className="text-3xl font-bold text-secondary">0.72</div>
                        <div className="text-sm text-white">Best ROC AUC Score</div>
                      </div>
                      <div className="text-center space-y-2 transform -rotate-1">
                        <div className="text-3xl font-bold text-accent">2.2M+</div>
                        <div className="text-sm text-white">Loan Records Analyzed</div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="heading-md font-semibold">Key Findings</h3>
                                              <ul className="space-y-2 text-body-sm text-white">
                          <li className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span><span className="text-accent font-semibold">XGBoost</span> achieved the best performance with <span className="text-gradient font-bold">ROC AUC of 0.72</span>, providing superior precision and recall balance</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                            <span><span className="text-accent font-semibold">Interest rate</span>, <span className="text-accent font-semibold">loan grade</span>, and <span className="text-accent font-semibold">FICO score</span> emerged as the primary predictors of default risk</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                            <span><span className="text-accent font-semibold">SHAP analysis</span> provides transparent model interpretability for individual loan predictions</span>
                          </li>
                        </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            <TabsContent value="process" className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="grid md:grid-cols-2 gap-8"
              >
                {processSteps.map((step, index) => (
                  <Card key={step.title} className={`glass-effect ${index % 2 === 0 ? 'lg:translate-y-4' : 'lg:-translate-y-4'}`}>
                    <CardHeader>
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                          <step.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">{step.title}</CardTitle>
                          <div className="text-sm text-white">Step {index + 1}</div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                                              <p className="text-white">{step.description}</p>
                      <ul className="space-y-1">
                        {step.details.map((detail, i) => (
                          <li key={i} className="flex items-center space-x-2 text-sm">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="scripts" className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <Card className="glass-effect">
                  <CardHeader>
                    <CardTitle className="text-2xl">Implementation Scripts</CardTitle>
                    <p className="text-white">
                      Key Python scripts used in our research implementation. Each script handles 
                      a specific aspect of the machine learning pipeline.
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4">
                      {scripts.map((script, index) => (
                        <div key={script.name} className="flex items-center justify-between p-4 border border-border rounded-lg">
                          <div className="flex items-center space-x-4">
                            <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                              <Code className="h-5 w-5 text-white" />
                            </div>
                            <div>
                              <div className="font-semibold">{script.name}</div>
                              <div className="text-sm text-white">{script.description}</div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="text-xs bg-muted px-2 py-1 rounded">{script.language}</span>
                            <Button variant="ghost" size="sm">
                              <FileText className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-effect">
                  <CardHeader>
                    <CardTitle>Usage Instructions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <code className="text-sm">
                        # Clone the repository<br/>
                        git clone https://github.com/MIT-Emerging-Talent/ET6-CDSP-group-15-repo<br/><br/>
                        # Install dependencies<br/>
                        pip install -r requirements.txt<br/><br/>
                        # Run data preprocessing<br/>
                        python data_preprocessing.py<br/><br/>
                        # Train models<br/>
                        python model_training.py<br/><br/>
                        # Evaluate results<br/>
                        python evaluation.py
                      </code>
                    </div>
                    <p className="text-sm text-white">
                      For detailed instructions and parameter configurations, please refer to the 
                      README file in the GitHub repository.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            <TabsContent value="tech" className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Card className="glass-effect">
                  <CardHeader>
                    <CardTitle className="text-2xl">Technology Stack</CardTitle>
                    <p className="text-white">
                      Technologies and libraries used in our research implementation.
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      {technologies.map((tech, index) => (
                        <div key={tech.name} className="flex items-start space-x-4 p-4 border border-border rounded-lg">
                          <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                            <Code className="h-4 w-4 text-white" />
                          </div>
                          <div>
                            <div className="font-semibold">{tech.name}</div>
                            <div className="text-sm text-white">{tech.description}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          </Tabs>
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
            <h2 className="text-4xl font-bold">
              Explore the <span className="text-gradient">Full Implementation</span>
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Dive deeper into our research by exploring the complete codebase, datasets, 
              and detailed analysis on GitHub.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="pulse-glow">
                <a 
                  href="https://github.com/MIT-Emerging-Talent/ET6-CDSP-group-15-repo" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-2 h-5 w-5" />
                  View on GitHub
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a 
                  href="/further-study" 
                >
                  DataCents Technical Paper
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Documentation

