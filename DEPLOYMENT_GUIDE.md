# DataCents Deployment Guide

## Table of Contents
1. [Current Frontend Deployment](#current-frontend-deployment)
2. [Future ML Model Integration](#future-ml-model-integration)
3. [Deployment Options Comparison](#deployment-options-comparison)
4. [Step-by-Step Deployment Instructions](#step-by-step-deployment-instructions)
5. [Troubleshooting](#troubleshooting)

---

## Current Frontend Deployment

### What You Have Now
- ✅ React frontend with Vite
- ✅ Tailwind CSS styling
- ✅ Interactive dashboard (simulated)
- ✅ Responsive design
- ✅ GitHub repository

### Current Deployment Status
Your project is currently deployed on **Vercel** at: `https://datacents2.vercel.app`

---

## Future ML Model Integration

### What You'll Need to Add
- 🔄 Python backend API (FastAPI/Flask)
- 🔄 Trained XGBoost model
- 🔄 Database for storing predictions
- 🔄 Authentication system
- 🔄 Rate limiting and security

---

## Deployment Options Comparison

| Platform | Frontend | Backend | ML Models | Cost | Difficulty | Best For |
|----------|----------|---------|-----------|------|------------|----------|
| **Vercel** | ✅ | ✅ (Serverless) | ✅ (Limited) | Free tier | Easy | Frontend + simple APIs |
| **Netlify** | ✅ | ✅ (Functions) | ✅ (Limited) | Free tier | Easy | Frontend + simple APIs |
| **Railway** | ✅ | ✅ | ✅ | $5/month | Medium | Full-stack apps |
| **Render** | ✅ | ✅ | ✅ | Free tier | Medium | Full-stack apps |
| **Heroku** | ✅ | ✅ | ✅ | $7/month | Medium | Traditional apps |
| **AWS** | ✅ | ✅ | ✅ | Pay-per-use | Hard | Enterprise scale |
| **Google Cloud** | ✅ | ✅ | ✅ | Pay-per-use | Hard | Enterprise scale |

---

## Step-by-Step Deployment Instructions

### Option 1: Vercel (Recommended for Current State)

#### Prerequisites
- GitHub account
- Vercel account (free)

#### Steps

1. **Prepare Your Repository**
   ```bash
   # Ensure your repo is up to date
   git add .
   git commit -m "Prepare for deployment"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your `p2p-lending-research` repository
   - Vercel will auto-detect it's a Vite project
   - Click "Deploy"

3. **Configure Environment Variables** (if needed)
   ```bash
   # In Vercel dashboard
   Settings → Environment Variables
   NODE_ENV=production
   ```

4. **Custom Domain** (optional)
   - In Vercel dashboard: Settings → Domains
   - Add your custom domain
   - Update DNS records

#### Vercel Configuration Files

**vercel.json** (already exists)
```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ],
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite"
}
```

### Option 2: Netlify

#### Steps

1. **Prepare for Netlify**
   ```bash
   # Create netlify.toml
   echo '[[redirects]]
   from = "/*"
   to = "/index.html"
   status = 200' > netlify.toml
   ```

2. **Deploy**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop your `dist` folder, OR
   - Connect your GitHub repository

3. **Configure Build Settings**
   - Build command: `npm run build`
   - Publish directory: `dist`

### Option 3: Railway (For Future ML Integration)

#### Prerequisites
- Railway account
- Python knowledge

#### Steps

1. **Create Backend Structure**
   ```bash
   # Create backend directory
   mkdir backend
   cd backend
   
   # Create Python environment
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   
   # Install dependencies
   pip install fastapi uvicorn pandas scikit-learn joblib
   ```

2. **Create FastAPI Backend**
   ```python
   # backend/main.py
   from fastapi import FastAPI, HTTPException
   from fastapi.middleware.cors import CORSMiddleware
   from pydantic import BaseModel
   import joblib
   import pandas as pd
   
   app = FastAPI(title="DataCents API")
   
   # Enable CORS
   app.add_middleware(
       CORSMiddleware,
       allow_origins=["*"],  # Configure for production
       allow_credentials=True,
       allow_methods=["*"],
       allow_headers=["*"],
   )
   
   # Load your model (you'll need to add this)
   # model = joblib.load('model.pkl')
   
   class RiskInput(BaseModel):
       loanAmount: float
       interestRate: float
       creditScore: int
       dtiRatio: float
       employmentStatus: str
       loanPurpose: str
       homeOwnership: str
       hasCosigner: bool
       previousDefault: bool
   
   @app.post("/api/predict-risk")
   async def predict_risk(input_data: RiskInput):
       try:
           # Convert to model features
           features = {
               'loan_amount': input_data.loanAmount,
               'interest_rate': input_data.interestRate,
               'credit_score': input_data.creditScore,
               'dti_ratio': input_data.dtiRatio,
               # Add more feature mapping
           }
           
           # For now, return simulated result
           # In production: prediction = model.predict_proba([features])[0][1]
           prediction = 0.25  # Simulated
           
           return {
               "risk_score": prediction,
               "confidence": 0.85,
               "prediction_interval": [prediction - 0.05, prediction + 0.05]
           }
       except Exception as e:
           raise HTTPException(status_code=500, detail=str(e))
   
   @app.get("/health")
   async def health_check():
       return {"status": "healthy", "service": "DataCents API"}
   ```

3. **Create Requirements File**
   ```bash
   # backend/requirements.txt
   fastapi==0.104.1
   uvicorn==0.24.0
   pandas==2.1.3
   scikit-learn==1.3.2
   joblib==1.3.2
   pydantic==2.5.0
   ```

4. **Deploy to Railway**
   - Go to [railway.app](https://railway.app)
   - Connect GitHub repository
   - Create new project
   - Add service: Python
   - Set root directory to `backend`
   - Railway will auto-detect and deploy

5. **Update Frontend API Calls**
   ```javascript
   // In your Dashboard component
   const API_BASE_URL = 'https://your-railway-app.railway.app';
   
   const calculateRiskScore = async (inputs) => {
     try {
       const response = await fetch(`${API_BASE_URL}/api/predict-risk`, {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify(inputs)
       });
       
       if (!response.ok) throw new Error('API call failed');
       
       const result = await response.json();
       return {
         score: result.risk_score,
         confidence: result.confidence,
         predictionInterval: result.prediction_interval
       };
     } catch (error) {
       console.error('API Error:', error);
       // Fallback to simulation
       return simulateRiskCalculation(inputs);
     }
   };
   ```

### Option 4: Render (Alternative to Railway)

#### Steps

1. **Create render.yaml**
   ```yaml
   # render.yaml
   services:
     - type: web
       name: datacents-api
       env: python
       buildCommand: pip install -r requirements.txt
       startCommand: uvicorn main:app --host 0.0.0.0 --port $PORT
       envVars:
         - key: PYTHON_VERSION
           value: 3.9.16
   ```

2. **Deploy**
   - Go to [render.com](https://render.com)
   - Connect GitHub repository
   - Create new Web Service
   - Select Python environment
   - Deploy

---

## Advanced Deployment: Full-Stack with ML Model

### Step 1: Prepare Your ML Model

```python
# Export your trained model
import joblib
import pandas as pd
from sklearn.preprocessing import StandardScaler

# Assuming you have a trained model
# model = your_trained_xgboost_model
# scaler = your_fitted_scaler

# Save model artifacts
joblib.dump(model, 'backend/models/datacents_model.pkl')
joblib.dump(scaler, 'backend/models/scaler.pkl')

# Save feature mapping
feature_mapping = {
    'employment_status': {'Employed': 1, 'Unemployed': 0, 'Self-employed': 2},
    'loan_purpose': {'Debt consolidation': 0, 'Home improvement': 1, 'Business': 2},
    'home_ownership': {'Rent': 0, 'Own': 1, 'Mortgage': 2}
}

import json
with open('backend/models/feature_mapping.json', 'w') as f:
    json.dump(feature_mapping, f)
```

### Step 2: Enhanced Backend API

```python
# backend/main.py (enhanced version)
from fastapi import FastAPI, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from fastapi.security import HTTPBearer
from pydantic import BaseModel, validator
import joblib
import pandas as pd
import json
import numpy as np
from typing import List, Dict, Any
import logging

# Setup logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = FastAPI(
    title="DataCents Risk Assessment API",
    description="Machine learning API for P2P lending risk assessment",
    version="1.0.0"
)

# Security
security = HTTPBearer()

# Load model artifacts
try:
    model = joblib.load('models/datacents_model.pkl')
    scaler = joblib.load('models/scaler.pkl')
    with open('models/feature_mapping.json', 'r') as f:
        feature_mapping = json.load(f)
    logger.info("Model loaded successfully")
except Exception as e:
    logger.error(f"Failed to load model: {e}")
    model = None

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://datacents2.vercel.app", "http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class RiskInput(BaseModel):
    loanAmount: float
    interestRate: float
    creditScore: int
    dtiRatio: float
    employmentStatus: str
    loanPurpose: str
    homeOwnership: str
    hasCosigner: bool
    previousDefault: bool
    
    @validator('loanAmount')
    def validate_loan_amount(cls, v):
        if v <= 0 or v > 1000000:
            raise ValueError('Loan amount must be between 0 and 1,000,000')
        return v
    
    @validator('creditScore')
    def validate_credit_score(cls, v):
        if v < 300 or v > 850:
            raise ValueError('Credit score must be between 300 and 850')
        return v

class RiskOutput(BaseModel):
    risk_score: float
    confidence: float
    prediction_interval: List[float]
    key_influencers: List[Dict[str, Any]]
    recommendations: List[str]

def preprocess_input(input_data: RiskInput) -> pd.DataFrame:
    """Convert input data to model features"""
    features = {
        'loan_amount': input_data.loanAmount,
        'interest_rate': input_data.interestRate,
        'credit_score': input_data.creditScore,
        'dti_ratio': input_data.dtiRatio,
        'employment_status': feature_mapping['employment_status'].get(input_data.employmentStatus, 0),
        'loan_purpose': feature_mapping['loan_purpose'].get(input_data.loanPurpose, 0),
        'home_ownership': feature_mapping['home_ownership'].get(input_data.homeOwnership, 0),
        'has_cosigner': int(input_data.hasCosigner),
        'previous_default': int(input_data.previousDefault)
    }
    
    return pd.DataFrame([features])

@app.post("/api/predict-risk", response_model=RiskOutput)
async def predict_risk(input_data: RiskInput):
    """Predict default risk for a loan application"""
    try:
        if model is None:
            raise HTTPException(status_code=503, detail="Model not available")
        
        # Preprocess input
        features_df = preprocess_input(input_data)
        
        # Scale features
        features_scaled = scaler.transform(features_df)
        
        # Make prediction
        risk_probability = model.predict_proba(features_scaled)[0][1]
        
        # Calculate confidence (simplified)
        confidence = 0.85 + (0.1 * (1 - abs(risk_probability - 0.5)))
        
        # Calculate prediction interval
        std_error = 0.05
        prediction_interval = [
            max(0, risk_probability - 1.96 * std_error),
            min(1, risk_probability + 1.96 * std_error)
        ]
        
        # Generate key influencers
        key_influencers = generate_key_influencers(input_data, risk_probability)
        
        # Generate recommendations
        recommendations = generate_recommendations(input_data, risk_probability)
        
        return RiskOutput(
            risk_score=float(risk_probability),
            confidence=float(confidence),
            prediction_interval=prediction_interval,
            key_influencers=key_influencers,
            recommendations=recommendations
        )
        
    except Exception as e:
        logger.error(f"Prediction error: {e}")
        raise HTTPException(status_code=500, detail=str(e))

def generate_key_influencers(input_data: RiskInput, risk_score: float) -> List[Dict[str, Any]]:
    """Generate key factors influencing the risk score"""
    influencers = []
    
    if input_data.creditScore < 650:
        influencers.append({
            "factor": "Credit Score",
            "impact": "High",
            "description": "Low credit score significantly increases default risk"
        })
    
    if input_data.dtiRatio > 0.4:
        influencers.append({
            "factor": "DTI Ratio",
            "impact": "High",
            "description": "High debt-to-income ratio indicates financial stress"
        })
    
    if input_data.previousDefault:
        influencers.append({
            "factor": "Previous Default",
            "impact": "Critical",
            "description": "Previous default history is a strong risk indicator"
        })
    
    return influencers

def generate_recommendations(input_data: RiskInput, risk_score: float) -> List[str]:
    """Generate actionable recommendations"""
    recommendations = []
    
    if risk_score > 0.7:
        recommendations.append("Consider requiring a co-signer to reduce risk")
        recommendations.append("Request additional collateral or security")
    
    if input_data.dtiRatio > 0.4:
        recommendations.append("Recommend debt consolidation to improve DTI ratio")
    
    if input_data.creditScore < 650:
        recommendations.append("Suggest credit improvement strategies")
    
    return recommendations

@app.get("/health")
async def health_check():
    """Health check endpoint"""
    return {
        "status": "healthy",
        "service": "DataCents Risk Assessment API",
        "model_loaded": model is not None,
        "version": "1.0.0"
    }

@app.get("/api/model-info")
async def get_model_info():
    """Get information about the deployed model"""
    return {
        "model_type": "XGBoost",
        "version": "1.0.0",
        "training_date": "2024-01-15",
        "features": list(feature_mapping.keys()),
        "performance": {
            "roc_auc": 0.72,
            "precision": 0.68,
            "recall": 0.71
        }
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
```

### Step 3: Database Integration (Optional)

```python
# backend/database.py
from sqlalchemy import create_engine, Column, Integer, Float, String, DateTime, Boolean
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from datetime import datetime
import os

DATABASE_URL = os.getenv("DATABASE_URL", "sqlite:///./datacents.db")
engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

class Prediction(Base):
    __tablename__ = "predictions"
    
    id = Column(Integer, primary_key=True, index=True)
    loan_amount = Column(Float)
    interest_rate = Column(Float)
    credit_score = Column(Integer)
    dti_ratio = Column(Float)
    employment_status = Column(String)
    loan_purpose = Column(String)
    home_ownership = Column(String)
    has_cosigner = Column(Boolean)
    previous_default = Column(Boolean)
    predicted_risk = Column(Float)
    confidence = Column(Float)
    created_at = Column(DateTime, default=datetime.utcnow)

Base.metadata.create_all(bind=engine)
```

---

## Environment Variables Setup

### For Vercel (Frontend)
```bash
NODE_ENV=production
VITE_API_BASE_URL=https://your-backend-url.com
```

### For Railway/Render (Backend)
```bash
DATABASE_URL=your_database_url
MODEL_PATH=models/datacents_model.pkl
SCALER_PATH=models/scaler.pkl
CORS_ORIGINS=https://datacents2.vercel.app
```

---

## Monitoring and Maintenance

### Health Checks
```bash
# Check if your API is running
curl https://your-api-url.com/health

# Expected response:
{
  "status": "healthy",
  "service": "DataCents Risk Assessment API",
  "model_loaded": true,
  "version": "1.0.0"
}
```

### Logs and Debugging
```bash
# View Railway logs
railway logs

# View Vercel logs
vercel logs

# View Render logs
# Available in Render dashboard
```

### Performance Monitoring
- Set up uptime monitoring (UptimeRobot, Pingdom)
- Monitor API response times
- Track prediction accuracy over time
- Set up alerts for model drift

---

## Security Considerations

### API Security
```python
# Rate limiting
from slowapi import Limiter, _rate_limit_exceeded_handler
from slowapi.util import get_remote_address

limiter = Limiter(key_func=get_remote_address)
app.state.limiter = limiter

@app.post("/api/predict-risk")
@limiter.limit("10/minute")
async def predict_risk(request: Request, input_data: RiskInput):
    # Your prediction logic
    pass
```

### Environment Variables
```bash
# Never commit sensitive data
# Use environment variables for:
- API keys
- Database URLs
- Model paths
- CORS origins
```

---

## Troubleshooting

### Common Issues

1. **CORS Errors**
   ```javascript
   // Frontend error: CORS policy blocked
   // Solution: Update CORS origins in backend
   allow_origins=["https://your-frontend-domain.com"]
   ```

2. **Model Loading Failures**
   ```python
   # Backend error: Model file not found
   # Solution: Ensure model files are in correct path
   # Check file permissions
   ```

3. **Build Failures**
   ```bash
   # Vercel build error
   # Solution: Check package.json scripts
   # Ensure all dependencies are installed
   ```

4. **API Timeout**
   ```python
   # Slow predictions
   # Solution: Optimize model loading
   # Use model caching
   # Consider async processing
   ```

### Debug Commands
```bash
# Test API locally
curl -X POST http://localhost:8000/api/predict-risk \
  -H "Content-Type: application/json" \
  -d '{"loanAmount": 50000, "interestRate": 0.08, ...}'

# Check build locally
npm run build

# Test production build
npm run preview
```

---

## Next Steps

1. **Start with Vercel** for current frontend
2. **Add simple API endpoints** using Vercel serverless functions
3. **Gradually migrate** to full backend when needed
4. **Monitor performance** and user feedback
5. **Iterate and improve** based on usage data

This guide covers everything from simple frontend deployment to full ML model integration. Start with what you have and gradually add complexity as needed! 