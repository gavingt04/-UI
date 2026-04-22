import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Lock, Eye, EyeOff, CheckCircle2 } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function ChangePassword() {
  const navigate = useNavigate();
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showOld, setShowOld] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Simulate API call
    setIsSuccess(true);
    setTimeout(() => {
      navigate('/profile');
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 text-center">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-surface-container p-8 rounded-3xl border border-primary/20 shadow-xl flex flex-col items-center gap-4"
        >
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-2">
            <CheckCircle2 size={40} />
          </div>
          <h1 className="text-2xl font-bold text-on-surface">密码修改成功</h1>
          <p className="text-on-surface-variant text-sm">正在为您跳转回个人中心...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-on-surface p-4 md:p-6 max-w-md mx-auto">
      <header className="flex items-center gap-4 mb-8 pt-2">
        <button 
          onClick={() => navigate('/profile')}
          className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:bg-surface-container-high transition-colors"
        >
          <ArrowLeft size={20} />
        </button>
        <h1 className="text-xl font-bold">修改密码</h1>
      </header>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          {/* Old Password */}
          <div className="bg-surface-container rounded-2xl px-4 py-3 ring-1 ring-transparent focus-within:ring-primary focus-within:bg-surface-container-high transition-all relative">
            <label className="block text-[10px] text-on-surface-variant mb-1 uppercase tracking-wider font-medium">当前密码</label>
            <div className="flex items-center">
              <Lock size={20} className="text-on-surface-variant mr-3" />
              <input
                required
                className="w-full bg-transparent border-none p-0 text-base text-on-surface placeholder-on-surface-variant/40 focus:ring-0 outline-none pr-10"
                placeholder="请输入当前密码"
                type={showOld ? "text" : "password"}
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
              />
            </div>
            <button
              type="button"
              onClick={() => setShowOld(!showOld)}
              className="absolute right-4 top-1/2 -translate-y-1/2 mt-2 text-on-surface-variant hover:text-on-surface"
            >
              {showOld ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {/* New Password */}
          <div className="bg-surface-container rounded-2xl px-4 py-3 ring-1 ring-transparent focus-within:ring-primary focus-within:bg-surface-container-high transition-all relative">
            <label className="block text-[10px] text-on-surface-variant mb-1 uppercase tracking-wider font-medium">新密码</label>
            <div className="flex items-center">
              <Lock size={20} className="text-on-surface-variant mr-3" />
              <input
                required
                className="w-full bg-transparent border-none p-0 text-base text-on-surface placeholder-on-surface-variant/40 focus:ring-0 outline-none pr-10"
                placeholder="请输入新密码"
                type={showNew ? "text" : "password"}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
            <button
              type="button"
              onClick={() => setShowNew(!showNew)}
              className="absolute right-4 top-1/2 -translate-y-1/2 mt-2 text-on-surface-variant hover:text-on-surface"
            >
              {showNew ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {/* Confirm Password */}
          <div className="bg-surface-container rounded-2xl px-4 py-3 ring-1 ring-transparent focus-within:ring-primary focus-within:bg-surface-container-high transition-all">
            <label className="block text-[10px] text-on-surface-variant mb-1 uppercase tracking-wider font-medium">确认新密码</label>
            <div className="flex items-center">
              <Lock size={20} className="text-on-surface-variant mr-3" />
              <input
                required
                className="w-full bg-transparent border-none p-0 text-base text-on-surface placeholder-on-surface-variant/40 focus:ring-0 outline-none"
                placeholder="请再次输入新密码"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="pt-4">
          <button
            type="submit"
            disabled={!oldPassword || !newPassword || newPassword !== confirmPassword}
            className="w-full h-14 bg-primary text-on-primary rounded-2xl font-bold text-lg flex items-center justify-center transition-all hover:brightness-110 active:scale-[0.98] shadow-lg shadow-primary/20 disabled:opacity-50 disabled:grayscale disabled:scale-100"
          >
            保存新密码
          </button>
          {newPassword && confirmPassword && newPassword !== confirmPassword && (
            <p className="text-error text-center text-xs mt-3">两次输入的新密码不一致</p>
          )}
        </div>

        <div className="bg-surface-container-low p-4 rounded-2xl border border-surface-variant/20">
          <h3 className="text-xs font-bold text-on-surface-variant mb-2 uppercase tracking-widest">安全提示</h3>
          <ul className="text-[10px] text-on-surface-variant space-y-1 ml-4 list-disc">
            <li>请使用至少 8 位包含字母和数字的组合。</li>
            <li>不要在多个网站使用相同的密码。</li>
            <li>修改后所有已登录设备可能需要重新登录。</li>
          </ul>
        </div>
      </form>
    </div>
  );
}
