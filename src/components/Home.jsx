import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { BookOpen, TestTube, TrendingUp, Users } from 'lucide-react'

const Home = ({ setCurrentSection }) => {
  const features = [
    {
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      title: "Comprehensive Study Materials",
      description: "Master all aspects of software engineering from data structures to system design with our carefully curated content."
    },
    {
      icon: <TestTube className="h-8 w-8 text-primary" />,
      title: "Interactive Testing",
      description: "Practice with various test formats including multiple-choice, coding challenges, and diagram-based questions."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "Track Your Progress",
      description: "Monitor your learning journey and identify areas for improvement with detailed explanations."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Industry-Ready Skills",
      description: "Prepare for mid to senior-level software engineering roles with real-world scenarios and best practices."
    }
  ]

  const stats = [
    { number: "50+", label: "Study Topics" },
    { number: "200+", label: "Practice Questions" },
    { number: "10+", label: "Test Categories" },
    { number: "100%", label: "Free Access" }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Master Software Engineering
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Comprehensive study materials and interactive tests designed for mid to senior-level software engineers. 
            Prepare for your next role with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => setCurrentSection('study')}
              className="text-lg px-8 py-3"
            >
              Start Studying
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => setCurrentSection('tests')}
              className="text-lg px-8 py-3"
            >
              Take a Test
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Everything You Need to Excel
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our platform provides comprehensive resources to help you advance your software engineering career.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary/10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Level Up Your Skills?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of software engineers who are advancing their careers with our comprehensive study platform.
          </p>
          <Button 
            size="lg" 
            onClick={() => setCurrentSection('study')}
            className="text-lg px-8 py-3"
          >
            Get Started Now
          </Button>
        </div>
      </section>
    </div>
  )
}

export default Home

