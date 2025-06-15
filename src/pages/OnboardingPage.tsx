import { useState } from 'react'
import StepOne from '../components/Onboarding/StepOne'
import StepTwo from '../components/Onboarding/StepTwo'
import StepThree from '../components/Onboarding/StepThree'
import StepFour from '../components/Onboarding/StepFour'
import StepFive from '../components/Onboarding/StepFive'

const OnboardingPage = () => {
  const [step, setStep] = useState(1)

  const handleNext = () => setStep((prev) => prev + 1)
  const handleBack = () => setStep((prev) => prev - 1)

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white px-4">
      <div className="w-full max-w-md p-8 rounded-xl bg-black/20 backdrop-blur border border-white/10 shadow-xl">
        {step === 1 && <StepOne onNext={handleNext} />}
        {step === 2 && <StepTwo onNext={handleNext} onBack={handleBack} />}
        {step === 3 && <StepThree onNext={handleNext} onBack={handleBack} />}
        {step === 4 && <StepFour onNext={handleNext} onBack={handleBack} />}
        {step === 5 && <StepFive onRestart={() => setStep(1)} />}
      </div>
    </div>
  )
}

export default OnboardingPage
