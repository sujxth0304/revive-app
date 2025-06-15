import { motion } from 'framer-motion'
import { ArrowRight, ArrowLeft } from 'lucide-react'
import { useState } from 'react'

interface Props {
  onNext: () => void
  onBack: () => void
}

const activityOptions = [
  { label: 'Meditation 🧘', value: 'meditation' },
  { label: 'Journaling 📓', value: 'journaling' },
  { label: 'Workout 🏃', value: 'workout' },
  { label: 'Reading 📚', value: 'reading' },
  { label: 'Cold Shower 🚿', value: 'cold_shower' }
]

const StepFour = ({ onNext, onBack }: Props) => {
  const [selected, setSelected] = useState<string[]>([])

  const toggleActivity = (value: string) => {
    setSelected(prev =>
      prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value]
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <h2 className="text-2xl font-bold">🧘 Choose Your Activities</h2>
      <p className="text-sm text-gray-300">Pick the habits you'd like to build.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {activityOptions.map((option) => (
          <button
            key={option.value}
            onClick={() => toggleActivity(option.value)}
            className={`px-4 py-3 rounded-lg border transition-all text-sm ${
              selected.includes(option.value)
                ? 'bg-purple-600 border-purple-500 text-white'
                : 'bg-white/10 border-white/20 text-gray-300 hover:bg-white/20'
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>

      <div className="flex gap-3 pt-2">
        <button
          onClick={onBack}
          className="flex-1 flex items-center justify-center gap-2 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition-all"
        >
          <ArrowLeft size={18} /> Back
        </button>

        <button
          onClick={onNext}
          className="flex-1 flex items-center justify-center gap-2 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition-all"
        >
          Next <ArrowRight size={18} />
        </button>
      </div>
    </motion.div>
  )
}

export default StepFour
