import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

interface Props {
  onRestart?: () => void
}

const StepFive = ({ onRestart }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="text-center space-y-6"
    >
      <CheckCircle size={48} className="text-green-400 mx-auto" />

      <h2 className="text-3xl font-bold">🎉 You’re all set!</h2>
      <p className="text-gray-300">
        Your comeback routine is ready to go. Stay consistent, we’ve got your back. 💪
      </p>

      <button
        onClick={onRestart}
        className="mt-4 px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg text-white transition-all"
      >
        Restart Onboarding
      </button>
    </motion.div>
  )
}

export default StepFive
