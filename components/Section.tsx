import { clsx } from 'clsx'

interface SectionProps {
  children: React.ReactNode
  className?: string
  size?: 'default' | 'large'
  background?: 'white' | 'transparent'
}

export default function Section({
  children,
  className,
  size = 'default',
  background = 'white'
}: SectionProps) {
  return (
    <section
      className={clsx(
        size === 'large' ? 'section-lg' : 'section',
        background === 'white' ? 'bg-white' : 'bg-transparent',
        className
      )}
    >
      {children}
    </section>
  )
}
