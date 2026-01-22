interface Option {
  value: string
  label: string
}

interface SelectProps {
  label: string
  name: string
  options: Option[]
  placeholder?: string
  required?: boolean
}

export default function Select({
  label,
  name,
  options,
  placeholder,
  required = false,
}: SelectProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-label text-black">
        {label}
      </label>
      <select
        id={name}
        name={name}
        required={required}
        className="w-full bg-transparent border-0 border-b border-[var(--color-input-border)] pb-2 text-base font-normal text-text-primary focus:border-text-primary focus:outline-none"
      >
        {placeholder && (
          <option value="" disabled selected>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}
