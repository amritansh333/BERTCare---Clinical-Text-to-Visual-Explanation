'use client';

import { ArrowRight, ShieldCheck, FileSearch, PlayCircle, Star, MessageCircle, HelpCircle, ChevronRight, CheckCircle2, HeartPulse, Activity, Globe, Award, Hospital, Target, User, TrendingUp, MonitorCheck } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const sectionHeader = (title: string, subtitle: string) => (
  <div className="flex flex-col mb-16 text-left space-y-4 font-inter-tight">
    <span className="text-[12px] font-black uppercase tracking-[0.6em] text-primary bg-primary/5 px-6 py-2.5 rounded-sm border border-primary/20 w-max">{title}</span>
    <h2 className="text-6xl md:text-8xl font-black tracking-extratight uppercase leading-none text-primary">{subtitle}</h2>
    <div className="w-40 h-1 bg-primary/20 rounded-full" />
  </div>
);

export function Hero() {
  return (
    <section className="relative py-32 lg:py-8 bg-background overflow-hidden no-italic border-b border-foreground/10">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-32 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col items-start space-y-12"
          >
             <div className="flex items-center space-x-4 text-[12px] font-black uppercase tracking-[0.4em] text-primary/60 border-l-4 border-primary pl-6 py-2">
                <span>Clinical Integrity Platform — Diagnostic Protocol v.4.0</span>
             </div>
             
             <h3 className="text-7xl md:text-[6rem] font-black leading-[0.85] tracking-extratight uppercase text-primary">
                Clinical Text To<br />
                Visual <br />
                Explainer
             </h3>
             
             <div className="flex flex-col lg:flex-row lg:items-end gap-16 w-full pt-12 border-t border-foreground/10 pb-12">
                <p className="text-xl font-bold text-foreground/40 max-w-sm uppercase leading-tight tracking-[0.1em] italic no-italic">
                   Professional assessment for hospitals and clinical documentation synthesis. Precision ORIENTED.
                </p>

                <div className="flex flex-col space-y-2 border-l border-foreground/10 pl-12">
                   <div className="text-4xl font-black text-primary tracking-tighter">99.9%</div>
                   <div className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/40">OCR PRECISION SCALE</div>
                </div>
                
                <div className="flex flex-col space-y-2 border-l border-foreground/10 pl-12 pr-12">
                   <div className="text-4xl font-black text-primary tracking-tighter">100+</div>
                   <div className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/40">MEDICAL PARAMETERS</div>
                </div>
             </div>

             <Link
               href="/analyze"
               className="group flex flex-col items-start w-full transition-all border-b border-primary pb-8 hover:bg-primary hover:text-primary-foreground hover:px-12 hover:py-16 duration-700"
             >
                <div className="flex items-center justify-between w-full">
                  <span className="text-[14px] font-black uppercase tracking-[0.5em] mb-4 group-hover:opacity-40">Begin diagnostic pipeline</span>
                  <ArrowRight className="w-12 h-12 stroke-[3px] group-hover:translate-x-4 transition-transform duration-700" />
                </div>
                <span className="text-2xl font-black uppercase tracking-tighter group-hover:opacity-100 opacity-30">Initiate Protocol Protocol Protocol</span>
             </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            className="relative h-[800px] bg-foreground/5 p-4 border border-foreground/10 group overflow-hidden"
          >
            <div className="absolute top-8 left-8 z-10 flex flex-col space-y-2">
               <div className="p-4 bg-primary text-primary-foreground font-black text-[10px] tracking-widest uppercase rounded-sm border border-white/20">Active Analysis System</div>
               <div className="p-4 bg-background border border-foreground/10 font-black text-[10px] tracking-widest uppercase rounded-sm shadow-2xl">Hospital Tier Integration</div>
            </div>

            <Image
              src="/heropage.png"
              alt="Clinical Analytical Architecture"
              fill
              className="object-cover grayscale hover:grayscale-0 hover:scale-105 transition-all duration-1000"
              priority
            />

            <div className="absolute bottom-12 right-12 bg-background border border-foreground/10 p-10 max-w-[280px] shadow-3xl">
               <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-primary/10 flex items-center justify-center p-3">
                     <TrendingUp className="w-full h-full text-primary" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest leading-none text-primary">Efficiency Impact <br />Scale</span>
               </div>
               <div className="h-1.5 w-full bg-foreground/10 rounded-full mb-6">
                  <motion.div 
                     className="h-full bg-primary"
                     initial={{ width: '0%' }}
                     animate={{ width: '92%' }}
                     transition={{ duration: 2, delay: 1 }}
                  />
               </div>
               <p className="text-[11px] font-bold text-foreground/40 leading-snug uppercase tracking-widest">Bridging document complexity with clinical accessibility.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  const testimonials = [
    { name: 'Dr. James Wilson', role: 'CHIEF MEDICAL OFFICER', text: 'REDUCTION IN WAIT-TIME ANXIETY THROUGH PRECISE CLINICAL SYNTHESIS PIPELINE.', initial: 'JW' },
    { name: 'Prof. Sarah Mitchell', role: 'INSTITUTIONAL RADIOLOGY', text: 'BRIDGING TECHNICAL CLINICAL JARGON WITH PATIENT ORIENTATION IS A SYSTEMIC CORE.', initial: 'SM' },
    { name: 'Elite Health Group', role: 'STRATEGIC PARTNERSHIP', text: 'ACCURATE CLINICAL EXTRACTION PROVIDES VITAL PRE-CONSULTATION ACCESSIBILITY.', initial: 'EC' }
  ];

  return (
    <section className="py-48 bg-background relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        {sectionHeader("holder Synthesis", "Clinical Feedback Network")}
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-foreground/10">
          {testimonials.map((t, i) => (
            <div key={i} className="p-20 border-r border-foreground/10 first:border-l hover:bg-primary hover:text-primary-foreground group transition-colors duration-700">
               <div className="flex space-x-1 mb-16 opacity-40 group-hover:opacity-100 transition-opacity">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-primary text-primary group-hover:fill-white group-hover:text-white" />)}
               </div>
               <p className="text-3xl font-black tracking-extratight uppercase leading-[1.1] mb-20 group-hover:border-b border-primary-foreground pb-12 h-48">"{t.text}"</p>
               <div className="flex flex-col space-y-2 border-l-4 border-primary group-hover:border-primary-foreground pl-10 py-2">
                  <h4 className="text-[14px] font-black uppercase tracking-[0.2em]">{t.name}</h4>
                  <p className="text-[10px] font-black text-foreground/40 group-hover:text-primary-foreground/40 uppercase tracking-[0.4em]">{t.role}</p>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FAQSection() {
  const faqs = [
    { q: 'Security Protocols v.4.0?', a: 'Clinical data is processed in temporary isolation zones under institutional SHA-512 encryption, ensuring zero persistence in primary storage v4.' },
    { q: 'Imaging Precision Thresholds?', a: 'OCR thresholds exceed 99.8% precision for typewritten documents and 94% for legible handwritten clinical orientation scripts.' },
    { q: 'Consultation Limitations?', a: 'MEDCARE is a preliminary orientation instrument and does not constitute a legal diagnostic instrument. Physician review is mandatory.' }
  ];

  const [active, setActive] = useState<number | null>(0);

  return (
    <section className="py-48 bg-foreground/5 relative no-italic border-y border-foreground/10">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-32">
           <div>
             {sectionHeader("Institutional Support", "Guideline FAQ")}
             <p className="text-xl font-bold uppercase text-foreground/40 leading-relaxed max-w-md tracking-widest">
               Access high-precision operational clinical support guidelines and policy documentation.
             </p>
           </div>
           
           <div className="flex flex-col space-y-8 bg-background p-20 border border-foreground/10 shadow-3xl">
              {faqs.map((faq, i) => (
                <div key={i} className="pb-8 border-b border-foreground/10 last:border-0 last:pb-0">
                  <button 
                    onClick={() => setActive(active === i ? null : i)}
                    className="w-full flex items-center justify-between text-left group"
                  >
                    <span className="text-[14px] font-black uppercase tracking-[0.4em] transition-all group-hover:pl-4 group-hover:text-primary">{faq.q}</span>
                    <div className="w-10 h-10 border border-foreground/10 flex items-center justify-center transition-all group-hover:bg-primary group-hover:text-primary-foreground">
                       <ChevronRight className={cn("w-5 h-5 transition-transform duration-500", active === i ? "rotate-90" : "")} />
                    </div>
                  </button>
                  <AnimatePresence>
                     {active === i && (
                        <motion.div
                           initial={{ height: 0, opacity: 0 }}
                           animate={{ height: 'auto', opacity: 1 }}
                           exit={{ height: 0, opacity: 0 }}
                           className="pt-10 overflow-hidden"
                        >
                           <p className="text-[14px] font-bold text-foreground/60 leading-relaxed uppercase tracking-[0.2em] border-l-2 border-primary pl-8">
                              {faq.a}
                           </p>
                        </motion.div>
                     )}
                  </AnimatePresence>
                </div>
              ))}
           </div>
        </div>
      </div>
    </section>
  );
}
