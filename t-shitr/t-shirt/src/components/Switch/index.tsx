interface SwitchProps {
  isEnabled: boolean
  onChange: (enabled: boolean) => void
}

const SwitchTheme = ({ isEnabled, onChange }: SwitchProps) => {
  const handleChange = () => {
    onChange(!isEnabled)
  }

  return (
    <button
      type='button'
      className={`${
        isEnabled ? 'bg-blue-600' : 'bg-gray-200'
      } relative inline-flex items-center h-6 w-11 rounded-full transition-colors duration-300 ease-in-out focus:outline-none`}
      onClick={handleChange}
    >
      <span
        className={`${
          isEnabled ? 'translate-x-6 bg-gray-200' : 'translate-x-1 bg-blue-600'
        } inline-block w-4 h-4 transform bg-white rounded-full transition-transform duration-300 ease-in-out shadow`}
      />
    </button>
  )
}
export default SwitchTheme
