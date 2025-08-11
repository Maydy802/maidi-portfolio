import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Mail, MapPin, Globe, ExternalLink, Languages, Github, Linkedin } from 'lucide-react'
import pomodoroImg from './assets/pomodoro.png'
import pharmacyImg from './assets/pharmacy.jpg'
import concreteImg from './assets/concrete.jpg'
import smartwatchImg from './assets/smartwatch.jpg'
import './App.css'

function App() {
  const [language, setLanguage] = useState('ar')

  const content = {
    ar: {
      name: 'مايدي مصطفى',
      title: 'مطور برمجيات',
      location: 'الجلفة، الجزائر',
      email: 'maidi.mustapha.09@gmail.com',
      summary: 'أنا مطور برمجيات مبدع ودقيق، لدي خبرة في إنشاء ونشر تطبيقات مبتكرة في مجالات متعددة. شغوفي هو تقديم حلول عالية الجودة، وتحسين الأداء، وتعزيز تجربة المستخدم. أستطيع العمل بشكل مستقل، وإدارة عدة مشاريع من الفكرة وحتى الإطلاق.',
      skillsTitle: 'المهارات الأساسية',
      skills: [
        'تطوير تطبيقات الويب والموبايل',
        'البرمجة للواجهة الأمامية والخلفية',
        'تصميم واجهات وتجربة المستخدم',
        'حل المشكلات وتصحيح الأخطاء',
        'إدارة المشاريع',
        'التعاون والعمل ضمن فريق'
      ],
      projectsTitle: 'المشاريع',
      projects: [
        {
          title: 'منصة صيدلية العراق',
          description: 'منصة إلكترونية لخدمات الصيدليات',
          link: '#',
          image: pharmacyImg
        },
        {
          title: 'تطبيق بومودورو',
          description: 'مؤقت إنتاجية لتعزيز التركيز والكفاءة',
          link: '#',
          image: pomodoroImg
        },
        {
          title: 'برنامج تصميم العناصر الخرسانية',
          description: 'أداة برمجية لتصميم العناصر الإنشائية الخرسانية',
          link: '#',
          image: concreteImg
        },
        {
          title: 'تطبيق الساعة الذكية',
          description: 'تطبيق لوحة تحكم للساعة الذكية',
          link: '#',
          image: smartwatchImg
        }
      ],
      languagesTitle: 'اللغات',
      languages: [
        'العربية (اللغة الأم)',
        'الإنجليزية (متقدم)'
      ],
      contactTitle: 'التواصل',
      viewProject: 'عرض المشروع'
    },
    en: {
      name: 'Maidi Mustapha',
      title: 'Software Developer',
      location: 'Djelfa, Algeria',
      email: 'maidi.mustapha.09@gmail.com',
      summary: 'I am a creative and meticulous software developer with experience in building and deploying innovative applications across various domains. My passion is delivering high-quality solutions, optimizing performance, and enhancing user experience. I can work independently and manage multiple projects from conception to launch.',
      skillsTitle: 'Core Skills',
      skills: [
        'Web and Mobile Application Development',
        'Frontend and Backend Programming',
        'UI/UX Design',
        'Problem Solving and Debugging',
        'Project Management',
        'Collaboration and Teamwork'
      ],
      projectsTitle: 'Projects',
      projects: [
        {
          title: 'Iraq Pharmacy Platform',
          description: 'An electronic platform for pharmacy services',
          link: '#',
          image: pharmacyImg
        },
        {
          title: 'Pomodoro App',
          description: 'A productivity timer to enhance focus and efficiency',
          link: '#',
          image: pomodoroImg
        },
        {
          title: 'Concrete Element Design Program',
          description: 'A software tool for designing concrete structural elements',
          link: '#',
          image: concreteImg
        },
        {
          title: 'Smartwatch Dashboard App',
          description: 'A dashboard application for smartwatches',
          link: '#',
          image: smartwatchImg
        }
      ],
      languagesTitle: 'Languages',
      languages: [
        'Arabic (Native)',
        'English (Advanced)'
      ],
      contactTitle: 'Contact',
      viewProject: 'View Project'
    }
  }

  const currentContent = content[language]

  return (
    <div className={`min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 dark:from-gray-900 dark:via-purple-900 dark:to-gray-800 ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Header */}
      <header className="relative bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-purple-200 dark:border-gray-700 sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            {currentContent.name}
          </h1>
          <Button
            onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
            variant="outline"
            size="sm"
            className="flex items-center gap-2 border-purple-300 hover:bg-purple-50 hover:border-purple-400 transition-all duration-300"
          >
            <Languages className="w-4 h-4" />
            {language === 'ar' ? 'English' : 'العربية'}
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-3xl shadow-2xl p-8 mb-8 border border-purple-100 dark:border-gray-700 hover:shadow-3xl transition-all duration-500">
            <div className="relative w-40 h-40 mx-auto mb-6">
              <div className="w-full h-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-full flex items-center justify-center text-white text-5xl font-bold shadow-2xl animate-pulse">
                {currentContent.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-full animate-ping opacity-20"></div>
            </div>
            <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent mb-3">
              {currentContent.name}
            </h2>
            <p className="text-2xl text-purple-600 dark:text-purple-400 mb-6 font-semibold">
              {currentContent.title}
            </p>
            <div className="flex items-center justify-center gap-6 text-gray-600 dark:text-gray-300 mb-8">
              <div className="flex items-center gap-2 bg-purple-50 dark:bg-purple-900/30 px-4 py-2 rounded-full">
                <MapPin className="w-5 h-5 text-purple-500" />
                <span>{currentContent.location}</span>
              </div>
              <div className="flex items-center gap-2 bg-pink-50 dark:bg-pink-900/30 px-4 py-2 rounded-full">
                <Mail className="w-5 h-5 text-pink-500" />
                <span>{currentContent.email}</span>
              </div>
            </div>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              {currentContent.summary}
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-12">
          <Card className="shadow-2xl border-0 bg-gradient-to-br from-white/90 to-purple-50/90 dark:from-gray-800/90 dark:to-purple-900/30 backdrop-blur-md">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {currentContent.skillsTitle}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {currentContent.skills.map((skill, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="p-4 text-center justify-center bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/50 dark:to-pink-900/50 border-purple-200 dark:border-purple-700 hover:scale-105 transition-transform duration-300 cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Projects Section */}
        <section className="mb-12">
          <h3 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
            {currentContent.projectsTitle}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {currentContent.projects.map((project, index) => (
              <Card key={index} className="group shadow-2xl hover:shadow-3xl transition-all duration-500 border-0 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md overflow-hidden hover:scale-105">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between text-xl">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      {project.title}
                    </span>
                    <ExternalLink className="w-5 h-5 text-purple-500 group-hover:text-pink-500 transition-colors duration-300" />
                  </CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    variant="outline" 
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-105"
                  >
                    {currentContent.viewProject}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Languages Section */}
        <section className="mb-12">
          <Card className="shadow-2xl border-0 bg-gradient-to-br from-white/90 to-orange-50/90 dark:from-gray-800/90 dark:to-orange-900/30 backdrop-blur-md">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                {currentContent.languagesTitle}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap justify-center gap-6">
                {currentContent.languages.map((lang, index) => (
                  <Badge 
                    key={index} 
                    variant="outline" 
                    className="p-4 text-lg bg-gradient-to-r from-orange-100 to-pink-100 dark:from-orange-900/50 dark:to-pink-900/50 border-orange-200 dark:border-orange-700 hover:scale-110 transition-transform duration-300 cursor-default"
                  >
                    {lang}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Contact Section */}
        <section className="text-center">
          <Card className="shadow-2xl border-0 bg-gradient-to-br from-white/90 to-blue-50/90 dark:from-gray-800/90 dark:to-blue-900/30 backdrop-blur-md">
            <CardHeader>
              <CardTitle className="text-3xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {currentContent.contactTitle}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center gap-3 text-xl mb-6">
                <Mail className="w-6 h-6 text-blue-500" />
                <a 
                  href={`mailto:${currentContent.email}`}
                  className="text-blue-600 dark:text-blue-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300 hover:underline"
                >
                  {currentContent.email}
                </a>
              </div>
              <div className="flex justify-center gap-4">
                <Button variant="outline" size="lg" className="bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0 hover:from-blue-600 hover:to-purple-600 transition-all duration-300 hover:scale-105">
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </Button>
                <Button variant="outline" size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-105">
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative bg-gradient-to-r from-purple-900 via-pink-900 to-orange-900 text-white py-12 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg opacity-90">&copy; 2024 {currentContent.name}. All rights reserved.</p>
          <p className="text-sm opacity-70 mt-2">Made with ❤️ and creativity</p>
        </div>
      </footer>
    </div>
  )
}

export default App

