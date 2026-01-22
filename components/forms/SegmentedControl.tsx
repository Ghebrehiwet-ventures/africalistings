'use client'

import { clsx } from 'clsx'

interface Option {
  value: string
  label: string
}

interface SegmentedControlProps {
  name: string
  options: Option[]
  value: string
  onChange: (value: string) => void
}

export default function SegmentedControl({
  name,
  options,
  value,
  onChange,
}: SegmentedControlProps) {
  return (
    <div className="flex gap-2">
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          onClick={() => onChange(option.value)}
          className={clsx(
            'px-4 py-2 rounded-badge text-sm font-medium transition-colors',
            value === option.value
              ? 'bg-text-primary text-white'
              : 'bg-badge-bg text-text-primary hover:bg-gray-200'
          )}
        >
          {option.label}
        </button>
      ))}
      <input type="hidden" name={name} value={value} />
    </div>
  )
}
