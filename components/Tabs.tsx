'use client'

import { clsx } from 'clsx'

interface Tab {
  id: string
  label: string
}

interface TabsProps {
  tabs: Tab[]
  activeTab: string
  onChange: (tabId: string) => void
}

export default function Tabs({ tabs, activeTab, onChange }: TabsProps) {
  return (
    <div className="flex gap-4">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onChange(tab.id)}
          className={clsx(
            'tab',
            activeTab === tab.id && 'active'
          )}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
}
