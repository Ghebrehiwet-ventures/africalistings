interface InputProps {
  label: string
  name: string
  type?: 'text' | 'email' | 'tel'
  placeholder?: string
  required?: boolean
}

export default function Input({
  label,
  name,
  type = 'text',
  placeholder,
  required = false,
}: InputProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-label text-black">
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        required={required}
        className="w-full"
      />
    </div>
  )
}
