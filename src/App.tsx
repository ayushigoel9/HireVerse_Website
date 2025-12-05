import { FileText, Sparkles, Zap, Target, Database, Brain } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-purple-50 to-pink-50">
      <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <img src="/logo.png" alt="Hireverse.AI" className="h-12" />
          <div className="flex gap-4">
            <a href="https://github.com/ayushigoel9/HireVerse_AWS" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:text-cyan-700 font-medium">GitHub</a>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Hire <span className="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">Top Talent</span>
          </h2>
          <p className="text-lg text-gray-600 italic mb-6">Precise. Transparent. Fair.</p>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Connect talented professionals with their dream opportunities through our intelligent matching platform.
            Whether you're seeking your next career move or looking for the perfect candidate, we make the process seamless.
          </p>
        </div>

        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Target className="w-8 h-8 text-cyan-600" />
            <h3 className="text-3xl font-bold text-gray-900">Problem Statement & Motivation</h3>
          </div>
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-purple-100">
            <p className="text-gray-700 leading-relaxed mb-6">
              The current job application process faces significant challenges that affect both candidates and recruiters.
              Applicants experience frustration when applying to positions that appear to be perfect matches, only to receive
              no response. The core issues include:
            </p>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <span className="text-cyan-600 font-bold mt-1">•</span>
                <div>
                  <strong className="text-gray-900">Applicant Tracking Systems (ATS) Dominance:</strong>
                  <span className="text-gray-700"> Almost every company uses ATS software to automate and manage recruitment,
                  which filters out up to 75% of resumes before human recruiters ever review them.</span>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-purple-600 font-bold mt-1">•</span>
                <div>
                  <strong className="text-gray-900">Keyword-Driven Filtering:</strong>
                  <span className="text-gray-700"> Traditional ATS tools rely heavily on exact keyword matching. Even highly
                  qualified candidates can be overlooked if their resume wording doesn't precisely match the system's expectations.</span>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-pink-600 font-bold mt-1">•</span>
                <div>
                  <strong className="text-gray-900">Resume Customization Burden:</strong>
                  <span className="text-gray-700"> Candidates must customize their CV for every single job application to optimize
                  ATS scores, making job hunting itself a full-time job. What appears as a strong match in one application scores
                  poorly in another similar position simply due to wording differences.</span>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-orange-500 font-bold mt-1">•</span>
                <div>
                  <strong className="text-gray-900">Inconsistent Matching:</strong>
                  <span className="text-gray-700"> Tools that mimic ATS behavior (like Jobscan) reveal that match scores fluctuate
                  dramatically between similar jobs, not due to skill gaps but because of phrasing mismatches.</span>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Sparkles className="w-8 h-8 text-purple-600" />
            <h3 className="text-3xl font-bold text-gray-900">Value Proposition</h3>
          </div>
          <div className="bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 rounded-2xl shadow-lg p-8 text-white">
            <p className="text-lg leading-relaxed">
              HireVerse removes the resume fine-tuning problem by allowing candidates to apply blindly, matching is based purely
              on who they are, not how well they manipulate keywords. The system combines mathematical scoring with LLM intelligence
              to identify skills regardless of phrasing, creating fair, consistent, and genuinely reflective candidate-job matches.
            </p>
          </div>
        </section>

        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Zap className="w-8 h-8 text-pink-600" />
            <h3 className="text-3xl font-bold text-gray-900">Demo</h3>
          </div>
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-purple-100">
            <div className="aspect-video bg-gradient-to-br from-yellow-100 via-purple-100 to-pink-100 rounded-xl flex items-center justify-center">
              <p className="text-gray-500 text-lg">[Demo Video]</p>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <FileText className="w-8 h-8 text-cyan-600" />
            <h3 className="text-3xl font-bold text-gray-900">Product Architecture Description</h3>
          </div>
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-purple-100">
            <p className="text-gray-700 leading-relaxed mb-6">
              HireVerse is built entirely on AWS, leveraging Bedrock AgentCore, a state-of-the-art framework that orchestrates
              specialized AI agents.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-xl p-6 border border-cyan-200">
                <h4 className="font-bold text-gray-900 mb-2">Isolated Environments</h4>
                <p className="text-gray-700 text-sm">Each team member gets their own S3 buckets, Lambda functions, and AgentCore agents—no shared resources, no deployment conflicts</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
                <h4 className="font-bold text-gray-900 mb-2">Cost-Efficient</h4>
                <p className="text-gray-700 text-sm">Entire system built and tested for approximately the cost of a cup of coffee</p>
              </div>
              <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-6 border border-pink-200">
                <h4 className="font-bold text-gray-900 mb-2">Simple Deployment</h4>
                <p className="text-gray-700 text-sm">One-command deployment process</p>
              </div>
              <div className="bg-gradient-to-br from-yellow-50 to-orange-100 rounded-xl p-6 border border-orange-200">
                <h4 className="font-bold text-gray-900 mb-2">API Gateway</h4>
                <p className="text-gray-700 text-sm">Handles incoming API calls and triggers processing pipelines. Easy to integrate with any platform or frontend</p>
              </div>
            </div>
            <p className="text-gray-700">
              For details, see the{' '}
              <a
                href="https://github.com/ayushigoel9/HireVerse_AWS"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-600 hover:text-cyan-700 font-medium underline"
              >
                GitHub documentation
              </a>
            </p>
          </div>
        </section>

        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Database className="w-8 h-8 text-purple-600" />
            <h3 className="text-3xl font-bold text-gray-900">Data</h3>
          </div>

          <div className="space-y-8">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-purple-100">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Data Sources</h4>
              <p className="text-gray-700">CVs</p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-purple-100">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">Data Pipeline</h4>

              <div className="mb-8">
                <h5 className="text-xl font-semibold text-gray-900 mb-3">CV Processing</h5>
                <p className="text-gray-700 leading-relaxed">
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
                <h5 className="text-xl font-semibold text-gray-900 mb-3">Job Description Processing</h5>
                <p className="text-gray-700 leading-relaxed">
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

        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Brain className="w-8 h-8 text-pink-600" />
            <h3 className="text-3xl font-bold text-gray-900">Machine Learning Techniques</h3>
          </div>
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-purple-100">
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Evaluation Framework</h4>
                <p className="text-gray-700 leading-relaxed">
                  To build an effective matching system, the team established a rigorous evaluation framework using 5 real, manually labeled
                  CVs categorized by job family, paired with 100 job descriptions across three categories: Legal & Accounting, Data Science,
                  and Software Engineering. This dataset served as the foundation for evaluating all matching iterations. The data preparation
                  process involved parsing and cleaning both CVs and job descriptions, extracting text, and normalizing structure. The team then
                  tested three matching approaches: a baseline using CareerBERT embeddings, an improved version using AWS Titan, and finally a
                  full multi-stage matching pipeline.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Evaluation Methods</h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The evaluation process used three complementary methods to provide a comprehensive assessment of performance:
                </p>
                <ul className="space-y-3">
                  <li className="flex gap-4">
                    <span className="text-cyan-600 font-bold mt-1">1.</span>
                    <div>
                      <strong className="text-gray-900">Job-Family Classification Accuracy:</strong>
                      <span className="text-gray-700"> Tested whether models matched CVs to the correct job families by having each model
                      produce top 40 recommendations per CV, with accuracy computed across all 40 jobs.</span>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-purple-600 font-bold mt-1">2.</span>
                    <div>
                      <strong className="text-gray-900">LLM-as-a-Judge:</strong>
                      <span className="text-gray-700"> Used a separate model to score the top 5 recommendations for each candidate, evaluating
                      seniority, domain alignment, and overall fit.</span>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-pink-600 font-bold mt-1">3.</span>
                    <div>
                      <strong className="text-gray-900">Human Candidate Feedback:</strong>
                      <span className="text-gray-700"> Real candidates reviewed their top 5 recommended jobs and rated relevance based on
                      their career goals and context.</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 via-purple-50 to-pink-50 rounded-xl p-6 mt-6 border border-purple-200">
                <p className="text-gray-700 italic">[Final results and key learnings will be added here]</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t border-gray-200 mt-20">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <p className="text-center text-gray-600">
            Hireverse.AI - Connecting talent with opportunity through intelligent matching
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
