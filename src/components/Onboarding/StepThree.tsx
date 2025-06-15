import { motion } from 'framer-motion'
import { ArrowRight, ArrowLeft } from 'lucide-react'

interface Props {
  onNext: () => void
  onBack: () => void
}

const StepThree = ({ onNext, onBack }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <h2 className="text-2xl font-bold">⏰ Your Ideal Wake-Up Time</h2>
      <p className="text-sm text-gray-300">Pick the time you’d like to wake up daily.</p>

      <input
        type="time"
        defaultValue="07:00"
        className="w-full p-3 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
      />

      <div className="flex gap-3">
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

export default StepThree
