"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Users, Ticket, LayoutDashboard, LogOut } from "lucide-react";

export const AdminSidebar = () => {
  const pathname = usePathname();

  const menu = [
    { name: "Users", path: "/admin", icon: <Users size={20} /> },
    { name: "Coupons", path: "/admin/coupons", icon: <Ticket size={20} /> },
  ];

  return (
    <aside className="w-64 bg-slate-950 text-white h-screen flex flex-col p-6 fixed left-0 top-0">
      <div className="mb-12">
        <h1 className="text-2xl font-black italic text-violet-500">GYAANX</h1>
        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Admin Terminal</p>
      </div>

      <nav className="flex-grow space-y-2">
        {menu.map((item) => (
          <Link 
            key={item.path} 
            href={item.path}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm transition-all ${
              pathname === item.path ? "bg-violet-600 text-white shadow-lg" : "text-slate-400 hover:bg-slate-900 hover:text-white"
            }`}
          >
            {item.icon} {item.name}
          </Link>
        ))}
      </nav>

      <button className="flex items-center gap-3 px-4 py-3 text-slate-500 font-bold hover:text-rose-500 border-t border-slate-900 pt-6">
        <LogOut size={20} /> Logout
      </button>
    </aside>
  );
};