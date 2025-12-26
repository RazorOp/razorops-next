export default function Home() {
  return (
    <div className="min-h-screen bg-black text-slate-200 selection:bg-purple-500 selection:text-white font-sans">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/20 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/20 blur-[120px] rounded-full"></div>
        </div>

        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 animate-fade-in">
            <span className="flex h-2 w-2 rounded-full bg-purple-500"></span>
            <span className="text-xs font-bold tracking-widest uppercase text-purple-300">New: Autonomous Cost Guardrails</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] mb-8 tracking-tight">
            Stop Overpaying for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8E2DE2] via-[#6a11cb] to-[#4A00E0]">
              Kubernetes Resources.
            </span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-10 leading-relaxed">
            The first AI Agent for K8s that doesn't just "recommend" <br/> Razorops <strong>automatically applies</strong> performance and cost-saving changes in real-time.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-10 py-4 bg-white text-black font-bold rounded-xl hover:bg-slate-200 transition-all text-lg shadow-xl">
              Launch Free Audit
            </button>
            <button className="w-full sm:w-auto px-10 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 transition-all text-lg backdrop-blur-sm">
              Watch Demo
            </button>
          </div>

          {/* Social Proof Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto border-t border-white/10 pt-10">
            <div>
              <p className="text-3xl font-bold text-white">40%+</p>
              <p className="text-sm text-slate-500 uppercase tracking-wider font-semibold">Avg. Savings</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">2.5k</p>
              <p className="text-sm text-slate-500 uppercase tracking-wider font-semibold">Clusters Managed</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">99.9%</p>
              <p className="text-sm text-slate-500 uppercase tracking-wider font-semibold">Uptime Kept</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">15m</p>
              <p className="text-sm text-slate-500 uppercase tracking-wider font-semibold">Setup Time</p>
            </div>
          </div>

        </div>
      </section>

      {/* --- DASHBOARD PREVIEW --- */}
      <section className="py-10">
        <div className="container mx-auto px-6">
          <div className="relative group p-1 rounded-2xl bg-gradient-to-b from-white/20 to-transparent">
             <div className="bg-[#050505] rounded-xl overflow-hidden shadow-2xl border border-white/5">
                {/* Mock Browser/Dashboard UI */}
                <div className="bg-white/5 border-b border-white/5 px-4 py-3 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                  </div>
                  <div className="bg-white/5 rounded-md px-3 py-1 text-[10px] text-slate-500 ml-4 font-mono">
                    app.razorops.com/cluster-01/optimization
                  </div>
                </div>
                <div className="p-4 md:p-8">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="col-span-2 space-y-6">
                       <div className="h-64 bg-white/5 rounded-lg relative overflow-hidden flex items-end px-4 gap-2">
                          {[40, 70, 45, 90, 65, 85, 30, 55, 40, 20].map((h, i) => (
                            <div
                              key={i}
                              className="flex-1 bg-gradient-to-t from-purple-500 to-blue-500 rounded-t-sm animate-pulse"
                              style={{ height: `${h}%`, animationDelay: `${i * 0.1}s` }}
                            ></div>
                          ))}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-white/50 font-bold text-4xl italic">AI Scaling in Action</span>
                          </div>
                       </div>
                       <div className="grid grid-cols-2 gap-4">
                          <div className="p-4 bg-white/5 rounded-lg border border-white/5">
                            <p className="text-xs text-slate-500 mb-1">Efficiency Score</p>
                            <p className="text-2xl font-bold text-green-400">94.8%</p>
                          </div>
                          <div className="p-4 bg-white/5 rounded-lg border border-white/5">
                            <p className="text-xs text-slate-500 mb-1">Projected Monthly Saving</p>
                            <p className="text-2xl font-bold text-white">$14,240</p>
                          </div>
                       </div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-6 border border-white/5">
                       <h4 className="font-bold text-white mb-4 flex items-center gap-2">
                         <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                         Live Audit Log
                       </h4>
                       <div className="space-y-4 text-xs font-mono">
                          <div className="text-green-400 opacity-80">[Applied] Resized pod-api-01 → CPU limit -30%</div>
                          <div className="text-blue-400 opacity-80">[Action] Scaling down worker-node-03 (Idle)</div>
                          <div className="text-purple-400 opacity-80">[Analysing] Peak traffic detected in US-East-1</div>
                          <div className="text-slate-500">[Idle] Standing by for next deployment...</div>
                       </div>
                    </div>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* --- FEATURES GRID --- */}
      <section id="features" className="py-24 bg-gradient-to-b from-black to-[#050505]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-purple-400 font-bold tracking-widest uppercase text-sm mb-4">Enterprise-Grade Performance</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Built for the complexity of K8s.</h3>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Most tools tell you what's wrong. Razorops is the first autonomous agent that acts on your behalf.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all group">
              <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center text-purple-500 mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Auto-Apply Changes</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Set policies and let our AI agent automatically resize pods, adjust limits, and kill idle resources. Safety guardrails included.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all group">
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-500 mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Predictive Costing</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Understand your bill before it arrives. Our ML models predict future spend based on deployment trends and traffic spikes.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all group">
              <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center text-green-500 mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Security Guardrails</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Optimization never compromises security. Every change is checked against your RBAC and security policies before execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- INTEGRATIONS --- */}
      <section className="py-20 border-y border-white/5">
        <div className="container mx-auto px-6 text-center">
          <p className="text-slate-500 font-bold text-xs uppercase tracking-[0.3em] mb-12">DEPLOYS ANYWHERE</p>
          <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all">
             <div className="text-2xl font-black text-white italic tracking-tighter">AWS EKS</div>
             <div className="text-2xl font-black text-white italic tracking-tighter">GCP GKE</div>
             <div className="text-2xl font-black text-white italic tracking-tighter">AZURE AKS</div>
             <div className="text-2xl font-black text-white italic tracking-tighter">OPENSHIFT</div>
          </div>
        </div>
      </section>

      {/* --- CTA / SIGNUP SECTION --- */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/20 via-black to-blue-900/20 -z-10"></div>
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="bg-gradient-to-r from-[#8E2DE2] to-[#4A00E0] rounded-[2rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
            {/* Glossy overlay effect */}
            <div className="absolute inset-0 bg-white/5 backdrop-blur-[2px]"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6">Scale Smarter, <br />Spend Less.</h2>
              <p className="text-white/80 text-lg md:text-xl mb-12 max-w-xl mx-auto">
                Join 500+ engineering teams using Razorops to master their Kubernetes infrastructure.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                 <input 
                  type="email" 
                  placeholder="Enter your work email" 
                  className="bg-white px-6 py-4 rounded-xl text-black font-medium focus:outline-none focus:ring-4 focus:ring-purple-300 w-full sm:w-80"
                 />
                 <button className="bg-black text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-900 transition-all shadow-xl">
                   Get Access Now
                 </button>
              </div>
              <p className="text-white/50 text-xs mt-6">No credit card required • Free trial for 60 days • Unlimited clusters</p>
            </div>
          </div>
        </div>
      </section>

     

      
    </div>
  );
}