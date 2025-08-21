"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

export default function HeroViredLanding() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [activeNavItem, setActiveNavItem] = useState("home")

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleNavClick = (navItem: string, sectionId: string) => {
    setActiveNavItem(navItem)
    scrollToSection(sectionId)
  }

  const programSlides = [
    {
      title: "Week 1-2: Python & Statistics Foundation",
      content: [
        "• Python Programming Fundamentals",
        "• Statistics and Mathematics for ML",
        "• Data Manipulation with Pandas",
        "• Data Visualization with Matplotlib",
        "• NumPy for Numerical Computing",
      ],
      color: "bg-cyan-500 text-black",
    },
    {
      title: "Week 3-4: Machine Learning Core",
      content: [
        "• Supervised Learning Algorithms",
        "• Unsupervised Learning Techniques",
        "• Model Evaluation and Selection",
        "• Feature Engineering and Selection",
        "• Cross-validation and Hyperparameter Tuning",
      ],
      color: "bg-green-500 text-black",
    },
    {
      title: "Week 5-6: Deep Learning & Neural Networks",
      content: [
        "• Deep Learning Fundamentals",
        "• Neural Networks and CNNs",
        "• RNNs and LSTM Networks",
        "• Transfer Learning Techniques",
        "• Computer Vision Applications",
      ],
      color: "bg-purple-500 text-white",
    },
    {
      title: "Week 7-8: Advanced Topics & Deployment",
      content: [
        "• Natural Language Processing",
        "• Model Deployment and MLOps",
        "• Cloud Platforms (AWS/Azure)",
        "• Capstone Project Development",
        "• Portfolio Building & Presentation",
      ],
      color: "bg-orange-500 text-black",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % programSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + programSlides.length) % programSlides.length)
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 border-b border-gray-800 bg-black">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">C</span>
            </div>
            <span className="text-white font-semibold">CareerPass</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <button
              onClick={() => handleNavClick("home", "hero")}
              className={`cursor-pointer transition-colors ${activeNavItem === "home" ? "text-cyan-400 font-semibold" : "text-gray-300 hover:text-white"}`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick("about", "why-careerfast")}
              className={`cursor-pointer transition-colors ${activeNavItem === "about" ? "text-cyan-400 font-semibold" : "text-gray-300 hover:text-white"}`}
            >
              About
            </button>
            <button
              onClick={() => handleNavClick("programs", "program")}
              className={`cursor-pointer transition-colors ${activeNavItem === "programs" ? "text-cyan-400 font-semibold" : "text-gray-300 hover:text-white"}`}
            >
              Programs
            </button>
            <button
              onClick={() => handleNavClick("mentors", "experts")}
              className={`cursor-pointer transition-colors ${activeNavItem === "mentors" ? "text-cyan-400 font-semibold" : "text-gray-300 hover:text-white"}`}
            >
              Mentors
            </button>
            <button
              onClick={() => handleNavClick("how-it-works", "journey")}
              className={`cursor-pointer transition-colors ${activeNavItem === "how-it-works" ? "text-cyan-400 font-semibold" : "text-gray-300 hover:text-white"}`}
            >
              How it Works
            </button>
            <button
              onClick={() => handleNavClick("contact", "enquiry-form")}
              className={`cursor-pointer transition-colors ${activeNavItem === "contact" ? "text-cyan-400 font-semibold" : "text-gray-300 hover:text-white"}`}
            >
              Contact
            </button>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Button
            size="sm"
            className="bg-cyan-500 hover:bg-cyan-600 cursor-pointer"
            onClick={() => scrollToSection("enquiry-form")}
          >
            Enroll Now
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="px-6 py-16 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">Be Industry Ready in 8 Weeks</h1>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Master AI/ML through real-world projects and land your dream job with our 8-week intensive program. Get
            industry-ready skills with hands-on experience.
          </p>
          <div className="flex items-center justify-center gap-4 mb-8">
            <Button
              onClick={() => scrollToSection("enquiry-form")}
              className="bg-cyan-500 hover:bg-cyan-600 px-8 py-3 cursor-pointer"
            >
              Start Your Journey
            </Button>
            <Button
              onClick={() => scrollToSection("program")}
              variant="outline"
              className="px-8 py-3 bg-transparent cursor-pointer"
            >
              Live Program
            </Button>
          </div>
        </div>
      </section>

      {/* Why CareerFast Section */}
      <section id="why-careerfast" className="px-6 py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why CareerPass?</h2>
            <p className="text-gray-300">POWER UP YOUR CAREER WITH OUR UNIQUE APPROACH</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center cursor-pointer hover:transform hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Fast-track your plans</h3>
              <p className="text-gray-400 text-sm">
                Land your dream job in just 8 weeks with our intensive, industry-focused curriculum designed for rapid
                skill development.
              </p>
            </div>
            <div className="text-center cursor-pointer hover:transform hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👨‍🏫</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Expert Mentorship</h3>
              <p className="text-gray-400 text-sm">
                Learn from industry veterans with 10+ years of experience in AI/ML at top tech companies like Google,
                Microsoft, and Amazon.
              </p>
            </div>
            <div className="text-center cursor-pointer hover:transform hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💻</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Online & Offline</h3>
              <p className="text-gray-400 text-sm">
                Flexible learning options with both online sessions and offline workshops to suit your schedule and
                learning preferences.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-400 text-sm max-w-3xl mx-auto">
              CareerPass is designed for working professionals who want to transition into AI/ML roles quickly. Our
              proven methodology has helped 500+ professionals land high-paying jobs in top companies. With personalized
              mentorship, real-world projects, and guaranteed interview opportunities, we ensure your success in the
              AI/ML industry.
            </p>
          </div>
        </div>
      </section>

      <section id="program" className="px-6 py-16 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold">8-Week AI/ML Learning Program</h2>
          </div>

          <div className="relative">
            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-cyan-500 hover:bg-cyan-600 text-black p-3 rounded-full cursor-pointer transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-cyan-500 hover:bg-cyan-600 text-black p-3 rounded-full cursor-pointer transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Slide Content */}
            {/* <div className="mx-16">
              <Card className={`${programSlides[currentSlide].color} transition-all duration-500`}>
                <CardContent className="p-8">
                  <h3 className="font-bold text-2xl mb-6 text-center">{programSlides[currentSlide].title}</h3>
                  <ul className="space-y-3 text-lg max-w-2xl mx-auto">
                    {programSlides[currentSlide].content.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div> */}

            {/* Slide Indicators */}
            <div className="flex justify-center mt-6 gap-2">
              {programSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full cursor-pointer transition-colors ${
                    index === currentSlide ? "bg-cyan-500" : "bg-gray-600"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Card className="bg-gray-800 cursor-pointer hover:transform hover:scale-105 transition-transform">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">PROJECTS & PORTFOLIO BUILDING</h3>
                <p className="text-sm">
                  Build 5+ real-world projects for your portfolio including predictive analytics, recommendation
                  systems, and computer vision applications.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 cursor-pointer hover:transform hover:scale-105 transition-transform">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">INTERVIEW PREPARATION & PLACEMENT</h3>
                <p className="text-sm">
                  Comprehensive interview prep with mock interviews, technical assessments, and direct placement
                  assistance with our partner companies.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 cursor-pointer hover:transform hover:scale-105 transition-transform">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">INDUSTRY MENTORSHIP & NETWORKING</h3>
                <p className="text-sm">
                  1-on-1 mentorship sessions with industry experts and access to our exclusive alumni network of 500+
                  AI/ML professionals.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-400 text-sm">
              Super Cohort: Comprehensive end-to-end learning experience with industry-relevant skills and guaranteed
              job placement support.
            </p>
          </div>
        </div>
      </section>

      {/* Learn from Industry Experts */}
      <section id="experts" className="px-6 py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold">Learn from Industry Experts</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center cursor-pointer hover:transform hover:scale-105 transition-transform">
              <div className="w-24 h-24 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">DR</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Dr. Rajiv Sharma</h3>
              <p className="text-cyan-400 text-sm mb-2">Senior Data Scientist</p>
              <p className="text-gray-400 text-xs">10+ years at Google & Microsoft</p>
            </div>

            <div className="text-center cursor-pointer hover:transform hover:scale-105 transition-transform">
              <div className="w-24 h-24 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">PK</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Priya Kapoor</h3>
              <p className="text-cyan-400 text-sm mb-2">ML Engineering Lead</p>
              <p className="text-gray-400 text-xs">8+ years at Amazon & Netflix</p>
            </div>

            <div className="text-center cursor-pointer hover:transform hover:scale-105 transition-transform">
              <div className="w-24 h-24 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">AK</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Amit Kumar</h3>
              <p className="text-cyan-400 text-sm mb-2">AI Research Scientist</p>
              <p className="text-gray-400 text-xs">12+ years at Meta & OpenAI</p>
            </div>
          </div>
        </div>
      </section>

      <section id="journey" className="px-6 py-16 bg-gradient-to-b from-purple-900 to-blue-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold">Your 8-Week Journey</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center cursor-pointer hover:transform hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-black font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Choose Your Program</h3>
              <p className="text-gray-300 text-sm">
                Select from our specialized AI/ML tracks based on your career goals and current skill level.
              </p>
            </div>

            <div className="text-center cursor-pointer hover:transform hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-black font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Get Matched with Mentor</h3>
              <p className="text-gray-300 text-sm">
                Connect with industry experts who will guide you through your learning journey and career transition.
              </p>
            </div>

            <div className="text-center cursor-pointer hover:transform hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-black font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Start Learning</h3>
              <p className="text-gray-300 text-sm">
                Begin your intensive 8-week program with hands-on projects, live sessions, and personalized feedback.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="bg-black bg-opacity-50 rounded-lg p-6 max-w-md mx-auto cursor-pointer hover:transform hover:scale-105 transition-transform">
              <h3 className="text-xl font-bold mb-2">Projects & Graduation</h3>
              <p className="text-gray-300 text-sm">
                Complete your capstone project, showcase your portfolio, and get certified as an AI/ML professional
                ready for industry roles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section id="statistics" className="px-6 py-8 bg-cyan-400 text-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="cursor-pointer hover:transform hover:scale-105 transition-transform">
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-sm">Successful Career Transitions</div>
            </div>
            <div className="cursor-pointer hover:transform hover:scale-105 transition-transform">
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-sm">Job Placement Rate</div>
            </div>
            <div className="cursor-pointer hover:transform hover:scale-105 transition-transform">
              <div className="text-4xl font-bold mb-2">80%</div>
              <div className="text-sm">Salary Increase Average</div>
            </div>
            <div className="cursor-pointer hover:transform hover:scale-105 transition-transform">
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-sm">Partner Companies</div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Success Stories */}
      <section id="testimonials" className="px-6 py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold">Student Success Stories</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-black cursor-pointer hover:transform hover:scale-105 transition-transform">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 text-sm mb-4">
                  "The program completely transformed my career. I went from a non-tech background to landing a Data
                  Scientist role at a Fortune 500 company in just 8 weeks!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center">
                    <span className="text-black font-bold text-sm">AS</span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Anita Sharma</p>
                    <p className="text-gray-400 text-xs">Data Scientist at TCS</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black cursor-pointer hover:transform hover:scale-105 transition-transform">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 text-sm mb-4">
                  "Amazing mentorship and hands-on projects. The career support team helped me negotiate a 60% salary
                  increase. Highly recommend this program!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center">
                    <span className="text-black font-bold text-sm">RK</span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Rohit Kumar</p>
                    <p className="text-gray-400 text-xs">ML Engineer at Flipkart</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black cursor-pointer hover:transform hover:scale-105 transition-transform">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 text-sm mb-4">
                  "The curriculum is perfectly designed for working professionals. I could balance my job while learning
                  and successfully transitioned to AI/ML."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center">
                    <span className="text-black font-bold text-sm">PG</span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Priya Gupta</p>
                    <p className="text-gray-400 text-xs">AI Researcher at Microsoft</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* AI/ML Specializations */}
      <section id="specializations" className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold">AI/ML Specializations</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-gray-800 cursor-pointer hover:transform hover:scale-105 transition-transform">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🤖</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Machine Learning Applications</h3>
                <p className="text-gray-400 text-sm">
                  Focus on practical ML applications in business, predictive analytics, and automation solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 cursor-pointer hover:transform hover:scale-105 transition-transform">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🧠</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Deep Learning Projects</h3>
                <p className="text-gray-400 text-sm">
                  Advanced neural networks, computer vision, and natural language processing applications.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 cursor-pointer hover:transform hover:scale-105 transition-transform">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">📊</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Computer Vision Solutions</h3>
                <p className="text-gray-400 text-sm">
                  Image processing, object detection, and visual recognition systems for real-world applications.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <Card className="bg-gray-800 cursor-pointer hover:transform hover:scale-105 transition-transform">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">💬</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Natural Language Processing</h3>
                <p className="text-gray-400 text-sm">
                  Text analysis, sentiment analysis, and chatbot development using advanced NLP techniques.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 cursor-pointer hover:transform hover:scale-105 transition-transform">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">📈</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Data Science Analytics</h3>
                <p className="text-gray-400 text-sm">
                  Statistical analysis, data visualization, and business intelligence using Python and R.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 cursor-pointer hover:transform hover:scale-105 transition-transform">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">⚙️</span>
                </div>
                <h3 className="font-bold text-lg mb-2">AI Product Development</h3>
                <p className="text-gray-400 text-sm">
                  End-to-end AI product development, deployment, and scaling in production environments.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="enquiry-form" className="px-6 py-16 bg-cyan-400 text-black">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Start Your 8-Week Transformation</h2>
              <p className="text-lg mb-6">
                Ready to kickstart your AI/ML career? Fill out the form and our career counselor will get in touch with
                you within 24 hours.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Free career counseling session
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Personalized learning path
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Industry mentor assignment
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Job placement assistance
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">Enrollment Form</h3>
              <form
                className="space-y-4"
                onSubmit={(e) => {
                  e.preventDefault()
                  alert("Thank you for your interest! Our team will contact you within 24 hours.")
                }}
              >
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address *</label>
                  <input
                    type="email"
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Current Experience</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500">
                    <option>Select your experience level</option>
                    <option>0-2 years</option>
                    <option>2-5 years</option>
                    <option>5+ years</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Preferred Specialization</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500">
                    <option>Choose your specialization</option>
                    <option>Machine Learning</option>
                    <option>Deep Learning</option>
                    <option>Data Science</option>
                    <option>Computer Vision</option>
                    <option>NLP</option>
                  </select>
                </div>
                <Button type="submit" className="w-full bg-black text-white hover:bg-gray-800 py-3 cursor-pointer">
                  Start My Journey →
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-16 bg-black border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-sm">C</span>
                </div>
                <span className="text-white font-semibold">CareerPass</span>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Transform your career with industry-focused AI/ML programs designed for working professionals.
              </p>
              <div className="space-y-2 text-sm text-gray-400">
                <p>📧 info@careerpass.com</p>
                <p>📞 +91 9876543210</p>
                <p>📍 Bangalore, India</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Programs</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <button
                    onClick={() => scrollToSection("program")}
                    className="hover:text-white text-left cursor-pointer"
                  >
                    AI/ML Bootcamp
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("specializations")}
                    className="hover:text-white text-left cursor-pointer"
                  >
                    Data Science
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("specializations")}
                    className="hover:text-white text-left cursor-pointer"
                  >
                    Deep Learning
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("specializations")}
                    className="hover:text-white text-left cursor-pointer"
                  >
                    Computer Vision
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("specializations")}
                    className="hover:text-white text-left cursor-pointer"
                  >
                    NLP
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <button
                    onClick={() => scrollToSection("why-careerfast")}
                    className="hover:text-white text-left cursor-pointer"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("enquiry-form")}
                    className="hover:text-white text-left cursor-pointer"
                  >
                    Careers
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("enquiry-form")}
                    className="hover:text-white text-left cursor-pointer"
                  >
                    Contact
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("testimonials")}
                    className="hover:text-white text-left cursor-pointer"
                  >
                    Blog
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("testimonials")}
                    className="hover:text-white text-left cursor-pointer"
                  >
                    Reviews
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <button
                    onClick={() => scrollToSection("enquiry-form")}
                    className="hover:text-white text-left cursor-pointer"
                  >
                    Help Center
                  </button>
                </li>
                <li>
                  <a href="#" className="hover:text-white cursor-pointer">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white cursor-pointer">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white cursor-pointer">
                    Refund Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 CareerPass. All rights reserved. | A Hero Group Company</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
