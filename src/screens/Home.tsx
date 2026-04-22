import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { PlayCircle, Sparkles, Activity, UserCircle, Timer, History as HistoryIcon } from 'lucide-react';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="p-4 md:p-6 space-y-6">
      {/* Welcome Hero Section */}
      <section className="relative rounded-2xl overflow-hidden bg-surface-container border border-surface-variant/30 p-6 shadow-sm min-h-[160px] flex flex-col justify-center">
        <div 
          className="absolute inset-0 z-0 opacity-10" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1000')", 
            backgroundSize: 'cover', 
            backgroundPosition: 'center' 
          }} 
        />
        <div className="relative z-10 space-y-2">
          <h1 className="text-2xl font-bold text-on-surface">欢迎回来, 训练者!</h1>
          <p className="text-xl font-semibold text-primary">今天也要加油哦!</p>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="grid grid-cols-1 gap-4">
        <div className="bg-surface-container-low rounded-xl p-4 border border-outline-variant/30 flex flex-col justify-between relative overflow-hidden group">
          <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition-opacity">
            <Timer size={80} className="text-primary" />
          </div>
          <div className="flex items-center gap-2 text-on-surface-variant">
            <HistoryIcon size={14} />
            <span className="text-xs font-medium uppercase tracking-wider">上次训练时长</span>
          </div>
          <div className="flex items-baseline gap-1 mt-4">
            <span className="text-4xl font-bold text-primary font-lexend">45</span>
            <span className="text-sm text-on-surface ml-1">分钟</span>
          </div>
        </div>
      </section>

      {/* Main Modules Grid */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <button 
          onClick={() => navigate('/training')}
          className="col-span-2 md:col-span-1 bg-primary-container text-on-primary-container rounded-2xl p-6 flex flex-col items-center justify-center gap-3 transition-transform active:scale-95 shadow-lg shadow-primary-container/20"
        >
          <PlayCircle size={48} fill="currentColor" className="text-on-primary-container" />
          <span className="text-lg font-bold">开始训练</span>
        </button>

        <button 
          onClick={() => navigate('/plan')}
          className="bg-surface-container rounded-2xl border border-surface-variant/30 p-6 flex flex-col items-center justify-center gap-3 hover:bg-surface-container-high transition-all active:scale-95"
        >
          <Sparkles size={32} className="text-primary" />
          <span className="text-sm font-medium text-on-surface">计划生成</span>
        </button>

        <button 
          onClick={() => navigate('/data')}
          className="bg-surface-container rounded-2xl border border-surface-variant/30 p-6 flex flex-col items-center justify-center gap-3 hover:bg-surface-container-high transition-all active:scale-95"
        >
          <Activity size={32} className="text-on-surface-variant" />
          <span className="text-sm font-medium text-on-surface">历史记录</span>
        </button>

        <button 
          onClick={() => navigate('/profile')}
          className="bg-surface-container rounded-2xl border border-surface-variant/30 p-6 flex flex-col items-center justify-center gap-3 hover:bg-surface-container-high transition-all active:scale-95 group"
        >
          <UserCircle size={32} className="text-primary opacity-80 group-hover:opacity-100 transition-opacity" />
          <span className="text-sm font-medium text-on-surface">我的主页</span>
        </button>
      </section>
    </div>
  );
}
