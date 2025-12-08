import { FileText, Sparkles, Zap, Target, Database, Brain, Users, ChevronDown, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [expandedCategories, setExpandedCategories] = useState({});
  const [expandedJobs, setExpandedJobs] = useState({});
  const [expandedCVs, setExpandedCVs] = useState({});
  const [expandedEvals, setExpandedEvals] = useState({});
  const [jobsData, setJobsData] = useState([]);
  const [accuracyContent, setAccuracyContent] = useState('');

  useEffect(() => {
    // Load jobs data
    fetch('/HireVerse_Website/jobs_new_format.json')
      .then(res => res.json())
      .then(data => setJobsData(data))
      .catch(err => console.error('Error loading jobs:', err));

    // Load accuracy evaluation markdown
    fetch('/HireVerse_Website/Candidate_Evaluation_Accuracy.md')
      .then(res => res.text())
      .then(data => setAccuracyContent(data))
      .catch(err => console.error('Error loading accuracy eval:', err));
  }, []);

  const toggleCategory = (category) => {
    setExpandedCategories(prev => ({ ...prev, [category]: !prev[category] }));
  };

  const toggleJob = (jobId) => {
    setExpandedJobs(prev => ({ ...prev, [jobId]: !prev[jobId] }));
  };

  const toggleCV = (cvId) => {
    setExpandedCVs(prev => ({ ...prev, [cvId]: !prev[cvId] }));
  };

  // Group jobs by category
  const jobsByCategory = {
    'Data Science': jobsData.filter(job => job.category === 'Data Science'),
    'Software Engineer': jobsData.filter(job => job.category === 'Software Engineer'),
    'Accounting': jobsData.filter(job => job.category === 'Accounting'),
    'Legal': jobsData.filter(job => job.category === 'Legal'),
  };

  const cvSamples = [
    { id: 'cv_1', name: 'Carla Jensen', file: 'CarlaJensenResume.pdf' },
    { id: 'cv_2', name: 'Carter Andrade', file: 'CarterAndradeResume.pdf' },
    { id: 'cv_3', name: 'Ethan Smith', file: 'EthanSmithResume.pdf' },
    { id: 'cv_4', name: 'Jackson Miller', file: 'JacksonMillerResume.pdf' },
    { id: 'cv_5', name: 'Mason Thomas', file: 'MasonThomasResume.pdf' },
  ];

  return (
    <div className="min-h-screen relative bg-white flex flex-col">
      <div
        className="fixed inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/HireVerse_Website/HireverseAI_background.png)', zIndex: 0 }}
      ></div>

      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full object-cover opacity-60"
        style={{ zIndex: 1 }}
      >
        <source src="/HireVerse_Website/background.mp4" type="video/mp4" />
      </video>

      <div className="relative flex-1 flex flex-col" style={{ zIndex: 10 }}>
        {/* Tab Navigation - At Very Top */}
        <nav className="bg-white/30 backdrop-blur-sm shadow-md sticky top-0 z-50 border-b-2 border-[#6CC0F9]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex gap-1">
              <button
                onClick={() => setActiveTab('home')}
                className={`px-6 py-4 font-semibold transition-all ${
                  activeTab === 'home'
                    ? 'text-[#8D34F6] border-b-4 border-[#8D34F6] bg-[#8D34F6]/5'
                    : 'text-[#121826] hover:text-[#8D34F6] hover:bg-[#8D34F6]/5'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => setActiveTab('motivation')}
                className={`px-6 py-4 font-semibold transition-all flex items-center gap-2 ${
                  activeTab === 'motivation'
                    ? 'text-[#8D34F6] border-b-4 border-[#8D34F6] bg-[#8D34F6]/5'
                    : 'text-[#121826] hover:text-[#8D34F6] hover:bg-[#8D34F6]/5'
                }`}
              >
                <Target className="w-5 h-5" />
                Motivation
              </button>
              <button
                onClick={() => setActiveTab('demo')}
                className={`px-6 py-4 font-semibold transition-all flex items-center gap-2 ${
                  activeTab === 'demo'
                    ? 'text-[#8D34F6] border-b-4 border-[#8D34F6] bg-[#8D34F6]/5'
                    : 'text-[#121826] hover:text-[#8D34F6] hover:bg-[#8D34F6]/5'
                }`}
              >
                <Zap className="w-5 h-5" />
                Demo
              </button>
              <button
                onClick={() => setActiveTab('data')}
                className={`px-6 py-4 font-semibold transition-all flex items-center gap-2 ${
                  activeTab === 'data'
                    ? 'text-[#8D34F6] border-b-4 border-[#8D34F6] bg-[#8D34F6]/5'
                    : 'text-[#121826] hover:text-[#8D34F6] hover:bg-[#8D34F6]/5'
                }`}
              >
                <Database className="w-5 h-5" />
                Data
              </button>
              <button
                onClick={() => setActiveTab('architecture')}
                className={`px-6 py-4 font-semibold transition-all flex items-center gap-2 ${
                  activeTab === 'architecture'
                    ? 'text-[#8D34F6] border-b-4 border-[#8D34F6] bg-[#8D34F6]/5'
                    : 'text-[#121826] hover:text-[#8D34F6] hover:bg-[#8D34F6]/5'
                }`}
              >
                <FileText className="w-5 h-5" />
                Architecture
              </button>
              <button
                onClick={() => setActiveTab('methodology')}
                className={`px-6 py-4 font-semibold transition-all flex items-center gap-2 ${
                  activeTab === 'methodology'
                    ? 'text-[#8D34F6] border-b-4 border-[#8D34F6] bg-[#8D34F6]/5'
                    : 'text-[#121826] hover:text-[#8D34F6] hover:bg-[#8D34F6]/5'
                }`}
              >
                <Brain className="w-5 h-5" />
                Methodology
              </button>
              <button
                onClick={() => setActiveTab('about')}
                className={`px-6 py-4 font-semibold transition-all flex items-center gap-2 ${
                  activeTab === 'about'
                    ? 'text-[#8D34F6] border-b-4 border-[#8D34F6] bg-[#8D34F6]/5'
                    : 'text-[#121826] hover:text-[#8D34F6] hover:bg-[#8D34F6]/5'
                }`}
              >
                <Users className="w-5 h-5" />
                About Us
              </button>
              <a
                href="https://github.com/ayushigoel9/HireVerse_AWS"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 font-semibold text-[#121826] hover:text-[#8D34F6] hover:bg-[#8D34F6]/5 transition-all flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                GitHub
              </a>
            </div>
          </div>
        </nav>

      <main className="flex-1 flex flex-col">
        {/* HOME TAB - Hero section fills available space */}
        {activeTab === 'home' && (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center px-6">
              <div className="flex items-center justify-center gap-6 mb-8">
                <img src="/HireVerse_Website/logo.png" alt="HireVerse.AI" className="h-32" />
                <div className="text-left">
                  <h1 className="text-8xl font-bold text-[#121826] leading-none mb-1">
                    HireVerse<span className="text-[#337295]">.</span><span className="text-[#337295]">A</span><span className="text-[#337295]">i</span>
                  </h1>
                  <p className="text-2xl text-[#121826]">Precise. Transparent. Fair.</p>
                </div>
              </div>
              <p className="text-2xl text-[#121826] max-w-5xl mx-auto leading-relaxed">
                Connecting talented professionals with their dream opportunities through intelligent AI-powered matching.
                No more keyword games. Just fair, transparent job matching that sees your true potential.
              </p>
            </div>
          </div>
        )}

        {/* MOTIVATION TAB */}
        {activeTab === 'motivation' && (
          <div className="max-w-7xl mx-auto px-6 py-12">
            {/* Motivation Section */}
            <section className="mb-20">
              <h3 className="text-3xl font-bold text-[#121826] mb-8 text-center">Motivation</h3>

              {/* Intro Text */}
              <p className="text-[#121826] leading-relaxed text-lg text-center max-w-5xl mx-auto mb-4">
                The current job application process faces significant challenges that impact both candidates and recruiters. Many applicants experience frustration when applying to roles that seem like perfect fits, only to receive no response at all. Much of this problem centers around Applicant Tracking systems (ATS), which create a vicious cycle: candidates must continually fine tune their resume for every job they apply to in order to have a chance of being considered.
              </p>
              <p className="text-[#121826] leading-relaxed text-lg text-center max-w-5xl mx-auto mb-8">
                A closer look at the job application path reveals several key issues:
              </p>

              {/* Problem Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* ATS Dominance */}
                <div className="bg-white/90 backdrop-blur-md rounded-xl shadow-lg p-6 border-2 border-[#8D34F6] hover:shadow-2xl transition-shadow">
                  <h4 className="text-xl font-bold text-[#121826] mb-3">Applicant Tracking Systems (ATS) Dominance</h4>
                  <p className="text-[#121826] leading-relaxed">
                    Nearly all companies now rely on ATS software to automate and manage recruitment. These systems filter out
                    <span className="font-bold text-[#8D34F6]"> up to 75% of resumes</span> before a human recruiter ever sees them.
                  </p>
                </div>

                {/* Keyword-Driven Filtering */}
                <div className="bg-white/90 backdrop-blur-md rounded-xl shadow-lg p-6 border-2 border-[#6CC0F9] hover:shadow-2xl transition-shadow">
                  <h4 className="text-xl font-bold text-[#121826] mb-3">Keyword-Driven Filtering</h4>
                  <p className="text-[#121826] leading-relaxed">
                    Traditional ATS tools depend heavily on exact keyword matching. As a result, even highly qualified candidates may be overlooked simply because their resume doesn't use the precise wording the system expects.
                  </p>
                </div>

                {/* Resume Customization Burden */}
                <div className="bg-white/90 backdrop-blur-md rounded-xl shadow-lg p-6 border-2 border-[#FF6C5C] hover:shadow-2xl transition-shadow">
                  <h4 className="text-xl font-bold text-[#121826] mb-3">Resume Customization Burden</h4>
                  <p className="text-[#121826] leading-relaxed">
                    To improve their chances, candidates must tailor their resume for every single job application, effectively turning job hunting into a full-time job. A resume that scores well for one role may score poorly for a nearly identical role solely due to slight differences in phrasing.
                  </p>
                </div>

                {/* Inconsistent Matching */}
                <div className="bg-white/90 backdrop-blur-md rounded-xl shadow-lg p-6 border-2 border-[#E8F77B] hover:shadow-2xl transition-shadow">
                  <h4 className="text-xl font-bold text-[#121826] mb-3">Inconsistent Matching</h4>
                  <p className="text-[#121826] leading-relaxed">
                    Tools designed to mimic ATS behavior (such as Jobscan) often show dramatic fluctuations in match scores between similar jobs. These inconsistencies occur not because a candidate lacks the relevant skills, but because of minor wording discrepancies.
                  </p>
                </div>
              </div>
            </section>

            {/* Value Proposition Section */}
            <section className="mb-20">
              <h3 className="text-3xl font-bold text-[#121826] mb-8 text-center">Value Proposition</h3>
              <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg p-10 border-2 border-[#8D34F6]">
                <p className="text-xl leading-relaxed text-[#121826] text-center">
                  HireVerse eliminates the resume fine-tuning problem by allowing candidates to <span className="font-bold">apply blindly</span>, meaning they don't need to know which specific jobs are on the platform, nor tailor their resume to any particular posting. Instead of rewarding keyword manipulation, HireVerse evaluates candidates based solely on <span className="font-bold">who they are and what they can do</span>. The matching engine combines mathematical scoring with LLM-driven semantic understanding to recognize skills regardless of how they are phrased. This creates a system where matches are <span className="font-bold">fair, consistent, and genuinely reflective</span> of the candidate's abilities, not their ability to game an ATS.
                </p>
              </div>
            </section>

            {/* Market Opportunity Section */}
            <section>
              <h3 className="text-3xl font-bold text-[#121826] mb-8 text-center">Impact & Market Opportunity</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* ATS Market */}
                <div className="bg-white/90 backdrop-blur-md rounded-xl shadow-lg p-8 border-2 border-[#8D34F6] text-center">
                  <h4 className="text-lg font-bold text-[#121826] mb-4">ATS Market</h4>
                  <div className="flex items-center justify-center gap-4 mb-3">
                    <div>
                      <p className="text-4xl font-bold text-[#8D34F6]">$2.9B</p>
                      <p className="text-sm text-[#121826]">2024</p>
                    </div>
                    <span className="text-3xl text-[#121826]">→</span>
                    <div>
                      <p className="text-4xl font-bold text-[#8D34F6]">$6.3B</p>
                      <p className="text-sm text-[#121826]">2033</p>
                    </div>
                  </div>
                </div>

                {/* Recruitment Software Market */}
                <div className="bg-white/90 backdrop-blur-md rounded-xl shadow-lg p-8 border-2 border-[#6CC0F9] text-center">
                  <h4 className="text-lg font-bold text-[#121826] mb-4">Recruitment Software Market</h4>
                  <div className="flex items-center justify-center gap-4 mb-3">
                    <div>
                      <p className="text-4xl font-bold text-[#6CC0F9]">$3.3B</p>
                      <p className="text-sm text-[#121826]">2025</p>
                    </div>
                    <span className="text-3xl text-[#121826]">→</span>
                    <div>
                      <p className="text-4xl font-bold text-[#6CC0F9]">$6.2-17B</p>
                      <p className="text-sm text-[#121826]">2034</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Growth Rate Highlight */}
              <div className="bg-white/90 backdrop-blur-md rounded-xl shadow-lg p-6 border-2 border-[#8D34F6] text-center">
                <p className="text-xl font-bold text-[#121826] mb-6">
                  Average Growth Rate: <span className="text-2xl text-[#8D34F6]">8-10% CAGR</span>
                </p>
                <div className="text-left text-sm text-[#121826] space-y-2 max-w-3xl mx-auto">
                  <p className="italic">References:</p>
                  <p>Global Market Insights. (2024). <i>Applicant tracking system market</i>. https://www.gminsights.com/industry-analysis/applicant-tracking-system-market</p>
                  <p>Coherent Market Insights. (2025). <i>Recruitment software market</i>. https://www.coherentmarketinsights.com/industry-reports/recruitment-software-market</p>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* ABOUT US TAB */}
        {activeTab === 'about' && (
          <div className="max-w-7xl mx-auto px-6 py-12">
            <h2 className="text-4xl font-bold text-[#121826] mb-8 text-center">About Our Team</h2>

            {/* Intro Section */}
            <div className="text-center mb-12">
              <p className="text-lg text-[#121826] max-w-3xl mx-auto">
                We're a team of data science students in the <strong>Master of Information and Data Science (MIDS)</strong> program
                at <strong>UC Berkeley</strong>, who built HireVerse.AI as our final capstone project, <strong>Fall 2025</strong>.
              </p>
            </div>

            {/* Team Members Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Ayushi */}
              <div className="bg-white/90 backdrop-blur-md rounded-xl shadow-lg p-6 border-2 border-[#FF6C5C] text-center hover:shadow-2xl transition-shadow">
                <img
                  src="/HireVerse_Website/ayushi.jpg"
                  alt="Ayushi Goel"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-black"
                />
                <h3 className="text-xl font-bold text-[#121826] mb-2">Ayushi Goel</h3>
                <p className="text-[#121826] text-sm mb-4">Luxembourg, Luxembourg</p>
                <a
                  href="https://www.linkedin.com/in/ayushigoel9/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#FF6C5C] text-white px-4 py-2 rounded-lg hover:bg-[#ff5544] transition-colors"
                >
                  LinkedIn
                </a>
              </div>

              {/* Francesca */}
              <div className="bg-white/90 backdrop-blur-md rounded-xl shadow-lg p-6 border-2 border-[#FF6C5C] text-center hover:shadow-2xl transition-shadow">
                <img
                  src="/HireVerse_Website/francesca.jpg"
                  alt="Francesca Scipioni"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-black"
                />
                <h3 className="text-xl font-bold text-[#121826] mb-2">Francesca Scipioni</h3>
                <p className="text-[#121826] text-sm mb-4">Mountain View, USA</p>
                <a
                  href="https://www.linkedin.com/in/francesca-scipioni/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#FF6C5C] text-white px-4 py-2 rounded-lg hover:bg-[#ff5544] transition-colors"
                >
                  LinkedIn
                </a>
              </div>

              {/* Omar */}
              <div className="bg-white/90 backdrop-blur-md rounded-xl shadow-lg p-6 border-2 border-[#FF6C5C] text-center hover:shadow-2xl transition-shadow">
                <img
                  src="/HireVerse_Website/omar.png"
                  alt="Omar Zubi"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-black"
                />
                <h3 className="text-xl font-bold text-[#121826] mb-2">Omar Zubi</h3>
                <p className="text-[#121826] text-sm mb-4">New York, USA</p>
                <a
                  href="https://linkedin.com/in/omarzubi/?skipRedirect=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#FF6C5C] text-white px-4 py-2 rounded-lg hover:bg-[#ff5544] transition-colors"
                >
                  LinkedIn
                </a>
              </div>

              {/* Richard */}
              <div className="bg-white/90 backdrop-blur-md rounded-xl shadow-lg p-6 border-2 border-[#FF6C5C] text-center hover:shadow-2xl transition-shadow">
                <img
                  src="/HireVerse_Website/richard.png"
                  alt="Richard Lumpi"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-black"
                />
                <h3 className="text-xl font-bold text-[#121826] mb-2">Richard Lumpi</h3>
                <p className="text-[#121826] text-sm mb-4">Salzburg, Austria</p>
                <a
                  href="https://www.linkedin.com/in/richard-lumpi-8886a9178/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#FF6C5C] text-white px-4 py-2 rounded-lg hover:bg-[#ff5544] transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Acknowledgments Section */}
            <div className="mt-16">
              <h3 className="text-3xl font-bold text-[#121826] mb-8 text-center">Acknowledgments</h3>

              {/* Professor Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-12">
                {/* Morgan Ames */}
                <div className="bg-white/90 backdrop-blur-md rounded-xl shadow-lg p-6 border-2 border-[#8D34F6] text-center hover:shadow-2xl transition-shadow">
                  <h4 className="text-xl font-bold text-[#121826] mb-2">Morgan Ames</h4>
                  <p className="text-[#121826] text-sm mb-4">Assistant Professor of Practice</p>
                  <a
                    href="https://www.ischool.berkeley.edu/about/profiles/morgan-ames"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#8D34F6] text-white px-4 py-2 rounded-lg hover:bg-[#7029d1] transition-colors"
                  >
                    Profile
                  </a>
                </div>

                {/* Zona Kostic */}
                <div className="bg-white/90 backdrop-blur-md rounded-xl shadow-lg p-6 border-2 border-[#8D34F6] text-center hover:shadow-2xl transition-shadow">
                  <h4 className="text-xl font-bold text-[#121826] mb-2">Zona Kostic</h4>
                  <p className="text-[#121826] text-sm mb-4">Lecturer</p>
                  <a
                    href="https://www.ischool.berkeley.edu/people/zona-kostic"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#8D34F6] text-white px-4 py-2 rounded-lg hover:bg-[#7029d1] transition-colors"
                  >
                    Profile
                  </a>
                </div>
              </div>

              {/* General Acknowledgments */}
              <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg p-8 border-2 border-[#6CC0F9]">
                <p className="text-[#121826] text-center leading-relaxed">
                  We would also like to thank all the candidates who generously shared their resumes to help us build and test HireVerse.AI,
                  as well as the recruiters who took the time to speak with us and provide valuable insights into the hiring process.
                  Your contributions were essential to this project.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* DEMO TAB */}
        {activeTab === 'demo' && (
          <div className="max-w-7xl mx-auto px-6 py-12">
          <section>
            <div className="flex items-center gap-3 mb-8">
              <Zap className="w-8 h-8 text-[#E8F77B]" />
              <h2 className="text-4xl font-bold text-[#121826]">Demo</h2>
            </div>


            <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-8 border-2 border-[#6CC0F9]">
              <div className="rounded-xl overflow-hidden border-2 border-[#8D34F6]">
                <video
                  controls
                  className="w-full"
                >
                  <source src="/HireVerse_Website/demo.mov" type="video/quicktime" />
                  <source src="/HireVerse_Website/demo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </section>
          </div>
        )}

        {/* ARCHITECTURE TAB */}
        {activeTab === 'architecture' && (
          <div className="max-w-7xl mx-auto px-6 py-12">
            {/* Intro Section */}
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#121826] mb-6">Product Architecture</h2>
              <p className="text-lg text-[#121826] max-w-4xl mx-auto leading-relaxed">
                HireVerse.AI is built entirely on AWS, leveraging Bedrock AgentCore to orchestrate specialized AI agents.
                Our architecture is designed with key principles in mind: simplicity, cost-efficiency, isolation, and experimentation.
                Every design decision ensures rapid development, seamless collaboration, and production-ready deployment.
              </p>
            </div>

            {/* Architecture Highlights - 3 Icons Horizontal */}
            <div className="mb-20">
              <h3 className="text-2xl font-bold text-[#121826] mb-8 text-center">Design Principles</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* No Shared Resources */}
                <div className="bg-white/90 backdrop-blur-md rounded-xl p-6 border-2 border-[#8D34F6] text-center">
                  <img src="/HireVerse_Website/resources.png" alt="No shared resources" className="h-24 mx-auto mb-4" />
                  <p className="text-[#121826] text-sm">Team members get their own S3 buckets, Lambda functions, and AgentCore agents. No shared resources, no deployment conflicts.</p>
                </div>

                {/* Freedom to Experiment */}
                <div className="bg-white/90 backdrop-blur-md rounded-xl p-6 border-2 border-[#FF6C5C] text-center">
                  <img src="/HireVerse_Website/experiment.png" alt="Freedom to experiment" className="h-24 mx-auto mb-4" />
                  <p className="text-[#121826] text-sm">Team members can try new approaches, test different models, and iterate rapidly in isolated sandbox environments.</p>
                </div>

                {/* Cost Efficient */}
                <div className="bg-white/90 backdrop-blur-md rounded-xl p-6 border-2 border-[#E8F77B] text-center">
                  <img src="/HireVerse_Website/cost.png" alt="Cost efficient" className="h-24 mx-auto mb-4" />
                  <p className="text-[#121826] text-sm">The entire system is designed with cost efficiency at its core. Each team member can be onboarded and start developing for about the price of a cup of coffee.</p>
                </div>
              </div>
            </div>

            {/* Simple Deployment Section */}
            <div className="mb-20">
              <h3 className="text-2xl font-bold text-[#121826] mb-8 text-center">One-Click Team Onboarding</h3>
              <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-8 border-2 border-[#8D34F6]">
                <p className="text-[#121826] text-center mb-6 text-lg">
                  New team members can deploy their own complete HireVerse infrastructure with a single command.
                  No complex setup, no manual configuration, just instant access to a fully functional development environment.
                </p>
                <div className="rounded-xl overflow-hidden border-2 border-[#6CC0F9]">
                  <img src="/HireVerse_Website/deploy_colored2.png" alt="Simple deployment" className="w-full" />
                </div>
              </div>
            </div>

            {/* Full Architecture Diagram */}
            <div>
              <h3 className="text-2xl font-bold text-[#121826] mb-8 text-center">AWS System Architecture</h3>
              <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-8 border-2 border-[#8D34F6]">
                <p className="text-[#121826] text-center mb-6">
                  Complete end-to-end AWS architecture showing the data flow from resume upload through the frontend,
                  connected to AWS services including S3, Lambda, and Bedrock AgentCore for AI-powered processing,
                  ultimately delivering personalized candidate-job match recommendations.
                </p>
                <div className="rounded-xl overflow-hidden border-2 border-[#6CC0F9]">
                  <img src="/HireVerse_Website/architecture2.png" alt="AWS System architecture diagram" className="w-full" />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* METHODOLOGY TAB */}
        {activeTab === 'methodology' && (
          <div className="max-w-7xl mx-auto px-6 py-12">
            <h2 className="text-4xl font-bold text-[#121826] mb-8 text-center">Methodology</h2>

            {/* Evaluation Criteria Section */}
            <section className="mb-12">
              <h3 className="text-3xl font-bold text-[#121826] mb-4 text-center">Evaluation Criteria</h3>
              <p className="text-[#121826] leading-relaxed mb-8 text-center max-w-5xl mx-auto">
                To build an effective matching system, the team established a rigorous evaluation framework using nine real, manually labeled CVs, each owned by an actual candidate who later participated in the evaluation, paired with 100 job descriptions across three domains: Legal & Accounting, Data Science, and Software Engineering (see the Data section for details).
              </p>
              <p className="text-[#121826] leading-relaxed mb-8 text-center max-w-5xl mx-auto">
                The evaluation process used three complementary methods to provide a comprehensive assessment of performance:
              </p>

              {/* 3 Evaluation Type Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Card 1: Job-Family Classification Accuracy */}
                <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg p-6 border-2 border-[#6CC0F9]">
                  <div className="flex items-center gap-3 mb-4">
                    <img src="/HireVerse_Website/classification.png" alt="Classification" className="w-8 h-8" />
                    <h4 className="text-xl font-semibold text-[#121826]">Job-Family Classification Accuracy</h4>
                  </div>
                  <p className="text-[#121826] leading-relaxed">
                    Each model generated the top 40 job recommendations per CV. Accuracy was computed by evaluating whether the correct job families appeared within those 40 recommendations, providing a broad measure of domain-level alignment.
                  </p>
                </div>

                {/* Card 2: LLM-as-a-Judge */}
                <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg p-6 border-2 border-[#8D34F6]">
                  <div className="flex items-center gap-3 mb-4">
                    <img src="/HireVerse_Website/llm.png" alt="LLM" className="w-8 h-8" />
                    <h4 className="text-xl font-semibold text-[#121826]">LLM-as-a-Judge</h4>
                  </div>
                  <p className="text-[#121826] leading-relaxed">
                    Using Claude Sonnet 3.7, we evaluated the top five recommendations for each candidate and ranked the quality of each model's top-five set. This enabled more granular assessment, including seniority matching, domain alignment, and overall role fit.
                  </p>
                </div>

                {/* Card 3: Human Candidate Feedback */}
                <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg p-6 border-2 border-[#FF6C5C]">
                  <div className="flex items-center gap-3 mb-4">
                    <img src="/HireVerse_Website/human.png" alt="Human" className="w-8 h-8" />
                    <h4 className="text-xl font-semibold text-[#121826]">Human Candidate Feedback</h4>
                  </div>
                  <p className="text-[#121826] leading-relaxed">
                    The same nine real candidates, whose CVs served as the golden set, reviewed their top five recommended jobs from each model and rated relevance based on their own career goals and context. This allowed us to benchmark each model's performance against actual human judgment, revealing how well the LLM evaluator aligns with real candidate preferences.
                  </p>
                </div>
              </div>
            </section>

            {/* Data Pipeline Section */}
            <section className="mb-12">
              <h3 className="text-3xl font-bold text-[#121826] mb-4 text-center">Data Pipeline</h3>
              <p className="text-[#121826] leading-relaxed mb-8 text-center max-w-5xl mx-auto">
                Before any data entered the matching logic, it underwent a structured preparation process designed to reduce noise, enforce consistency, and standardize inputs. Both CVs and job descriptions were parsed, cleaned, and normalized into structured formats suitable for downstream analysis.
              </p>

              {/* Two Processing Boxes Stacked */}
              <div className="space-y-6">
                {/* CV Processing Box - Image Left, Text Right */}
                <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg p-6 border-2 border-[#8D34F6]">
                  <div className="flex flex-col md:flex-row gap-6 items-center">
                    <div className="flex-shrink-0">
                      <img src="/HireVerse_Website/cv_parser.png" alt="CV Parser" className="max-w-md h-auto rounded-xl shadow-lg" />
                    </div>
                    <div className="flex-1">
                      <p className="text-[#121826] leading-relaxed">
                        When a candidate uploads their résumé, the CV processing pipeline triggers a multi-stage workflow orchestrated by a central system coordinator. Apache Tika first converts the PDF into clean, machine-readable text. This text then passes through a deterministic preprocessing layer that normalizes formatting and produces a standardized base JSON structure.
                      </p>
                      <p className="text-[#121826] leading-relaxed mt-4">
                        Next comes the intelligence layer: six specialized, LLM-powered agents extract distinct résumé components: personal information, summary, education, professional experience, technical and soft skills, and additional sections such as certifications and languages. The orchestrator merges these outputs into a single, comprehensive JSON profile representing the full candidate.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Job Description Processing Box - Image Left, Text Right */}
                <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg p-6 border-2 border-[#6CC0F9]">
                  <div className="flex flex-col md:flex-row gap-6 items-center">
                    <div className="flex-shrink-0">
                      <img src="/HireVerse_Website/job_parser.png" alt="Job Parser" className="max-w-md h-auto rounded-xl shadow-lg" />
                    </div>
                    <div className="flex-1">
                      <p className="text-[#121826] leading-relaxed">
                        Job descriptions undergo a similar preparation process. We began with a hand-curated dataset of 100 high-quality postings representing diverse roles across our target industries. Each job description was cleaned and converted into a structured JSON format containing four standardized components: the job title, a role description outlining responsibilities and expectations, required or minimum competencies, and any nice-to-have skills when available.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Models Section */}
            <section className="mb-12">
              <h3 className="text-3xl font-bold text-[#121826] mb-4 text-center">Models</h3>
              <p className="text-[#121826] leading-relaxed mb-8 text-center max-w-5xl mx-auto">
                To evaluate different strategies for job–candidate matching, the team tested three approaches.
              </p>

              {/* All 3 Model Boxes Stacked Vertically */}
              <div className="space-y-6">
                {/* CareerBERT Box - Text Left, Image Right */}
                <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg p-6 border-2 border-[#8D34F6]">
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <img src="/HireVerse_Website/careerBert.png" alt="CareerBERT" className="w-10 h-10" />
                        <h4 className="text-xl font-semibold text-[#121826]">CareerBERT</h4>
                      </div>
                      <p className="text-[#121826] leading-relaxed mb-4">
                        From our literature review and online research, we identified CareerBERT as a promising model to get started with. It is both computationally efficient and experimentally well-validated, outperforming multiple prior approaches in earlier studies (<a href="https://aclanthology.org/2021.nuse-1.6/" target="_blank" rel="noopener noreferrer" className="text-[#8D34F6] hover:underline">Link</a>). However, CareerBERT comes with important limitations. It was trained primarily on German job postings, and existing research suggests it can struggle to differentiate closely related or highly specialized roles.
                      </p>
                      <p className="text-[#121826] leading-relaxed">
                        Our initial experiments therefore examined how well CareerBERT generalizes. Specifically, whether a model fine-tuned on German job data could still perform effectively on English CVs and job descriptions. We used CareerBERT to generate semantic embeddings for both CVs and roles, then compared CV–JD pairs using cosine similarity to produce match scores.
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <img src="/HireVerse_Website/model_1.png" alt="CareerBERT Model" className="max-w-md h-auto rounded-xl shadow-lg" />
                    </div>
                  </div>
                </div>

                {/* Titan Box - Text Left, Image Right */}
                <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg p-6 border-2 border-[#6CC0F9]">
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <img src="/HireVerse_Website/titian.png" alt="Titan" className="w-10 h-10" />
                        <h4 className="text-xl font-semibold text-[#121826]">Amazon Titan</h4>
                      </div>
                      <p className="text-[#121826] leading-relaxed">
                        In the second phase, we tested whether a more general-purpose embedding model could rival or outperform CareerBERT. We applied Amazon Titan Embeddings on Bedrock to create CV and job embeddings and again ranked jobs using cosine similarity (<a href="https://docs.aws.amazon.com/bedrock/latest/userguide/titan-embedding-models.html" target="_blank" rel="noopener noreferrer" className="text-[#6CC0F9] hover:underline">Link</a>). Titan offered strong operational advantages as a native cloud model, including seamless integration with S3, Lambda, and Bedrock's security and compliance frameworks.
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <img src="/HireVerse_Website/model_2.png" alt="Titan Model" className="max-w-md h-auto rounded-xl shadow-lg" />
                    </div>
                  </div>
                </div>

                {/* Multi-stage Matching Pipeline Box - Text Left, Image Right */}
                <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg p-6 border-2 border-[#FF6C5C]">
                  <div className="flex items-center gap-3 mb-4">
                    <img src="/HireVerse_Website/careerBert.png" alt="Multi-stage Pipeline" className="w-10 h-10" />
                    <h4 className="text-xl font-semibold text-[#121826]">Multi-stage matching pipeline</h4>
                  </div>
                  <div className="flex flex-col md:flex-row gap-6 items-start mb-4">
                    <div className="flex-1">
                      <p className="text-[#121826] leading-relaxed mb-4">
                        In the full matching model, both CVs and job descriptions undergo an additional enrichment stage designed to create standardized and interpretable profiles.
                      </p>
                      <p className="text-[#121826] leading-relaxed mb-4">
                        For CVs, the Profile Enricher infers:
                      </p>
                      <ul className="space-y-2 text-[#121826] leading-relaxed ml-5 mb-4">
                        <li className="flex gap-2">
                          <span className="text-[#FF6C5C] mt-1">•</span>
                          <span>The candidate's macroarea (e.g., TECH, ACCOUNTING, LEGAL)</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-[#FF6C5C] mt-1">•</span>
                          <span>Their seniority level (JUNIOR, MID, SENIOR)</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-[#FF6C5C] mt-1">•</span>
                          <span>A primary professional title such as "Senior Data Scientist"</span>
                        </li>
                      </ul>
                      <p className="text-[#121826] leading-relaxed">
                        These attributes help guide seniority pre-filters, skill relevance scoring, and downstream explainability.
                      </p>
                    </div>
                    <div className="flex-shrink-0 -mt-16">
                      <img src="/HireVerse_Website/model_3.png" alt="Multi-stage Pipeline Model" className="max-w-2xl h-auto rounded-xl shadow-lg" />
                    </div>
                  </div>
                  <p className="text-[#121826] leading-relaxed mb-4">
                    Job descriptions follow a parallel enrichment flow. Key skills are mapped to a canonical ontology and tagged by importance, while additional profile features, such as seniority expectations, required years of experience, and leadership responsibilities, are extracted from the job content. Each job is also embedded into the same semantic space as the CVs using Titan embeddings.
                  </p>
                  <p className="text-[#121826] leading-relaxed">
                    Once both sides are enriched, the CV embedding is compared against all job embeddings to retrieve the Top-K most relevant roles. These candidates then pass through seniority checks and the downstream Skills Alignment and Match Decision Engines, which combine semantic and structured signals into final match scores accompanied by clear, human-readable explanations.
                  </p>
                </div>
              </div>
            </section>

            {/* Results Section */}
            <section className="mb-12">
              <h3 className="text-3xl font-bold text-[#121826] mb-4 text-center">Results</h3>
              <p className="text-[#121826] leading-relaxed mb-8 text-center max-w-5xl mx-auto">
                To assess the performance of the different matching strategies, we evaluated each model using our three-part evaluation framework: Job-Family Classification Accuracy, LLM-as-a-Judge, and Human Candidate Feedback.
              </p>

              {/* Performance Summary Table */}
              <div className="mb-8 overflow-x-auto">
                <table className="w-full bg-white/90 backdrop-blur-md rounded-2xl shadow-lg border-2 border-[#CAB9D0]">
                  <thead>
                    <tr className="bg-[#CAB9D0] text-white">
                      <th className="px-6 py-4 text-left font-semibold">Model</th>
                      <th className="px-6 py-4 text-center font-semibold">Classification Accuracy</th>
                      <th className="px-6 py-4 text-center font-semibold">LLM Score</th>
                      <th className="px-6 py-4 text-center font-semibold">Human Candidate Feedback</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t-2 border-[#CAB9D0]/20">
                      <td className="px-6 py-4 font-semibold text-[#121826]">CareerBERT</td>
                      <td className="px-6 py-4 text-center text-[#121826]">76.67%</td>
                      <td className="px-6 py-4 text-center text-[#121826]">11.11% (1/9)</td>
                      <td className="px-6 py-4 text-center text-[#121826]">11.11% (1/9)</td>
                    </tr>
                    <tr className="border-t-2 border-[#CAB9D0]/20 bg-[#CAB9D0]/5">
                      <td className="px-6 py-4 font-semibold text-[#121826]">Amazon Titan</td>
                      <td className="px-6 py-4 text-center text-[#121826]">90.56%</td>
                      <td className="px-6 py-4 text-center text-[#121826]">55.56% (5/9)</td>
                      <td className="px-6 py-4 text-center text-[#121826]">55.56% (5/9)</td>
                    </tr>
                    <tr className="border-t-2 border-[#CAB9D0]/20">
                      <td className="px-6 py-4 font-semibold text-[#121826]">Multi-stage Pipeline</td>
                      <td className="px-6 py-4 text-center text-[#121826]">82.78%</td>
                      <td className="px-6 py-4 text-center text-[#121826]">33.33% (3/9)</td>
                      <td className="px-6 py-4 text-center text-[#121826]">33.33% (3/9)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Detailed Results Text */}
              <div className="space-y-6 mb-8">
                <p className="text-[#121826] leading-relaxed">
                  In the first test, each model produced the top 40 job recommendations per candidate and was evaluated on whether the correct job family appeared within those results. This yielded baseline performance from CareerBERT at 76.67%. Amazon Titan achieved a clear improvement with 90.56%, demonstrating that a general-purpose model without domain fine-tuning performs better than CareerBERT's embeddings. The Extended multi-stage model reached 82.78%, showing that the richer preprocessing and reasoning pipeline improves quality beyond CareerBERT but does not surpass the general-purpose embeddings, leaving room for optimization in the early filtering stage.
                </p>
                <p className="text-[#121826] leading-relaxed">
                  For the LLM-as-a-Judge evaluation, we asked a separate model to score the top five recommendations produced by each pipeline. Titan again ranked highest with 55.56% of top selections (five candidates), followed by the Extended model at 33.33% (three candidates), and CareerBERT at 11.11% (one candidate).
                </p>
                <p className="text-[#121826] leading-relaxed">
                  To explore whether these rankings aligned with candidate needs in practice, we ran a Human Candidate Feedback study. Although the overall scoring trends were consistent between humans and the LLM, agreement on the top-performing pipeline occurred in only 5 out of 9 cases. Full ranking alignment across all pipelines was observed in just 2 out of 9 cases, indicating that while LLMs show promise as evaluators, key inputs are still missing.
                </p>
                <p className="text-[#121826] leading-relaxed">
                  Human feedback revealed critical nuances that CVs and job descriptions alone cannot represent. Candidates expressed preferences tied to personal priorities, such as avoiding large corporations or actively pursuing early-stage, high-intensity environments, which the LLM could not infer from the CVs. This strongly supports our initial goal of integrating explicit career-intent signals into the matching process.
                </p>
                <p className="text-[#121826] leading-relaxed">
                  We also identified recurring points of misalignment in how seniority and skills are interpreted. The LLM tended to assume that total years of experience equate to seniority, while career-switching candidates often view experience in a new field as effectively resetting their level. Conversely, transferable skills may exist without the confidence or desire to pursue senior roles immediately. These disconnects show that reasoning about career progression requires more than semantic similarity.
                </p>
                <p className="text-[#121826] leading-relaxed">
                  Together, these insights point clearly to the next steps: enriching the matching logic with direct candidate intent, improving cross-domain understanding of seniority and skill maturity, and ensuring human-centric alignment throughout the decision-making pipeline.
                </p>
              </div>

              {/* LLM vs Human Rankings Table */}
              <div className="mb-8">
                <h4 className="text-2xl font-bold text-[#121826] mb-4 text-center">Detailed Results: LLM vs Human Reviewers</h4>
                <div className="space-y-4">
                  {/* Row 1: CVs 1-3 */}
                  <div className="overflow-x-auto">
                    <table className="w-full bg-white/90 backdrop-blur-md rounded-xl shadow-lg border-t-2 border-b-2 border-[#CAB9D0]">
                      <thead>
                        <tr>
                          <th className="px-3 py-2 text-center font-semibold text-[#121826] text-sm bg-white/90">RANK</th>
                          <th className="px-3 py-2 text-center font-semibold text-[#121826] bg-[#E8F77B]" colSpan="2">
                            <div className="text-sm mb-1">Golden CV 1</div>
                            <div className="flex justify-between text-xs">
                              <span className="flex-1 px-2">LLM</span>
                              <span className="flex-1 px-2">Owner of CV</span>
                            </div>
                          </th>
                          <th className="px-3 py-2 text-center font-semibold text-[#121826] bg-[#6CC0F9]" colSpan="2">
                            <div className="text-sm mb-1">Golden CV 2</div>
                            <div className="flex justify-between text-xs">
                              <span className="flex-1 px-2">LLM</span>
                              <span className="flex-1 px-2">Owner of CV</span>
                            </div>
                          </th>
                          <th className="px-3 py-2 text-center font-semibold text-[#121826] bg-[#CAB9D0]" colSpan="2">
                            <div className="text-sm mb-1">Golden CV 3</div>
                            <div className="flex justify-between text-xs">
                              <span className="flex-1 px-2">LLM</span>
                              <span className="flex-1 px-2">Owner of CV</span>
                            </div>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-t-2 border-[#CAB9D0]/20">
                          <td className="px-3 py-2 text-center font-semibold text-[#121826] text-sm bg-white/90">1</td>
                          <td className="px-3 py-2 text-center text-[#121826] text-sm bg-[#E8F77B]">Titan</td>
                          <td className="px-3 py-2 text-center text-[#121826] text-sm bg-[#E8F77B]">Titan</td>
                          <td className="px-3 py-2 text-center text-[#121826] text-sm bg-[#6CC0F9]">Titan</td>
                          <td className="px-3 py-2 text-center text-[#121826] text-sm bg-[#6CC0F9]">Extended</td>
                          <td className="px-3 py-2 text-center text-[#121826] text-sm bg-[#CAB9D0]">Titan</td>
                          <td className="px-3 py-2 text-center text-[#121826] text-sm bg-[#CAB9D0]">Baseline</td>
                        </tr>
                        <tr className="border-t border-[#CAB9D0]/10">
                          <td className="px-3 py-2 text-center font-semibold text-[#121826] text-sm bg-white/90">2</td>
                          <td className="px-3 py-2 text-center text-[#121826] text-sm bg-[#E8F77B]">Extended</td>
                          <td className="px-3 py-2 text-center text-[#121826] text-sm bg-[#E8F77B]">Extended</td>
                          <td className="px-3 py-2 text-center text-[#121826] text-sm bg-[#6CC0F9]">Extended</td>
                          <td className="px-3 py-2 text-center text-[#121826] text-sm bg-[#6CC0F9]">Baseline</td>
                          <td className="px-3 py-2 text-center text-[#121826] text-sm bg-[#CAB9D0]">Extended</td>
                          <td className="px-3 py-2 text-center text-[#121826] text-sm bg-[#CAB9D0]">Titan</td>
                        </tr>
                        <tr className="border-t border-[#CAB9D0]/10">
                          <td className="px-3 py-2 text-center font-semibold text-[#121826] text-sm bg-white/90">3</td>
                          <td className="px-3 py-2 text-center text-[#121826] text-sm bg-[#E8F77B]">Baseline</td>
                          <td className="px-3 py-2 text-center text-[#121826] text-sm bg-[#E8F77B]">Baseline</td>
                          <td className="px-3 py-2 text-center text-[#121826] text-sm bg-[#6CC0F9]">Baseline</td>
                          <td className="px-3 py-2 text-center text-[#121826] text-sm bg-[#6CC0F9]">Titan</td>
                          <td className="px-3 py-2 text-center text-[#121826] text-sm bg-[#CAB9D0]">Baseline</td>
                          <td className="px-3 py-2 text-center text-[#121826] text-sm bg-[#CAB9D0]">Extended</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Row 2: CVs 4-6 */}
                  <div className="overflow-x-auto">
                    <table className="w-full bg-white/90 backdrop-blur-md rounded-xl shadow-lg border-t-2 border-b-2 border-[#CAB9D0]">
                      <thead>
                        <tr>
                          <th className="px-3 py-2 text-center font-semibold text-[#121826] text-sm bg-white/90">RANK</th>
                          <th className="px-3 py-2 text-center font-semibold text-[#121826] bg-[#CAB9D0]" colSpan="2">
                            <div className="text-sm mb-1">Golden CV 4</div>
                            <div className="flex justify-between text-xs">
                              <span className="flex-1 px-2">LLM</span>
                              <span className="flex-1 px-2">Owner of CV</span>
                            </div>
                          </th>
                          <th className="px-3 py-2 text-center font-semibold text-[#121826] bg-[#E8F77B]" colSpan="2">
                            <div className="text-sm mb-1">Golden CV 5</div>
                            <div className="flex justify-between text-xs">
                              <span className="flex-1 px-2">LLM</span>
                              <span className="flex-1 px-2">Owner of CV</span>
                            </div>
                          </th>
                          <th className="px-3 py-2 text-center font-semibold text-[#121826] bg-[#6CC0F9]" colSpan="2">
                            <div className="text-sm mb-1">Golden CV 6</div>
                            <div className="flex justify-between text-xs">
                              <span className="flex-1 px-2">LLM</span>
                              <span className="flex-1 px-2">Owner of CV</span>
                            </div>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-t-2 border-[#CAB9D0]/20">
                          <td className="px-3 py-2 text-center font-semibold text-[#121826] text-sm bg-white/90">1</td>
                          <td className="px-3 py-2 text-center text-[#121826] text-sm bg-[#CAB9D0]">Extended</td>
                          <td className="px-3 py-2 text-center text-[#121826] text-sm bg-[#CAB9D0]">Baseline</td>
                          <td className="px-3 py-2 text-center text-[#121826] text-sm bg-[#E8F77B]">Titan</td>
                          <td className="px-3 py-2 text-center text-[#121826] text-sm bg-[#E8F77B]">Extended</td>
                          <td className="px-3 py-2 text-center text-[#121826] text-sm bg-[#6CC0F9]">Extended</td>
                          <td className="px-3 py-2 text-center text-[#121826] text-sm bg-[#6CC0F9]">Baseline</td>
                        </tr>
                        <tr className="border-t border-[#CAB9D0]/10">
                          <td className="px-3 py-2 text-center font-semibold text-[#121826] text-sm bg-white/90">2</td>
                          <td className="px-3 py-2 text-center text-[#121826] text-sm bg-[#CAB9D0]">Titan</td>
                          <td className="px-3 py-2 text-center text-[#121826] text-sm bg-[#CAB9D0]">Extended</td>
                          <td className="px-3 py-2 text-center text-[#121826] text-sm bg-[#E8F77B]">Extended</td>
                          <td className="px-3 py-2 text-center text-[#121826] text-sm bg-[#E8F77B]">Baseline</td>
                          <td className="px-3 py-2 text-center text-[#121826] text-sm bg-[#6CC0F9]">Baseline</td>
                          <td className="px-3 py-2 text-center text-[#121826] text-sm bg-[#6CC0F9]">Extended</td>
                        </tr>
                        <tr className="border-t border-[#CAB9D0]/10">
                          <td className="px-3 py-2 text-center font-semibold text-[#121826] text-sm bg-white/90">3</td>
                          <td className="px-3 py-2 text-center text-[#121826] text-sm bg-[#CAB9D0]">Baseline</td>
                          <td className="px-3 py-2 text-center text-[#121826] text-sm bg-[#CAB9D0]">Titan</td>
                          <td className="px-3 py-2 text-center text-[#121826] text-sm bg-[#E8F77B]">Baseline</td>
                          <td className="px-3 py-2 text-center text-[#121826] text-sm bg-[#E8F77B]">Titan</td>
                          <td className="px-3 py-2 text-center text-[#121826] text-sm bg-[#6CC0F9]">Titan</td>
                          <td className="px-3 py-2 text-center text-[#121826] text-sm bg-[#6CC0F9]">Titan</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Row 3: CVs 7-9 */}
                  <div className="overflow-x-auto">
                    <table className="w-full bg-white/90 backdrop-blur-md rounded-xl shadow-lg border-t-2 border-b-2 border-[#CAB9D0]">
                      <thead>
                        <tr>
                          <th className="px-3 py-2 text-center font-semibold text-[#121826] text-sm bg-white/90">RANK</th>
                          <th className="px-3 py-2 text-center font-semibold text-[#121826] bg-[#CAB9D0]" colSpan="2">
                            <div className="text-sm mb-1">Golden CV 7</div>
                            <div className="flex justify-between text-xs">
                              <span className="flex-1 px-2">LLM</span>
                              <span className="flex-1 px-2">Owner of CV</span>
                            </div>
                          </th>
                          <th className="px-3 py-2 text-center font-semibold text-[#121826] bg-[#E8F77B]" colSpan="2">
                            <div className="text-sm mb-1">Golden CV 8</div>
                            <div className="flex justify-between text-xs">
                              <span className="flex-1 px-2">LLM</span>
                              <span className="flex-1 px-2">Owner of CV</span>
                            </div>
                          </th>
                          <th className="px-3 py-2 text-center font-semibold text-[#121826] bg-[#CAB9D0]" colSpan="2">
                            <div className="text-sm mb-1">Golden CV 9</div>
                            <div className="flex justify-between text-xs">
                              <span className="flex-1 px-2">LLM</span>
                              <span className="flex-1 px-2">Owner of CV</span>
                            </div>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-t-2 border-[#CAB9D0]/20">
                          <td className="px-3 py-2 text-center font-semibold text-[#121826] text-sm bg-white/90">1</td>
                          <td className="px-3 py-2 text-center text-[#121826] text-sm bg-[#CAB9D0]">Extended</td>
                          <td className="px-3 py-2 text-center text-[#121826] text-sm bg-[#CAB9D0]">Extended</td>
                          <td className="px-3 py-2 text-center text-[#121826] text-sm bg-[#E8F77B]">Baseline</td>
                          <td className="px-3 py-2 text-center text-[#121826] text-sm bg-[#E8F77B]">Titan</td>
                          <td className="px-3 py-2 text-center text-[#121826] text-sm bg-[#CAB9D0]">Baseline</td>
                          <td className="px-3 py-2 text-center text-[#121826] text-sm bg-[#CAB9D0]">Extended</td>
                        </tr>
                        <tr className="border-t border-[#CAB9D0]/10">
                          <td className="px-3 py-2 text-center font-semibold text-[#121826] text-sm bg-white/90">2</td>
                          <td className="px-3 py-2 text-center text-[#121826] text-sm bg-[#CAB9D0]">Baseline</td>
                          <td className="px-3 py-2 text-center text-[#121826] text-sm bg-[#CAB9D0]">Baseline</td>
                          <td className="px-3 py-2 text-center text-[#121826] text-sm bg-[#E8F77B]">Titan</td>
                          <td className="px-3 py-2 text-center text-[#121826] text-sm bg-[#E8F77B]">Extended</td>
                          <td className="px-3 py-2 text-center text-[#121826] text-sm bg-[#CAB9D0]">Extended</td>
                          <td className="px-3 py-2 text-center text-[#121826] text-sm bg-[#CAB9D0]">Baseline</td>
                        </tr>
                        <tr className="border-t border-[#CAB9D0]/10">
                          <td className="px-3 py-2 text-center font-semibold text-[#121826] text-sm bg-white/90">3</td>
                          <td className="px-3 py-2 text-center text-[#121826] text-sm bg-[#CAB9D0]">Titan</td>
                          <td className="px-3 py-2 text-center text-[#121826] text-sm bg-[#CAB9D0]">Titan</td>
                          <td className="px-3 py-2 text-center text-[#121826] text-sm bg-[#E8F77B]">Extended</td>
                          <td className="px-3 py-2 text-center text-[#121826] text-sm bg-[#E8F77B]">Baseline</td>
                          <td className="px-3 py-2 text-center text-[#121826] text-sm bg-[#CAB9D0]">Titan</td>
                          <td className="px-3 py-2 text-center text-[#121826] text-sm bg-[#CAB9D0]">Titan</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Legend */}
                <div className="flex items-center justify-center gap-6 mt-6 flex-wrap">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-[#E8F77B]"></div>
                    <span className="text-sm text-[#121826]">Human-LLM reviewers total agreement</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-[#6CC0F9]"></div>
                    <span className="text-sm text-[#121826]">Human-LLM reviewers partial, top agreement</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-[#CAB9D0]"></div>
                    <span className="text-sm text-[#121826]">Human-LLM reviewers no agreement</span>
                  </div>
                </div>
              </div>

              {/* Evaluation Output Examples - Expandable Dropdowns */}
              <div>
                <h4 className="text-2xl font-bold text-[#121826] mb-6 text-center">Evaluation Output Examples</h4>
                <div className="space-y-4">
                  {/* Evaluation 1 Output */}
                  <div className="bg-white/90 backdrop-blur-md rounded-xl shadow-lg border-2 border-[#6CC0F9]">
                    <button
                      onClick={() => setExpandedEvals({...expandedEvals, eval1: !expandedEvals.eval1})}
                      className="w-full px-6 py-4 flex items-center justify-between hover:bg-[#6CC0F9]/5 transition-colors rounded-xl"
                    >
                      <span className="text-lg font-semibold text-[#121826]">Job-Family Classification Accuracy Output</span>
                      {expandedEvals.eval1 ?
                        <ChevronDown className="w-6 h-6 text-[#6CC0F9]" /> :
                        <ChevronRight className="w-6 h-6 text-[#6CC0F9]" />
                      }
                    </button>
                    {expandedEvals.eval1 && (
                      <div className="px-6 pb-4">
                        <pre className="bg-gray-50 p-4 rounded-lg border-2 border-[#6CC0F9] overflow-x-auto text-sm font-mono whitespace-pre text-[#121826]">
                          {accuracyContent}
                        </pre>
                      </div>
                    )}
                  </div>

                  {/* Evaluation 2 Output */}
                  <div className="bg-white/90 backdrop-blur-md rounded-xl shadow-lg border-2 border-[#8D34F6]">
                    <button
                      onClick={() => setExpandedEvals({...expandedEvals, eval2: !expandedEvals.eval2})}
                      className="w-full px-6 py-4 flex items-center justify-between hover:bg-[#8D34F6]/5 transition-colors rounded-xl"
                    >
                      <span className="text-lg font-semibold text-[#121826]">LLM-as-a-Judge Output</span>
                      {expandedEvals.eval2 ?
                        <ChevronDown className="w-6 h-6 text-[#8D34F6]" /> :
                        <ChevronRight className="w-6 h-6 text-[#8D34F6]" />
                      }
                    </button>
                    {expandedEvals.eval2 && (
                      <div className="px-6 pb-4">
                        <embed src="/HireVerse_Website/Candidate_Evaluation_LLM.pdf" type="application/pdf" className="w-full h-[600px] rounded-lg border-2 border-[#8D34F6]" />
                      </div>
                    )}
                  </div>

                  {/* Evaluation 3 Output */}
                  <div className="bg-white/90 backdrop-blur-md rounded-xl shadow-lg border-2 border-[#FF6C5C]">
                    <button
                      onClick={() => setExpandedEvals({...expandedEvals, eval3: !expandedEvals.eval3})}
                      className="w-full px-6 py-4 flex items-center justify-between hover:bg-[#FF6C5C]/5 transition-colors rounded-xl"
                    >
                      <span className="text-lg font-semibold text-[#121826]">Human Candidate Feedback Output</span>
                      {expandedEvals.eval3 ?
                        <ChevronDown className="w-6 h-6 text-[#FF6C5C]" /> :
                        <ChevronRight className="w-6 h-6 text-[#FF6C5C]" />
                      }
                    </button>
                    {expandedEvals.eval3 && (
                      <div className="px-6 pb-4">
                        <embed src="/HireVerse_Website/Candidate_Questionnaire_anonymized.pdf" type="application/pdf" className="w-full h-[800px] rounded-lg border-2 border-[#FF6C5C]" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* DATA TAB */}
        {activeTab === 'data' && (
          <div className="max-w-7xl mx-auto px-6 py-12">
            <h2 className="text-4xl font-bold text-[#121826] mb-8 text-center">Data</h2>

            {/* Dataset Overview Stats */}
            <div className="mb-12 flex flex-col items-center">
              {/* Top Row: CV and Job Boxes */}
              <div className="flex gap-8 mb-8">
                {/* CV Large Box */}
                <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 border-2 border-[#8D34F6] shadow-xl">
                  <div className="flex items-center gap-6">
                    {/* CV Icon */}
                    <img src="/HireVerse_Website/cv_icon.png" alt="CV Icon" className="w-20 h-20" />

                    {/* CV Stats - 3 Small Boxes */}
                    <div className="flex gap-4">
                      <div className="bg-[#FFE4E1] rounded-2xl p-4 border-2 border-[#FFA07A] min-w-[120px]">
                        <div className="text-center">
                          <p className="text-3xl font-bold text-[#121826] mb-1">47</p>
                          <p className="text-xs font-semibold text-[#121826]">Synthetic CVs</p>
                        </div>
                      </div>
                      <div className="bg-[#FFE4E1] rounded-2xl p-4 border-2 border-[#FFA07A] min-w-[120px]">
                        <div className="text-center">
                          <p className="text-3xl font-bold text-[#121826] mb-1">20</p>
                          <p className="text-xs font-semibold text-[#121826]">Real CVs</p>
                        </div>
                      </div>
                      <div className="bg-[#FFE4E1] rounded-2xl p-4 border-2 border-[#FF6347] min-w-[120px]">
                        <div className="text-center">
                          <p className="text-3xl font-bold text-[#FF6347] mb-1">9</p>
                          <p className="text-xs font-semibold text-[#121826]">Golden Real CVs</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Job Large Box */}
                <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 border-2 border-[#6CC0F9] shadow-xl ml-12">
                  <div className="flex items-center gap-6">
                    {/* Job Stats - 3 Small Boxes */}
                    <div className="flex gap-4">
                      <div className="bg-[#E0F7FF] rounded-2xl p-4 border-2 border-[#87CEEB] min-w-[120px]">
                        <div className="text-center">
                          <p className="text-3xl font-bold text-[#121826] mb-1">40</p>
                          <p className="text-xs font-semibold text-[#121826]">Data Science</p>
                        </div>
                      </div>
                      <div className="bg-[#E0F7FF] rounded-2xl p-4 border-2 border-[#87CEEB] min-w-[120px]">
                        <div className="text-center">
                          <p className="text-3xl font-bold text-[#121826] mb-1">40</p>
                          <p className="text-xs font-semibold text-[#121826]">Software Engineer</p>
                        </div>
                      </div>
                      <div className="bg-[#E0F7FF] rounded-2xl p-4 border-2 border-[#87CEEB] min-w-[120px]">
                        <div className="text-center">
                          <p className="text-3xl font-bold text-[#121826] mb-1">20</p>
                          <p className="text-xs font-semibold text-[#121826]">Legal & Accounting</p>
                        </div>
                      </div>
                    </div>

                    {/* Job Icon */}
                    <img src="/HireVerse_Website/job_icon.png" alt="Job Icon" className="w-20 h-20" />
                  </div>
                </div>
              </div>

              {/* Arrow Down */}
              <div className="mb-4 -ml-6">
                <svg className="w-12 h-12 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>

              {/* Bottom: Workflow Circle */}
              <div className="-ml-6">
                <div className="bg-white/90 backdrop-blur-md rounded-full p-8 border-2 border-[#8D34F6] shadow-xl">
                  <div className="text-center">
                    <img src="/HireVerse_Website/cv_jd_workflow_icon.png" alt="Workflow" className="w-24 h-24 mx-auto mb-2" />
                    <p className="text-sm font-bold text-[#121826] leading-tight">CV-JDs<br/>E2E<br/>workflow</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CV and JD Cards Side by Side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* CV Card */}
              <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg p-8 border-2 border-[#8D34F6]">
                <h3 className="text-2xl font-bold text-[#121826] mb-4">Candidate CVs</h3>
                <p className="text-[#121826] leading-relaxed">
                  To assess the effectiveness of our agent-based parsing and matching pipelines, we assembled a dataset consisting of <strong>47 synthetic CVs</strong> (sourced from{' '}
                  <a href="https://enhancv.com/resume-examples/data-scientist/" target="_blank" rel="noopener noreferrer" className="text-[#8D34F6] hover:underline">Enhancv</a>)
                  along with <strong>29 real CVs</strong> provided directly by candidates. In the first iteration of the product, the upload and parsing features were designed around the CV extraction pipeline. To maintain realistic preprocessing and parsing challenges, all CVs were kept in their original PDF format.
                </p>
              </div>

              {/* JD Card */}
              <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg p-8 border-2 border-[#6CC0F9]">
                <h3 className="text-2xl font-bold text-[#121826] mb-4">Job Descriptions</h3>
                <p className="text-[#121826] leading-relaxed mb-4">
                  On the job description side, we concentrated on our two priority domains, namely <strong>Software Engineering</strong> and <strong>Data Science</strong> roles (40 each).
                  To evaluate how well models handle unrelated or less relevant opportunities, we supplemented the dataset with an additional set of <strong>10 Accounting</strong> and{' '}
                  <strong>10 Legal</strong> positions. All job descriptions were sourced from publicly available LinkedIn postings and manually cleaned to ensure consistency and reduce noise.
                </p>
                <p className="text-[#121826] leading-relaxed">
                  Each role was standardized into four structured components: job title, role description outlining responsibilities, required or minimum competencies, and additional "nice-to-have" skills when available.
                </p>
              </div>
            </div>

            {/* Labeling Card */}
            <div className="mb-12">
              <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg p-8 border-2 border-[#FF6C5C]">
                <p className="text-[#121826] leading-relaxed text-center">
                  Both CVs and job descriptions were hand-labeled by the team, with candidate feedback incorporated into the labeling of real CVs.
                  This ground-truth labeling enabled us to benchmark performance and evaluate how well different matching strategies replicated real-world candidate judgment.
                </p>
              </div>
            </div>

            {/* Sample Job Descriptions */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-[#121826] mb-6 text-center">Sample Job Descriptions</h3>
              <p className="text-[#121826] text-center mb-6">Click on each category to explore the job descriptions</p>

              <div className="space-y-4">
                {/* Data Science Jobs */}
                <div className="bg-white/90 backdrop-blur-md rounded-xl shadow-lg border-2 border-[#8D34F6]">
                  <button
                    onClick={() => toggleCategory('Data Science')}
                    className="w-full px-6 py-4 flex items-center justify-between hover:bg-[#8D34F6]/5 transition-colors rounded-xl"
                  >
                    <span className="text-xl font-bold text-[#121826]">Data Science ({jobsByCategory['Data Science'].length} roles)</span>
                    {expandedCategories['Data Science'] ? <ChevronDown className="w-6 h-6 text-[#8D34F6]" /> : <ChevronRight className="w-6 h-6 text-[#8D34F6]" />}
                  </button>
                  {expandedCategories['Data Science'] && (
                    <div className="px-6 pb-4 space-y-2">
                      {jobsByCategory['Data Science'].map((job) => (
                        <div key={job.job_id} className="border-2 border-[#6CC0F9] rounded-lg">
                          <button
                            onClick={() => toggleJob(job.job_id)}
                            className="w-full px-4 py-3 flex items-center justify-between hover:bg-[#6CC0F9]/5 transition-colors"
                          >
                            <span className="font-semibold text-[#121826] text-left">{job.job_title} ({job.company})</span>
                            {expandedJobs[job.job_id] ? <ChevronDown className="w-5 h-5 text-[#6CC0F9] flex-shrink-0" /> : <ChevronRight className="w-5 h-5 text-[#6CC0F9] flex-shrink-0" />}
                          </button>
                          {expandedJobs[job.job_id] && (
                            <div className="px-4 pb-4 space-y-3 text-sm">
                              <div>
                                <p className="font-semibold text-[#121826]">Company:</p>
                                <p className="text-[#121826]">{job.company}</p>
                              </div>
                              <div>
                                <p className="font-semibold text-[#121826]">Location:</p>
                                <p className="text-[#121826]">{job.location}</p>
                              </div>
                              <div>
                                <p className="font-semibold text-[#121826]">Description:</p>
                                <p className="text-[#121826] whitespace-pre-line">{job.job_description}</p>
                              </div>
                              <div>
                                <p className="font-semibold text-[#121826]">Requirements:</p>
                                <p className="text-[#121826] whitespace-pre-line">{job.job_requirements}</p>
                              </div>
                              {job.job_preferred_skills && (
                                <div>
                                  <p className="font-semibold text-[#121826]">Preferred Skills:</p>
                                  <p className="text-[#121826] whitespace-pre-line">{job.job_preferred_skills}</p>
                                </div>
                              )}
                              <div>
                                <p className="font-semibold text-[#121826]">Link:</p>
                                <a href={job.link} target="_blank" rel="noopener noreferrer" className="text-[#8D34F6] hover:underline break-all">View on LinkedIn</a>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Software Engineering Jobs */}
                <div className="bg-white/90 backdrop-blur-md rounded-xl shadow-lg border-2 border-[#FF6C5C]">
                  <button
                    onClick={() => toggleCategory('Software Engineer')}
                    className="w-full px-6 py-4 flex items-center justify-between hover:bg-[#FF6C5C]/5 transition-colors rounded-xl"
                  >
                    <span className="text-xl font-bold text-[#121826]">Software Engineering ({jobsByCategory['Software Engineer'].length} roles)</span>
                    {expandedCategories['Software Engineer'] ? <ChevronDown className="w-6 h-6 text-[#FF6C5C]" /> : <ChevronRight className="w-6 h-6 text-[#FF6C5C]" />}
                  </button>
                  {expandedCategories['Software Engineer'] && (
                    <div className="px-6 pb-4 space-y-2">
                      {jobsByCategory['Software Engineer'].map((job) => (
                        <div key={job.job_id} className="border-2 border-[#6CC0F9] rounded-lg">
                          <button
                            onClick={() => toggleJob(job.job_id)}
                            className="w-full px-4 py-3 flex items-center justify-between hover:bg-[#6CC0F9]/5 transition-colors"
                          >
                            <span className="font-semibold text-[#121826] text-left">{job.job_title} ({job.company})</span>
                            {expandedJobs[job.job_id] ? <ChevronDown className="w-5 h-5 text-[#6CC0F9] flex-shrink-0" /> : <ChevronRight className="w-5 h-5 text-[#6CC0F9] flex-shrink-0" />}
                          </button>
                          {expandedJobs[job.job_id] && (
                            <div className="px-4 pb-4 space-y-3 text-sm">
                              <div>
                                <p className="font-semibold text-[#121826]">Company:</p>
                                <p className="text-[#121826]">{job.company}</p>
                              </div>
                              <div>
                                <p className="font-semibold text-[#121826]">Location:</p>
                                <p className="text-[#121826]">{job.location}</p>
                              </div>
                              <div>
                                <p className="font-semibold text-[#121826]">Description:</p>
                                <p className="text-[#121826] whitespace-pre-line">{job.job_description}</p>
                              </div>
                              <div>
                                <p className="font-semibold text-[#121826]">Requirements:</p>
                                <p className="text-[#121826] whitespace-pre-line">{job.job_requirements}</p>
                              </div>
                              {job.job_preferred_skills && (
                                <div>
                                  <p className="font-semibold text-[#121826]">Preferred Skills:</p>
                                  <p className="text-[#121826] whitespace-pre-line">{job.job_preferred_skills}</p>
                                </div>
                              )}
                              <div>
                                <p className="font-semibold text-[#121826]">Link:</p>
                                <a href={job.link} target="_blank" rel="noopener noreferrer" className="text-[#8D34F6] hover:underline break-all">View on LinkedIn</a>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Accounting Jobs */}
                <div className="bg-white/90 backdrop-blur-md rounded-xl shadow-lg border-2 border-[#E8F77B]">
                  <button
                    onClick={() => toggleCategory('Accounting')}
                    className="w-full px-6 py-4 flex items-center justify-between hover:bg-[#E8F77B]/5 transition-colors rounded-xl"
                  >
                    <span className="text-xl font-bold text-[#121826]">Accounting ({jobsByCategory['Accounting'].length} roles)</span>
                    {expandedCategories['Accounting'] ? <ChevronDown className="w-6 h-6 text-[#121826]" /> : <ChevronRight className="w-6 h-6 text-[#121826]" />}
                  </button>
                  {expandedCategories['Accounting'] && (
                    <div className="px-6 pb-4 space-y-2">
                      {jobsByCategory['Accounting'].map((job) => (
                        <div key={job.job_id} className="border-2 border-[#6CC0F9] rounded-lg">
                          <button
                            onClick={() => toggleJob(job.job_id)}
                            className="w-full px-4 py-3 flex items-center justify-between hover:bg-[#6CC0F9]/5 transition-colors"
                          >
                            <span className="font-semibold text-[#121826] text-left">{job.job_title} ({job.company})</span>
                            {expandedJobs[job.job_id] ? <ChevronDown className="w-5 h-5 text-[#6CC0F9] flex-shrink-0" /> : <ChevronRight className="w-5 h-5 text-[#6CC0F9] flex-shrink-0" />}
                          </button>
                          {expandedJobs[job.job_id] && (
                            <div className="px-4 pb-4 space-y-3 text-sm">
                              <div>
                                <p className="font-semibold text-[#121826]">Company:</p>
                                <p className="text-[#121826]">{job.company}</p>
                              </div>
                              <div>
                                <p className="font-semibold text-[#121826]">Location:</p>
                                <p className="text-[#121826]">{job.location}</p>
                              </div>
                              <div>
                                <p className="font-semibold text-[#121826]">Description:</p>
                                <p className="text-[#121826] whitespace-pre-line">{job.job_description}</p>
                              </div>
                              <div>
                                <p className="font-semibold text-[#121826]">Requirements:</p>
                                <p className="text-[#121826] whitespace-pre-line">{job.job_requirements}</p>
                              </div>
                              {job.job_preferred_skills && (
                                <div>
                                  <p className="font-semibold text-[#121826]">Preferred Skills:</p>
                                  <p className="text-[#121826] whitespace-pre-line">{job.job_preferred_skills}</p>
                                </div>
                              )}
                              <div>
                                <p className="font-semibold text-[#121826]">Link:</p>
                                <a href={job.link} target="_blank" rel="noopener noreferrer" className="text-[#8D34F6] hover:underline break-all">View on LinkedIn</a>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Legal Jobs */}
                <div className="bg-white/90 backdrop-blur-md rounded-xl shadow-lg border-2 border-[#CAB9D0]">
                  <button
                    onClick={() => toggleCategory('Legal')}
                    className="w-full px-6 py-4 flex items-center justify-between hover:bg-[#CAB9D0]/5 transition-colors rounded-xl"
                  >
                    <span className="text-xl font-bold text-[#121826]">Legal ({jobsByCategory['Legal'].length} roles)</span>
                    {expandedCategories['Legal'] ? <ChevronDown className="w-6 h-6 text-[#121826]" /> : <ChevronRight className="w-6 h-6 text-[#121826]" />}
                  </button>
                  {expandedCategories['Legal'] && (
                    <div className="px-6 pb-4 space-y-2">
                      {jobsByCategory['Legal'].map((job) => (
                        <div key={job.job_id} className="border-2 border-[#6CC0F9] rounded-lg">
                          <button
                            onClick={() => toggleJob(job.job_id)}
                            className="w-full px-4 py-3 flex items-center justify-between hover:bg-[#6CC0F9]/5 transition-colors"
                          >
                            <span className="font-semibold text-[#121826] text-left">{job.job_title} ({job.company})</span>
                            {expandedJobs[job.job_id] ? <ChevronDown className="w-5 h-5 text-[#6CC0F9] flex-shrink-0" /> : <ChevronRight className="w-5 h-5 text-[#6CC0F9] flex-shrink-0" />}
                          </button>
                          {expandedJobs[job.job_id] && (
                            <div className="px-4 pb-4 space-y-3 text-sm">
                              <div>
                                <p className="font-semibold text-[#121826]">Company:</p>
                                <p className="text-[#121826]">{job.company}</p>
                              </div>
                              <div>
                                <p className="font-semibold text-[#121826]">Location:</p>
                                <p className="text-[#121826]">{job.location}</p>
                              </div>
                              <div>
                                <p className="font-semibold text-[#121826]">Description:</p>
                                <p className="text-[#121826] whitespace-pre-line">{job.job_description}</p>
                              </div>
                              <div>
                                <p className="font-semibold text-[#121826]">Requirements:</p>
                                <p className="text-[#121826] whitespace-pre-line">{job.job_requirements}</p>
                              </div>
                              {job.job_preferred_skills && (
                                <div>
                                  <p className="font-semibold text-[#121826]">Preferred Skills:</p>
                                  <p className="text-[#121826] whitespace-pre-line">{job.job_preferred_skills}</p>
                                </div>
                              )}
                              <div>
                                <p className="font-semibold text-[#121826]">Link:</p>
                                <a href={job.link} target="_blank" rel="noopener noreferrer" className="text-[#8D34F6] hover:underline break-all">View on LinkedIn</a>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Sample CVs Section */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-[#121826] mb-4 text-center">Sample CVs</h3>
              <p className="text-[#121826] text-center mb-6">
                Below are 5 synthetic CV samples from our dataset. For privacy reasons, real candidate CVs are not publicly shared.
              </p>

              <div className="space-y-2">
                {cvSamples.map((cv) => (
                  <div key={cv.id} className="bg-white/90 backdrop-blur-md rounded-xl shadow-lg border-2 border-[#8D34F6]">
                    <button
                      onClick={() => toggleCV(cv.id)}
                      className="w-full px-6 py-4 flex items-center justify-between hover:bg-[#8D34F6]/5 transition-colors rounded-xl"
                    >
                      <span className="text-lg font-semibold text-[#121826]">{cv.name}</span>
                      {expandedCVs[cv.id] ? <ChevronDown className="w-6 h-6 text-[#8D34F6]" /> : <ChevronRight className="w-6 h-6 text-[#8D34F6]" />}
                    </button>
                    {expandedCVs[cv.id] && (
                      <div className="px-6 pb-4">
                        <iframe
                          src={`/HireVerse_Website/${cv.file}`}
                          className="w-full h-96 border-2 border-[#6CC0F9] rounded-lg"
                          title={`${cv.name} Resume`}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>

      <footer className="bg-white/30 backdrop-blur-sm border-t-2 border-[#8D34F6]">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <p className="text-center text-[#121826]">
            HireVerse.AI - Connecting talent with opportunity through intelligent matching
          </p>
        </div>
      </footer>
      </div>
    </div>
  );
}

export default App;
