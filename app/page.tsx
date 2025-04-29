"use client"

import Link from "next/link"
import { Github } from "lucide-react"
import SpaceBackground from "@/components/space-background"
import Planet from "@/components/planet"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0a0a16] text-white print:bg-white print:text-black">
      <SpaceBackground />
      <div className="absolute right-0 top-0 z-0 hidden md:block print:hidden">
        <Planet />
      </div>

      <main className="relative z-10 mx-auto max-w-[210mm] p-8 print:p-0">
        <nav className="mb-8 flex justify-between print:hidden">
          <h1 className="text-2xl font-bold">John Doe</h1>
          <div className="flex gap-4">
            <Button variant="ghost" asChild>
              <Link href="/">Home</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/experience">Experience</Link>
            </Button>
            <Button variant="outline">
              <span onClick={() => window.print()}>Print Resume</span>
            </Button>
          </div>
        </nav>

        <div className="space-y-12 print:space-y-6">
          {/* Title Section */}
          <section className="text-center">
            <h1 className="text-5xl font-bold tracking-tight print:text-4xl">John Doe</h1>
            <h2 className="mt-2 text-xl text-zinc-400 print:text-zinc-600">Senior Software Engineer</h2>
          </section>

          {/* Summary Section */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold border-b border-zinc-700 pb-2 print:border-zinc-300">Summary</h2>
            <p className="text-zinc-300 print:text-zinc-700">
              Experienced software engineer with over 8 years of expertise in building scalable web applications.
              Specialized in JavaScript/TypeScript ecosystems with a focus on React, Node.js, and cloud infrastructure.
              Passionate about creating elegant solutions to complex problems and mentoring junior developers.
            </p>
          </section>

          {/* Contact Section */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold border-b border-zinc-700 pb-2 print:border-zinc-300">Contact</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-zinc-300 print:text-zinc-700">
              <div>
                <p>123 Cosmic Avenue</p>
                <p>San Francisco, CA 94107</p>
                <p>United States</p>
              </div>
              <div>
                <p>+1 (555) 123-4567</p>
                <p>john.doe@example.com</p>
                <p className="flex items-center gap-1">
                  <Github className="h-4 w-4" />
                  <a href="https://github.com/johndoe" className="hover:underline">
                    github.com/johndoe
                  </a>
                </p>
              </div>
            </div>
          </section>

          {/* Languages Section */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold border-b border-zinc-700 pb-2 print:border-zinc-300">
              Languages
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex justify-between">
                <span className="text-zinc-300 print:text-zinc-700">English</span>
                <span className="text-zinc-400 print:text-zinc-500">Native</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-300 print:text-zinc-700">Spanish</span>
                <span className="text-zinc-400 print:text-zinc-500">Advanced</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-300 print:text-zinc-700">French</span>
                <span className="text-zinc-400 print:text-zinc-500">Intermediate</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-300 print:text-zinc-700">German</span>
                <span className="text-zinc-400 print:text-zinc-500">Basic</span>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold border-b border-zinc-700 pb-2 print:border-zinc-300">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { name: "JavaScript/TypeScript", years: 8 },
                { name: "React.js", years: 6 },
                { name: "Node.js", years: 5 },
                { name: "Next.js", years: 4 },
                { name: "AWS", years: 5 },
                { name: "Docker", years: 4 },
                { name: "GraphQL", years: 3 },
                { name: "PostgreSQL", years: 5 },
              ].map((skill, index) => (
                <div key={index} className="flex justify-between">
                  <span className="text-zinc-300 print:text-zinc-700">{skill.name}</span>
                  <span className="text-zinc-400 print:text-zinc-500">{skill.years} years</span>
                </div>
              ))}
            </div>
          </section>

          <div className="mt-8 text-center print:hidden">
            <Button asChild>
              <Link href="/experience">View Professional Experience →</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
