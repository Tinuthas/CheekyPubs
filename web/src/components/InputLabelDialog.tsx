
interface InputLabelProps{
  labelName: string;
  placeholder: string;
  type: string;
  onChange(event: React.ChangeEvent<HTMLInputElement>):void;
}

export const InputLabel = ({labelName, type, placeholder, onChange}: InputLabelProps) => {
  return (
    <div className="mb-2">
      <label htmlFor={type} className="block text-sm font-medium text-neutral-800">
        {labelName}
      </label>
      <input
        placeholder={placeholder}
        onChange={onChange} autoFocus type={type}
        className="block w-full h-12 px-4 py-2 mt-2 text-neutral-600 bg-white border-[1px] border-neutral-400 hover:border-neutral-700 rounded transition-all focus:outline-none"
      />
    </div>
  )
}