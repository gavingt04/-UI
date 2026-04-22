import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Bolt, User, Lock, Eye, EyeOff, Mail } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: any) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col items-center justify-center p-6 antialiased">
      <main className="w-full max-w-md flex flex-col h-full">
        <div className="flex-shrink-0 mt-8 mb-12 text-center flex flex-col items-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-surface-container-high mb-4 shadow-lg ring-1 ring-white/5">
            <Bolt className="text-primary" size={40} fill="currentColor" />
          </div>
          <h1 className="text-2xl font-semibold text-on-surface mb-2 font-headline-lg">智动AI教练</h1>
          <p className="text-sm text-on-surface-variant">精准训练，即刻开启</p>
        </div>

        <div className="flex mb-8 border-b border-surface-container-highest">
          <button
            onClick={() => setIsLogin(true)}
            className={cn(
              "flex-1 pb-3 text-lg font-semibold relative transition-colors",
              isLogin ? "text-primary" : "text-on-surface-variant hover:text-on-surface"
            )}
          >
            登录
            {isLogin && <motion.div layoutId="tab" className="absolute bottom-[-1px] left-0 w-full h-[3px] bg-primary" />}
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={cn(
              "flex-1 pb-3 text-lg font-semibold relative transition-colors",
              !isLogin ? "text-primary" : "text-on-surface-variant hover:text-on-surface"
            )}
          >
            注册
            {!isLogin && <motion.div layoutId="tab" className="absolute bottom-[-1px] left-0 w-full h-[3px] bg-primary" />}
          </button>
        </div>

        <form onSubmit={handleLogin} className="flex-1 flex flex-col gap-4">
          <div className="bg-surface-container-low rounded-xl px-4 py-3 ring-1 ring-transparent focus-within:ring-primary focus-within:bg-surface-container transition-all">
            <label className="block text-[10px] text-on-surface-variant mb-1 uppercase tracking-wider font-medium">手机号/用户名</label>
            <div className="flex items-center">
              <User size={20} className="text-on-surface-variant mr-3" />
              <input
                className="w-full bg-transparent border-none p-0 text-base text-on-surface placeholder-on-surface-variant/40 focus:ring-0 outline-none"
                placeholder="请输入您的账号"
                type="text"
              />
            </div>
          </div>

          <AnimatePresence mode="popLayout">
            {!isLogin && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="bg-surface-container-low rounded-xl px-4 py-3 ring-1 ring-transparent focus-within:ring-primary focus-within:bg-surface-container transition-all"
              >
                <label className="block text-[10px] text-on-surface-variant mb-1 uppercase tracking-wider font-medium">电子邮箱</label>
                <div className="flex items-center">
                  <Mail size={20} className="text-on-surface-variant mr-3" />
                  <input
                    className="w-full bg-transparent border-none p-0 text-base text-on-surface placeholder-on-surface-variant/40 focus:ring-0 outline-none"
                    placeholder="请输入电子邮箱"
                    type="email"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="bg-surface-container-low rounded-xl px-4 py-3 ring-1 ring-transparent focus-within:ring-primary focus-within:bg-surface-container transition-all relative">
            <label className="block text-[10px] text-on-surface-variant mb-1 uppercase tracking-wider font-medium">密码</label>
            <div className="flex items-center">
              <Lock size={20} className="text-on-surface-variant mr-3" />
              <input
                className="w-full bg-transparent border-none p-0 text-base text-on-surface placeholder-on-surface-variant/40 focus:ring-0 outline-none pr-10"
                placeholder="请输入密码"
                type={showPassword ? "text" : "password"}
              />
            </div>
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 mt-2 text-on-surface-variant hover:text-on-surface transition-colors"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          <div className="flex justify-end">
            <button type="button" className="text-sm text-primary hover:text-primary/80 transition-colors">忘记密码？</button>
          </div>

          <div className="mt-8 flex flex-col gap-4">
            <button
              type="submit"
              className="w-full h-14 bg-primary text-on-primary rounded-xl font-semibold text-lg flex items-center justify-center transition-all hover:brightness-110 active:scale-[0.98] shadow-lg shadow-primary/20"
            >
              {isLogin ? '登录' : '注册并登录'}
            </button>
            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="w-full h-14 bg-transparent text-primary border border-surface-container-highest rounded-xl font-semibold text-lg flex items-center justify-center transition-all hover:bg-primary/5 active:scale-[0.98]"
            >
              {isLogin ? '创建新账号' : '已有账号？登录'}
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
