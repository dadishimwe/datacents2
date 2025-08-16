# DataCents: P2P Lending Research Platform

A comprehensive research platform showcasing machine learning applications in peer-to-peer lending risk assessment. Our team analyzed over 2.2 million loan records to develop the DataCents Risk Score.

## 🌟 Features

- **Interactive Research Dashboard** - Explore findings from 2.2M+ loan records
- **Global Team Network** - Researchers across North America, Europe, and Asia
- **Advanced ML Models** - XGBoost, Random Forest, and Logistic Regression implementations
- **Responsive Design** - Beautiful, modern UI with parallax effects and asymmetric layouts
- **Open Source** - Complete codebase available for research and collaboration

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or pnpm

### Installation
```bash
# Clone the repository
git clone https://github.com/yourusername/p2p-lending-research.git
cd p2p-lending-research

# Install dependencies
npm install --legacy-peer-deps

# Start development server
npm run dev
```

### Build for Production
```bash
npm run build
```

## 🌐 Deployment

### GitHub Pages (Recommended - Free)

This project is configured for automatic deployment to GitHub Pages.

#### Setup Steps:

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Navigate to Settings → Pages
   - Select "Deploy from a branch"
   - Choose "gh-pages" branch
   - Save

3. **Automatic Deployment**
   - Every push to `main` branch triggers automatic deployment
   - Your site will be available at: `https://yourusername.github.io/p2p-lending-research/`

#### Manual Deployment
```bash
npm run deploy
```

### Alternative: Vercel

If you prefer Vercel:

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── HomePage.jsx     # Landing page
│   ├── Documentation.jsx # Research documentation
│   ├── AboutTeam.jsx    # Team information
│   ├── FurtherStudy.jsx # Research papers
│   ├── Contact.jsx      # Contact page
│   └── ui/             # UI components
├── assets/             # Images and static files
├── hooks/              # Custom React hooks
└── App.jsx             # Main app component
```

## 🛠️ Technologies Used

- **Frontend**: React 19, Vite
- **Styling**: Tailwind CSS 4, Framer Motion
- **UI Components**: Radix UI
- **Routing**: React Router DOM
- **Deployment**: GitHub Pages, GitHub Actions

## 📊 Research Highlights

- **Dataset**: 2.2M+ LendingClub loan records (2007-2018)
- **Models**: XGBoost (ROC AUC: 0.72), Random Forest, Logistic Regression
- **Key Findings**: Interest rates, FICO scores, loan grades, and DTI ratios as primary predictors
- **Innovation**: DataCents Risk Score for enhanced credit assessment

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **Email**: research@datacents.com
- **GitHub**: [Repository](https://github.com/yourusername/p2p-lending-research)
- **LinkedIn**: [Team Profile](https://linkedin.com/company/datacents)

## 🙏 Acknowledgments

- MIT Emerging Talent Program
- LendingClub for providing the dataset
- Open source community for tools and libraries

---

**Built with ❤️ by the DataCents Research Team** 