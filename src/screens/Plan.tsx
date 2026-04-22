import { useState } from 'react';
import { ArrowLeft, Bell, Bolt, Target, BarChart, Calendar, Dumbbell, Cloud, Check, ChevronDown, ChevronUp, RefreshCw, ChevronRight, Minus, Plus, Heart, User, Scale, Activity, ShieldAlert } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { motion, AnimatePresence } from 'motion/react';

export default function Plan() {
  const [frequency, setFrequency] = useState(4);
  const [expandedDay, setExpandedDay] = useState(1);
  const [selectedGoal, setSelectedGoal] = useState('减脂');
  const [selectedLevel, setSelectedLevel] = useState('中级');
  const [selectedEquipments, setSelectedEquipments] = useState(['哑铃', '杠铃', '弹力带']);
  
  const [age, setAge] = useState('25');
  const [weight, setWeight] = useState('70');
  const [injury, setInjury] = useState('');
  const [identity, setIdentity] = useState('学生');

  const toggleEquipment = (eq: string) => {
    setSelectedEquipments(prev => 
      prev.includes(eq) ? prev.filter(e => e !== eq) : [...prev, eq]
    );
  };

  const days = [
    {
      id: 1,
      title: "综合力量训练",
      type: "阻力训练",
      duration: "约45分钟",
      exercises: [
        { name: "深蹲", target: "腿部 / 臀部", sets: 4, reps: "8-12" },
        { name: "卧推", target: "胸部 / 三头肌", sets: 4, reps: "8-10" },
        { name: "硬拉", target: "背部 / 腘绳肌", sets: 4, reps: "6-8" },
        { name: "俯卧撑", target: "胸部 / 核心", sets: 3, reps: "15-20" },
        { name: "二头弯举", target: "肱二头肌", sets: 3, reps: "12-15" },
      ]
    },
    { id: 2, title: "背部与二头肌", type: "阻力训练", duration: "约50分钟", exercises: [] },
    { id: 3, title: "休息与恢复", type: "建议轻度拉伸或散步", duration: "休息日", isRest: true, exercises: [] },
    { id: 4, title: "腿部与核心", type: "阻力训练", duration: "约60分钟", exercises: [] },
  ];

  return (
    <div className="p-4 md:p-6 space-y-6">
      {/* Header */}
      <section className="space-y-1">
        <h1 className="text-2xl font-bold text-on-surface">智能计划生成</h1>
        <p className="text-sm text-on-surface-variant">根据您的身体数据与目标，AI 将为您量身定制训练方案。</p>
      </section>

      {/* Configuration */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Basic Info */}
        <div className="col-span-1 md:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-surface-container p-4 rounded-2xl border border-surface-variant/30 flex flex-col gap-2">
            <div className="flex items-center gap-2 text-on-surface-variant">
              <User size={14} />
              <span className="text-[10px] font-bold uppercase tracking-widest">年龄</span>
            </div>
            <input 
              type="number" 
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="bg-transparent border-none p-0 text-xl font-lexend font-bold text-primary focus:ring-0 outline-none w-full"
            />
          </div>
          <div className="bg-surface-container p-4 rounded-2xl border border-surface-variant/30 flex flex-col gap-2">
            <div className="flex items-center gap-2 text-on-surface-variant">
              <Scale size={14} />
              <span className="text-[10px] font-bold uppercase tracking-widest">体重 (kg)</span>
            </div>
            <input 
              type="number" 
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="bg-transparent border-none p-0 text-xl font-lexend font-bold text-primary focus:ring-0 outline-none w-full"
            />
          </div>
          <div className="bg-surface-container p-4 rounded-2xl border border-surface-variant/30 flex flex-col gap-2">
            <div className="flex items-center gap-2 text-on-surface-variant">
              <Activity size={14} />
              <span className="text-[10px] font-bold uppercase tracking-widest">身份/职业</span>
            </div>
            <input 
              type="text" 
              value={identity}
              onChange={(e) => setIdentity(e.target.value)}
              placeholder="例如: 学生、码农"
              className="bg-transparent border-none p-0 text-base font-bold text-primary focus:ring-0 outline-none w-full"
            />
          </div>
          <div className="bg-surface-container p-4 rounded-2xl border border-surface-variant/30 flex flex-col gap-2">
            <div className="flex items-center gap-2 text-on-surface-variant">
              <ShieldAlert size={14} />
              <span className="text-[10px] font-bold uppercase tracking-widest">伤病情况</span>
            </div>
            <input 
              type="text" 
              value={injury}
              onChange={(e) => setInjury(e.target.value)}
              placeholder="无"
              className="bg-transparent border-none p-0 text-base font-bold text-primary focus:ring-0 outline-none w-full"
            />
          </div>
        </div>

        {/* Goal */}
        <div className="bg-surface-container p-4 rounded-2xl flex flex-col gap-3 border border-surface-variant/30">
          <div className="flex items-center gap-2">
            <Target size={20} className="text-primary" />
            <h2 className="text-lg font-semibold">训练目标</h2>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {['减脂', '增肌', '塑形'].map((goal) => (
              <button
                key={goal}
                onClick={() => setSelectedGoal(goal)}
                className={cn(
                  "py-2 rounded-xl text-sm font-medium transition-all",
                  selectedGoal === goal ? "bg-primary-container text-on-primary-container border border-primary/50" : "bg-surface-bright text-on-surface border border-transparent hover:border-surface-variant"
                )}
              >
                {goal}
              </button>
            ))}
          </div>
        </div>

        {/* Level */}
        <div className="bg-surface-container p-4 rounded-2xl flex flex-col gap-3 border border-surface-variant/30">
          <div className="flex items-center gap-2">
            <BarChart size={20} className="text-primary" />
            <h2 className="text-lg font-semibold">当前水平</h2>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {['初级', '中级', '高级'].map((level) => (
              <button
                key={level}
                onClick={() => setSelectedLevel(level)}
                className={cn(
                  "py-2 rounded-xl text-sm font-medium transition-all",
                  selectedLevel === level ? "bg-primary-container text-on-primary-container border border-primary/50" : "bg-surface-bright text-on-surface border border-transparent hover:border-surface-variant"
                )}
              >
                {level}
              </button>
            ))}
          </div>
        </div>

        {/* Frequency */}
        <div className="bg-surface-container p-4 rounded-2xl flex flex-col gap-3 border border-surface-variant/30">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Calendar size={20} className="text-primary" />
              <h2 className="text-lg font-semibold">训练频率</h2>
            </div>
            <div className="text-primary font-lexend font-bold text-xl">
              {frequency}<span className="text-on-surface-variant text-sm ml-1 font-normal">天/周</span>
            </div>
          </div>
          <div className="flex items-center gap-4 pt-2 border-t border-surface-variant/30">
            <button 
              onClick={() => setFrequency(Math.max(1, frequency - 1))}
              className="w-10 h-10 rounded-full bg-surface-bright flex items-center justify-center hover:bg-surface-variant"
            >
              <Minus size={18} />
            </button>
            <div className="flex-1 h-2 bg-surface-bright rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-primary"
                initial={false}
                animate={{ width: `${(frequency / 7) * 100}%` }}
              />
            </div>
            <button 
              onClick={() => setFrequency(Math.min(7, frequency + 1))}
              className="w-10 h-10 rounded-full bg-surface-bright flex items-center justify-center hover:bg-surface-variant"
            >
              <Plus size={18} />
            </button>
          </div>
        </div>

        {/* Equipment */}
        <div className="bg-surface-container p-4 rounded-2xl flex flex-col gap-3 border border-surface-variant/30">
          <div className="flex items-center gap-2">
            <Dumbbell size={20} className="text-primary" />
            <h2 className="text-lg font-semibold">可用器械</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {['哑铃', '杠铃', '固定器械', '弹力带', '自重'].map((eq) => (
              <button
                key={eq}
                onClick={() => toggleEquipment(eq)}
                className={cn(
                  "px-4 py-1.5 rounded-full text-xs transition-all",
                  selectedEquipments.includes(eq) ? "bg-primary/20 text-primary border border-primary/30" : "bg-surface-bright text-on-surface border border-surface-variant/50"
                )}
              >
                {eq}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Generate Action */}
      <button className="w-full h-14 bg-primary text-on-primary font-bold rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:brightness-105 active:scale-[0.98] transition-all">
        <Bolt size={20} fill="currentColor" />
        生成计划
      </button>

      {/* Plan Display */}
      <section className="space-y-4">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-xl font-bold">专属7天计划</h2>
            <p className="text-xs text-on-surface-variant mt-1 italic">基于您的目标：减脂 · 中级 · 4天/周</p>
          </div>
          <div className="flex items-center gap-1.5 text-primary-container bg-primary/10 px-2.5 py-1 rounded-lg border border-primary/20">
            <Cloud size={14} />
            <Check size={10} className="-ml-1" />
            <span className="text-[10px] font-medium">已自动保存</span>
          </div>
        </div>

        <div className="space-y-3">
          {days.map((day) => (
            <div 
              key={day.id}
              className={cn(
                "rounded-2xl border transition-all overflow-hidden",
                expandedDay === day.id ? "bg-surface-container border-primary/30 shadow-lg" : "bg-surface-container border-surface-variant/30 opacity-70 hover:opacity-100"
              )}
            >
              <button 
                onClick={() => setExpandedDay(expandedDay === day.id ? 0 : day.id)}
                className="w-full p-4 flex items-center justify-between cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className={cn(
                    "w-10 h-10 rounded-xl flex items-center justify-center font-lexend font-bold text-lg",
                    expandedDay === day.id ? "bg-primary text-on-primary" : "bg-surface-bright text-on-surface"
                  )}>
                    D{day.id}
                  </div>
                  <div className="text-left">
                    <h3 className="font-bold">{day.title}</h3>
                    <p className="text-[10px] text-on-surface-variant mt-0.5">{day.type} · {day.duration}</p>
                  </div>
                </div>
                {day.isRest ? <Heart size={20} className="text-tertiary" /> : (expandedDay === day.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />)}
              </button>

              <AnimatePresence>
                {expandedDay === day.id && day.exercises.length > 0 && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="border-t border-surface-variant/30"
                  >
                    {day.exercises.map((ex, i) => (
                      <div key={i} className="flex justify-between items-center py-3 px-4 border-b last:border-0 border-surface-variant/20 bg-black/10">
                        <div className="flex flex-col">
                          <span className="font-medium text-sm">{ex.name}</span>
                          <span className="text-[10px] text-on-surface-variant">{ex.target}</span>
                        </div>
                        <div className="text-right">
                          <span className="font-lexend text-primary font-bold">{ex.sets}</span>
                          <span className="text-[10px] text-on-surface-variant mx-1">组</span>
                          <span className="text-[10px] text-on-surface-variant">×</span>
                          <span className="font-lexend text-on-surface font-bold ml-1">{ex.reps}</span>
                          <span className="text-[10px] text-on-surface-variant ml-1">次</span>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="pt-4 flex flex-col items-center gap-3">
          <button className="w-full p-4 bg-surface-container border border-surface-variant/30 text-on-surface font-bold rounded-2xl flex items-center justify-center gap-2 hover:bg-surface-container-high active:scale-[0.98] transition-all">
            <RefreshCw size={20} />
            重新生成
          </button>
        </div>
      </section>
    </div>
  );
}
