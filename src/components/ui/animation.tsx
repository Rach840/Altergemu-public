"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Upload } from "lucide-react"
import {ThemeProvider} from "@material-tailwind/react";
import children = ThemeProvider.propTypes.children;
import Squares from "@/components/ui/Squares/Squares";

export function BouncingLogo() {
    const [isAnimating, setIsAnimating] = useState(true)
    const [position, setPosition] = useState({ x: 50, y: 50 })
    const [velocity, setVelocity] = useState({ x: 2, y: 2 })
    const [color, setColor] = useState("#ff0000")
    const containerRef = useRef<HTMLDivElement>(null)
    const logoRef = useRef<HTMLImageElement>(null)
    const animationRef = useRef<number | null>(null)

    // Generate random color when logo hits the edge
    const generateRandomColor = () => {
        const colors = [
            "#ff0000", // red
            "#00ff00", // green
            "#0000ff", // blue
            "#ffff00", // yellow
            "#ff00ff", // magenta
            "#00ffff", // cyan
            "#ff8000", // orange
            "#8000ff", // purple
        ]
        const newColor = colors[Math.floor(Math.random() * colors.length)]
        return newColor
    }

    // Animation loop
    useEffect(() => {
        if (!isAnimating || !containerRef.current || !logoRef.current) return

        const animate = () => {
            setPosition((prevPosition) => {
                const containerWidth = containerRef.current?.clientWidth || 0
                const containerHeight = containerRef.current?.clientHeight || 0
                const logoWidth = logoRef.current?.clientWidth || 0
                const logoHeight = logoRef.current?.clientHeight || 0

                const newX = prevPosition.x + velocity.x
                const newY = prevPosition.y + velocity.y
                let newVelocityX = velocity.x
                let newVelocityY = velocity.y
                let colorChanged = false

                // Check for horizontal collision
                if (newX <= 0 || newX + logoWidth >= containerWidth) {
                    newVelocityX = -velocity.x
                    colorChanged = true
                }

                // Check for vertical collision
                if (newY <= 0 || newY + logoHeight >= containerHeight) {
                    newVelocityY = -velocity.y
                    colorChanged = true
                }

                // Update color if collision occurred
                if (colorChanged) {
                    setColor(generateRandomColor())
                }

                // Update velocity if needed
                if (newVelocityX !== velocity.x || newVelocityY !== velocity.y) {
                    setVelocity({ x: newVelocityX, y: newVelocityY })
                }

                return {
                    x: newX,
                    y: newY,
                }
            })

            animationRef.current = requestAnimationFrame(animate)
        }

        animationRef.current = requestAnimationFrame(animate)

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current)
            }
        }
    }, [isAnimating, velocity])

    // Use default DVD logo if none uploaded


    return (
            <div
                ref={containerRef}
                className="  absolute w-full h-[250vh] top-[100vh]    "
            >
                <Squares
                    speed={0.5}
                    squareSize={40}
                    direction='diagonal' // up, down, left, right, diagonal
                    borderColor='#fff'
                    hoverFillColor='#222'
                />
                    <img
                        ref={logoRef}
                        src="/placeholder.svg"
                        alt="Bouncing logo"
                        className="absolute transition-colors duration-300 h-16 object-contain"
                        style={{
                            left: `${position.x}px`,
                            top: `${position.y}px`,
                            filter: `drop-shadow(0 0 8px ${color})`,
                            border: isAnimating ? `2px solid ${color}` : "none",
                            borderRadius: "4px",
                            padding: "4px",
                            backgroundColor: isAnimating ? "rgba(0, 0, 0, 0.5)" : "transparent",
                        }}
                    />

            </div>


    )
}