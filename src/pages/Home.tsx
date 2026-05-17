import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { categories } from '../data/categories';
import { questions } from '../data/questions';
import { Category, Question } from '../types';

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
                href="#categories" 
                className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 shadow-lg"
              >
                开始学习
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Categories Section */}
        <section id="categories" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            知识分类
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
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            精选题目
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
  );
};

export default Home;
