"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import SpaceBackground from "@/components/space-background"
import Planet from "@/components/planet"
import { Button } from "@/components/ui/button"
import ExperienceItem from "@/components/experience-item"

export default function ExperiencePage() {
  const experiences = [
    {
      startDate: "Jan 2021",
      endDate: "Present",
      company: "Cosmic Technologies",
      title: "Senior Software Engineer",
      location: "San Francisco, CA",
      techStack: ["React", "TypeScript", "Node.js", "AWS", "GraphQL"],
      achievements: [
        "Led the development of a real-time analytics dashboard that increased client engagement by 45%",
        "Architected and implemented a microservices infrastructure that improved system reliability by 99.9%",
        "Mentored a team of 5 junior developers, implementing code reviews and best practices",
        "Reduced API response times by 60% through optimization of database queries and caching strategies",
      ],
    },
    {
      startDate: "Mar 2018",
      endDate: "Dec 2020",
      company: "Stellar Solutions",
      title: "Full Stack Developer",
      location: "Remote",
      techStack: ["React", "Redux", "Express.js", "MongoDB", "Docker"],
      achievements: [
        "Developed a quote server that became the company's main product offering, generating $2M in annual revenue",
        "Implemented CI/CD pipelines that reduced deployment time from days to minutes",
        "Created a component library that improved development efficiency by 30%",
        "Collaborated with UX team to redesign the customer portal, increasing user satisfaction by 40%",
      ],
    },
    {
      startDate: "Jun 2016",
      endDate: "Feb 2018",
      company: "Orbit Innovations",
      title: "Frontend Developer",
      location: "Boston, MA",
      techStack: ["JavaScript", "Angular", "SASS", "RESTful APIs"],
      achievements: [
        "Built responsive web applications for clients in the finance sector",
        "Reduced page load times by 50% through code optimization and lazy loading techniques",
        "Implemented automated testing that caught 95% of bugs before production",
        "Contributed to open-source projects, including a popular date-picker component",
      ],
    },
    {
      startDate: "Aug 2014",
      endDate: "May 2016",
      company: "Galaxy Web Services",
      title: "Junior Web Developer",
      location: "New York, NY",
      techStack: ["HTML", "CSS", "JavaScript", "jQuery", "PHP"],
      achievements: [
        "Developed and maintained websites for small to medium-sized businesses",
        "Created a custom CMS that improved content management efficiency by 25%",
        "Implemented SEO best practices that increased organic traffic by 60%",
        "Designed and developed responsive email templates with a 35% higher click-through rate",
      ],
    },
  ]

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0a0a16] text-white print:bg-white print:text-black">
      <SpaceBackground />
      <div className="absolute right-0 top-0 z-0 hidden md:block print:hidden">
        <Planet />
      </div>

      <main className="relative z-10 mx-auto max-w-[210mm] p-8 print:p-0">
        <nav className="mb-8 flex justify-between print:hidden">
          <Button variant="ghost" asChild className="flex items-center gap-1">
            <Link href="/">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <Button variant="outline">
            <span onClick={() => window.print()}>Print Resume</span>
          </Button>
        </nav>

        <div className="space-y-12 print:space-y-6">
          {/* Title Section for Print */}
          <section className="hidden print:block text-center">
            <h1 className="text-4xl font-bold tracking-tight">John Doe</h1>
            <h2 className="mt-2 text-xl text-zinc-600">Senior Software Engineer</h2>
          </section>

          {/* Experience Section */}
          <section>
            <h2 className="mb-6 text-3xl font-bold border-b border-zinc-700 pb-2 print:border-zinc-300">
              Professional Experience
            </h2>
            <div className="space-y-10 print:space-y-6">
              {experiences.map((exp, index) => (
                <ExperienceItem key={index} experience={exp} />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
