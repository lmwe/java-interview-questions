import { Link, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { categories } from '../data/categories';
import { questions } from '../data/questions';

const Category = () => {
  const { id } = useParams<{ id: string }>();
  const category = categories.find(c => c.id === id);
  const categoryQuestions = questions.filter(q => q.category === id);

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

  if (!category) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="ml-64">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <h2 className="text-2xl font-bold text-gray-900">分类不存在</h2>
            <Link to="/" className="text-blue-600 hover:text-blue-800 mt-4 inline-block">
              返回首页
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="ml-64">
        {/* Category Header */}
        <div className={`${category.color} text-white`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <Link to="/" className="text-blue-100 hover:text-white mb-4 inline-flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              返回首页
            </Link>
            <div className="flex items-center space-x-4 mt-4">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-lg flex items-center justify-center text-3xl">
                {category.icon}
              </div>
              <div>
                <h1 className="text-4xl font-bold">{category.name}</h1>
                <p className="text-blue-100 mt-2">{category.description}</p>
              </div>
            </div>
            <div className="mt-6 text-lg">
              共 <span className="font-bold">{categoryQuestions.length}</span> 道题目
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {categoryQuestions.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500">该分类下暂无题目</p>
            </div>
          ) : (
            <div className="space-y-4">
              {categoryQuestions.map((question) => (
                <Link 
                  key={question.id}
                  to={`/question/${question.id}`}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 group block"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {question.title}
                    </h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(question.difficulty)}`}>
                      {getDifficultyText(question.difficulty)}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{question.content}</p>
                  <div className="flex flex-wrap gap-2">
                    {question.tags.map((tag, idx) => (
                      <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          )}
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

export default Category;
