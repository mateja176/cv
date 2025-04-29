interface ExperienceProps {
  experience: {
    startDate: string
    endDate: string
    company: string
    title: string
    location: string
    techStack: string[]
    achievements: string[]
  }
}

export default function ExperienceItem({ experience }: ExperienceProps) {
  return (
    <div className="space-y-2">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between">
        <h3 className="text-xl font-semibold">{experience.company}</h3>
        <p className="text-zinc-400 print:text-zinc-500">
          {experience.startDate} — {experience.endDate}
        </p>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between">
        <p className="text-lg text-zinc-300 print:text-zinc-700">{experience.title}</p>
        <p className="text-zinc-400 print:text-zinc-500">{experience.location}</p>
      </div>

      <div className="mt-2">
        <p className="text-sm text-zinc-400 print:text-zinc-500">
          <span className="font-medium">Tech Stack:</span> {experience.techStack.join(", ")}
        </p>
      </div>

      <div className="mt-3">
        <p className="font-medium text-zinc-300 print:text-zinc-700">Key Achievements:</p>
        <ul className="mt-2 list-disc pl-5 space-y-1">
          {experience.achievements.map((achievement, index) => (
            <li key={index} className="text-zinc-300 print:text-zinc-700">
              {achievement}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
