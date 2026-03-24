import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bharat-Pro - AutoML Platform (Coming Soon)",
  description:
    "North India's Largest AI Program. Comprehensive AutoML training with explainable ML/DL modules, real-world datasets, and industry-ready skills. Official launch coming soon.",
  openGraph: {
    title: "Bharat-Pro - AutoML Platform | NSKAILabs",
    description:
      "Comprehensive AutoML training with explainable ML/DL modules and real-world datasets. Coming Soon.",
  },
};

const platformFeatures = [
  {
    title: "Dataset Upload",
    description: "Upload your own datasets in CSV, Excel, or JSON format for immediate processing.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
      </svg>
    ),
  },
  {
    title: "Automated Preprocessing",
    description: "Automatic handling of missing values, encoding, scaling, and feature engineering.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
      </svg>
    ),
  },
  {
    title: "Model Selection",
    description: "Intelligent selection of ML algorithms based on your data characteristics and objectives.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
      </svg>
    ),
  },
  {
    title: "Hyperparameter Tuning",
    description: "Automated hyperparameter optimization using grid search, random search, and Bayesian methods.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Training & Evaluation",
    description: "Train models with real-time metrics, cross-validation, and comprehensive performance reports.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    title: "Model Deployment Basics",
    description: "Learn the fundamentals of deploying trained models to production environments.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
  },
];

const learningHighlights = [
  {
    title: "Explainable AutoML",
    description: "Every automated step is transparent. Understand why a model was selected, how features were engineered, and what each hyperparameter controls.",
  },
  {
    title: "Integrated Recorded Modules",
    description: "Step-by-step recorded lectures covering Machine Learning, Deep Learning, and data science fundamentals alongside the AutoML platform.",
  },
  {
    title: "Real-World Datasets",
    description: "Practice with authentic industry datasets covering healthcare, finance, manufacturing, and more to build practical expertise.",
  },
];

export default function BharatPro() {
  return (
    <div className="pt-16">
      {/* Under Progress Banner */}
      <div className="bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-amber-500/20 border-b border-amber-500/30">
        <div className="section-container py-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 text-center">
            <div className="flex items-center gap-2">
              <div className="relative">
                <span className="flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
                </span>
              </div>
              <span className="text-amber-400 font-bold text-lg">🚧 Under Development</span>
            </div>
            <span className="text-amber-200/80">
              Official launch coming in the next few months. Join the waitlist to get early access!
            </span>
          </div>
        </div>
      </div>

      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-violet-500/10" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="section-container relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/20 border border-amber-500/30 mb-6">
              <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm font-medium text-amber-300">Coming Soon</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">Bharat-Pro</span>
            </h1>
            <p className="text-xl text-gray-300 mb-4">
              North India&apos;s Largest AI Program
            </p>
            <p className="text-lg text-gray-400 mb-8">
              A comprehensive platform combining automated machine learning with
              structured education. Learn ML and DL through hands-on AutoML
              workflows with full explainability.
            </p>
            
            {/* Waitlist Form */}
            <div className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email for early access"
                  className="flex-1 px-4 py-3 rounded-xl bg-dark-900 border border-dark-700 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                />
                <button
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                >
                  Join Waitlist
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Be the first to know when we launch. No spam, ever.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Progress Indicator */}
      <section className="section-padding bg-dark-900/50">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-8">
              Development <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">Progress</span>
            </h2>
            
            <div className="space-y-6">
              <div className="relative">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-300">Curriculum Design</span>
                  <span className="text-sm font-bold text-cyan-400">100%</span>
                </div>
                <div className="w-full h-2 bg-dark-700 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full" style={{ width: '100%' }}></div>
                </div>
              </div>
              
              <div className="relative">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-300">AutoML Platform Core</span>
                  <span className="text-sm font-bold text-cyan-400">75%</span>
                </div>
                <div className="w-full h-2 bg-dark-700 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
              
              <div className="relative">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-300">Video Content Production</span>
                  <span className="text-sm font-bold text-amber-400">50%</span>
                </div>
                <div className="w-full h-2 bg-dark-700 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full" style={{ width: '50%' }}></div>
                </div>
              </div>
              
              <div className="relative">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-300">Beta Testing</span>
                  <span className="text-sm font-bold text-gray-400">Coming Soon</span>
                </div>
                <div className="w-full h-2 bg-dark-700 rounded-full overflow-hidden">
                  <div className="h-full bg-dark-600 rounded-full" style={{ width: '10%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Platform <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">Features</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            End-to-end AutoML capabilities designed for learning and production.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platformFeatures.map((feature) => (
              <div key={feature.title} className="group bg-dark-900/50 border border-dark-700 rounded-2xl p-6 transition-all duration-300 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-dark-900/50">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Learn While You <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">Build</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Every AutoML step becomes a learning opportunity.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {learningHighlights.map((item) => (
              <div key={item.title} className="bg-dark-900/50 border border-dark-700 rounded-2xl p-6 transition-all duration-300 hover:border-violet-500/50">
                <div className="w-1 h-8 bg-gradient-to-b from-cyan-500 to-violet-400 rounded-full mb-4" />
                <h3 className="text-lg font-semibold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Recorded <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">Lecture Series</span>
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-dark-900/50 border border-dark-700 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Machine Learning Track
                </h3>
                <ul className="space-y-2">
                  {[
                    "Supervised & Unsupervised Learning",
                    "Regression & Classification",
                    "Feature Engineering",
                    "Model Selection & Evaluation",
                    "Ensemble Methods",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-400">
                      <svg className="w-4 h-4 text-cyan-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-dark-900/50 border border-dark-700 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Deep Learning Track
                </h3>
                <ul className="space-y-2">
                  {[
                    "Neural Network Fundamentals",
                    "CNNs for Computer Vision",
                    "RNNs & Sequence Models",
                    "Transfer Learning",
                    "Model Deployment Basics",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-400">
                      <svg className="w-4 h-4 text-violet-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-cyan-950/30 via-dark-900 to-violet-950/30">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Be Part of the <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">Launch</span>
            </h2>
            <p className="text-gray-400 mb-8">
              Join hundreds of learners waiting to build real-world AI skills with
              Bharat-Pro. Get notified when we launch.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
            >
              Contact Us for Early Access
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}