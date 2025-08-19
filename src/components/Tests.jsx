import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import { TestTube, Clock, CheckCircle, XCircle, ArrowRight, ArrowLeft, RotateCcw } from 'lucide-react'
import DragDropQuestion from './DragDropQuestion'

const Tests = () => {
  const [selectedTest, setSelectedTest] = useState(null)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState({})
  const [showResults, setShowResults] = useState(false)
  const [testCompleted, setTestCompleted] = useState(false)

  const availableTests = [
    {
      id: 'data-structures-basic',
      title: 'Data Structures Fundamentals',
      description: 'Test your knowledge of basic data structures and their operations',
      difficulty: 'Intermediate',
      duration: '30 minutes',
      questions: 15,
      category: 'Data Structures'
    },
    {
      id: 'algorithms-sorting',
      title: 'Sorting Algorithms',
      description: 'Evaluate your understanding of various sorting algorithms and their complexities',
      difficulty: 'Intermediate',
      duration: '25 minutes',
      questions: 12,
      category: 'Algorithms'
    },
    {
      id: 'system-design-basics',
      title: 'System Design Principles',
      description: 'Test your knowledge of scalability, load balancing, and distributed systems',
      difficulty: 'Advanced',
      duration: '45 minutes',
      questions: 20,
      category: 'System Design'
    },
    {
      id: 'database-design',
      title: 'Database Design & SQL',
      description: 'Assess your skills in database design, normalization, and SQL queries',
      difficulty: 'Intermediate',
      duration: '35 minutes',
      questions: 18,
      category: 'Databases'
    },
    {
      id: 'oop-principles',
      title: 'Object-Oriented Programming',
      description: 'Test your understanding of OOP concepts, design patterns, and best practices',
      difficulty: 'Beginner',
      duration: '20 minutes',
      questions: 10,
      category: 'Programming'
    },
    {
      id: 'security-fundamentals',
      title: 'Software Security',
      description: 'Evaluate your knowledge of security principles, vulnerabilities, and best practices',
      difficulty: 'Advanced',
      duration: '40 minutes',
      questions: 16,
      category: 'Security'
    }
  ]

  const sampleQuestions = {
    'data-structures-basic': [
      {
        id: 1,
        type: 'multiple-choice',
        question: 'What is the time complexity of inserting an element at the beginning of a linked list?',
        options: ['O(1)', 'O(n)', 'O(log n)', 'O(n²)'],
        correct: 0,
        explanation: 'Inserting at the beginning of a linked list is O(1) because you only need to create a new node and update the head pointer.'
      },
      {
        id: 2,
        type: 'true-false',
        question: 'A stack follows the Last In, First Out (LIFO) principle.',
        correct: true,
        explanation: 'Yes, a stack is a LIFO data structure where the last element added is the first one to be removed.'
      },
      {
        id: 3,
        type: 'fill-blank',
        question: 'The worst-case time complexity of binary search is ______.',
        correct: 'O(log n)',
        explanation: 'Binary search has O(log n) time complexity because it eliminates half of the search space in each iteration.'
      },
      {
        id: 4,
        type: 'multiple-choice',
        question: 'Which data structure is best suited for implementing a priority queue?',
        options: ['Array', 'Linked List', 'Heap', 'Stack'],
        correct: 2,
        explanation: 'A heap is the most efficient data structure for implementing a priority queue, providing O(log n) insertion and O(log n) extraction of the minimum/maximum element.'
      },
      {
        id: 5,
        type: 'drag-drop',
        question: 'Arrange these sorting algorithms in order of their average time complexity (best to worst):',
        items: ['Merge Sort', 'Bubble Sort', 'Quick Sort', 'Selection Sort'],
        correct: ['Merge Sort', 'Quick Sort', 'Bubble Sort', 'Selection Sort'],
        explanation: 'Merge Sort: O(n log n), Quick Sort: O(n log n) average, Bubble Sort: O(n²), Selection Sort: O(n²)'
      }
    ]
  }

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
      case 'Advanced': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
    }
  }

  const handleAnswerChange = (questionId, answer) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }))
  }

  const calculateScore = () => {
    const questions = sampleQuestions[selectedTest] || []
    let correct = 0
    
    questions.forEach(question => {
      const userAnswer = answers[question.id]
      if (question.type === 'multiple-choice') {
        if (userAnswer === question.correct) correct++
      } else if (question.type === 'true-false') {
        if (userAnswer === question.correct) correct++
      } else if (question.type === 'fill-blank') {
        if (userAnswer && userAnswer.toLowerCase().trim() === question.correct.toLowerCase()) correct++
      } else if (question.type === 'drag-drop') {
        if (userAnswer && Array.isArray(userAnswer) && Array.isArray(question.correct)) {
          const isCorrect = userAnswer.length === question.correct.length &&
            userAnswer.every((item, index) => item === question.correct[index])
          if (isCorrect) correct++
        }
      }
    })
    
    return { correct, total: questions.length, percentage: Math.round((correct / questions.length) * 100) }
  }

  const renderQuestion = (question) => {
    const userAnswer = answers[question.id]
    
    switch (question.type) {
      case 'multiple-choice':
        return (
          <div className="space-y-4">
            <RadioGroup 
              value={userAnswer?.toString()} 
              onValueChange={(value) => handleAnswerChange(question.id, parseInt(value))}
            >
              {question.options.map((option, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                  <Label htmlFor={`option-${index}`} className="cursor-pointer">
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        )
      
      case 'true-false':
        return (
          <div className="space-y-4">
            <RadioGroup 
              value={userAnswer?.toString()} 
              onValueChange={(value) => handleAnswerChange(question.id, value === 'true')}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="true" id="true" />
                <Label htmlFor="true" className="cursor-pointer">True</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="false" id="false" />
                <Label htmlFor="false" className="cursor-pointer">False</Label>
              </div>
            </RadioGroup>
          </div>
        )
      
      case 'fill-blank':
        return (
          <div className="space-y-4">
            <Input
              placeholder="Enter your answer..."
              value={userAnswer || ''}
              onChange={(e) => handleAnswerChange(question.id, e.target.value)}
              className="max-w-md"
            />
          </div>
        )
      
      case 'drag-drop':
        return (
          <DragDropQuestion
            question={question}
            userAnswer={userAnswer}
            onAnswerChange={handleAnswerChange}
          />
        )
      
      default:
        return <div>Question type not supported</div>
    }
  }

  const renderResults = () => {
    const score = calculateScore()
    const questions = sampleQuestions[selectedTest] || []
    
    return (
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Test Results</h2>
          <div className="text-6xl font-bold text-primary mb-2">{score.percentage}%</div>
          <p className="text-xl text-muted-foreground">
            {score.correct} out of {score.total} questions correct
          </p>
        </div>

        <div className="space-y-4">
          {questions.map((question, index) => {
            const userAnswer = answers[question.id]
            let isCorrect = false
            
            if (question.type === 'multiple-choice') {
              isCorrect = userAnswer === question.correct
            } else if (question.type === 'true-false') {
              isCorrect = userAnswer === question.correct
            } else if (question.type === 'fill-blank') {
              isCorrect = userAnswer && userAnswer.toLowerCase().trim() === question.correct.toLowerCase()
            } else if (question.type === 'drag-drop') {
              isCorrect = userAnswer && Array.isArray(userAnswer) && Array.isArray(question.correct) &&
                userAnswer.length === question.correct.length &&
                userAnswer.every((item, index) => item === question.correct[index])
            }

            return (
              <Card key={question.id} className={`border-l-4 ${isCorrect ? 'border-l-green-500' : 'border-l-red-500'}`}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg flex items-center gap-2">
                      {isCorrect ? (
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      ) : (
                        <XCircle className="h-5 w-5 text-red-500" />
                      )}
                      Question {index + 1}
                    </CardTitle>
                  </div>
                  <p className="text-foreground">{question.question}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm">
                      <strong>Your answer:</strong> {
                        question.type === 'multiple-choice' 
                          ? question.options[userAnswer] || 'Not answered'
                          : question.type === 'drag-drop'
                          ? (Array.isArray(userAnswer) ? userAnswer.join(' → ') : 'Not answered')
                          : userAnswer?.toString() || 'Not answered'
                      }
                    </p>
                    {!isCorrect && (
                      <p className="text-sm">
                        <strong>Correct answer:</strong> {
                          question.type === 'multiple-choice' 
                            ? question.options[question.correct]
                            : question.type === 'drag-drop'
                            ? (Array.isArray(question.correct) ? question.correct.join(' → ') : question.correct?.toString())
                            : question.correct?.toString()
                        }
                      </p>
                    )}
                    <p className="text-sm text-muted-foreground">
                      <strong>Explanation:</strong> {question.explanation}
                    </p>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="flex justify-center gap-4">
          <Button onClick={() => {
            setSelectedTest(null)
            setCurrentQuestion(0)
            setAnswers({})
            setShowResults(false)
            setTestCompleted(false)
          }}>
            Take Another Test
          </Button>
          <Button variant="outline" onClick={() => {
            setCurrentQuestion(0)
            setAnswers({})
            setShowResults(false)
            setTestCompleted(false)
          }}>
            <RotateCcw className="h-4 w-4 mr-2" />
            Retake Test
          </Button>
        </div>
      </div>
    )
  }

  if (selectedTest && showResults) {
    return (
      <div className="min-h-screen bg-background p-4">
        <div className="container mx-auto max-w-4xl">
          {renderResults()}
        </div>
      </div>
    )
  }

  if (selectedTest) {
    const questions = sampleQuestions[selectedTest] || []
    const question = questions[currentQuestion]
    const progress = ((currentQuestion + 1) / questions.length) * 100

    if (!question) {
      return (
        <div className="min-h-screen bg-background p-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-2xl font-bold mb-4">Test not available</h2>
            <p className="text-muted-foreground mb-6">
              This test is currently being developed. Please try another test.
            </p>
            <Button onClick={() => setSelectedTest(null)}>
              Back to Tests
            </Button>
          </div>
        </div>
      )
    }

    return (
      <div className="min-h-screen bg-background p-4">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <Button variant="ghost" onClick={() => setSelectedTest(null)}>
                ← Back to Tests
              </Button>
              <div className="text-sm text-muted-foreground">
                Question {currentQuestion + 1} of {questions.length}
              </div>
            </div>
            <Progress value={progress} className="mb-4" />
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">
                Question {currentQuestion + 1}
              </CardTitle>
              <p className="text-lg text-foreground">{question.question}</p>
            </CardHeader>
            <CardContent>
              {renderQuestion(question)}
              
              <div className="flex justify-between mt-8">
                <Button 
                  variant="outline" 
                  onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
                  disabled={currentQuestion === 0}
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Previous
                </Button>
                
                {currentQuestion === questions.length - 1 ? (
                  <Button onClick={() => setShowResults(true)}>
                    Finish Test
                  </Button>
                ) : (
                  <Button onClick={() => setCurrentQuestion(currentQuestion + 1)}>
                    Next
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Practice Tests</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Test your knowledge with our comprehensive practice tests. 
            Get detailed explanations for all answers to enhance your learning.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {availableTests.map((test) => (
            <Card 
              key={test.id} 
              className="hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => setSelectedTest(test.id)}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary">{test.category}</Badge>
                  <Badge className={getDifficultyColor(test.difficulty)}>
                    {test.difficulty}
                  </Badge>
                </div>
                <CardTitle className="text-xl">{test.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  {test.description}
                </CardDescription>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <TestTube className="h-4 w-4" />
                    {test.questions} questions
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {test.duration}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Tests

