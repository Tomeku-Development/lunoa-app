"use client"

import { useState } from "react"
import { Upload, FileText, CheckCircle, AlertCircle, X } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

interface TrustDocumentUploaderProps {
  onComplete: () => void
}

interface Document {
  id: string
  name: string
  type: string
  status: 'uploading' | 'uploaded' | 'verified' | 'rejected'
  progress: number
  required: boolean
}

export function TrustDocumentUploader({ onComplete }: TrustDocumentUploaderProps) {
  const [documents, setDocuments] = useState<Document[]>([])
  const [dragActive, setDragActive] = useState(false)

  const requiredDocuments = [
    { type: 'business-license', name: 'Business License', required: true },
    { type: 'tax-registration', name: 'Tax Registration', required: true },
    { type: 'insurance', name: 'Insurance Certificate', required: false },
    { type: 'bank-statement', name: 'Bank Statement', required: false }
  ]

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
    handleFiles(files)
  }

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files)
      handleFiles(files)
    }
  }

  const handleFiles = (files: File[]) => {
    files.forEach(file => {
      const newDoc: Document = {
        id: Math.random().toString(36).substr(2, 9),
        name: file.name,
        type: 'other',
        status: 'uploading',
        progress: 0,
        required: false
      }

      setDocuments(prev => [...prev, newDoc])

      // Simulate upload progress
      const interval = setInterval(() => {
        setDocuments(prev => prev.map(doc => {
          if (doc.id === newDoc.id) {
            const newProgress = Math.min(doc.progress + 10, 100)
            return {
              ...doc,
              progress: newProgress,
              status: newProgress === 100 ? 'uploaded' : 'uploading'
            }
          }
          return doc
        }))
      }, 200)

      setTimeout(() => {
        clearInterval(interval)
        setDocuments(prev => prev.map(doc => 
          doc.id === newDoc.id ? { ...doc, status: 'verified' } : doc
        ))
      }, 2500)
    })
  }

  const removeDocument = (id: string) => {
    setDocuments(prev => prev.filter(doc => doc.id !== id))
  }

  const getStatusIcon = (status: Document['status']) => {
    switch (status) {
      case 'verified':
        return <CheckCircle className="h-4 w-4 text-green-400" />
      case 'rejected':
        return <AlertCircle className="h-4 w-4 text-red-400" />
      default:
        return <FileText className="h-4 w-4 text-gray-400" />
    }
  }

  const getStatusBadge = (status: Document['status']) => {
    switch (status) {
      case 'uploading':
        return <Badge className="bg-blue-500/20 text-blue-400">Uploading</Badge>
      case 'uploaded':
        return <Badge className="bg-yellow-500/20 text-yellow-400">Processing</Badge>
      case 'verified':
        return <Badge className="bg-green-500/20 text-green-400">Verified</Badge>
      case 'rejected':
        return <Badge className="bg-red-500/20 text-red-400">Rejected</Badge>
    }
  }

  const canComplete = requiredDocuments.every(reqDoc => 
    documents.some(doc => doc.type === reqDoc.type && doc.status === 'verified')
  )

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Card className="bg-gray-900 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white">Upload Trust Documents</CardTitle>
          <CardDescription className="text-gray-400">
            Upload your business documents to build trust and verify your company
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div
            className={`border-2 border-dashed rounded-xl p-8 text-center transition-all ${
              dragActive 
                ? 'border-blue-400 bg-blue-500/10' 
                : 'border-gray-600 hover:border-gray-500 hover:bg-gray-800/50'
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-lg font-medium text-white mb-2">Drop files here to upload</p>
            <p className="text-gray-400 mb-4">or</p>
            <Button
              className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800"
              onClick={() => document.getElementById('file-input')?.click()}
            >
              Browse Files
            </Button>
            <input
              id="file-input"
              type="file"
              multiple
              accept=".pdf,.jpg,.jpeg,.png"
              onChange={handleFileInput}
              className="hidden"
            />
            <p className="text-sm text-gray-500 mt-4">Supported formats: PDF, JPG, PNG (Max 10MB each)</p>
          </div>
        </CardContent>
      </Card>

      {/* Required Documents Checklist */}
      <Card className="bg-gray-900 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white">Required Documents</CardTitle>
          <CardDescription className="text-gray-400">
            These documents are required for business verification
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {requiredDocuments.map((reqDoc) => {
              const uploaded = documents.find(doc => doc.type === reqDoc.type)
              return (
                <div key={reqDoc.type} className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                  <div className="flex items-center space-x-3">
                    {uploaded?.status === 'verified' ? (
                      <CheckCircle className="h-5 w-5 text-green-400" />
                    ) : (
                      <div className="w-5 h-5 border-2 border-gray-600 rounded" />
                    )}
                    <span className="text-white">{reqDoc.name}</span>
                    {reqDoc.required && (
                      <Badge variant="secondary" className="bg-red-500/20 text-red-400 text-xs">
                        Required
                      </Badge>
                    )}
                  </div>
                  {uploaded && getStatusBadge(uploaded.status)}
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Uploaded Documents */}
      {documents.length > 0 && (
        <Card className="bg-gray-900 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">Uploaded Documents</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {documents.map((doc) => (
                <div key={doc.id} className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
                  <div className="flex items-center space-x-3 flex-1">
                    {getStatusIcon(doc.status)}
                    <div className="flex-1">
                      <p className="font-medium text-white">{doc.name}</p>
                      {doc.status === 'uploading' && (
                        <Progress value={doc.progress} className="h-2 mt-2" />
                      )}
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {getStatusBadge(doc.status)}
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => removeDocument(doc.id)}
                      className="text-gray-400 hover:text-red-400"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      <div className="flex justify-between">
        <Button variant="outline" className="border-gray-600 text-gray-300">
          Back
        </Button>
        <Button
          onClick={onComplete}
          disabled={!canComplete}
          className="bg-green-600 hover:bg-green-700 disabled:opacity-50"
        >
          Complete Setup
        </Button>
      </div>
    </div>
  )
}
