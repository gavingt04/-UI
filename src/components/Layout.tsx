import { Outlet, useLocation, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Dumbbell, Compass, Brain, User, Bell } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function Layout() {
  const location = useLocation();
  const hideNav = location.pathname === '/training' || location.pathname === '/auth';

  const navItems = [
    { path: '/', label: '训练', icon: Dumbbell },
    { path: '/plan', label: '计划', icon: Compass },
    { path: '/data', label: '数据', icon: Brain },
    { path: '/profile', label: '我的', icon: User },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-on-surface">
      {!hideNav && (
        <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-surface-variant/30 flex justify-between items-center px-4 h-14 max-w-[1200px] mx-auto left-1/2 -translate-x-1/2">
          <div className="text-xl font-bold text-primary-container font-lexend tracking-tight">
            智动AI教练
          </div>
          <div className="flex items-center gap-4">
            <button className="text-primary-container hover:opacity-80 transition-opacity">
              <Bell size={24} />
            </button>
          </div>
        </header>
      )}

      <main className={cn("flex-1 w-full max-w-[1200px] mx-auto", !hideNav && "pt-14 pb-20")}>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="h-full"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      {!hideNav && (
        <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center h-16 pb-safe bg-[#1C1C1E]/90 backdrop-blur-lg border-t border-surface-variant/30 shadow-[0_-2px_10px_rgba(0,0,0,0.5)] z-50 rounded-t-2xl md:hidden">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex flex-col items-center justify-center transition-all duration-200",
                  isActive ? "text-primary-container scale-110" : "text-tertiary opacity-60 hover:opacity-100"
                )}
              >
                <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
                <span className="text-[10px] font-lexend font-medium mt-1">{item.label}</span>
              </Link>
            );
          })}
        </nav>
      )}

      {/* Desktop Side Nav */}
      {!hideNav && (
        <div className="hidden md:flex fixed top-14 left-0 h-[calc(100vh-56px)] w-[240px] border-r border-surface-variant/30 bg-background/50 flex-col py-8 px-4 gap-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200",
                  isActive 
                    ? "bg-primary-container/10 text-primary-container border border-primary-container/20" 
                    : "text-on-surface-variant hover:bg-surface-container"
                )}
              >
                <Icon size={20} />
                <span className="font-body-lg font-medium">{item.label}</span>
              </Link>
            );
          })}
        </div>
      )}

      <style>{`
        @media (min-width: 768px) {
          main {
            padding-left: 240px;
            max-width: calc(1200px);
          }
        }
        .pb-safe {
          padding-bottom: env(safe-area-inset-bottom);
        }
      `}</style>
    </div>
  );
}
