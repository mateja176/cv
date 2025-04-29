"use client"

import { useEffect, useRef } from "react"

export default function Planet() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = 300
    canvas.height = 300

    // Draw Saturn
    const drawSaturn = () => {
      // Planet body
      const gradient = ctx.createRadialGradient(150, 150, 0, 150, 150, 70)
      gradient.addColorStop(0, "#e6c587")
      gradient.addColorStop(0.5, "#d4b76e")
      gradient.addColorStop(1, "#c19d55")

      ctx.beginPath()
      ctx.arc(150, 150, 70, 0, Math.PI * 2)
      ctx.fillStyle = gradient
      ctx.fill()

      // Rings
      ctx.beginPath()
      ctx.ellipse(150, 150, 120, 30, 0, 0, Math.PI * 2)
      ctx.strokeStyle = "rgba(255, 255, 255, 0.3)"
      ctx.lineWidth = 4
      ctx.stroke()

      ctx.beginPath()
      ctx.ellipse(150, 150, 100, 25, 0, 0, Math.PI * 2)
      ctx.strokeStyle = "rgba(255, 255, 255, 0.5)"
      ctx.lineWidth = 8
      ctx.stroke()

      // Shadow on planet from rings
      ctx.beginPath()
      ctx.ellipse(150, 150, 70, 10, 0, Math.PI, Math.PI * 2)
      ctx.fillStyle = "rgba(0, 0, 0, 0.2)"
      ctx.fill()
    }

    drawSaturn()
  }, [])

  return <canvas ref={canvasRef} className="opacity-70" aria-hidden="true" />
}
