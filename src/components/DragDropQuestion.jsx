import { useState, useRef } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { GripVertical, RotateCcw } from 'lucide-react'

const DragDropQuestion = ({ question, userAnswer, onAnswerChange }) => {
  const [draggedItem, setDraggedItem] = useState(null)
  const [draggedIndex, setDraggedIndex] = useState(null)
  const [orderedItems, setOrderedItems] = useState(userAnswer || [...question.items])
  const dragCounter = useRef(0)

  const handleDragStart = (e, item, index) => {
    setDraggedItem(item)
    setDraggedIndex(index)
    e.dataTransfer.effectAllowed = 'move'
    e.dataTransfer.setData('text/html', e.target.outerHTML)
    e.target.style.opacity = '0.5'
  }

  const handleDragEnd = (e) => {
    e.target.style.opacity = '1'
    setDraggedItem(null)
    setDraggedIndex(null)
    dragCounter.current = 0
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    e.dataTransfer.dropEffect = 'move'
  }

  const handleDragEnter = (e) => {
    e.preventDefault()
    dragCounter.current++
  }

  const handleDragLeave = (e) => {
    dragCounter.current--
  }

  const handleDrop = (e, targetIndex) => {
    e.preventDefault()
    
    if (draggedIndex === null || draggedIndex === targetIndex) return

    const newItems = [...orderedItems]
    const draggedItemValue = newItems[draggedIndex]
    
    // Remove the dragged item
    newItems.splice(draggedIndex, 1)
    
    // Insert at new position
    const insertIndex = draggedIndex < targetIndex ? targetIndex - 1 : targetIndex
    newItems.splice(insertIndex, 0, draggedItemValue)
    
    setOrderedItems(newItems)
    onAnswerChange(question.id, newItems)
  }

  const resetOrder = () => {
    const shuffled = [...question.items].sort(() => Math.random() - 0.5)
    setOrderedItems(shuffled)
    onAnswerChange(question.id, shuffled)
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          Drag and drop the items to arrange them in the correct order:
        </p>
        <Button
          variant="outline"
          size="sm"
          onClick={resetOrder}
          className="flex items-center gap-2"
        >
          <RotateCcw className="h-4 w-4" />
          Shuffle
        </Button>
      </div>
      
      <div className="space-y-2">
        {orderedItems.map((item, index) => (
          <Card
            key={`${item}-${index}`}
            className="p-3 cursor-move hover:shadow-md transition-shadow border-2 border-dashed border-transparent hover:border-primary/20"
            draggable
            onDragStart={(e) => handleDragStart(e, item, index)}
            onDragEnd={handleDragEnd}
            onDragOver={handleDragOver}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDrop={(e) => handleDrop(e, index)}
          >
            <div className="flex items-center gap-3">
              <GripVertical className="h-4 w-4 text-muted-foreground" />
              <span className="flex-1 select-none">{item}</span>
              <span className="text-sm text-muted-foreground font-mono">
                #{index + 1}
              </span>
            </div>
          </Card>
        ))}
      </div>
      
      <div className="mt-4 p-3 bg-muted/50 rounded-lg">
        <p className="text-sm text-muted-foreground">
          <strong>Instructions:</strong> Click and drag the items using the grip handle to reorder them. 
          The correct order will be evaluated when you submit your answer.
        </p>
      </div>
    </div>
  )
}

export default DragDropQuestion

