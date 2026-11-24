import React from 'react';
import { motion } from 'framer-motion';

// Visual 1: AI Evaluation System - OCR & AI Grading Sheet
export const AiEvaluationVisual = () => (
  <div className="w-full h-full min-h-[280px] bg-gradient-to-br from-[#1a1a1a] to-[#111111] p-6 flex flex-col justify-between text-off-white relative overflow-hidden select-none border border-white/10 rounded-sm">
    {/* Subtle Grid */}
    <div className="absolute inset-0 bg-[radial-gradient(#7A1F2B_1px,transparent_1px)] [background-size:16px_16px] opacity-25" />
    
    {/* Header status */}
    <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-3">
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-[10px] uppercase font-mono tracking-widest text-white/70">OCR Engine: Active</span>
      </div>
      <span className="text-[10px] font-mono uppercase bg-[#7A1F2B]/60 text-white px-2 py-0.5 rounded border border-[#7A1F2B]">
        100 Papers Batch
      </span>
    </div>

    {/* Center Mock Answer Sheet with OCR Bounding Boxes */}
    <div className="relative z-10 my-auto py-2">
      <div className="bg-white/5 border border-white/10 rounded p-4 relative backdrop-blur-sm">
        {/* Animated Scan Line */}
        <motion.div 
          className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#7A1F2B] to-transparent z-20"
          animate={{ top: ['0%', '100%', '0%'] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />

        <div className="flex items-center justify-between mb-3 text-[11px] font-mono text-white/50 border-b border-white/5 pb-2">
          <span>DOC: EXAM_PAPER_#042</span>
          <span className="text-emerald-400 font-semibold">CONFIDENCE: 98.4%</span>
        </div>

        {/* Answer Lines with Detection Boxes */}
        <div className="space-y-2">
          <div className="relative p-1.5 rounded border border-emerald-500/40 bg-emerald-500/5 flex items-center justify-between">
            <span className="text-xs font-serif italic text-white/90">"The transformer model uses multi-head self-attention..."</span>
            <span className="text-[10px] font-mono bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded ml-2 shrink-0">Score: 5/5</span>
          </div>

          <div className="relative p-1.5 rounded border border-[#7A1F2B]/60 bg-[#7A1F2B]/10 flex items-center justify-between">
            <span className="text-xs font-serif italic text-white/80">"Gradient descent optimizes loss by taking iterative steps..."</span>
            <span className="text-[10px] font-mono bg-[#7A1F2B]/40 text-amber-200 px-1.5 py-0.5 rounded ml-2 shrink-0">Score: 4.5/5</span>
          </div>
        </div>
      </div>
    </div>

    {/* Footer Architecture Stats */}
    <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-white/60 pt-3 border-t border-white/10">
      <span>PIPELINE: OCR → LLM → TEACHER VERIFY</span>
      <span className="text-[#c75d69]">MODE: HUMAN-IN-THE-LOOP</span>
    </div>
  </div>
);

// Visual 2: Nucleus - GenAI Context Compression Engine
export const NucleusVisual = () => (
  <div className="w-full h-full min-h-[280px] bg-gradient-to-br from-[#0d131f] to-[#080b12] p-6 flex flex-col justify-between text-off-white relative overflow-hidden select-none border border-cyan-900/40 rounded-sm">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#152033_1px,transparent_1px),linear-gradient(to_bottom,#152033_1px,transparent_1px)] bg-[size:24px_24px] opacity-40" />
    
    <div className="relative z-10 flex items-center justify-between border-b border-cyan-800/30 pb-3">
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
        <span className="text-[10px] uppercase font-mono tracking-widest text-cyan-200">Nucleus Engine v2.0</span>
      </div>
      <span className="text-[10px] font-mono bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded border border-amber-500/40">
        InnovaHack Finalist
      </span>
    </div>

    {/* Two-Stage Compression Flow */}
    <div className="relative z-10 my-auto py-2">
      <div className="grid grid-cols-3 gap-2 items-center text-center">
        {/* Stage 1: Input */}
        <div className="bg-cyan-950/40 border border-cyan-700/30 rounded p-3">
          <div className="text-[10px] font-mono text-cyan-400 uppercase mb-1">Raw Context</div>
          <div className="text-lg font-serif font-semibold text-white">200,000</div>
          <div className="text-[9px] text-white/50 font-mono">chars window</div>
        </div>

        {/* Arrow & Compressor Core */}
        <div className="flex flex-col items-center">
          <motion.div 
            className="w-10 h-10 rounded-full border border-cyan-400/60 bg-cyan-500/10 flex items-center justify-center text-[10px] font-mono text-cyan-300 mb-1"
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
          >
            ⚡
          </motion.div>
          <span className="text-[9px] font-mono uppercase text-cyan-300">2-Stage Chunk</span>
        </div>

        {/* Stage 2: Optimized Output */}
        <div className="bg-emerald-950/40 border border-emerald-600/40 rounded p-3">
          <div className="text-[10px] font-mono text-emerald-400 uppercase mb-1">Preserved</div>
          <div className="text-lg font-serif font-semibold text-emerald-200">99.2%</div>
          <div className="text-[9px] text-white/50 font-mono">semantic recall</div>
        </div>
      </div>

      <div className="mt-3 bg-white/5 border border-white/10 rounded px-3 py-1.5 flex items-center justify-between text-[10px] font-mono">
        <span className="text-white/60">Capacity Multiplier:</span>
        <span className="text-cyan-300 font-semibold">500 → 200,000 Chars (400x)</span>
      </div>
    </div>

    <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-white/60 pt-3 border-t border-cyan-800/30">
      <span>STACK: FASTAPI + PYDANTIC</span>
      <span className="text-cyan-300">EMBEDDING CHUNKER</span>
    </div>
  </div>
);

// Visual 3: FactForge - Multi-Agent Fact Verification System
export const FactForgeVisual = () => (
  <div className="w-full h-full min-h-[280px] bg-gradient-to-br from-[#12161f] to-[#0c0d12] p-6 flex flex-col justify-between text-off-white relative overflow-hidden select-none border border-violet-900/30 rounded-sm">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-900/20 via-transparent to-transparent opacity-50" />

    <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-3">
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
        <span className="text-[10px] uppercase font-mono tracking-widest text-violet-300">Multi-Agent Swarm</span>
      </div>
      <span className="text-[10px] font-mono bg-violet-500/20 text-violet-200 px-2 py-0.5 rounded border border-violet-500/30">
        Grok API + OCR
      </span>
    </div>

    {/* Multi-Agent Architecture Graph */}
    <div className="relative z-10 my-auto py-2">
      <div className="space-y-2">
        <div className="flex items-center justify-between bg-white/5 border border-white/10 rounded p-2 text-xs">
          <div className="flex items-center gap-2">
            <span className="text-violet-400 font-mono text-[10px]">AGENT A</span>
            <span className="text-white/90 font-medium">Research & Retrieval</span>
          </div>
          <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">Indexed</span>
        </div>

        <div className="flex items-center justify-between bg-white/5 border border-white/10 rounded p-2 text-xs">
          <div className="flex items-center gap-2">
            <span className="text-violet-400 font-mono text-[10px]">AGENT B</span>
            <span className="text-white/90 font-medium">Verification & Cross-Check</span>
          </div>
          <span className="text-[10px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded">Verified</span>
        </div>

        <div className="flex items-center justify-between bg-[#7A1F2B]/20 border border-[#7A1F2B]/50 rounded p-2 text-xs">
          <div className="flex items-center gap-2">
            <span className="text-[#e27380] font-mono text-[10px]">SYNTHESIS</span>
            <span className="text-white font-medium">Confidence Scoring Engine</span>
          </div>
          <span className="text-[10px] font-mono text-white font-bold bg-[#7A1F2B] px-2 py-0.5 rounded">94.8% Score</span>
        </div>
      </div>
    </div>

    <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-white/60 pt-3 border-t border-white/10">
      <span>CENTRALIZED ORCHESTRATION</span>
      <span className="text-violet-300">STRUCTURED LOGGING</span>
    </div>
  </div>
);

// Visual 4: Full-Stack E-Commerce Platform (XURVA)
export const EcommerceVisual = () => (
  <div className="w-full h-full min-h-[280px] bg-gradient-to-br from-[#1a1415] to-[#111111] p-6 flex flex-col justify-between text-off-white relative overflow-hidden select-none border border-rose-900/30 rounded-sm">
    <div className="absolute inset-0 bg-[radial-gradient(#7A1F2B_1px,transparent_1px)] [background-size:20px_20px] opacity-20" />

    <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-3">
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-emerald-400" />
        <span className="text-[10px] uppercase font-mono tracking-widest text-white/70">Storefront & Checkout API</span>
      </div>
      <span className="text-[10px] font-mono bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded border border-amber-500/40">
        🏆 2nd Runner-Up Linpack
      </span>
    </div>

    {/* Mock Storefront Interface */}
    <div className="relative z-10 my-auto py-2">
      <div className="bg-white/5 border border-white/10 rounded p-3">
        <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-2.5">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <span className="text-xs font-serif font-semibold tracking-wider">XURVA APPAREL</span>
          </div>
          <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">
            Stripe Connected
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2 text-left">
          <div className="bg-white/5 p-2 rounded border border-white/5">
            <div className="text-[9px] font-mono text-white/50 uppercase">Cart Manager</div>
            <div className="text-xs font-medium text-white mt-0.5">Real-time Sync</div>
            <div className="text-[10px] text-emerald-300 font-mono mt-1">REST API • 200 OK</div>
          </div>
          <div className="bg-white/5 p-2 rounded border border-white/5">
            <div className="text-[9px] font-mono text-white/50 uppercase">Inventory Guard</div>
            <div className="text-xs font-medium text-white mt-0.5">Atomic Updates</div>
            <div className="text-[10px] text-cyan-300 font-mono mt-1">MongoDB Cluster</div>
          </div>
        </div>
      </div>
    </div>

    <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-white/60 pt-3 border-t border-white/10">
      <span>MERN STACK • STRIPE API</span>
      <span className="text-rose-300">ADMIN CONTROL PANEL</span>
    </div>
  </div>
);

// Visual 5: Smart Study Planner
export const StudyPlannerVisual = () => (
  <div className="w-full h-full min-h-[280px] bg-gradient-to-br from-[#121816] to-[#0d1210] p-6 flex flex-col justify-between text-off-white relative overflow-hidden select-none border border-emerald-900/30 rounded-sm">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#1b2b22_1px,transparent_1px),linear-gradient(to_bottom,#1b2b22_1px,transparent_1px)] bg-[size:20px_20px] opacity-30" />

    <div className="relative z-10 flex items-center justify-between border-b border-emerald-800/30 pb-3">
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-[10px] uppercase font-mono tracking-widest text-emerald-300">Student Productivity</span>
      </div>
      <span className="text-[10px] font-mono bg-emerald-500/20 text-emerald-200 px-2 py-0.5 rounded border border-emerald-500/40">
        🏆 PromptX Winner (75 Min)
      </span>
    </div>

    {/* Timetable & Pomodoro Visual */}
    <div className="relative z-10 my-auto py-2">
      <div className="grid grid-cols-2 gap-2">
        <div className="bg-white/5 border border-white/10 rounded p-3">
          <div className="text-[9px] font-mono text-emerald-400 uppercase mb-1">Weekly Timetable</div>
          <div className="space-y-1 text-[11px] font-mono">
            <div className="bg-emerald-500/10 text-emerald-200 px-1.5 py-0.5 rounded border border-emerald-500/20">
              09:00 Deep Learning
            </div>
            <div className="bg-white/5 text-white/80 px-1.5 py-0.5 rounded">
              11:30 Distributed Sys
            </div>
            <div className="bg-amber-500/10 text-amber-200 px-1.5 py-0.5 rounded border border-amber-500/20">
              14:00 Lab Assignment
            </div>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded p-3 flex flex-col items-center justify-center text-center">
          <div className="w-12 h-12 rounded-full border-2 border-emerald-400/80 flex items-center justify-center font-mono text-sm font-bold text-white mb-1 shadow-[0_0_12px_rgba(52,211,153,0.3)]">
            25:00
          </div>
          <span className="text-[9px] font-mono uppercase text-emerald-300">Pomodoro Timer</span>
          <span className="text-[9px] text-white/50 font-mono mt-0.5">Grade Calc Active</span>
        </div>
      </div>
    </div>

    <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-white/60 pt-3 border-t border-emerald-800/30">
      <span>NEXT.JS 14 • SUPABASE • SHADCN</span>
      <span className="text-emerald-300">DRAG & DROP READY</span>
    </div>
  </div>
);

// Visual 6: Histori.Ai - Heritage & Monument Discovery
export const HistoriAiVisual = () => (
  <div className="w-full h-full min-h-[280px] bg-gradient-to-br from-[#171511] to-[#0e0d0b] p-6 flex flex-col justify-between text-off-white relative overflow-hidden select-none border border-amber-900/30 rounded-sm">
    <div className="absolute inset-0 bg-[radial-gradient(#c29343_1px,transparent_1px)] [background-size:20px_20px] opacity-20" />

    <div className="relative z-10 flex items-center justify-between border-b border-amber-800/30 pb-3">
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
        <span className="text-[10px] uppercase font-mono tracking-widest text-amber-300">YOLOv8 Vision HUD</span>
      </div>
      <span className="text-[10px] font-mono bg-amber-500/20 text-amber-200 px-2 py-0.5 rounded border border-amber-500/40">
        Role: Frontend Developer
      </span>
    </div>

    {/* Augmented Viewfinder */}
    <div className="relative z-10 my-auto py-2">
      <div className="border border-dashed border-amber-500/40 rounded p-3 relative bg-black/30 backdrop-blur-sm">
        {/* Viewfinder Target Reticle */}
        <div className="flex justify-between items-start mb-2">
          <span className="text-[9px] font-mono text-amber-400">TARGET: MONUMENT_FACADE</span>
          <span className="text-[9px] font-mono bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded border border-emerald-500/40">
            92% ACCURACY
          </span>
        </div>

        {/* 3D Wireframe / Landmark representation */}
        <div className="h-16 border border-amber-400/30 bg-amber-500/5 rounded flex items-center justify-center relative overflow-hidden">
          <div className="text-center">
            <span className="text-xs font-serif tracking-widest uppercase text-amber-200 block">Interactive 3D Mesh</span>
            <span className="text-[9px] font-mono text-white/50">Three.js + R3F Canvas</span>
          </div>
          <div className="absolute bottom-1 right-2 text-[8px] font-mono text-white/40">
            GPS: 28.6129° N, 77.2295° E
          </div>
        </div>

        <div className="mt-2 flex items-center justify-between text-[10px] font-mono text-white/70">
          <span>AI ITINERARY PLANNER</span>
          <span className="text-amber-300">GOOGLE MAPS API</span>
        </div>
      </div>
    </div>

    <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-white/60 pt-3 border-t border-amber-800/30">
      <span>REACT • THREE.JS • OPENAI API</span>
      <span className="text-amber-300">CONVERSATIONAL AI</span>
    </div>
  </div>
);

// Visual 7: OrthoScan - AI-Based Orthopedic Image Analysis
export const OrthoScanVisual = () => (
  <div className="w-full h-full min-h-[280px] bg-gradient-to-br from-[#10141a] to-[#0a0d12] p-6 flex flex-col justify-between text-off-white relative overflow-hidden select-none border border-sky-900/40 rounded-sm">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#142033_1px,transparent_1px),linear-gradient(to_bottom,#142033_1px,transparent_1px)] bg-[size:16px_16px] opacity-30" />

    <div className="relative z-10 flex items-center justify-between border-b border-sky-800/30 pb-3">
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-sky-400" />
        <span className="text-[10px] uppercase font-mono tracking-widest text-sky-300">Medical CV Pipeline</span>
      </div>
      <span className="text-[10px] font-mono bg-sky-500/20 text-sky-200 px-2 py-0.5 rounded border border-sky-500/40">
        ONNX Runtime
      </span>
    </div>

    {/* X-Ray Detection Box Visual */}
    <div className="relative z-10 my-auto py-2">
      <div className="bg-black/50 border border-sky-500/30 rounded p-3 relative">
        <div className="flex justify-between items-center text-[10px] font-mono text-sky-300 mb-2">
          <span>SCAN: ORTHOPEDIC_RAD_08</span>
          <span className="text-emerald-400">INFERENCE: 14ms</span>
        </div>

        {/* Diagnostic Bounding Box */}
        <div className="border border-dashed border-sky-400/80 bg-sky-500/10 p-3 rounded relative">
          <div className="absolute -top-2 left-2 bg-sky-950 text-sky-300 text-[8px] font-mono px-1 border border-sky-400/60 rounded">
            REGION OF INTEREST: JOINT_ALIGNMENT
          </div>
          <div className="flex justify-between items-center text-xs font-mono text-white/90">
            <span>Model: YOLOv7-Custom</span>
            <span className="text-sky-300 font-bold">FP16 Optimized</span>
          </div>
          <div className="text-[10px] text-white/50 font-serif italic mt-1">
            Optimized neural inference pipeline for orthopedic diagnostic exploration.
          </div>
        </div>
      </div>
    </div>

    <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-white/60 pt-3 border-t border-sky-800/30">
      <span>YOLOV7 • PYTHON • ONNX</span>
      <span className="text-sky-300">DEPLOYMENT OPTIMIZED</span>
    </div>
  </div>
);

// Visual 8: Badminton Score Counter (Preserved)
export const BadmintonVisual = () => (
  <div className="w-full h-full min-h-[280px] bg-gradient-to-br from-[#151c17] to-[#0e1410] p-6 flex flex-col justify-between text-off-white relative overflow-hidden select-none border border-emerald-900/30 rounded-sm">
    <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:20px_20px] opacity-20" />

    <div className="relative z-10 flex items-center justify-between border-b border-emerald-800/30 pb-3">
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-emerald-400" />
        <span className="text-[10px] uppercase font-mono tracking-widest text-emerald-300">Match Tracker</span>
      </div>
      <span className="text-[10px] font-mono bg-emerald-500/20 text-emerald-200 px-2 py-0.5 rounded border border-emerald-500/40">
        Live Match UI
      </span>
    </div>

    {/* Scoreboard Visual */}
    <div className="relative z-10 my-auto py-2">
      <div className="bg-white/5 border border-white/10 rounded p-4">
        <div className="grid grid-cols-2 gap-4 text-center">
          <div className="bg-black/30 p-2.5 rounded border border-white/5">
            <div className="text-[10px] font-mono text-white/60 uppercase">Player 1</div>
            <div className="text-3xl font-serif font-bold text-white mt-1">21</div>
            <div className="text-[9px] font-mono text-emerald-400 mt-1">● Serving</div>
          </div>
          <div className="bg-black/30 p-2.5 rounded border border-white/5">
            <div className="text-[10px] font-mono text-white/60 uppercase">Player 2</div>
            <div className="text-3xl font-serif font-bold text-white/70 mt-1">18</div>
            <div className="text-[9px] font-mono text-white/40 mt-1">Game 1</div>
          </div>
        </div>
      </div>
    </div>

    <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-white/60 pt-3 border-t border-emerald-800/30">
      <span>REACT • TAILWIND CSS • VERCEL</span>
      <span className="text-emerald-300">INSTANT SCORE RESET</span>
    </div>
  </div>
);
