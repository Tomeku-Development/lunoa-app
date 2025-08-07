"use client"

import { useState } from "react"
import { Upload, Image, FileText, X, Plus } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

interface PortfolioItem {
  id: string
  title: string
  description: string
  image?: string
  type: 'project' | 'service' | 'product'
}

interface PortfolioUploaderProps {
  onComplete: () => void
}

export function PortfolioUploader({ onComplete }: PortfolioUploaderProps) {
  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([])
  const [currentItem, setCurrentItem] = useState<Partial<PortfolioItem>>({
    title: '',
    description: '',
    type: 'project'
  })
  const [dragActive, setDragActive] = useState(false)

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    
    const files = Array.from(e.dataTransfer.files)
    if (files.length > 0) {
      const file = files[0]
      if (file.type.startsWith('image/')) {
        const reader = new FileReader()
        reader.onload = (e) => {
          setCurrentItem(prev => ({ ...prev, image: e.target?.result as string }))
        }
        reader.readAsDataURL(file)
      }
    }
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setCurrentItem(prev => ({ ...prev, image: e.target?.result as string }))
      }
      reader.readAsDataURL(file)
    }
  }

  const addPortfolioItem = () => {
    if (currentItem.title && currentItem.description) {
      const newItem: PortfolioItem = {
        id: Math.random().toString(36).substr(2, 9),
        title: currentItem.title,
        description: currentItem.description,
        image: currentItem.image,
        type: currentItem.type as 'project' | 'service' | 'product'
      }
      
      setPortfolioItems(prev => [...prev, newItem])
      setCurrentItem({ title: '', description: '', type: 'project' })
    }
  }

  const removePortfolioItem = (id: string) => {
    setPortfolioItems(prev => prev.filter(item => item.id !== id))
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Card className="bg-gray-900 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white">Build Your Portfolio</CardTitle>
          <CardDescription className="text-gray-400">
            Showcase your work, products, or services to build trust with potential partners
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title" className="text-white">Title *</Label>
                <Input
                  id="title"
                  value={currentItem.title || ''}
                  onChange={(e) => setCurrentItem(prev => ({ ...prev, title: e.target.value }))}
                  className="bg-gray-800 border-gray-600 text-white"
                  placeholder="Project or service name"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description" className="text-white">Description *</Label>
                <Textarea
                  id="description"
                  value={currentItem.description || ''}
                  onChange={(e) => setCurrentItem(prev => ({ ...prev, description: e.target.value }))}
                  className="bg-gray-800 border-gray-600 text-white"
                  rows={4}
                  placeholder="Describe your work, achievements, or capabilities..."
                />
              </div>

              <Button
                onClick={addPortfolioItem}
                disabled={!currentItem.title || !currentItem.description}
                className="w-full bg-green-600 hover:bg-green-700 disabled:opacity-50"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add to Portfolio
              </Button>
            </div>

            <div className="space-y-4">
              <Label className="text-white">Image (Optional)</Label>
              <div
                className={`border-2 border-dashed rounded-lg p-6 text-center transition-all ${
                  dragActive 
                    ? 'border-blue-400 bg-blue-500/10' 
                    : 'border-gray-600 hover:border-gray-500'
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                {currentItem.image ? (
                  <div className="relative">
                    <img
                      src={currentItem.image || "/placeholder.svg"}
                      alt="Portfolio item"
                      className="w-full h-32 object-cover rounded-lg"
                    />
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => setCurrentItem(prev => ({ ...prev, image: undefined }))}
                      className="absolute top-2 right-2 text-white bg-black/50 hover:bg-black/70"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ) : (
                  <>
                    <Image className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-400 text-sm mb-2">Drop image here or</p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-gray-600 text-gray-300"
                      onClick={() => document.getElementById('image-input')?.click()}
                    >
                      Browse Image
                    </Button>
                    <input
                      id="image-input"
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Portfolio Items */}
      {portfolioItems.length > 0 && (
        <Card className="bg-gray-900 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">Your Portfolio ({portfolioItems.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {portfolioItems.map((item) => (
                <Card key={item.id} className="bg-gray-800 border-gray-700">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-semibold text-white">{item.title}</h3>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => removePortfolioItem(item.id)}
                        className="text-gray-400 hover:text-red-400"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                    {item.image && (
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        className="w-full h-24 object-cover rounded-lg mb-3"
                      />
                    )}
                    <p className="text-gray-300 text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      <div className="flex justify-between">
        <Button variant="outline" className="border-gray-600 text-gray-300">
          Skip for Now
        </Button>
        <Button
          onClick={onComplete}
          className="bg-green-600 hover:bg-green-700"
        >
          Continue
        </Button>
      </div>
    </div>
  )
}
