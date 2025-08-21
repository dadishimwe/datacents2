import { useState, useEffect, useCallback, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Slider } from '@/components/ui/slider'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Progress } from '@/components/ui/progress'
import { 
  TrendingUp, 
  TrendingDown, 
  AlertTriangle, 
  CheckCircle, 
  Info,
  Save,
  Target,
  BarChart3,
  Calculator,
  Lightbulb,
  Database,
  Activity,
  Shield,
  Zap,
  Eye,
  BarChart,
  PieChart,
  LineChart,
  Settings,
  Download,
  Share2,
  RefreshCw,
  Clock,
  Users,
  DollarSign,
  Percent,
  ArrowUpRight,
  ArrowDownRight,
  Minus
} from 'lucide-react'

const Dashboard = () => {
  // State for all input parameters
  const [inputs, setInputs] = useState({
    loanAmount: 15000,
    interestRate: 8.5,
    creditScore: 720,
    dtiRatio: 25,
    employmentStatus: 'employed',
    loanPurpose: 'debt_consolidation',
    loanTerm: 36,
    homeOwnership: 'mortgage',
    annualIncome: 75000,
    hasCoSigner: false,
    previousDefault: false,
    openCreditLines: 3,
    recentInquiries: 1
  })

  // State for calculated risk
  const [riskScore, setRiskScore] = useState(0)
  const [riskLevel, setRiskLevel] = useState('low')
  const [keyInfluencers, setKeyInfluencers] = useState([])
  const [recommendations, setRecommendations] = useState([])
  
  // Advanced analytics state
  const [modelConfidence, setModelConfidence] = useState(0)
  const [featureImportance, setFeatureImportance] = useState([])
  const [historicalComparison, setHistoricalComparison] = useState({})
  const [scenarioAnalysis, setScenarioAnalysis] = useState([])
  const [marketTrends, setMarketTrends] = useState({})
  const [predictionInterval, setPredictionInterval] = useState({ lower: 0, upper: 0 })
  const [modelMetrics, setModelMetrics] = useState({
    rocAuc: 0.72,
    precision: 0.68,
    recall: 0.71,
    f1Score: 0.69
  })
  const [dataQuality, setDataQuality] = useState({
    completeness: 95,
    accuracy: 92,
    consistency: 88,
    timeliness: 96
  })
  
  // Scenario management
  const [savedScenarios, setSavedScenarios] = useState([])
  const [currentScenarioName, setCurrentScenarioName] = useState('')
  const [showSaveDialog, setShowSaveDialog] = useState(false)

  // Demo mode and performance indicators
  const [isDemoMode, setIsDemoMode] = useState(false)
  const [processingTime, setProcessingTime] = useState(0.2)
  const [predictionsToday, setPredictionsToday] = useState(1247)
  const [modelUptime, setModelUptime] = useState(99.2)
  const [lastPrediction, setLastPrediction] = useState('0.3s ago')

  // Demo scenarios for presentation
  const demoScenarios = [
    {
      name: 'Low Risk Borrower',
      inputs: {
        loanAmount: 25000,
        interestRate: 6.5,
        creditScore: 780,
        dtiRatio: 18,
        employmentStatus: 'employed',
        loanPurpose: 'debt_consolidation',
        loanTerm: 36,
        homeOwnership: 'own',
        annualIncome: 85000,
        hasCoSigner: false,
        previousDefault: false,
        openCreditLines: 2,
        recentInquiries: 0
      }
    },
    {
      name: 'High Risk Borrower',
      inputs: {
        loanAmount: 75000,
        interestRate: 15.5,
        creditScore: 620,
        dtiRatio: 45,
        employmentStatus: 'self_employed',
        loanPurpose: 'business',
        loanTerm: 60,
        homeOwnership: 'rent',
        annualIncome: 45000,
        hasCoSigner: false,
        previousDefault: true,
        openCreditLines: 8,
        recentInquiries: 4
      }
    },
    {
      name: 'Moderate Risk Borrower',
      inputs: {
        loanAmount: 50000,
        interestRate: 10.5,
        creditScore: 720,
        dtiRatio: 32,
        employmentStatus: 'employed',
        loanPurpose: 'home_improvement',
        loanTerm: 48,
        homeOwnership: 'mortgage',
        annualIncome: 65000,
        hasCoSigner: true,
        previousDefault: false,
        openCreditLines: 4,
        recentInquiries: 2
      }
    }
  ]

  // Employment status options
  const employmentOptions = [
    { value: 'employed', label: 'Employed' },
    { value: 'self_employed', label: 'Self-Employed' },
    { value: 'unemployed', label: 'Unemployed' },
    { value: 'retired', label: 'Retired' }
  ]

  // Loan purpose options
  const loanPurposeOptions = [
    { value: 'debt_consolidation', label: 'Debt Consolidation' },
    { value: 'home_improvement', label: 'Home Improvement' },
    { value: 'business', label: 'Business' },
    { value: 'education', label: 'Education' },
    { value: 'medical', label: 'Medical' },
    { value: 'major_purchase', label: 'Major Purchase' }
  ]

  // Home ownership options
  const homeOwnershipOptions = [
    { value: 'rent', label: 'Rent' },
    { value: 'own', label: 'Own' },
    { value: 'mortgage', label: 'Mortgage' }
  ]

  // Enhanced risk calculation with XGBoost-inspired algorithm
  const calculateRiskScore = (inputData) => {
    let score = 50 // Base score
    let confidence = 0.85 // Base confidence
    const featureWeights = []

    // Credit Score impact (0-850 scale) - Weight: 0.25
    const creditScoreWeight = 0.25
    let creditScoreImpact = 0
    if (inputData.creditScore >= 750) creditScoreImpact = -20
    else if (inputData.creditScore >= 700) creditScoreImpact = -10
    else if (inputData.creditScore >= 650) creditScoreImpact = 5
    else if (inputData.creditScore >= 600) creditScoreImpact = 15
    else creditScoreImpact = 30
    
    score += creditScoreImpact * creditScoreWeight
    featureWeights.push({ name: 'Credit Score', weight: creditScoreWeight, impact: creditScoreImpact })

    // DTI Ratio impact - Weight: 0.20
    const dtiWeight = 0.20
    let dtiImpact = 0
    if (inputData.dtiRatio <= 20) dtiImpact = -15
    else if (inputData.dtiRatio <= 30) dtiImpact = -5
    else if (inputData.dtiRatio <= 40) dtiImpact = 10
    else if (inputData.dtiRatio <= 50) dtiImpact = 20
    else dtiImpact = 35
    
    score += dtiImpact * dtiWeight
    featureWeights.push({ name: 'DTI Ratio', weight: dtiWeight, impact: dtiImpact })

    // Interest Rate impact - Weight: 0.15
    const interestWeight = 0.15
    let interestImpact = 0
    if (inputData.interestRate <= 6) interestImpact = -10
    else if (inputData.interestRate <= 10) interestImpact = 5
    else if (inputData.interestRate <= 15) interestImpact = 15
    else interestImpact = 25
    
    score += interestImpact * interestWeight
    featureWeights.push({ name: 'Interest Rate', weight: interestWeight, impact: interestImpact })

    // Loan Amount impact - Weight: 0.12
    const amountWeight = 0.12
    let amountImpact = 0
    if (inputData.loanAmount <= 10000) amountImpact = -5
    else if (inputData.loanAmount <= 25000) amountImpact = 0
    else if (inputData.loanAmount <= 40000) amountImpact = 10
    else amountImpact = 20
    
    score += amountImpact * amountWeight
    featureWeights.push({ name: 'Loan Amount', weight: amountWeight, impact: amountImpact })

    // Employment Status impact - Weight: 0.10
    const employmentWeight = 0.10
    let employmentImpact = 0
    if (inputData.employmentStatus === 'employed') employmentImpact = -10
    else if (inputData.employmentStatus === 'self_employed') employmentImpact = 5
    else if (inputData.employmentStatus === 'unemployed') employmentImpact = 20
    else employmentImpact = 10
    
    score += employmentImpact * employmentWeight
    featureWeights.push({ name: 'Employment', weight: employmentWeight, impact: employmentImpact })

    // Loan Purpose impact - Weight: 0.08
    const purposeWeight = 0.08
    let purposeImpact = 0
    if (inputData.loanPurpose === 'debt_consolidation') purposeImpact = 5
    else if (inputData.loanPurpose === 'home_improvement') purposeImpact = -5
    else if (inputData.loanPurpose === 'business') purposeImpact = 15
    else if (inputData.loanPurpose === 'education') purposeImpact = -10
    
    score += purposeImpact * purposeWeight
    featureWeights.push({ name: 'Loan Purpose', weight: purposeWeight, impact: purposeImpact })

    // Home Ownership impact - Weight: 0.05
    const homeWeight = 0.05
    let homeImpact = 0
    if (inputData.homeOwnership === 'own') homeImpact = -10
    else if (inputData.homeOwnership === 'mortgage') homeImpact = -5
    else homeImpact = 5
    
    score += homeImpact * homeWeight
    featureWeights.push({ name: 'Home Ownership', weight: homeWeight, impact: homeImpact })

    // Binary factors - Weight: 0.05
    const binaryWeight = 0.05
    let binaryImpact = 0
    if (inputData.hasCoSigner) binaryImpact -= 15
    if (inputData.previousDefault) binaryImpact += 25
    if (inputData.openCreditLines > 5) binaryImpact += 10
    if (inputData.recentInquiries > 3) binaryImpact += 10
    
    score += binaryImpact * binaryWeight
    featureWeights.push({ name: 'Binary Factors', weight: binaryWeight, impact: binaryImpact })

    // Calculate confidence based on data completeness
    const missingData = Object.values(inputData).filter(v => v === null || v === undefined || v === '').length
    confidence = Math.max(0.6, confidence - (missingData * 0.05))

    // Calculate prediction interval
    const margin = 5 + (100 - confidence * 100) * 0.3
    const predictionInterval = {
      lower: Math.max(0, score - margin),
      upper: Math.min(100, score + margin)
    }

    // Ensure score is between 0 and 100
    const finalScore = Math.max(0, Math.min(100, score))

    return {
      score: finalScore,
      confidence,
      featureWeights,
      predictionInterval
    }
  }

  // Calculate key influencers
  const calculateKeyInfluencers = (inputData, score) => {
    const influencers = []

    // Credit Score
    if (inputData.creditScore < 650) {
      influencers.push({
        factor: 'Credit Score',
        impact: 'negative',
        description: 'Your credit score is below the recommended threshold, significantly increasing default risk.',
        value: inputData.creditScore
      })
    } else if (inputData.creditScore >= 750) {
      influencers.push({
        factor: 'Credit Score',
        impact: 'positive',
        description: 'Your excellent credit score significantly reduces default risk.',
        value: inputData.creditScore
      })
    }

    // DTI Ratio
    if (inputData.dtiRatio > 40) {
      influencers.push({
        factor: 'Debt-to-Income Ratio',
        impact: 'negative',
        description: 'Your high DTI ratio suggests potential repayment challenges.',
        value: `${inputData.dtiRatio}%`
      })
    } else if (inputData.dtiRatio <= 20) {
      influencers.push({
        factor: 'Debt-to-Income Ratio',
        impact: 'positive',
        description: 'Your low DTI ratio indicates strong repayment capacity.',
        value: `${inputData.dtiRatio}%`
      })
    }

    // Interest Rate
    if (inputData.interestRate > 12) {
      influencers.push({
        factor: 'Interest Rate',
        impact: 'negative',
        description: 'High interest rate increases monthly payment burden.',
        value: `${inputData.interestRate}%`
      })
    }

    // Employment Status
    if (inputData.employmentStatus === 'unemployed') {
      influencers.push({
        factor: 'Employment Status',
        impact: 'negative',
        description: 'Unemployment status significantly increases default risk.',
        value: 'Unemployed'
      })
    }

    // Previous Default
    if (inputData.previousDefault) {
      influencers.push({
        factor: 'Previous Default',
        impact: 'negative',
        description: 'Previous default history is a strong risk indicator.',
        value: 'Yes'
      })
    }

    return influencers.slice(0, 5) // Return top 5 influencers
  }

  // Generate recommendations
  const generateRecommendations = (inputData, score) => {
    const recs = []

    if (score > 60) {
      recs.push({
        type: 'high_risk',
        title: 'High Risk Profile',
        description: 'Consider reducing loan amount or improving credit score before applying.',
        icon: AlertTriangle
      })
    } else if (score > 30) {
      recs.push({
        type: 'moderate_risk',
        title: 'Moderate Risk Profile',
        description: 'Your profile shows moderate risk. Consider these improvements for better terms.',
        icon: Info
      })
    } else {
      recs.push({
        type: 'low_risk',
        title: 'Low Risk Profile',
        description: 'Excellent profile! You may qualify for better interest rates.',
        icon: CheckCircle
      })
    }

    // Specific recommendations based on inputs
    if (inputData.creditScore < 650) {
      recs.push({
        type: 'improvement',
        title: 'Improve Credit Score',
        description: 'Consider paying down existing debt and avoiding new credit applications.',
        icon: TrendingUp
      })
    }

    if (inputData.dtiRatio > 40) {
      recs.push({
        type: 'improvement',
        title: 'Reduce Debt Burden',
        description: 'Consider paying down existing debt before taking on new loans.',
        icon: TrendingDown
      })
    }

    if (inputData.interestRate > 12) {
      recs.push({
        type: 'improvement',
        title: 'Seek Lower Interest Rate',
        description: 'Improving your credit score could help secure a lower interest rate.',
        icon: Target
      })
    }

    return recs
  }

  // Generate scenario analysis
  const generateScenarioAnalysis = (inputData, currentScore) => {
    const scenarios = [
      {
        name: 'Optimistic Scenario',
        description: 'Best-case improvements (credit score +50, DTI -10%, rate -2%)',
        changes: {
          creditScore: Math.min(850, inputData.creditScore + 50),
          dtiRatio: Math.max(10, inputData.dtiRatio - 10),
          interestRate: Math.max(3, inputData.interestRate - 2),
          hasCoSigner: true
        },
        icon: TrendingUp,
        probability: '15%'
      },
      {
        name: 'Conservative Scenario',
        description: 'Moderate improvements (credit score +25, DTI -5%, rate -1%)',
        changes: {
          creditScore: Math.min(850, inputData.creditScore + 25),
          dtiRatio: Math.max(15, inputData.dtiRatio - 5),
          interestRate: Math.max(3, inputData.interestRate - 1)
        },
        icon: TrendingDown,
        probability: '45%'
      },
      {
        name: 'Worst Case Scenario',
        description: 'Potential deterioration (credit score -30, DTI +15%, rate +3%)',
        changes: {
          creditScore: Math.max(300, inputData.creditScore - 30),
          dtiRatio: Math.min(100, inputData.dtiRatio + 15),
          interestRate: Math.min(25, inputData.interestRate + 3),
          previousDefault: true
        },
        icon: AlertTriangle,
        probability: '25%'
      }
    ]

    const scenarioResults = scenarios.map(scenario => {
      const scenarioInputs = { ...inputData, ...scenario.changes }
      const scenarioResult = calculateRiskScore(scenarioInputs)
      return {
        ...scenario,
        riskScore: scenarioResult.score,
        riskLevel: scenarioResult.score <= 20 ? 'very_low' : 
                   scenarioResult.score <= 40 ? 'low' : 
                   scenarioResult.score <= 60 ? 'moderate' : 
                   scenarioResult.score <= 80 ? 'high' : 'very_high',
        change: scenarioResult.score - currentScore
      }
    })

    setScenarioAnalysis(scenarioResults)
  }

  // Update historical comparison
  const updateHistoricalComparison = (currentScore) => {
    const historicalData = {
      averageRisk: 45.2,
      medianRisk: 42.8,
      percentile: 0,
      trend: 'stable',
      marketPosition: 'average'
    }

    // Calculate percentile
    if (currentScore <= 20) historicalData.percentile = 15
    else if (currentScore <= 40) historicalData.percentile = 35
    else if (currentScore <= 60) historicalData.percentile = 65
    else if (currentScore <= 80) historicalData.percentile = 85
    else historicalData.percentile = 95

    // Determine market position
    if (currentScore < historicalData.averageRisk - 10) historicalData.marketPosition = 'excellent'
    else if (currentScore < historicalData.averageRisk) historicalData.marketPosition = 'good'
    else if (currentScore < historicalData.averageRisk + 10) historicalData.marketPosition = 'average'
    else if (currentScore < historicalData.averageRisk + 20) historicalData.marketPosition = 'below_average'
    else historicalData.marketPosition = 'poor'

    setHistoricalComparison(historicalData)
  }

  // Update market trends
  const updateMarketTrends = () => {
    const trends = {
      overallTrend: 'decreasing',
      trendStrength: 'moderate',
      marketVolatility: 'low',
      sectorPerformance: {
        debt_consolidation: 'stable',
        home_improvement: 'improving',
        business: 'declining',
        education: 'stable'
      },
      regionalFactors: {
        unemployment: 'decreasing',
        interestRates: 'increasing',
        housingMarket: 'stable'
      }
    }
    setMarketTrends(trends)
  }

  // Scenario management functions
  const saveScenario = () => {
    if (!currentScenarioName.trim()) return
    
    const newScenario = {
      id: Date.now(),
      name: currentScenarioName,
      inputs: { ...inputs },
      riskScore,
      riskLevel,
      timestamp: new Date().toISOString()
    }
    
    setSavedScenarios(prev => [...prev, newScenario])
    setCurrentScenarioName('')
    setShowSaveDialog(false)
  }

  const loadScenario = (scenario) => {
    setInputs(scenario.inputs)
  }

  const deleteScenario = (scenarioId) => {
    setSavedScenarios(prev => prev.filter(s => s.id !== scenarioId))
  }

  const exportScenario = (scenario) => {
    const dataStr = JSON.stringify(scenario, null, 2)
    const dataBlob = new Blob([dataStr], { type: 'application/json' })
    const url = URL.createObjectURL(dataBlob)
    const link = document.createElement('a')
    link.href = url
    link.download = `${scenario.name.replace(/\s+/g, '_')}_scenario.json`
    link.click()
    URL.revokeObjectURL(url)
  }

  // Update calculations when inputs change
  useEffect(() => {
    const result = calculateRiskScore(inputs)
    setRiskScore(result.score)
    setModelConfidence(result.confidence)
    setPredictionInterval(result.predictionInterval)
    setFeatureImportance(result.featureWeights.sort((a, b) => Math.abs(b.impact * b.weight) - Math.abs(a.impact * a.weight)))
    
    // Determine risk level
    if (result.score <= 20) setRiskLevel('very_low')
    else if (result.score <= 40) setRiskLevel('low')
    else if (result.score <= 60) setRiskLevel('moderate')
    else if (result.score <= 80) setRiskLevel('high')
    else setRiskLevel('very_high')

    // Update influencers and recommendations
    setKeyInfluencers(calculateKeyInfluencers(inputs, result.score))
    setRecommendations(generateRecommendations(inputs, result.score))
    
    // Generate scenario analysis
    generateScenarioAnalysis(inputs, result.score)
    
    // Update historical comparison
    updateHistoricalComparison(result.score)
    
    // Update market trends
    updateMarketTrends()
  }, [inputs])

  // Input validation
  const validateInput = (field, value) => {
    const errors = {}
    
    switch (field) {
      case 'loanAmount':
        if (value < 1000 || value > 50000) {
          errors.loanAmount = 'Loan amount must be between $1,000 and $50,000'
        }
        break
      case 'interestRate':
        if (value < 3 || value > 25) {
          errors.interestRate = 'Interest rate must be between 3% and 25%'
        }
        break
      case 'creditScore':
        if (value < 300 || value > 850) {
          errors.creditScore = 'Credit score must be between 300 and 850'
        }
        break
      case 'dtiRatio':
        if (value < 0 || value > 100) {
          errors.dtiRatio = 'DTI ratio must be between 0% and 100%'
        }
        break
    }
    
    return errors
  }

  // Debounced input handler for performance
  const debouncedInputChange = useCallback(
    (field, value) => {
      const errors = validateInput(field, value)
      
      if (Object.keys(errors).length === 0) {
        setInputs(prev => ({ ...prev, [field]: value }))
      }
    },
    []
  )

  // Handle input changes with validation
  const handleInputChange = (field, value) => {
    debouncedInputChange(field, value)
  }

  // Demo mode functions
  const loadDemoScenario = (scenarioIndex) => {
    const scenario = demoScenarios[scenarioIndex]
    setInputs(scenario.inputs)
    setCurrentScenarioName(scenario.name)
    
    // Simulate processing time
    setProcessingTime(0.2 + Math.random() * 0.3)
    setLastPrediction('0.3s ago')
    setPredictionsToday(prev => prev + 1)
  }

  const toggleDemoMode = () => {
    setIsDemoMode(!isDemoMode)
    if (!isDemoMode) {
      // Load first demo scenario when entering demo mode
      loadDemoScenario(0)
    }
  }

  // Update performance indicators periodically
  useEffect(() => {
    if (isDemoMode) {
      const interval = setInterval(() => {
        setPredictionsToday(prev => prev + Math.floor(Math.random() * 3))
        setLastPrediction(`${(Math.random() * 0.5).toFixed(1)}s ago`)
        setProcessingTime(0.2 + Math.random() * 0.3)
      }, 5000)
      
      return () => clearInterval(interval)
    }
  }, [isDemoMode])

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (e) => {
      // Ctrl/Cmd + S to save scenario
      if ((e.ctrlKey || e.metaKey) && e.key === 's') {
        e.preventDefault()
        if (currentScenarioName.trim()) {
          saveScenario()
        } else {
          setShowSaveDialog(true)
        }
      }
      
      // Ctrl/Cmd + Z to reset inputs
      if ((e.ctrlKey || e.metaKey) && e.key === 'z') {
        e.preventDefault()
        setInputs({
          loanAmount: 15000,
          interestRate: 8.5,
          creditScore: 720,
          dtiRatio: 25,
          employmentStatus: 'employed',
          loanPurpose: 'debt_consolidation',
          loanTerm: 36,
          homeOwnership: 'mortgage',
          annualIncome: 75000,
          hasCoSigner: false,
          previousDefault: false,
          openCreditLines: 3,
          recentInquiries: 1
        })
      }
      
      // Escape to close dialogs
      if (e.key === 'Escape') {
        setShowSaveDialog(false)
        setCurrentScenarioName('')
      }
    }

    document.addEventListener('keydown', handleKeyPress)
    return () => document.removeEventListener('keydown', handleKeyPress)
  }, [currentScenarioName])

  // Get risk level color
  const getRiskLevelColor = (level) => {
    switch (level) {
      case 'very_low': return 'text-green-500'
      case 'low': return 'text-green-400'
      case 'moderate': return 'text-yellow-500'
      case 'high': return 'text-orange-500'
      case 'very_high': return 'text-red-500'
      default: return 'text-gray-500'
    }
  }

  // Get risk level label
  const getRiskLevelLabel = (level) => {
    switch (level) {
      case 'very_low': return 'Very Low Risk'
      case 'low': return 'Low Risk'
      case 'moderate': return 'Moderate Risk'
      case 'high': return 'High Risk'
      case 'very_high': return 'Very High Risk'
      default: return 'Unknown Risk'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="heading-hero text-gradient mb-4">
            DataCents Default Risk Dashboard
          </h1>
          <p className="subtitle-lg text-white max-w-3xl mx-auto">
            Interactive demo dashboard showcasing our risk assessment capabilities. This is a mock interface demonstrating 
            how our XGBoost machine learning model would analyze loan default risk using 2.2 million loan records.
            All calculations are simulated for demonstration purposes.
          </p>
          <div className="mt-4 p-3 rounded-lg bg-yellow-500/20 border border-yellow-500/30">
            <p className="text-sm text-yellow-200 text-center">
              <Info className="inline h-4 w-4 mr-2" />
              Demo Version - Simulated calculations for demonstration purposes only
            </p>
          </div>

          {/* Demo Mode Toggle and Performance Indicators */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              onClick={toggleDemoMode}
              variant={isDemoMode ? "default" : "outline"}
              className={`${isDemoMode ? 'bg-blue-600 hover:bg-blue-700' : ''}`}
            >
              {isDemoMode ? 'Exit Demo Mode' : 'Enter Demo Mode'}
            </Button>
            
            {isDemoMode && (
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Activity className="h-4 w-4 text-green-400" />
                  <span className="text-green-400">Processing: {processingTime.toFixed(1)}s</span>
                </div>
                <div className="flex items-center gap-2">
                  <Database className="h-4 w-4 text-blue-400" />
                  <span className="text-blue-400">Today: {predictionsToday.toLocaleString()}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-purple-400" />
                  <span className="text-purple-400">Uptime: {modelUptime}%</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-orange-400" />
                  <span className="text-orange-400">Last: {lastPrediction}</span>
                </div>
              </div>
            )}
          </div>

          {/* Demo Scenario Buttons */}
          {isDemoMode && (
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {demoScenarios.map((scenario, index) => (
                <Button
                  key={index}
                  onClick={() => loadDemoScenario(index)}
                  variant="outline"
                  size="sm"
                  className="text-xs"
                >
                  {scenario.name}
                </Button>
              ))}
            </div>
          )}
        </motion.div>

        {/* Model Performance Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="glass-effect border-border">
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <BarChart className="h-4 w-4 text-blue-400" />
                  <span className="text-sm font-medium text-white">ROC AUC</span>
                </div>
                <div className="text-2xl font-bold text-blue-400">{modelMetrics.rocAuc}</div>
                <div className="text-xs text-muted-foreground">Model Accuracy</div>
              </CardContent>
            </Card>
            <Card className="glass-effect border-border">
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="h-4 w-4 text-green-400" />
                  <span className="text-sm font-medium text-white">Precision</span>
                </div>
                <div className="text-2xl font-bold text-green-400">{modelMetrics.precision}</div>
                <div className="text-xs text-muted-foreground">Risk Detection</div>
              </CardContent>
            </Card>
            <Card className="glass-effect border-border">
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Activity className="h-4 w-4 text-yellow-400" />
                  <span className="text-sm font-medium text-white">Recall</span>
                </div>
                <div className="text-2xl font-bold text-yellow-400">{modelMetrics.recall}</div>
                <div className="text-xs text-muted-foreground">Coverage Rate</div>
              </CardContent>
            </Card>
            <Card className="glass-effect border-border">
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="h-4 w-4 text-purple-400" />
                  <span className="text-sm font-medium text-white">F1 Score</span>
                </div>
                <div className="text-2xl font-bold text-purple-400">{modelMetrics.f1Score}</div>
                <div className="text-xs text-muted-foreground">Balanced Metric</div>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        <Tabs defaultValue="risk-assessment" className="w-full">
          <TabsList className="grid w-full grid-cols-4 glass-effect">
            <TabsTrigger value="risk-assessment" className="text-white">Risk Assessment</TabsTrigger>
            <TabsTrigger value="advanced-analytics" className="text-white">Advanced Analytics</TabsTrigger>
            <TabsTrigger value="scenario-modeling" className="text-white">Scenario Modeling</TabsTrigger>
            <TabsTrigger value="market-insights" className="text-white">Market Insights</TabsTrigger>
          </TabsList>

          <TabsContent value="risk-assessment" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Input Panel */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="lg:col-span-1"
              >
                <Card className="glass-effect border-border">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calculator className="h-5 w-5" />
                      Input Parameters
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Enhanced input controls with more parameters */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white">Loan Amount ($)</label>
                      <Slider
                        value={[inputs.loanAmount]}
                        onValueChange={(value) => handleInputChange('loanAmount', value[0])}
                        max={50000}
                        min={1000}
                        step={1000}
                        className="w-full"
                      />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>$1,000</span>
                        <span className="font-medium text-white">${inputs.loanAmount.toLocaleString()}</span>
                        <span>$50,000</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white">Interest Rate (%)</label>
                      <Slider
                        value={[inputs.interestRate]}
                        onValueChange={(value) => handleInputChange('interestRate', value[0])}
                        max={25}
                        min={3}
                        step={0.1}
                        className="w-full"
                      />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>3%</span>
                        <span className="font-medium text-white">{inputs.interestRate}%</span>
                        <span>25%</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white">Credit Score</label>
                      <Slider
                        value={[inputs.creditScore]}
                        onValueChange={(value) => handleInputChange('creditScore', value[0])}
                        max={850}
                        min={300}
                        step={10}
                        className="w-full"
                      />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>300</span>
                        <span className="font-medium text-white">{inputs.creditScore}</span>
                        <span>850</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white">Debt-to-Income Ratio (%)</label>
                      <Slider
                        value={[inputs.dtiRatio]}
                        onValueChange={(value) => handleInputChange('dtiRatio', value[0])}
                        max={100}
                        min={0}
                        step={1}
                        className="w-full"
                      />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>0%</span>
                        <span className="font-medium text-white">{inputs.dtiRatio}%</span>
                        <span>100%</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white">Employment Status</label>
                      <select
                        value={inputs.employmentStatus}
                        onChange={(e) => handleInputChange('employmentStatus', e.target.value)}
                        className="w-full p-2 rounded-md bg-slate-800 border border-border text-white"
                      >
                        {employmentOptions.map(option => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white">Loan Purpose</label>
                      <select
                        value={inputs.loanPurpose}
                        onChange={(e) => handleInputChange('loanPurpose', e.target.value)}
                        className="w-full p-2 rounded-md bg-slate-800 border border-border text-white"
                      >
                        {loanPurposeOptions.map(option => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white">Home Ownership</label>
                      <select
                        value={inputs.homeOwnership}
                        onChange={(e) => handleInputChange('homeOwnership', e.target.value)}
                        className="w-full p-2 rounded-md bg-slate-800 border border-border text-white"
                      >
                        {homeOwnershipOptions.map(option => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <label className="text-sm font-medium text-white">Has Co-Signer</label>
                        <input
                          type="checkbox"
                          checked={inputs.hasCoSigner}
                          onChange={(e) => handleInputChange('hasCoSigner', e.target.checked)}
                          className="w-4 h-4"
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <label className="text-sm font-medium text-white">Previous Default</label>
                        <input
                          type="checkbox"
                          checked={inputs.previousDefault}
                          onChange={(e) => handleInputChange('previousDefault', e.target.checked)}
                          className="w-4 h-4"
                        />
                      </div>
                                         </div>
                   </CardContent>
                 </Card>
               
                 {/* Save/Load Scenarios */}
                 <Card className="glass-effect border-border mt-4">
                   <CardHeader>
                     <CardTitle className="flex items-center gap-2">
                       <Save className="h-5 w-5" />
                       Scenario Management
                     </CardTitle>
                   </CardHeader>
                   <CardContent className="space-y-4">
                     {/* Save Current Scenario */}
                     <div className="flex gap-2">
                       <input
                         type="text"
                         placeholder="Scenario name..."
                         value={currentScenarioName}
                         onChange={(e) => setCurrentScenarioName(e.target.value)}
                         className="flex-1 p-2 rounded-md bg-slate-800 border border-border text-white text-sm"
                       />
                       <Button 
                         onClick={saveScenario}
                         disabled={!currentScenarioName.trim()}
                         size="sm"
                         className="px-4"
                       >
                         Save
                       </Button>
                     </div>
                     
                     {/* Saved Scenarios */}
                     {savedScenarios.length > 0 && (
                       <div className="space-y-2">
                         <div className="text-sm font-medium text-white">Saved Scenarios:</div>
                         {savedScenarios.map((scenario) => (
                           <div key={scenario.id} className="p-2 rounded-lg bg-slate-800/50 border border-border">
                             <div className="flex items-center justify-between mb-1">
                               <span className="text-sm font-medium text-white">{scenario.name}</span>
                               <div className="flex gap-1">
                                 <Button
                                   onClick={() => loadScenario(scenario)}
                                   size="sm"
                                   variant="outline"
                                   className="h-6 px-2 text-xs"
                                 >
                                   Load
                                 </Button>
                                 <Button
                                   onClick={() => exportScenario(scenario)}
                                   size="sm"
                                   variant="outline"
                                   className="h-6 px-2 text-xs"
                                 >
                                   Export
                                 </Button>
                                 <Button
                                   onClick={() => deleteScenario(scenario.id)}
                                   size="sm"
                                   variant="outline"
                                   className="h-6 px-2 text-xs text-red-400 hover:text-red-300"
                                 >
                                   Delete
                                 </Button>
                               </div>
                             </div>
                             <div className="text-xs text-muted-foreground">
                               Risk: {scenario.riskScore.toFixed(1)}% | {new Date(scenario.timestamp).toLocaleDateString()}
                             </div>
                           </div>
                         ))}
                       </div>
                     )}
                   </CardContent>
                 </Card>
               </motion.div>

               {/* Risk Output Display */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="lg:col-span-1"
              >
                <Card className="glass-effect border-border h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BarChart3 className="h-5 w-5" />
                      Risk Assessment
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Enhanced Risk Gauge */}
                    <div className="text-center">
                      <div className="relative w-48 h-48 mx-auto mb-4">
                        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                          <circle
                            cx="50"
                            cy="50"
                            r="40"
                            fill="none"
                            stroke="rgba(255,255,255,0.1)"
                            strokeWidth="8"
                          />
                          <circle
                            cx="50"
                            cy="50"
                            r="40"
                            fill="none"
                            stroke={riskLevel === 'very_low' || riskLevel === 'low' ? '#10b981' : 
                                   riskLevel === 'moderate' ? '#f59e0b' : '#ef4444'}
                            strokeWidth="8"
                            strokeDasharray={`${(riskScore / 100) * 251.2} 251.2`}
                            strokeLinecap="round"
                            className="transition-all duration-500"
                          />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                          <motion.div 
                            key={riskScore}
                            initial={{ scale: 1.1, opacity: 0.8 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.3 }}
                            className={`text-3xl font-bold ${getRiskLevelColor(riskLevel)}`}
                          >
                            {riskScore.toFixed(1)}%
                          </motion.div>
                          <div className="text-sm text-muted-foreground">
                            Default Risk
                          </div>
                        </div>
                      </div>
                      
                      <Badge className={`text-lg px-4 py-2 ${getRiskLevelColor(riskLevel)} bg-opacity-20`}>
                        {getRiskLevelLabel(riskLevel)}
                      </Badge>
                    </div>

                    {/* Model Confidence */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-white">Model Confidence</span>
                        <span className="text-accent">{(modelConfidence * 100).toFixed(1)}%</span>
                      </div>
                      <Progress value={modelConfidence * 100} className="h-2" />
                    </div>

                    {/* Prediction Interval */}
                    <div className="p-3 rounded-lg bg-slate-800/50 border border-border">
                      <div className="text-sm text-white mb-2">Prediction Interval (95%)</div>
                      <div className="text-xs text-muted-foreground">
                        {predictionInterval.lower.toFixed(1)}% - {predictionInterval.upper.toFixed(1)}%
                      </div>
                    </div>

                    {/* Risk Description */}
                    <div className="text-center">
                      <p className="text-white text-sm">
                        Based on your input parameters, there is a{' '}
                        <span className="font-semibold text-accent">{riskScore.toFixed(1)}%</span>{' '}
                        probability of loan default.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Key Influencers Panel */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="lg:col-span-1"
              >
                <Card className="glass-effect border-border h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Lightbulb className="h-5 w-5" />
                      Key Influencers
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {keyInfluencers.length > 0 ? (
                      keyInfluencers.map((influencer, index) => (
                        <div key={index} className="p-3 rounded-lg bg-slate-800/50 border border-border">
                          <div className="flex items-start gap-3">
                            {influencer.impact === 'positive' ? (
                              <TrendingDown className="h-5 w-5 text-green-400 mt-0.5" />
                            ) : (
                              <TrendingUp className="h-5 w-5 text-red-400 mt-0.5" />
                            )}
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="font-medium text-white">{influencer.factor}</span>
                                <Badge variant="outline" className="text-xs">
                                  {influencer.value}
                                </Badge>
                              </div>
                              <p className="text-sm text-muted-foreground">
                                {influencer.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p className="text-muted-foreground text-sm text-center py-4">
                        No significant risk factors identified.
                      </p>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </TabsContent>

          <TabsContent value="advanced-analytics" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Feature Importance */}
              <Card className="glass-effect border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <PieChart className="h-5 w-5" />
                    Feature Importance Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {featureImportance.slice(0, 8).map((feature, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-white">{feature.name}</span>
                        <span className={`font-medium ${feature.impact > 0 ? 'text-red-400' : 'text-green-400'}`}>
                          {feature.impact > 0 ? '+' : ''}{feature.impact.toFixed(1)}
                        </span>
                      </div>
                      <Progress 
                        value={Math.abs(feature.impact * feature.weight * 100)} 
                        className="h-2"
                      />
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Historical Comparison */}
              <Card className="glass-effect border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <LineChart className="h-5 w-5" />
                    Historical Comparison
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 rounded-lg bg-slate-800/50">
                      <div className="text-2xl font-bold text-blue-400">{historicalComparison.averageRisk?.toFixed(1)}%</div>
                      <div className="text-xs text-muted-foreground">Market Average</div>
                    </div>
                    <div className="text-center p-3 rounded-lg bg-slate-800/50">
                      <div className="text-2xl font-bold text-green-400">{historicalComparison.percentile}%</div>
                      <div className="text-xs text-muted-foreground">Percentile Rank</div>
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-800/50">
                    <div className="text-sm text-white mb-2">Market Position</div>
                    <Badge className={`${
                      historicalComparison.marketPosition === 'excellent' ? 'bg-green-500' :
                      historicalComparison.marketPosition === 'good' ? 'bg-blue-500' :
                      historicalComparison.marketPosition === 'average' ? 'bg-yellow-500' :
                      historicalComparison.marketPosition === 'below_average' ? 'bg-orange-500' :
                      'bg-red-500'
                    }`}>
                      {historicalComparison.marketPosition?.replace('_', ' ').toUpperCase()}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="scenario-modeling" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {scenarioAnalysis.map((scenario, index) => (
                <Card key={index} className="glass-effect border-border">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <scenario.icon className="h-5 w-5" />
                      {scenario.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">{scenario.description}</p>
                    <div className="text-center">
                      <div className={`text-3xl font-bold ${getRiskLevelColor(scenario.riskLevel)}`}>
                        {scenario.riskScore.toFixed(1)}%
                      </div>
                      <div className="text-sm text-muted-foreground">Risk Score</div>
                    </div>
                                         <div className="flex items-center justify-between text-sm">
                       <div className="flex items-center gap-2">
                         {scenario.change > 0 ? (
                           <ArrowUpRight className="h-4 w-4 text-red-400" />
                         ) : scenario.change < 0 ? (
                           <ArrowDownRight className="h-4 w-4 text-green-400" />
                         ) : (
                           <Minus className="h-4 w-4 text-gray-400" />
                         )}
                         <span className={scenario.change > 0 ? 'text-red-400' : scenario.change < 0 ? 'text-green-400' : 'text-gray-400'}>
                           {scenario.change > 0 ? '+' : ''}{scenario.change.toFixed(1)}% change
                         </span>
                       </div>
                       <Badge variant="outline" className="text-xs">
                         {scenario.probability} probability
                       </Badge>
                     </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="market-insights" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Market Trends */}
              <Card className="glass-effect border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    Market Trends
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 rounded-lg bg-slate-800/50">
                      <div className="text-sm text-white mb-1">Overall Trend</div>
                      <Badge className="bg-green-500">{marketTrends.overallTrend}</Badge>
                    </div>
                    <div className="p-3 rounded-lg bg-slate-800/50">
                      <div className="text-sm text-white mb-1">Volatility</div>
                      <Badge className="bg-blue-500">{marketTrends.marketVolatility}</Badge>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm text-white">Sector Performance</div>
                    {Object.entries(marketTrends.sectorPerformance || {}).map(([sector, performance]) => (
                      <div key={sector} className="flex justify-between text-sm">
                        <span className="text-muted-foreground">{sector.replace('_', ' ')}</span>
                        <Badge variant="outline" className="text-xs">{performance}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Data Quality Metrics */}
              <Card className="glass-effect border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Database className="h-5 w-5" />
                    Data Quality Metrics
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {Object.entries(dataQuality).map(([metric, value]) => (
                    <div key={metric} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-white capitalize">{metric}</span>
                        <span className="text-accent">{value}%</span>
                      </div>
                      <Progress value={value} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Enhanced Recommendations Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12"
        >
          <Card className="glass-effect border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5" />
                AI-Powered Recommendations & Insights
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {recommendations.map((rec, index) => (
                  <div key={index} className="p-4 rounded-lg bg-slate-800/50 border border-border">
                    <div className="flex items-start gap-3">
                      <rec.icon className={`h-5 w-5 mt-0.5 ${
                        rec.type === 'low_risk' ? 'text-green-400' :
                        rec.type === 'high_risk' ? 'text-red-400' :
                        rec.type === 'moderate_risk' ? 'text-yellow-400' :
                        'text-blue-400'
                      }`} />
                      <div>
                        <h4 className="font-medium text-white mb-1">{rec.title}</h4>
                        <p className="text-sm text-muted-foreground">{rec.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

                 {/* Keyboard Shortcuts Help */}
         <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 0.9 }}
           className="mt-6"
         >
           <Card className="glass-effect border-border">
             <CardHeader>
               <CardTitle className="flex items-center gap-2 text-sm">
                 <Settings className="h-4 w-4" />
                 Keyboard Shortcuts
               </CardTitle>
             </CardHeader>
             <CardContent>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                 <div className="flex items-center gap-2">
                   <kbd className="px-2 py-1 bg-slate-700 rounded text-white">Ctrl/Cmd + S</kbd>
                   <span className="text-muted-foreground">Save current scenario</span>
                 </div>
                 <div className="flex items-center gap-2">
                   <kbd className="px-2 py-1 bg-slate-700 rounded text-white">Ctrl/Cmd + Z</kbd>
                   <span className="text-muted-foreground">Reset to default values</span>
                 </div>
                 <div className="flex items-center gap-2">
                   <kbd className="px-2 py-1 bg-slate-700 rounded text-white">Esc</kbd>
                   <span className="text-muted-foreground">Close dialogs</span>
                 </div>
               </div>
             </CardContent>
           </Card>
         </motion.div>

         {/* Enhanced Disclaimer */}
         <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 1 }}
           className="mt-8 text-center"
         >
           <p className="text-xs text-muted-foreground max-w-3xl mx-auto">
             This is a demonstration dashboard showcasing our risk assessment capabilities. All calculations are simulated 
             and based on realistic algorithms for demonstration purposes only. In a production environment, this would 
             integrate with actual XGBoost models trained on real loan data. Model performance metrics shown are illustrative. 
             For educational and research purposes only. Not intended for actual financial decision-making.
           </p>
         </motion.div>
      </div>
    </div>
  )
}

export default Dashboard 