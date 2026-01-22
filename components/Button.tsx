import { clsx } from 'clsx'
import Link from 'next/link'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'outline' | 'ghost'
  href?: string
  onClick?: () => void
  type?: 'button' | 'submit'
  className?: string
  size?: 'default' | 'large'
}

export default function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  type = 'button',
  className,
  size = 'default',
}: ButtonProps) {
  const baseClasses = clsx(
    'btn',
    {
      'btn-primary': variant === 'primary',
      'btn-outline': variant === 'outline',
      'btn-ghost': variant === 'ghost',
      'h-button-lg w-full': size === 'large',
    },
    className
  )

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={baseClasses}>
      {children}
    </button>
  )
}
