interface ProcessStepProps {
  number: number
  title: string
  description: string
  icon: React.ReactNode
}

const ProcessStep = ({ number, title, description, icon }: ProcessStepProps) => {
  return (
    <div className="text-center">
      <div className="relative inline-block mb-6">
        <div className="w-20 h-20 bg-brand-accent-1 rounded-full flex items-center justify-center text-white">
          {icon}
        </div>
        <div className="absolute -top-2 -right-2 w-8 h-8 bg-brand-accent-3 rounded-full flex items-center justify-center text-white font-heading font-bold text-sm">
          {number}
        </div>
      </div>
      <h3 className="font-heading text-xl font-bold text-brand-foreground mb-3">
        {title}
      </h3>
      <p className="font-body text-gray-600 max-w-xs mx-auto">
        {description}
      </p>
    </div>
  )
}

export default ProcessStep