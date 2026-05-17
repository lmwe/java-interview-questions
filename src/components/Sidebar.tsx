import { Link } from 'react-router-dom';

interface NavItem {
  id: string;
  name: string;
  icon: string;
  type: 'tool' | 'question';
}

const navItems: NavItem[] = [
  { id: 'backend', name: '后端开发工具', icon: '🖥️', type: 'tool' },
  { id: 'frontend', name: '前端开发工具', icon: '🌐', type: 'tool' },
  { id: 'devops', name: 'DevOps工具', icon: '🔧', type: 'tool' },
  { id: 'wechat', name: '微信生态', icon: '💬', type: 'tool' },
  { id: 'basics', name: 'Java基础', icon: '📚', type: 'question' },
  { id: 'oop', name: '面向对象', icon: '🎯', type: 'question' },
  { id: 'collection', name: '集合框架', icon: '📦', type: 'question' },
  { id: 'concurrent', name: '并发编程', icon: '⚡', type: 'question' },
  { id: 'jvm', name: 'JVM原理', icon: '🔧', type: 'question' },
  { id: 'advanced', name: '高级特性', icon: '🚀', type: 'question' },
];

const Sidebar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside className="fixed left-0 top-16 h-screen w-64 bg-white shadow-lg overflow-y-auto border-r border-gray-200 z-40">
      <div className="p-4">
        <div className="mb-6">
          <h3 className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-3 flex items-center">
            <span className="mr-2">🔧</span> 开发工具
          </h3>
          <ul className="space-y-1">
            {navItems.filter(item => item.type === 'tool').map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="w-full text-left px-4 py-2.5 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-all duration-200 flex items-center space-x-3 text-sm font-medium"
                >
                  <span className="text-lg">{item.icon}</span>
                  <span>{item.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-3 flex items-center">
            <span className="mr-2">📝</span> 面试题分类
          </h3>
          <ul className="space-y-1">
            {navItems.filter(item => item.type === 'question').map((item) => (
              <li key={item.id}>
                <Link
                  to={`/category/${item.id}`}
                  className="block px-4 py-2.5 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-all duration-200 flex items-center space-x-3 text-sm font-medium"
                >
                  <span className="text-lg">{item.icon}</span>
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
