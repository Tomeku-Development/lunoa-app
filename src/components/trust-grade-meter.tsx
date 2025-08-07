"use client"

import { Shield } from 'lucide-react'

interface TrustGradeMeterProps {
  grade: string
  percentage: number
  size?: 'xs' | 'sm' | 'md' | 'lg'
}

export function TrustGradeMeter({ grade, percentage, size = 'md' }: TrustGradeMeterProps) {
  const getGradeColor = (grade: string) => {
    if (grade.startsWith('A')) return 'text-green-400'
    if (grade.startsWith('B')) return 'text-blue-400'
    if (grade.startsWith('C')) return 'text-yellow-400'
    return 'text-red-400'
  }

  const getCircleColor = (grade: string) => {
    if (grade.startsWith('A')) return 'stroke-green-400'
    if (grade.startsWith('B')) return 'stroke-blue-400'
    if (grade.startsWith('C')) return 'stroke-yellow-400'
    return 'stroke-red-400'
  }

  const sizeClasses = {
    xs: { container: 'w-12 h-12', text: 'text-xs', icon: 'h-3 w-3' },
    sm: { container: 'w-16 h-16', text: 'text-sm', icon: 'h-4 w-4' },
    md: { container: 'w-20 h-20', text: 'text-base', icon: 'h-5 w-5' },
    lg: { container: 'w-24 h-24', text: 'text-lg', icon: 'h-6 w-6' }
  }

  const currentSize = sizeClasses[size]
  const radius = size === 'xs' ? 16 : size === 'sm' ? 24 : size === 'md' ? 32 : 40
  const circumference = 2 * Math.PI * radius
  const strokeDasharray = circumference
  const strokeDashoffset = circumference - (percentage / 100) * circumference

  return (
    <div className={`relative ${currentSize.container} flex items-center justify-center`}>
      <svg className="transform -rotate-90 w-full h-full">
        <circle
          cx="50%"
          cy="50%"
          r={radius}
          stroke="currentColor"
          strokeWidth="3"
          fill="transparent"
          className="text-gray-700"
        />
        <circle
          cx="50%"
          cy="50%"
          r={radius}
          stroke="currentColor"
          strokeWidth="3"
          fill="transparent"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          className={getCircleColor(grade)}
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <Shield className={`${currentSize.icon} ${getGradeColor(grade)} mb-1`} />
        <span className={`font-bold ${getGradeColor(grade)} ${currentSize.text}`}>
          {grade}
        </span>
      </div>
    </div>
  )
}
