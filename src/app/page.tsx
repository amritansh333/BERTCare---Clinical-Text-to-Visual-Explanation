import { Hero, Testimonials, FAQSection } from '@/components/home/HomeComponents';
import { Target, ShieldCheck, PlayCircle, HelpCircle, ArrowRight, User, Stethoscope, CheckCircle2, HeartPulse, Activity } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col relative no-italic">
      <Hero />
      
      {/* Mid-section with Waverly Editorial Dividers */}
      <section className="py-48 bg-background no-italic border-b border-foreground/10">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
           <div className="flex flex-col lg:flex-row items-stretch border border-foreground/10 h-auto lg:h-[600px]">
              
              <div className="lg:w-1/2 p-24 lg:p-32 space-y-16 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-foreground/10">
                 <div className="flex items-center space-x-6 text-[12px] font-black uppercase tracking-[0.4em] text-primary">
                    <Stethoscope className="w-6 h-6 stroke-[3px]" />
                    <span>Clinical Interface v.2.0</span>
                 </div>
                 <h2 className="text-6xl md:text-8xl font-black tracking-extratight uppercase leading-none text-primary">Trust <br />Through <br />Clarity</h2>
                 <p className="text-xl font-bold text-foreground/40 leading-[1.4] uppercase tracking-widest max-w-sm">
                    Institutional-grade synthesis engine for clinical document transparency.
                 </p>
                 <Link href="/case-studies" className="inline-flex items-center space-x-6 text-[14px] font-black border-b-2 border-primary hover:bg-primary hover:text-primary-foreground hover:px-10 py-4 transition-all uppercase tracking-widest group">
                    <span>Analyze Institutional Case Studies</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-4 transition-transform duration-500" />
                 </Link>
              </div>

              <div className="lg:w-1/2 grid grid-cols-2 bg-foreground/5 overflow-hidden">
                 {[1,2,3,4].map(i => (
                    <div key={i} className="border-b border-r border-foreground/10 p-24 flex flex-col items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all group duration-700">
                       <Activity className="w-16 h-16 text-primary group-hover:text-primary-foreground opacity-20 group-hover:opacity-100 transition-all duration-700" />
                       <span className="mt-8 text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 duration-700">Clinical Data Stream</span>
                    </div>
                 ))}
              </div>
           </div>
        </div>
      </section>

      <Testimonials />
      
      <FAQSection />

      {/* Overhauled Access/Join section with Waverly Editorial Boldness */}
      <section className="py-48 bg-primary no-italic overflow-hidden relative">
         <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-32">
               <div className="max-w-4xl space-y-12">
                  <span className="text-[14px] font-black uppercase tracking-[0.6em] text-primary-foreground/40 border-l border-primary-foreground/20 pl-8">Access Portal Integration</span>
                  <h2 className="text-7xl md:text-[10rem] font-black tracking-extratight text-primary-foreground leading-[0.8] uppercase select-none">
                     Scale <br /> Better <br /> Health
                  </h2>
               </div>
               
               <div className="w-full max-w-2xl bg-primary-foreground/5 p-16 lg:p-24 border border-primary-foreground/10 space-y-16 shadow-[0_80px_100px_-20px_rgba(0,0,0,0.5)]">
                  <div>
                    <h3 className="text-3xl font-black uppercase tracking-tighter text-primary-foreground mb-4">Onboarding Platform</h3>
                    <p className="text-[12px] font-bold text-primary-foreground/40 uppercase tracking-[0.3em]">Join 50k+ Clinical Professionals across the network v4.1</p>
                  </div>
                  
                  <div className="space-y-6">
                    <input 
                      type="email" 
                      placeholder="Verified Email for Institutional Access" 
                      className="w-full bg-primary-foreground/10 text-primary-foreground p-8 text-[14px] font-black tracking-widest outline-none border border-primary-foreground/20 focus:border-primary-foreground/60 transition-all uppercase placeholder:text-primary-foreground/20"
                    />
                    <button className="w-full bg-primary-foreground text-primary p-10 font-black text-xl hover:opacity-90 active:scale-[0.98] transition-all uppercase tracking-[0.2em] shadow-3xl">
                       Access Dashboard
                    </button>
                  </div>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}
