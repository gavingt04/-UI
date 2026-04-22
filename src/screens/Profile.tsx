import { useState } from 'react';
import { ChevronRight, LogOut, User, Lock, Mail, Edit3, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { cn } from '@/src/lib/utils';

export default function Profile() {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState('超级训练者');
  const [email, setEmail] = useState('admin@coach.ai');
  const [isEditingNickname, setIsEditingNickname] = useState(false);
  const [isEditingEmail, setIsEditingEmail] = useState(false);

  const settings = [
    { label: '修改内容', type: 'nickname' },
    { label: '修改密码', type: 'password' },
    { label: '绑定邮箱', type: 'email' },
  ];

  return (
    <div className="p-4 md:p-6 space-y-6">
      {/* User Header */}
      <section className="bg-surface-container p-6 rounded-2xl border border-surface-variant/30 flex items-center gap-4">
        <div className="w-20 h-20 rounded-full overflow-hidden shrink-0 border-2 border-primary-container shadow-lg">
          <img 
            alt="User Avatar" 
            className="w-full h-full object-cover" 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=200" 
          />
        </div>
        <div className="flex-1 space-y-1">
          <div className="flex items-center gap-2">
            {isEditingNickname ? (
              <input 
                autoFocus
                className="bg-transparent border-b border-primary text-xl font-bold text-on-surface focus:outline-none w-full"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                onBlur={() => setIsEditingNickname(false)}
              />
            ) : (
              <h1 className="text-xl font-bold text-on-surface">{nickname}</h1>
            )}
            <button 
              onClick={() => setIsEditingNickname(!isEditingNickname)}
              className="text-primary-container hover:opacity-80 p-1"
            >
              {isEditingNickname ? <Check size={16} /> : <Edit3 size={16} />}
            </button>
          </div>
          <p className="text-xs text-tertiary font-lexend">ID: 88482024</p>
        </div>
      </section>

      {/* Settings Group */}
      <section className="bg-surface-container rounded-2xl border border-surface-variant/30 overflow-hidden shadow-sm">
        <h2 className="text-[10px] text-outline px-4 py-3 bg-surface-container-highest uppercase tracking-widest font-bold">账号设置</h2>
        <div className="divide-y divide-surface-variant/20">
          {/* Nickname Row */}
          <button 
            onClick={() => setIsEditingNickname(true)}
            className="w-full flex items-center justify-between px-4 py-4 hover:bg-surface-container-high transition-colors text-left"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-surface-bright flex items-center justify-center text-on-surface-variant">
                <User size={18} />
              </div>
              <span className="font-medium text-sm text-on-surface">修改昵称</span>
            </div>
            <div className="flex items-center text-tertiary">
              <span className="text-xs mr-2">{nickname}</span>
              <ChevronRight size={18} />
            </div>
          </button>

          {/* Password Row */}
          <button 
            onClick={() => navigate('/profile/change-password')}
            className="w-full flex items-center justify-between px-4 py-4 hover:bg-surface-container-high transition-colors text-left"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-surface-bright flex items-center justify-center text-on-surface-variant">
                <Lock size={18} />
              </div>
              <span className="font-medium text-sm text-on-surface">修改密码</span>
            </div>
            <div className="flex items-center text-tertiary">
              <ChevronRight size={18} />
            </div>
          </button>

          {/* Email Row */}
          <div className="group relative">
            <button 
              onClick={() => setIsEditingEmail(!isEditingEmail)}
              className="w-full flex items-center justify-between px-4 py-4 hover:bg-surface-container-high transition-colors text-left"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-surface-bright flex items-center justify-center text-on-surface-variant">
                  <Mail size={18} />
                </div>
                <span className="font-medium text-sm text-on-surface">绑定邮箱</span>
              </div>
              <div className="flex items-center text-tertiary">
                <span className="text-xs mr-2">{email}</span>
                <ChevronRight size={18} className={cn("transition-transform", isEditingEmail && "rotate-90")} />
              </div>
            </button>
            {isEditingEmail && (
              <div className="px-4 pb-4 animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="flex gap-2">
                  <input 
                    autoFocus
                    className="flex-1 bg-surface-container-low border border-surface-variant/30 rounded-lg px-3 py-2 text-sm text-on-surface focus:outline-none focus:border-primary"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button 
                    onClick={() => setIsEditingEmail(false)}
                    className="bg-primary text-on-primary px-4 py-2 rounded-lg text-sm font-bold"
                  >
                    保存
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Danger Zone */}
      <div className="pt-4 pb-8">
        <button 
          onClick={() => navigate('/auth')}
          className="w-full h-12 bg-surface-container border border-error/30 text-error rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-error/10 active:scale-[0.98] transition-all"
        >
          <LogOut size={20} />
          退出登录
        </button>
      </div>
    </div>
  );
}
