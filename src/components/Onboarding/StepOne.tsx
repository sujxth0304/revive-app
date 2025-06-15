import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

interface Props {
  onNext: () => void
}

const StepOne = ({ onNext }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <h2 className="text-2xl font-bold">👋 Let's begin your journey</h2>
      <p className="text-sm text-gray-300">What’s one thing you’re struggling with right now?</p>

      <input
        type="text"
        placeholder="e.g. Lack of motivation"
        className="w-full p-3 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
      />

      <button
        onClick={onNext}
        className="w-full flex items-center justify-center gap-2 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition-all"
      >
        Next <ArrowRight size={18} />
      </button>
    </motion.div>
  )
}

export default StepOne
