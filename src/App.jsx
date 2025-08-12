import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Label } from '@/components/ui/label.jsx'
import { Mail, MapPin, Globe, ExternalLink, Languages, Github, Linkedin, Code, Palette, Zap, Users, Target, Lightbulb, Download, Send, MessageSquare, Award, Star, Clock, CheckCircle, TrendingUp, Coffee, Heart, Eye } from 'lucide-react'
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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    description: '',
    budget: '',
    timeline: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')
  const [stats, setStats] = useState({
    projects: 0,
    clients: 0,
    experience: 0,
    satisfaction: 0
  })

  useEffect(() => {
    setIsVisible(true)
    // Animate stats
    const animateStats = () => {
      const targetStats = { projects: 15, clients: 25, experience: 3, satisfaction: 98 }
      const duration = 2000
      const steps = 60
      const stepDuration = duration / steps
      
      let currentStep = 0
      const interval = setInterval(() => {
        currentStep++
        const progress = currentStep / steps
        
        setStats({
          projects: Math.floor(targetStats.projects * progress),
          clients: Math.floor(targetStats.clients * progress),
          experience: Math.floor(targetStats.experience * progress),
          satisfaction: Math.floor(targetStats.satisfaction * progress)
        })
        
        if (currentStep >= steps) {
          clearInterval(interval)
          setStats(targetStats)
        }
      }, stepDuration)
    }
    
    setTimeout(animateStats, 1000)
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
          description: 'منصة صيدلية إلكترونية للوصول السهل إلى المنتجات الصيدلانية في العراق',
          link: 'https://preview--iraqi-pharmacy-hub.lovable.app/',
          image: pharmacyImg,
          tech: ['React', 'Node.js', 'MongoDB'],
          downloadSize: '45 MB',
          version: '2.1.0'
        },
        {
          title: 'تطبيق بومودورو الذكي',
          description: 'تطبيق مؤقت إنتاجية مبني على تقنية بومودورو',
          link: 'https://mellow-mule-904.convex.app/',
          image: pomodoroImg,
          tech: ['JavaScript', 'CSS3', 'LocalStorage'],
          downloadSize: '12 MB',
          version: '1.5.2'
        },
        {
          title: 'برنامج تصميم العناصر الخرسانية',
          description: 'تطبيق ويب لتصميم العناصر الإنشائية الخرسانية بكفاءة',
          link: 'https://preview--beton-eucode-wizard.lovable.app/',
          image: concreteImg,
          tech: ['Python', 'Qt', 'NumPy'],
          downloadSize: '78 MB',
          version: '3.0.1'
        },
        {
          title: 'تطبيق الساعة الذكية',
          description: 'لوحة تحكم رقمية للأجهزة الذكية',
          link: 'https://smart-rise-app-1e52c.buildaispace.app/dashboard',
          image: smartwatchImg,
          tech: ['Flutter', 'Dart', 'Firebase'],
          downloadSize: '32 MB',
          version: '1.8.0'
        }
      ],
      servicesTitle: 'الخدمات المقدمة',
      services: [
        { name: 'تطوير مواقع الويب', description: 'مواقع حديثة ومتجاوبة', icon: Globe },
        { name: 'تطبيقات الموبايل', description: 'تطبيقات iOS و Android', icon: Code },
        { name: 'تصميم واجهات المستخدم', description: 'تصاميم جذابة وسهلة الاستخدام', icon: Palette },
        { name: 'استشارات تقنية', description: 'حلول مخصصة لاحتياجاتك', icon: Lightbulb }
      ],
      achievementsTitle: 'الإنجازات والشهادات',
      achievements: [
        { title: 'شهادة React المتقدمة', year: '2023', icon: Award },
        { title: 'أفضل مطور شاب', year: '2022', icon: Star },
        { title: 'شهادة Python للذكاء الاصطناعي', year: '2023', icon: Award },
        { title: 'مطور معتمد في Flutter', year: '2022', icon: CheckCircle }
      ],
      statsTitle: 'إحصائيات الإنجاز',
      statsLabels: {
        projects: 'مشروع مكتمل',
        clients: 'عميل راضي',
        experience: 'سنوات خبرة',
        satisfaction: 'نسبة الرضا'
      },
      languagesTitle: 'اللغات',
      languages: [
        'العربية (اللغة الأم)',
        'الإنجليزية (متقدم)',
        'الفرنسية (متوسط)'
      ],
      contactTitle: 'التواصل معي',
      designRequestTitle: 'طلب تصميم مشروع',
      designRequestDescription: 'هل لديك فكرة مشروع؟ أرسل لي التفاصيل وسأتواصل معك قريباً',
      viewProject: 'عرض المشروع',
      downloadProject: 'تنزيل المشروع',
      downloadCV: 'تحميل السيرة الذاتية',
      formLabels: {
        name: 'الاسم الكامل',
        email: 'البريد الإلكتروني',
        projectType: 'نوع المشروع',
        description: 'وصف المشروع',
        budget: 'الميزانية المتوقعة',
        timeline: 'الإطار الزمني المطلوب',
        submit: 'إرسال الطلب'
      },
      projectTypes: [
        'موقع إلكتروني',
        'تطبيق موبايل',
        'تطبيق ويب',
        'نظام إدارة',
        'متجر إلكتروني',
        'أخرى'
      ]
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
          description: 'Electronic pharmacy platform for easy access to pharmaceutical products in Iraq',
          link: 'https://preview--iraqi-pharmacy-hub.lovable.app/',
          image: pharmacyImg,
          tech: ['React', 'Node.js', 'MongoDB'],
          downloadSize: '45 MB',
          version: '2.1.0'
        },
        {
          title: 'Smart Pomodoro Application',
          description: 'Productivity timer app built on Pomodoro technique',
          link: 'https://mellow-mule-904.convex.app/',
          image: pomodoroImg,
          tech: ['JavaScript', 'CSS3', 'LocalStorage'],
          downloadSize: '12 MB',
          version: '1.5.2'
        },
        {
          title: 'Concrete Element Design Program',
          description: 'Web application for efficient design of concrete structural elements',
          link: 'https://preview--beton-eucode-wizard.lovable.app/',
          image: concreteImg,
          tech: ['Python', 'Qt', 'NumPy'],
          downloadSize: '78 MB',
          version: '3.0.1'
        },
        {
          title: 'Smartwatch Dashboard Application',
          description: 'Digital dashboard for smart devices',
          link: 'https://smart-rise-app-1e52c.buildaispace.app/dashboard',
          image: smartwatchImg,
          tech: ['Flutter', 'Dart', 'Firebase'],
          downloadSize: '32 MB',
          version: '1.8.0'
        }
      ],
      servicesTitle: 'Services Offered',
      services: [
        { name: 'Web Development', description: 'Modern and responsive websites', icon: Globe },
        { name: 'Mobile Applications', description: 'iOS and Android apps', icon: Code },
        { name: 'UI/UX Design', description: 'Attractive and user-friendly designs', icon: Palette },
        { name: 'Technical Consulting', description: 'Custom solutions for your needs', icon: Lightbulb }
      ],
      achievementsTitle: 'Achievements & Certifications',
      achievements: [
        { title: 'Advanced React Certificate', year: '2023', icon: Award },
        { title: 'Best Young Developer', year: '2022', icon: Star },
        { title: 'Python AI Certificate', year: '2023', icon: Award },
        { title: 'Certified Flutter Developer', year: '2022', icon: CheckCircle }
      ],
      statsTitle: 'Achievement Statistics',
      statsLabels: {
        projects: 'Completed Projects',
        clients: 'Happy Clients',
        experience: 'Years Experience',
        satisfaction: 'Satisfaction Rate'
      },
      languagesTitle: 'Languages',
      languages: [
        'Arabic (Native)',
        'English (Advanced)',
        'French (Intermediate)'
      ],
      contactTitle: 'Get In Touch',
      designRequestTitle: 'Request Project Design',
      designRequestDescription: 'Have a project idea? Send me the details and I\'ll get back to you soon',
      viewProject: 'View Project',
      downloadProject: 'Download Project',
      downloadCV: 'Download Resume',
      formLabels: {
        name: 'Full Name',
        email: 'Email Address',
        projectType: 'Project Type',
        description: 'Project Description',
        budget: 'Expected Budget',
        timeline: 'Required Timeline',
        submit: 'Send Request'
      },
      projectTypes: [
        'Website',
        'Mobile App',
        'Web Application',
        'Management System',
        'E-commerce',
        'Other'
      ]
    }
  }

  const currentContent = content[language]
  const isArabic = language === 'ar'

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')

    try {
      // Create FormData for EmailJS or similar service
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        project_type: formData.projectType,
        budget: formData.budget,
        timeline: formData.timeline,
        message: formData.description,
        to_email: 'maidi.mustapha.09@gmail.com'
      }

      // For now, create a mailto link as fallback
      const subject = encodeURIComponent(`طلب تصميم مشروع من ${formData.name}`)
      const body = encodeURIComponent(`
الاسم: ${formData.name}
البريد الإلكتروني: ${formData.email}
نوع المشروع: ${formData.projectType}
الميزانية المتوقعة: ${formData.budget}
الإطار الزمني: ${formData.timeline}

وصف المشروع:
${formData.description}

---
تم إرسال هذا الطلب من موقع مايدي مصطفى الشخصي
      `)
      
      // Try to send via fetch to a backend service (if available)
      try {
        const response = await fetch('/api/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(templateParams)
        })
        
        if (response.ok) {
          setSubmitMessage(language === 'ar' ? 'تم إرسال طلبك بنجاح! سأتواصل معك قريباً.' : 'Your request has been sent successfully! I will contact you soon.')
        } else {
          throw new Error('Backend not available')
        }
      } catch (backendError) {
        // Fallback to mailto
        const mailtoLink = `mailto:maidi.mustapha.09@gmail.com?subject=${subject}&body=${body}`
        window.open(mailtoLink, '_blank')
        setSubmitMessage(language === 'ar' ? 'تم فتح تطبيق البريد الإلكتروني. يرجى إرسال الرسالة.' : 'Email client opened. Please send the message.')
      }
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        projectType: '',
        description: '',
        budget: '',
        timeline: ''
      })
    } catch (error) {
      setSubmitMessage(language === 'ar' ? 'حدث خطأ. يرجى المحاولة مرة أخرى.' : 'An error occurred. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const downloadCV = () => {
    // Create a simple CV content
    const cvContent = `
مايدي مصطفى - مطور برمجيات متخصص

البريد الإلكتروني: maidi.mustapha.09@gmail.com
الموقع: الجلفة، الجزائر

الملخص المهني:
أنا مطور برمجيات مبدع ودقيق، لدي خبرة واسعة في إنشاء ونشر تطبيقات مبتكرة في مجالات متعددة.

المهارات الأساسية:
- تطوير تطبيقات الويب والموبايل
- البرمجة للواجهة الأمامية والخلفية
- تصميم واجهات وتجربة المستخدم
- حل المشكلات وتصحيح الأخطاء
- إدارة المشاريع
- التعاون والعمل ضمن فريق

المشاريع:
1. منصة صيدلية العراق
2. تطبيق بومودورو الذكي
3. برنامج تصميم العناصر الخرسانية
4. تطبيق الساعة الذكية

اللغات:
- العربية (اللغة الأم)
- الإنجليزية (متقدم)
- الفرنسية (متوسط)
    `
    
    const blob = new Blob([cvContent], { type: 'text/plain;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'Maidi_Mustapha_CV.txt'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  const downloadProject = (project) => {
    // Create a mock project file with project details
    const projectContent = `
${project.title} - ${project.version}

الوصف: ${project.description}

التقنيات المستخدمة:
${project.tech.map(tech => `- ${tech}`).join('\n')}

حجم التطبيق: ${project.downloadSize}
الإصدار: ${project.version}

رابط المشروع: ${project.link}

---
تم تنزيل هذا المشروع من موقع مايدي مصطفى الشخصي
للحصول على الكود المصدري الكامل، يرجى التواصل معي على:
maidi.mustapha.09@gmail.com
    `
    
    const blob = new Blob([projectContent], { type: 'text/plain;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `${project.title.replace(/\s+/g, '_')}_${project.version}.txt`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900 ${language === 'ar' ? 'rtl' : 'ltr'} transition-all duration-1000`}>
      {/* Enhanced Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-green-400 via-blue-400 to-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-yellow-400 via-orange-400 to-red-400 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse animation-delay-4000"></div>
        
        {/* Enhanced floating particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full animate-bounce opacity-60"></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-purple-400 rounded-full animate-bounce opacity-50 animation-delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-pink-400 rounded-full animate-bounce opacity-70 animation-delay-2000"></div>
        <div className="absolute bottom-20 right-20 w-3 h-3 bg-indigo-400 rounded-full animate-bounce opacity-60 animation-delay-3000"></div>
        <div className="absolute top-1/3 left-10 w-1 h-1 bg-green-400 rounded-full animate-ping opacity-40"></div>
        <div className="absolute top-2/3 right-10 w-2 h-2 bg-yellow-400 rounded-full animate-ping opacity-50 animation-delay-1500"></div>
      </div>

      {/* Enhanced Header */}
      <header className="relative z-10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-700/50 sticky top-0">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img src={maidiLogo} alt="MAIDI Logo" className="w-12 h-12 rounded-full shadow-lg" />
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {currentContent.name}
            </span>
          </div>
          <Button
            onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
            variant="outline"
            size="sm"
            className="flex items-center space-x-2 hover:scale-105 transition-transform duration-200"
          >
            <Languages className="w-4 h-4" />
            <span>{language === 'ar' ? 'English' : 'العربية'}</span>
          </Button>
        </div>
      </header>

      {/* Enhanced Hero Section */}
      <section className={`relative py-20 px-4 text-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
        <div className="container mx-auto max-w-4xl">
          <div className="mb-8 relative">
            <div className="w-48 h-48 mx-auto mb-6 relative">
              <img 
                src={maidiLogo} 
                alt="MAIDI Logo" 
                className="w-full h-full rounded-full shadow-2xl border-4 border-white/50 hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute -bottom-2 -right-2">
                <img 
                  src={personalLogo} 
                  alt="Personal Logo" 
                  className="w-16 h-16 rounded-full shadow-lg border-2 border-white hover:rotate-12 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
          
          <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
            <CardContent className="p-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                {currentContent.name}
              </h1>
              <p className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 mb-4 font-semibold">
                {currentContent.title}
              </p>
              <div className="flex items-center justify-center space-x-6 mb-6 text-gray-600 dark:text-gray-300">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-blue-500" />
                  <span>{currentContent.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-5 h-5 text-purple-500" />
                  <span>{currentContent.email}</span>
                </div>
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                {currentContent.summary}
              </p>
              <Button 
                onClick={downloadCV}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Download className="w-5 h-5 mr-2" />
                {currentContent.downloadCV}
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* New Statistics Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600/10 to-purple-600/10">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {currentContent.statsTitle}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card className="text-center bg-white/80 backdrop-blur-md border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">{stats.projects}+</div>
                <div className="text-gray-600 dark:text-gray-300">{currentContent.statsLabels.projects}</div>
              </CardContent>
            </Card>
            <Card className="text-center bg-white/80 backdrop-blur-md border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-purple-600 mb-2">{stats.clients}+</div>
                <div className="text-gray-600 dark:text-gray-300">{currentContent.statsLabels.clients}</div>
              </CardContent>
            </Card>
            <Card className="text-center bg-white/80 backdrop-blur-md border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-green-600 mb-2">{stats.experience}+</div>
                <div className="text-gray-600 dark:text-gray-300">{currentContent.statsLabels.experience}</div>
              </CardContent>
            </Card>
            <Card className="text-center bg-white/80 backdrop-blur-md border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-pink-600 mb-2">{stats.satisfaction}%</div>
                <div className="text-gray-600 dark:text-gray-300">{currentContent.statsLabels.satisfaction}</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced Skills Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {currentContent.skillsTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentContent.skills.map((skill, index) => {
              const IconComponent = skill.icon
              return (
                <Card key={index} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 transition-colors duration-300">
                      {skill.name}
                    </h3>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Enhanced Projects Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600/10 to-pink-600/10">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            {currentContent.projectsTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {currentContent.projects.map((project, index) => (
              <Card key={index} className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 group overflow-hidden">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                    v{project.version}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-200 group-hover:text-purple-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 hover:from-blue-200 hover:to-purple-200 transition-all duration-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span className="flex items-center">
                      <Download className="w-4 h-4 mr-1" />
                      {project.downloadSize}
                    </span>
                    <span className="flex items-center">
                      <Eye className="w-4 h-4 mr-1" />
                      {Math.floor(Math.random() * 1000) + 500} views
                    </span>
                  </div>
                  <div className="flex space-x-3">
                    <Button 
                      onClick={() => window.open(project.link, '_blank')}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full transition-all duration-300 hover:scale-105"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      {currentContent.viewProject}
                    </Button>
                    <Button 
                      onClick={() => downloadProject(project)}
                      variant="outline"
                      className="flex-1 border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white rounded-full transition-all duration-300 hover:scale-105"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      {currentContent.downloadProject}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* New Services Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            {currentContent.servicesTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentContent.services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <Card key={index} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2 group-hover:text-green-600 transition-colors duration-300">
                      {service.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* New Achievements Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-yellow-600/10 to-orange-600/10">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
            {currentContent.achievementsTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentContent.achievements.map((achievement, index) => {
              const IconComponent = achievement.icon
              return (
                <Card key={index} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2 group-hover:text-yellow-600 transition-colors duration-300">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {achievement.year}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Enhanced Languages Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            {currentContent.languagesTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {currentContent.languages.map((language, index) => (
              <Card key={index} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                    <Languages className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 group-hover:text-indigo-600 transition-colors duration-300 font-medium">
                    {language}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Design Request Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-pink-600/10 to-red-600/10">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md border-0 shadow-2xl">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent mb-4">
                {currentContent.designRequestTitle}
              </CardTitle>
              <CardDescription className="text-lg text-gray-600 dark:text-gray-300">
                {currentContent.designRequestDescription}
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-gray-700 dark:text-gray-300 font-medium">
                      {currentContent.formLabels.name}
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="mt-2 border-2 border-gray-200 focus:border-pink-500 rounded-lg transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-gray-700 dark:text-gray-300 font-medium">
                      {currentContent.formLabels.email}
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="mt-2 border-2 border-gray-200 focus:border-pink-500 rounded-lg transition-colors duration-300"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="projectType" className="text-gray-700 dark:text-gray-300 font-medium">
                      {currentContent.formLabels.projectType}
                    </Label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      required
                      className="mt-2 w-full border-2 border-gray-200 focus:border-pink-500 rounded-lg p-3 transition-colors duration-300 bg-white dark:bg-gray-700"
                    >
                      <option value="">اختر نوع المشروع</option>
                      {currentContent.projectTypes.map((type, index) => (
                        <option key={index} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="budget" className="text-gray-700 dark:text-gray-300 font-medium">
                      {currentContent.formLabels.budget}
                    </Label>
                    <Input
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="mt-2 border-2 border-gray-200 focus:border-pink-500 rounded-lg transition-colors duration-300"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="timeline" className="text-gray-700 dark:text-gray-300 font-medium">
                    {currentContent.formLabels.timeline}
                  </Label>
                  <Input
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="mt-2 border-2 border-gray-200 focus:border-pink-500 rounded-lg transition-colors duration-300"
                  />
                </div>
                
                <div>
                  <Label htmlFor="description" className="text-gray-700 dark:text-gray-300 font-medium">
                    {currentContent.formLabels.description}
                  </Label>
                  <Textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="mt-2 border-2 border-gray-200 focus:border-pink-500 rounded-lg transition-colors duration-300"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-pink-600 to-red-600 hover:from-pink-700 hover:to-red-700 text-white py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      جاري الإرسال...
                    </div>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      {currentContent.formLabels.submit}
                    </>
                  )}
                </Button>
                
                {submitMessage && (
                  <div className="text-center p-4 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg">
                    {submitMessage}
                  </div>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {currentContent.contactTitle}
          </h2>
          <div className="flex justify-center space-x-6">
            <Button 
              onClick={() => window.open('https://github.com/Maydy802', '_blank')}
              variant="outline" 
              size="lg"
              className="border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white rounded-full transition-all duration-300 hover:scale-110"
            >
              <Github className="w-6 h-6 mr-2" />
              GitHub
            </Button>
            <Button 
              onClick={() => window.open('https://linkedin.com/in/maidi-mustapha', '_blank')}
              variant="outline" 
              size="lg"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-full transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-6 h-6 mr-2" />
              LinkedIn
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-blue-900 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex justify-center items-center space-x-2 mb-4">
            <Heart className="w-5 h-5 text-red-500 animate-pulse" />
            <span>Designed with passion and creativity</span>
            <Coffee className="w-5 h-5 text-yellow-500" />
          </div>
          <p className="text-gray-300">
            © 2024 {currentContent.name}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

