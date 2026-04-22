import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Calendar, Timer, TrendingUp, PieChart as PieIcon, AlertTriangle, CheckCircle, Star, ChevronRight } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function Data() {
  const chartData = [
    { name: '周一', value: 30 },
    { name: '周二', value: 60 },
    { name: '周三', value: 45 },
    { name: '周四', value: 85 },
    { name: '周五', value: 20 },
    { name: '周六', value: 55 },
    { name: '周日', value: 70 },
  ];

  const distribution = [
    { name: '深蹲 (Squats)', value: 40, color: 'var(--color-primary-container)' },
    { name: '卧推 (Bench Press)', value: 25, color: 'var(--color-secondary)' },
    { name: '硬拉 (Deadlift)', value: 20, color: '#ff9500' },
    { name: '俯卧撑 (Pushups)', value: 10, color: 'var(--color-tertiary)' },
    { name: '二头弯举 (Bicep Curls)', value: 5, color: 'var(--color-surface-variant)' },
  ];

  const logs = [
    {
      name: "卧推 (Bench Press)",
      date: "2023-10-24 18:30",
      duration: "30 分钟",
      calories: "320 kcal",
      feedback: [
        { type: 'warning', text: '膝盖内扣 3次', icon: AlertTriangle },
        { type: 'success', text: '核心收紧良好', icon: CheckCircle },
      ]
    },
    {
      name: "深蹲 (Squats)",
      date: "2023-10-22 19:00",
      duration: "45 分钟",
      calories: "280 kcal",
      feedback: [
        { type: 'warning', text: '下蹲深度不足 5次', icon: AlertTriangle },
      ]
    },
    {
      name: "硬拉 (Deadlift)",
      date: "2023-10-21 07:30",
      duration: "15 分钟",
      calories: "80 kcal",
      feedback: [
        { type: 'success', text: '动作标准度 98%', color: 'text-primary', icon: Star },
      ]
    }
  ];

  return (
    <div className="p-4 md:p-6 space-y-6">
      <section className="space-y-1">
        <h1 className="text-2xl font-bold text-on-surface font-headline-lg">历史数据</h1>
        <p className="text-sm text-on-surface-variant">查看您的训练表现与AI反馈</p>
      </section>

      {/* Bento Grid Stats */}
      <section className="grid grid-cols-2 md:grid-cols-3 gap-3">
        <div className="bg-surface-container-high rounded-2xl p-4 border border-surface-variant/30 space-y-4">
          <div className="flex items-center gap-2 text-tertiary text-[10px] font-medium uppercase tracking-wider">
            <Calendar size={14} /> 累计锻炼天数
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-4xl font-bold text-primary font-lexend">42</span>
            <span className="text-xs text-on-surface-variant ml-1">天</span>
          </div>
        </div>

        <div className="bg-surface-container-high rounded-2xl p-4 border border-surface-variant/30 md:col-span-2 flex flex-col justify-between">
          <div className="flex items-center gap-2 text-tertiary text-[10px] font-medium uppercase tracking-wider">
            <Timer size={14} /> 本周时长
          </div>
          <div className="flex items-center justify-between w-full mt-4">
            <div className="flex-1 space-y-1 pr-8">
              <div className="flex justify-between text-[10px] text-on-surface-variant mb-1 font-lexend">
                <span>0h</span>
                <span>目标: 5h</span>
              </div>
              <div className="h-1.5 bg-surface-container rounded-full overflow-hidden">
                <div className="h-full bg-primary w-[70%]" />
              </div>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-bold font-lexend">3.5</span>
              <span className="text-xs text-on-surface-variant">h</span>
            </div>
          </div>
        </div>
      </section>

      {/* Charts Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Trend Chart */}
        <div className="bg-surface-container-high rounded-2xl p-4 border border-surface-variant/30 space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="font-bold flex items-center gap-2">
              <TrendingUp size={18} className="text-primary" />
              运动趋势
            </h2>
            <span className="text-[10px] font-medium text-tertiary bg-surface-container px-2 py-1 rounded-lg">分钟/天</span>
          </div>
          <div className="h-[200px] w-full pt-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: 'var(--color-tertiary)' }} />
                <YAxis hide />
                <Tooltip 
                  cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                  contentStyle={{ backgroundColor: 'var(--color-surface-container-high)', border: '1px solid rgba(255,255,255,0.1)' }}
                />
                <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === 3 ? 'var(--color-primary-container)' : 'rgba(7, 193, 96, 0.4)'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Distribution */}
        <div className="bg-surface-container-high rounded-2xl p-4 border border-surface-variant/30 space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="font-bold flex items-center gap-2">
              <PieIcon size={18} className="text-primary" />
              动作占比
            </h2>
          </div>
          <div className="space-y-4 pt-2">
            {distribution.map((item) => (
              <div key={item.name} className="space-y-1.5">
                <div className="flex justify-between text-xs">
                  <span className="font-medium">{item.name}</span>
                  <span className="text-on-surface-variant font-lexend">{item.value}%</span>
                </div>
                <div className="w-full bg-surface-container rounded-full h-1.5 overflow-hidden">
                  <div className="h-full rounded-full" style={{ width: `${item.value}%`, backgroundColor: item.color }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Logs */}
      <section className="space-y-4">
        <h2 className="text-lg font-bold">详细日志</h2>
        <div className="space-y-3">
          {logs.map((log, i) => (
            <div key={i} className="bg-surface-container-high rounded-2xl p-4 border border-surface-variant/30 space-y-4 group hover:border-outline-variant transition-all cursor-pointer">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <h3 className="font-bold">{log.name}</h3>
                  <p className="text-[10px] text-tertiary">{log.date}</p>
                </div>
                <div className="text-right space-y-1">
                  <div className="text-sm font-medium">{log.duration}</div>
                  <div className="text-[10px] text-primary-container font-lexend font-bold">{log.calories}</div>
                </div>
              </div>
              <div className="h-px bg-surface-variant/20" />
              <div className="flex flex-wrap gap-2 items-center">
                <span className="text-[10px] text-on-surface-variant font-medium">AI 指导反馈:</span>
                {log.feedback.map((f, j) => {
                  const Icon = f.icon;
                  return (
                    <div 
                      key={j} 
                      className={cn(
                        "rounded-lg px-2 py-1 text-[10px] flex items-center gap-1.5 border",
                        f.type === 'warning' ? "bg-error-container/10 text-error border-error/20" : "bg-surface-container text-on-surface-variant border-surface-variant/30"
                      )}
                    >
                      <Icon size={12} className={f.color} />
                      {f.text}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
          <button className="w-full py-3 bg-surface-container hover:bg-surface-variant transition-all rounded-xl text-sm font-medium text-primary mt-2 border border-surface-variant/30">
            加载更多记录
          </button>
        </div>
      </section>
    </div>
  );
}
