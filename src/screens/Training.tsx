import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { X, Camera, RefreshCw, AlertTriangle, Brain, Save, Pause, Play, History as HistoryIcon } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function Training() {
  const navigate = useNavigate();
  const [count, setCount] = useState(14);
  const [isPaused, setIsPaused] = useState(false);
  const [activeExercise, setActiveExercise] = useState('深蹲');

  const exercises = ['深蹲', '二头弯举', '硬拉', '卧推', '俯卧撑'];

  return (
    <div className="bg-background text-on-background h-screen w-full flex flex-col overflow-hidden max-w-[1200px] mx-auto antialiased relative">
      {/* Immersive Camera View Mock */}
      <main className="flex-1 relative w-full overflow-hidden bg-black">
        <img 
          className="absolute inset-0 w-full h-full object-cover opacity-60" 
          alt="Athlete training" 
          src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=1200" 
        />
        
        {/* Overlay Grid/Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80"></div>

        {/* AI skeleton Overlay Mock */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-80">
          <svg className="stroke-primary fill-none stroke-[3]" height="400" viewBox="0 0 200 400" width="200">
            {/* Joints */}
            <circle className="fill-primary" cx="100" cy="80" r="8"></circle>
            <circle className="fill-surface-container stroke-primary" cx="100" cy="130" r="5"></circle>
            <circle className="fill-surface-container stroke-primary" cx="60" cy="140" r="5"></circle>
            <circle className="fill-surface-container stroke-primary" cx="140" cy="140" r="5"></circle>
            <circle className="fill-surface-container stroke-primary" cx="50" cy="220" r="5"></circle>
            <circle className="fill-surface-container stroke-primary" cx="150" cy="220" r="5"></circle>
            <circle className="fill-surface-container stroke-primary" cx="100" cy="240" r="6"></circle>
            <circle className="fill-surface-container stroke-primary" cx="70" cy="300" r="5"></circle>
            <circle className="fill-surface-container stroke-primary" cx="130" cy="300" r="5"></circle>
            {/* Bones */}
            <line x1="100" x2="100" y1="88" y2="130"></line>
            <line x1="60" x2="140" y1="140" y2="140"></line>
            <line x1="100" x2="100" y1="130" y2="240"></line>
            <line x1="60" x2="50" y1="140" y2="220"></line>
            <line x1="140" x2="150" y1="140" y2="220"></line>
            <line x1="100" x2="70" y1="240" y2="300"></line>
            <line x1="100" x2="130" y1="240" y2="300"></line>
            {/* Warning Line */}
            <line className="stroke-error stroke-[4]" strokeDasharray="5,5" x1="100" x2="100" y1="130" y2="240"></line>
          </svg>
        </div>

        {/* Top HUD */}
        <header className="absolute top-0 w-full px-4 py-4 flex justify-between items-center z-20">
          <button 
            onClick={() => navigate('/')}
            className="w-10 h-10 rounded-full bg-surface-container/60 backdrop-blur-md flex items-center justify-center text-on-surface hover:bg-surface-container transition-colors"
          >
            <X size={20} />
          </button>
          <div className="px-4 py-1.5 rounded-full bg-surface-container/60 backdrop-blur-md border border-outline-variant/30 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-error animate-pulse"></span>
            <span className="text-[10px] font-lexend font-bold text-on-surface tracking-widest">REC 04:22</span>
          </div>
          <button className="w-10 h-10 rounded-full bg-surface-container/60 backdrop-blur-md flex items-center justify-center text-on-surface hover:bg-surface-container transition-colors">
            <RefreshCw size={20} />
          </button>
        </header>

        {/* Warning Alert */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[90%] max-w-sm z-30">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: -20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            className="bg-error-container/90 backdrop-blur-md border border-error/50 rounded-2xl px-4 py-3 flex items-center gap-3 shadow-xl"
          >
            <AlertTriangle className="text-on-error-container" size={20} fill="currentColor" />
            <p className="text-sm font-medium text-on-error-container">运动错误：背部未挺直！</p>
          </motion.div>
        </div>

        {/* Real-time Stats */}
        <div className="absolute bottom-6 left-4 right-4 z-20 flex justify-between items-end">
          <div className="flex flex-col gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 shadow-lg w-fit">
              <Brain size={16} className="text-primary" fill="currentColor" />
              <span className="text-[10px] font-bold text-white tracking-widest uppercase">AI 识别: {activeExercise}</span>
            </div>
            <div className="flex items-end gap-4">
              <div className="flex items-baseline drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                <span className="text-7xl font-bold text-primary leading-none font-lexend">{count}</span>
                <span className="text-2xl font-bold text-white/90 ml-3">/ 20 次</span>
              </div>
              <div className="mb-2 px-3 py-1 bg-surface-container-high/90 backdrop-blur-md border border-outline-variant/50 rounded-lg flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-tertiary" />
                <span className="text-[10px] font-bold text-on-surface">需改进</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Controls Panel */}
      <section className="bg-surface-container-lowest border-t border-surface-bright rounded-t-[32px] p-4 pt-2 shadow-2xl z-40">
        <div className="w-full flex justify-center py-3">
          <div className="w-12 h-1.5 bg-surface-variant rounded-full opacity-50"></div>
        </div>

        {/* Exercise Selection */}
        <div className="w-full overflow-x-auto no-scrollbar pb-6 pt-2">
          <div className="flex gap-2 w-max px-2">
            {exercises.map((ex) => (
              <button
                key={ex}
                onClick={() => setActiveExercise(ex)}
                className={cn(
                  "px-6 py-2.5 rounded-full font-medium text-sm transition-all active:scale-95",
                  activeExercise === ex 
                    ? "bg-primary text-on-primary shadow-lg shadow-primary/20" 
                    : "bg-surface-container-high text-on-surface-variant border border-surface-bright"
                )}
              >
                {ex}
              </button>
            ))}
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center justify-between gap-4 pb-6">
          <button 
            onClick={() => navigate('/data')}
            className="flex flex-col items-center justify-center gap-1 w-16 h-16 rounded-2xl bg-surface-container hover:bg-surface-container-high transition-colors text-on-surface-variant"
          >
            <HistoryIcon size={24} />
            <span className="text-[10px] font-bold tracking-widest">历史</span>
          </button>
          
          <button 
            onClick={() => navigate('/data')}
            className="flex-1 h-14 bg-primary text-on-primary rounded-full font-bold text-lg flex items-center justify-center gap-2 shadow-xl shadow-primary/20 active:scale-[0.98] transition-all"
          >
            <Save size={20} fill="currentColor" />
            保存记录
          </button>

          <button 
            onClick={() => setIsPaused(!isPaused)}
            className="flex flex-col items-center justify-center gap-1 w-16 h-16 rounded-2xl bg-surface-container hover:bg-surface-container-high transition-colors text-on-surface-variant"
          >
            {isPaused ? <Play size={24} fill="currentColor" /> : <Pause size={24} fill="currentColor" />}
            <span className="text-[10px] font-bold tracking-widest">{isPaused ? '继续' : '暂停'}</span>
          </button>
        </div>
      </section>

      <style>{`
        .animate-spin-slow {
          animation: spin 3s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
