import { clsx } from 'clsx'

interface ContainerProps {
  children: React.ReactNode
  className?: string
}

export default function Container({ children, className }: ContainerProps) {
  return (
    <div className={clsx('container-content', className)}>
      {children}
    </div>
  )
}
