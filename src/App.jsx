import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Mail, MapPin, Globe, ExternalLink, Languages, Github, Linkedin, Code, Palette, Zap, Users, Target, Lightbulb } from 'lucide-react'
import pomodoroImg from './assets/pomodoro.png'
import pharmacyImg from './assets/pharmacy.jpg'
import concreteImg from './assets/concrete.jpg'
import smartwatchImg from './assets/smartwatch.jpg'
import maidiLogo from './assets/maidi-logo.png'
import personalLogo from './assets/personal-logo.png'
import './App.css'

function App() {
  const [language, setLanguage] = useState('ar')
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const content = {
    ar: {
      name: 'مايدي مصطفى',
      title: 'مطور برمجيات متخصص',
      location: 'الجلفة، الجزائر',
      email: 'maidi.mustapha.09@gmail.com',
      summary: 'أنا مطور برمجيات مبدع ودقيق، لدي خبرة واسعة في إنشاء ونشر تطبيقات مبتكرة في مجالات متعددة. شغوفي هو تقديم حلول عالية الجودة، وتحسين الأداء، وتعزيز تجربة المستخدم. أستطيع العمل بشكل مستقل، وإدارة عدة مشاريع من الفكرة وحتى الإطلاق بكفاءة عالية.',
      skillsTitle: 'المهارات الأساسية',
      skills: [
        { name: 'تطوير تطبيقات الويب والموبايل', icon: Code },
        { name: 'البرمجة للواجهة الأمامية والخلفية', icon: Zap },
        { name: 'تصميم واجهات وتجربة المستخدم', icon: Palette },
        { name: 'حل المشكلات وتصحيح الأخطاء', icon: Target },
        { name: 'إدارة المشاريع', icon: Users },
        { name: 'التعاون والعمل ضمن فريق', icon: Lightbulb }
      ],
      projectsTitle: 'المشاريع المميزة',
      projects: [
        {
          title: 'منصة صيدلية العراق',
          description: 'منصة إلكترونية شاملة لخدمات الصيدليات مع نظام إدارة متقدم وواجهة مستخدم سهلة الاستخدام',
          link: '#',
          image: pharmacyImg,
          tech: ['React', 'Node.js', 'MongoDB']
        },
        {
          title: 'تطبيق بومودورو الذكي',
          description: 'مؤقت إنتاجية متطور لتعزيز التركيز والكفاءة مع إحصائيات مفصلة وتقارير الأداء',
          link: '#',
          image: pomodoroImg,
          tech: ['JavaScript', 'CSS3', 'LocalStorage']
        },
        {
          title: 'برنامج تصميم العناصر الخرسانية',
          description: 'أداة برمجية متخصصة لتصميم العناصر الإنشائية الخرسانية مع حسابات هندسية دقيقة',
          link: '#',
          image: concreteImg,
          tech: ['Python', 'Qt', 'NumPy']
        },
        {
          title: 'تطبيق الساعة الذكية',
          description: 'تطبيق لوحة تحكم شاملة للساعة الذكية مع مراقبة الصحة والإشعارات الذكية',
          link: '#',
          image: smartwatchImg,
          tech: ['Flutter', 'Dart', 'Firebase']
        }
      ],
      languagesTitle: 'اللغات',
      languages: [
        'العربية (اللغة الأم)',
        'الإنجليزية (متقدم)',
        'الفرنسية (متوسط)'
      ],
      contactTitle: 'التواصل معي',
      viewProject: 'عرض المشروع',
      downloadCV: 'تحميل السيرة الذاتية'
    },
    en: {
      name: 'Maidi Mustapha',
      title: 'Specialized Software Developer',
      location: 'Djelfa, Algeria',
      email: 'maidi.mustapha.09@gmail.com',
      summary: 'I am a creative and meticulous software developer with extensive experience in building and deploying innovative applications across various domains. My passion lies in delivering high-quality solutions, optimizing performance, and enhancing user experience. I excel at working independently and efficiently managing multiple projects from conception to successful launch.',
      skillsTitle: 'Core Competencies',
      skills: [
        { name: 'Web & Mobile Application Development', icon: Code },
        { name: 'Full-Stack Programming', icon: Zap },
        { name: 'UI/UX Design & Implementation', icon: Palette },
        { name: 'Problem Solving & Debugging', icon: Target },
        { name: 'Project Management & Leadership', icon: Users },
        { name: 'Team Collaboration & Innovation', icon: Lightbulb }
      ],
      projectsTitle: 'Featured Projects',
      projects: [
        {
          title: 'Iraq Pharmacy Platform',
          description: 'Comprehensive electronic platform for pharmacy services with advanced management system and user-friendly interface',
          link: '#',
          image: pharmacyImg,
          tech: ['React', 'Node.js', 'MongoDB']
        },
        {
          title: 'Smart Pomodoro Application',
          description: 'Advanced productivity timer to enhance focus and efficiency with detailed statistics and performance reports',
          link: '#',
          image: pomodoroImg,
          tech: ['JavaScript', 'CSS3', 'LocalStorage']
        },
        {
          title: 'Concrete Element Design Program',
          description: 'Specialized software tool for designing concrete structural elements with precise engineering calculations',
          link: '#',
          image: concreteImg,
          tech: ['Python', 'Qt', 'NumPy']
        },
        {
          title: 'Smartwatch Dashboard Application',
          description: 'Comprehensive dashboard application for smartwatches with health monitoring and smart notifications',
          link: '#',
          image: smartwatchImg,
          tech: ['Flutter', 'Dart', 'Firebase']
        }
      ],
      languagesTitle: 'Languages',
      languages: [
        'Arabic (Native)',
        'English (Advanced)',
        'French (Intermediate)'
      ],
      contactTitle: 'Get In Touch',
      viewProject: 'View Project',
      downloadCV: 'Download Resume'
    }
  }

  const currentContent = content[language]

  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900 ${language === 'ar' ? 'rtl' : 'ltr'} transition-all duration-1000`}>
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-green-400 via-blue-400 to-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-yellow-400 via-orange-400 to-red-400 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse animation-delay-4000"></div>
        
        {/* Floating particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full animate-bounce opacity-60"></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-purple-400 rounded-full animate-bounce opacity-50 animation-delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-pink-400 rounded-full animate-bounce opacity-70 animation-delay-2000"></div>
        <div className="absolute bottom-20 right-20 w-3 h-3 bg-indigo-400 rounded-full animate-bounce opacity-60 animation-delay-3000"></div>
      </div>

      {/* Header */}
      <header className="relative bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-b border-blue-200 dark:border-gray-700 sticky top-0 z-50 shadow-2xl">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <img 
              src={maidiLogo} 
              alt="MAIDI Logo" 
              className="w-12 h-12 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
            />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              {currentContent.name}
            </h1>
          </div>
          <Button
            onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
            variant="outline"
            size="sm"
            className="flex items-center gap-2 border-blue-300 hover:bg-blue-50 hover:border-blue-400 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <Languages className="w-4 h-4" />
            {language === 'ar' ? 'English' : 'العربية'}
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className={`relative container mx-auto px-4 py-8 ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`}>
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl shadow-2xl p-12 mb-8 border border-blue-100 dark:border-gray-700 hover:shadow-3xl transition-all duration-700 transform hover:scale-[1.02]">
            <div className="relative w-48 h-48 mx-auto mb-8">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-500 rounded-full animate-spin-slow opacity-20"></div>
              <div className="relative w-full h-full bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-500 rounded-full flex items-center justify-center shadow-2xl">
                <img 
                  src={maidiLogo} 
                  alt="MAIDI Logo" 
                  className="w-32 h-32 rounded-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-500 rounded-full animate-ping opacity-10"></div>
            </div>
            
            <h2 className="text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4 animate-slideInUp">
              {currentContent.name}
            </h2>
            <p className="text-3xl text-blue-600 dark:text-blue-400 mb-8 font-semibold animate-slideInUp animation-delay-200">
              {currentContent.title}
            </p>
            
            <div className="flex items-center justify-center gap-8 text-gray-600 dark:text-gray-300 mb-10 flex-wrap">
              <div className="flex items-center gap-3 bg-blue-50 dark:bg-blue-900/30 px-6 py-3 rounded-full hover:scale-105 transition-transform duration-300">
                <MapPin className="w-6 h-6 text-blue-500" />
                <span className="text-lg">{currentContent.location}</span>
              </div>
              <div className="flex items-center gap-3 bg-purple-50 dark:bg-purple-900/30 px-6 py-3 rounded-full hover:scale-105 transition-transform duration-300">
                <Mail className="w-6 h-6 text-purple-500" />
                <span className="text-lg">{currentContent.email}</span>
              </div>
            </div>
            
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-5xl mx-auto leading-relaxed mb-8">
              {currentContent.summary}
            </p>
            
            <div className="flex justify-center gap-4">
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0 hover:from-blue-600 hover:to-purple-600 transition-all duration-300 hover:scale-105 shadow-xl px-8 py-4 text-lg">
                {currentContent.downloadCV}
              </Button>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <Card className="shadow-2xl border-0 bg-gradient-to-br from-white/95 to-blue-50/95 dark:from-gray-800/95 dark:to-blue-900/30 backdrop-blur-xl hover:shadow-3xl transition-all duration-700">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-4xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                {currentContent.skillsTitle}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentContent.skills.map((skill, index) => {
                  const IconComponent = skill.icon
                  return (
                    <div 
                      key={index} 
                      className="group bg-gradient-to-br from-white to-blue-50 dark:from-gray-700 dark:to-blue-900/50 p-6 rounded-2xl border border-blue-200 dark:border-blue-700 hover:scale-105 hover:shadow-xl transition-all duration-500 cursor-default"
                    >
                      <div className="flex items-center gap-4 mb-3">
                        <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl text-white group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="w-6 h-6" />
                        </div>
                      </div>
                      <h3 className="font-semibold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {skill.name}
                      </h3>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Projects Section */}
        <section className="mb-16">
          <h3 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            {currentContent.projectsTitle}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {currentContent.projects.map((project, index) => (
              <Card key={index} className="group shadow-2xl hover:shadow-3xl transition-all duration-700 border-0 bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl overflow-hidden hover:scale-[1.03] transform">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="bg-white/90 text-gray-800 hover:bg-white transition-colors duration-300">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between text-2xl">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      {project.title}
                    </span>
                    <ExternalLink className="w-6 h-6 text-blue-500 group-hover:text-purple-500 transition-colors duration-300 group-hover:scale-110" />
                  </CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    variant="outline" 
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0 hover:from-blue-600 hover:to-purple-600 transition-all duration-300 hover:scale-105 shadow-lg text-lg py-3"
                  >
                    {currentContent.viewProject}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Languages Section */}
        <section className="mb-16">
          <Card className="shadow-2xl border-0 bg-gradient-to-br from-white/95 to-indigo-50/95 dark:from-gray-800/95 dark:to-indigo-900/30 backdrop-blur-xl hover:shadow-3xl transition-all duration-700">
            <CardHeader className="text-center">
              <CardTitle className="text-4xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                {currentContent.languagesTitle}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap justify-center gap-8">
                {currentContent.languages.map((lang, index) => (
                  <Badge 
                    key={index} 
                    variant="outline" 
                    className="p-6 text-xl bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/50 dark:to-purple-900/50 border-indigo-200 dark:border-indigo-700 hover:scale-110 transition-transform duration-300 cursor-default shadow-lg"
                  >
                    {lang}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Contact Section */}
        <section className="text-center mb-16">
          <Card className="shadow-2xl border-0 bg-gradient-to-br from-white/95 to-purple-50/95 dark:from-gray-800/95 dark:to-purple-900/30 backdrop-blur-xl hover:shadow-3xl transition-all duration-700">
            <CardHeader>
              <CardTitle className="text-4xl bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
                {currentContent.contactTitle}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center gap-4 text-2xl mb-8">
                <Mail className="w-8 h-8 text-purple-500" />
                <a 
                  href={`mailto:${currentContent.email}`}
                  className="text-purple-600 dark:text-purple-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300 hover:underline"
                >
                  {currentContent.email}
                </a>
              </div>
              <div className="flex justify-center gap-6">
                <Button variant="outline" size="lg" className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white border-0 hover:from-purple-600 hover:to-indigo-600 transition-all duration-300 hover:scale-105 shadow-xl px-8 py-4">
                  <Github className="w-6 h-6 mr-3" />
                  GitHub
                </Button>
                <Button variant="outline" size="lg" className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white border-0 hover:from-indigo-600 hover:to-blue-600 transition-all duration-300 hover:scale-105 shadow-xl px-8 py-4">
                  <Linkedin className="w-6 h-6 mr-3" />
                  LinkedIn
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Personal Logo Section */}
        <section className="text-center">
          <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-purple-100 dark:border-gray-700 hover:shadow-3xl transition-all duration-700">
            <img 
              src={personalLogo} 
              alt="Personal Logo" 
              className="w-32 h-32 mx-auto mb-4 hover:scale-110 transition-transform duration-300"
            />
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Designed with passion and creativity
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white py-16 mt-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center items-center gap-4 mb-6">
            <img 
              src={maidiLogo} 
              alt="MAIDI Logo" 
              className="w-16 h-16 rounded-full shadow-lg"
            />
            <img 
              src={personalLogo} 
              alt="Personal Logo" 
              className="w-16 h-16"
            />
          </div>
          <p className="text-xl opacity-90 mb-4">&copy; 2024 {currentContent.name}. All rights reserved.</p>
          <p className="text-lg opacity-70">Made with ❤️, creativity, and cutting-edge technology</p>
        </div>
      </footer>
    </div>
  )
}

export default App

