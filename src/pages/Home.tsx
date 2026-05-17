import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { categories } from '../data/categories';
import { questions } from '../data/questions';

interface DocLink {
  name: string;
  url: string;
  description: string;
  usage: string;
  icon: string;
  color: string;
}

const backendTools: DocLink[] = [
  {
    name: 'IntelliJ IDEA',
    url: 'https://www.jetbrains.com/idea/',
    description: 'Java集成开发环境（IDE），业界公认的Java开发首选工具',
    usage: '安装后安装Tomcat、Spring等插件，配置Maven/Gradle项目，快速开发Java应用。支持代码提示、重构、调试等功能。',
    icon: '💻',
    color: 'from-purple-500 to-indigo-500'
  },
  {
    name: 'Spring Boot',
    url: 'https://spring.io/projects/spring-boot',
    description: 'Spring Framework的子项目，简化Spring应用开发',
    usage: '创建Spring Boot项目：访问start.spring.io生成项目结构。使用@SpringBootApplication启动应用，自动配置数据库、Web等。',
    icon: '🌱',
    color: 'from-green-500 to-emerald-500'
  },
  {
    name: 'Redis',
    url: 'https://redis.io/',
    description: '高性能键值对数据库，常用于缓存和会话存储',
    usage: '安装Redis后，使用redis-cli连接。常用命令：SET/GET存取数据，EXPIRE设置过期，HASH存对象。Java中使用Jedis或Lettuce客户端。',
    icon: '🔴',
    color: 'from-red-500 to-orange-500'
  },
  {
    name: 'MySQL',
    url: 'https://www.mysql.com/',
    description: '开源关系型数据库，Web应用最常用的数据库之一',
    usage: '安装MySQL后，使用mysql -u root -p登录。创建数据库：CREATE DATABASE name；创建表：CREATE TABLE；常用命令：SELECT/INSERT/UPDATE/DELETE。',
    icon: '🐬',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    name: 'Maven',
    url: 'https://maven.apache.org/',
    description: 'Java项目管理和依赖管理工具，统一项目结构',
    usage: '配置pom.xml添加依赖：<dependency>标签。常用命令：mvn clean install编译项目，mvn package打包，mvn spring-boot:run运行Spring Boot项目。',
    icon: '🧱',
    color: 'from-yellow-500 to-amber-500'
  }
];

const frontendTools: DocLink[] = [
  {
    name: 'Vue.js',
    url: 'https://vuejs.org/',
    description: '渐进式JavaScript框架，用于构建用户界面',
    usage: '使用npm create vue@latest创建项目。组件结构：template写HTML，script写逻辑，style写样式。常用指令：v-if/v-for/v-model。状态管理用Pinia或Vuex。',
    icon: '💚',
    color: 'from-green-400 to-emerald-400'
  },
  {
    name: 'Node.js',
    url: 'https://nodejs.org/',
    description: '基于Chrome V8引擎的JavaScript运行时，可开发后端服务',
    usage: 'npm init初始化项目，npm install安装依赖。创建服务器：const http = require("http")。Express框架：npm install express，快速搭建Web API。',
    icon: '🟢',
    color: 'from-green-600 to-green-400'
  },
  {
    name: 'Postman',
    url: 'https://www.postman.com/',
    description: 'API开发和测试工具，简化HTTP请求调试',
    usage: '新建请求：选择GET/POST等方法，输入URL。Params设置参数，Body选择raw/JSON格式发送数据。Headers设置请求头。Collections管理多个请求。',
    icon: '🚀',
    color: 'from-orange-400 to-yellow-400'
  }
];

const devopsTools: DocLink[] = [
  {
    name: 'Git',
    url: 'https://git-scm.com/',
    description: '分布式版本控制系统，管理代码版本和协作开发',
    usage: 'git init初始化仓库。git add添加文件，git commit -m提交。git push推送到远程，git pull拉取更新。git branch创建分支，git merge合并分支。',
    icon: '🔀',
    color: 'from-orange-500 to-red-500'
  },
  {
    name: 'Docker',
    url: 'https://www.docker.com/',
    description: '容器化平台，实现应用及其依赖的打包和部署',
    usage: 'Dockerfile定义镜像：FROM指定基础镜像，COPY复制文件，RUN执行命令，CMD启动命令。构建镜像：docker build -t name。运行容器：docker run -p 8080:80 name。',
    icon: '🐳',
    color: 'from-blue-600 to-blue-400'
  }
];

const wechatTools: DocLink[] = [
  {
    name: '微信小程序',
    url: 'https://developers.weixin.qq.com/miniprogram/dev/framework/',
    description: '微信官方小程序开发框架，跨平台移动应用',
    usage: '下载微信开发者工具，创建项目。pages目录下创建页面，app.json配置路由，app.wxss写样式。调用wx.request发起网络请求，wx.setStorage存本地数据。',
    icon: '💬',
    color: 'from-green-500 to-green-400'
  },
  {
    name: '微信小游戏',
    url: 'https://developers.weixin.qq.com/minigame/dev/guide/',
    description: '微信小游戏开发平台，基于Canvas/WebGL渲染',
    usage: '使用微信开发者工具创建小游戏项目。LayaAir/Cocos Creator等引擎开发。小游戏使用wx.createCanvas()创建画布，通过requestAnimationFrame实现游戏循环。',
    icon: '🎮',
    color: 'from-blue-400 to-cyan-400'
  }
];

interface ToolSectionProps {
  id: string;
  title: string;
  tools: DocLink[];
}

const ToolSection = ({ id, title, tools }: ToolSectionProps) => {
  return (
    <section id={id} className="mb-12 scroll-mt-24">
      <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
        <span className="mr-3">{title.split(' ')[0]}</span>
        <span>{title.split(' ').slice(1).join(' ')}</span>
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((doc) => (
          <div
            key={doc.name}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 group"
          >
            <div className="flex items-start space-x-4 mb-4">
              <div className={`w-14 h-14 bg-gradient-to-br ${doc.color} rounded-lg flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-200`}>
                {doc.icon}
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-gray-900 mb-1 text-lg">{doc.name}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{doc.description}</p>
              </div>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-4 mb-4">
              <h5 className="text-blue-900 font-semibold text-sm mb-2 flex items-center">
                <span className="mr-1">📖</span> 使用方法
              </h5>
              <p className="text-blue-800 text-xs leading-relaxed">{doc.usage}</p>
            </div>
            
            <a
              href={doc.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-200 text-sm"
            >
              <span className="mr-2">🌐</span>
              访问官方文档
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

const Home = () => {
  const featuredQuestions = questions.slice(0, 6);
  
  const getCategoryName = (categoryId: string) => {
    const cat = categories.find(c => c.id === categoryId);
    return cat ? cat.name : categoryId;
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getDifficultyText = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return '简单';
      case 'medium': return '中等';
      case 'hard': return '困难';
      default: return difficulty;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Main Content with Sidebar Offset */}
      <div className="ml-64">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-6 animate-fade-in">
                Java面试题精选
              </h1>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                精心整理的Java面试题集，涵盖基础、集合、并发、JVM等核心知识，助您面试一臂之力！
              </p>
              <div className="flex justify-center space-x-4">
                <a 
                  href="#backend" 
                  className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 shadow-lg"
                >
                  开始学习
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Official Documentation Links */}
          <section id="docs" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">
              🔧 开发工具箱
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Java开发者必备的官方文档和工具，包含详细使用教程
            </p>
            
            <ToolSection id="backend" title="🖥️ 后端开发工具" tools={backendTools} />
            <ToolSection id="frontend" title="🌐 前端开发工具" tools={frontendTools} />
            <ToolSection id="devops" title="🔧 DevOps工具" tools={devopsTools} />
            <ToolSection id="wechat" title="💬 微信生态" tools={wechatTools} />
          </section>

          {/* Categories Section */}
          <section id="categories" className="mb-16 scroll-mt-24">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              📚 知识分类
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category) => (
                <Link 
                  key={category.id}
                  to={`/category/${category.id}`}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100 group"
                >
                  <div className={`w-14 h-14 ${category.color} rounded-lg flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-200`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.name}</h3>
                  <p className="text-gray-600 text-sm">{category.description}</p>
                </Link>
              ))}
            </div>
          </section>

          {/* Featured Questions */}
          <section id="questions" className="scroll-mt-24">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              🎯 精选题目
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredQuestions.map((question) => (
                <Link 
                  key={question.id}
                  to={`/question/${question.id}`}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {question.title}
                    </h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(question.difficulty)}`}>
                      {getDifficultyText(question.difficulty)}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {question.content}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {getCategoryName(question.category)}
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {question.tags.slice(0, 2).map((tag, idx) => (
                        <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            
            <div className="text-center mt-10">
              <Link 
                to="/category/basics"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                查看更多题目
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-400 py-8">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-sm">
              © 2024 Java面试题. 帮助每一位开发者准备面试。
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;
