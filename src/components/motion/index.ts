import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export { gsap, ScrollTrigger }

export const DURATION = { fast: 0.3, normal: 0.6, slow: 0.9 }
export const EASE = { out: 'power3.out', in: 'power3.in', smooth: 'power2.out' }
export const STAGGER = { tight: 0.05, normal: 0.08, relaxed: 0.12 }
