interface TextareaProps {
  label: string
  name: string
  placeholder?: string
  required?: boolean
  rows?: number
}

export default function Textarea({
  label,
  name,
  placeholder,
  required = false,
  rows = 4,
}: TextareaProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-label text-black">
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        placeholder={placeholder}
        required={required}
        rows={rows}
        className="w-full resize-none"
      />
    </div>
  )
}
