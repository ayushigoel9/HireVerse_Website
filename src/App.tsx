import { FileText, Sparkles, Zap, Target, Database, Brain, Users } from 'lucide-react';
import { useState } from 'react';

function App() {
  const [activeTab, setActiveTab] = useState('home');

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
        <nav className="bg-white/95 backdrop-blur-md shadow-md sticky top-0 z-50 border-b-2 border-[#6CC0F9]">
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
                className="px-6 py-4 font-semibold text-[#337295] hover:text-[#8D34F6] hover:bg-[#8D34F6]/5 transition-all flex items-center gap-2"
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
                <h1 className="text-8xl font-bold text-[#121826]">
                  HireVerse<span className="text-[#6CC0F9]">.</span><span className="text-[#FF6C5C]">A</span><span className="text-[#E8F77B]" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3), -1px -1px 2px rgba(255,255,255,0.5)' }}>i</span>
                </h1>
              </div>
              <p className="text-3xl text-[#121826] italic mb-8 font-semibold">Precise. Transparent. Fair.</p>
              <p className="text-2xl text-[#121826] max-w-5xl mx-auto leading-relaxed">
                Connecting talented professionals with their dream opportunities through intelligent AI-powered matching.
                No more keyword games—just fair, transparent job matching that sees your true potential.
              </p>
            </div>
          </div>
        )}

        {/* MOTIVATION TAB */}
        {activeTab === 'motivation' && (
          <div className="max-w-7xl mx-auto px-6 py-12">
            <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Target className="w-8 h-8 text-[#6CC0F9]" />
            <h3 className="text-3xl font-bold text-[#121826]">Problem Statement & Motivation</h3>
          </div>
          <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-8 border-2 border-[#8D34F6]">
            <p className="text-[#121826] leading-relaxed mb-6 text-lg">
              The job application process is broken. Qualified candidates apply to perfect-match positions and hear nothing back.
              Meanwhile, recruiters drown in applications they'll never see. Why?
            </p>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <span className="text-[#6CC0F9] font-bold mt-1 text-2xl">•</span>
                <div>
                  <strong className="text-[#121826] text-lg">ATS Dominance:</strong>
                  <span className="text-[#121826]"> 75% of resumes are filtered out by automated systems before any human sees them.</span>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-[#8D34F6] font-bold mt-1 text-2xl">•</span>
                <div>
                  <strong className="text-[#121826] text-lg">Keyword Tyranny:</strong>
                  <span className="text-[#121826]"> Traditional ATS relies on exact keyword matching. Highly qualified candidates get rejected because they wrote "managed" instead of "led."</span>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-[#FF6C5C] font-bold mt-1 text-2xl">•</span>
                <div>
                  <strong className="text-[#121826] text-lg">Resume Gaming:</strong>
                  <span className="text-[#121826]"> Job seekers spend hours tailoring each resume to trick the algorithm, turning job hunting into a full-time job itself.</span>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-[#E8F77B] font-bold mt-1 text-2xl">•</span>
                <div>
                  <strong className="text-[#121826] text-lg">Inconsistent Scoring:</strong>
                  <span className="text-[#121826]"> The same resume scores wildly different on similar jobs—not due to skill gaps, but phrasing mismatches.</span>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Sparkles className="w-8 h-8 text-[#8D34F6]" />
            <h3 className="text-3xl font-bold text-[#121826]">Value Proposition</h3>
          </div>
          <div className="bg-gradient-to-br from-[#6CC0F9] via-[#8D34F6] to-[#FF6C5C] rounded-2xl shadow-2xl p-8 text-white border-2 border-[#8D34F6]">
            <p className="text-xl leading-relaxed font-medium">
              HireVerse.AI eliminates the resume-gaming problem. Candidates apply once with their authentic profile—no keyword manipulation required.
              Our system combines semantic understanding with AI intelligence to match skills regardless of phrasing, creating fair,
              consistent matches that reflect true potential, not resume-writing prowess.
            </p>
          </div>
        </section>
          </div>
        )}

        {/* ABOUT US TAB */}
        {activeTab === 'about' && (
          <div className="max-w-7xl mx-auto px-6 py-12">
            <h2 className="text-4xl font-bold text-[#121826] mb-8 text-center">About Our Team</h2>
            <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-12 border-2 border-[#8D34F6]">
              <p className="text-[#121826] text-lg text-center mb-4">
                [Team information will be added here]
              </p>
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
                  No complex setup, no manual configuration—just instant access to a fully functional development environment.
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
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-8">
                <Brain className="w-8 h-8 text-[#FF6C5C]" />
                <h2 className="text-4xl font-bold text-[#121826]">Methodology</h2>
              </div>
              <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-8 border-2 border-[#8D34F6]">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold text-[#121826] mb-3">Evaluation Framework</h4>
                    <p className="text-[#121826] leading-relaxed">
                      To build an effective matching system, the team established a rigorous evaluation framework using 5 real, manually labeled
                      CVs categorized by job family, paired with 100 job descriptions across three categories: Legal & Accounting, Data Science,
                      and Software Engineering. This dataset served as the foundation for evaluating all matching iterations. The data preparation
                      process involved parsing and cleaning both CVs and job descriptions, extracting text, and normalizing structure. The team then
                      tested three matching approaches: a baseline using CareerBERT embeddings, an improved version using AWS Titan, and finally a
                      full multi-stage matching pipeline.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-[#121826] mb-3">Evaluation Methods</h4>
                    <p className="text-[#121826] leading-relaxed mb-4">
                      The evaluation process used three complementary methods to provide a comprehensive assessment of performance:
                    </p>
                    <ul className="space-y-3">
                      <li className="flex gap-4">
                        <span className="text-[#6CC0F9] font-bold mt-1">1.</span>
                        <div>
                          <strong className="text-[#121826]">Job-Family Classification Accuracy:</strong>
                          <span className="text-[#121826]"> Tested whether models matched CVs to the correct job families by having each model
                          produce top 40 recommendations per CV, with accuracy computed across all 40 jobs.</span>
                        </div>
                      </li>
                      <li className="flex gap-4">
                        <span className="text-[#8D34F6] font-bold mt-1">2.</span>
                        <div>
                          <strong className="text-[#121826]">LLM-as-a-Judge:</strong>
                          <span className="text-[#121826]"> Used a separate model to score the top 5 recommendations for each candidate, evaluating
                          seniority, domain alignment, and overall fit.</span>
                        </div>
                      </li>
                      <li className="flex gap-4">
                        <span className="text-[#FF6C5C] font-bold mt-1">3.</span>
                        <div>
                          <strong className="text-[#121826]">Human Candidate Feedback:</strong>
                          <span className="text-[#121826]"> Real candidates reviewed their top 5 recommended jobs and rated relevance based on
                          their career goals and context.</span>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-[#CAB9D0]/50 via-[#8D34F6]/20 to-[#6CC0F9]/30 rounded-xl p-6 mt-6 border-2 border-[#8D34F6]">
                    <p className="text-[#121826] italic">[Final results and key learnings will be added here]</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* DATA TAB */}
        {activeTab === 'data' && (
          <div className="max-w-7xl mx-auto px-6 py-12">
          <section>
            <div className="flex items-center gap-3 mb-8">
              <Database className="w-8 h-8 text-[#8D34F6]" />
              <h2 className="text-4xl font-bold text-[#121826]">Data</h2>
            </div>
            <div className="space-y-8">
              <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-8 border-2 border-[#FF6C5C]">
                <h4 className="text-2xl font-bold text-[#121826] mb-4">Data Sources</h4>
                <p className="text-[#121826]">CVs</p>
              </div>

              <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-8 border-2 border-[#6CC0F9]">
                <h4 className="text-2xl font-bold text-[#121826] mb-6">Data Pipeline</h4>

                <div className="mb-8">
                  <h5 className="text-xl font-semibold text-[#121826] mb-3">CV Processing</h5>
                  <p className="text-[#121826] leading-relaxed">
                    When a candidate uploads their resume, the CV processing pipeline initiates a sophisticated multi-stage workflow
                    orchestrated by a top-level system coordinator. Apache Tika first converts the PDF into clean, machine-readable text,
                    which then undergoes a deterministic preprocessing step that normalizes the output into a structured base JSON format.
                    The intelligence layer follows, deploying six specialized LLM-powered agents, each focused on extracting specific resume
                    sections: personal information, professional experience, projects, education, technical and soft skills, and certifications
                    and languages. The orchestrator then merges all agent outputs into a single, rich JSON document that comprehensively
                    captures the candidate's profile. Finally, this structured result is stored in S3 and returned to the frontend, enabling
                    instant population of the candidate's profile page with accurately parsed information.
                  </p>
                </div>

                <div>
                  <h5 className="text-xl font-semibold text-[#121826] mb-3">Job Description Processing</h5>
                  <p className="text-[#121826] leading-relaxed">
                    The job description processing follows a parallel structured approach, beginning with a hand-curated dataset of 100
                    high-quality job descriptions that have been carefully selected to represent diverse roles and industries. Each job
                    description is converted into a structured JSON format containing four key sections: the job title, the role description
                    providing an overview of responsibilities and expectations, the required or minimum competencies that candidates must possess,
                    and the nice-to-have skills that are preferred but not mandatory when available. All job JSONs are systematically stored in S3,
                    creating a well-organized repository that is ready for efficient matching against candidate profiles through the matching engine.
                  </p>
                </div>
              </div>
            </div>
          </section>
          </div>
        )}
      </main>

      <footer className="bg-white/90 backdrop-blur-md border-t-2 border-[#8D34F6]">
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
