import { Zap, Globe, Shield, Cpu, Layers, Palette, Code, Sparkles, Rocket } from 'lucide-react'
import type { ComponentType } from 'react'

type IconComponent = ComponentType<{ className?: string }>

export const siteConfig = {
  name: 'NovaPulse',
  tagline: 'Next-Gen Digital Agency',
  description: 'Crafting immersive digital experiences with cutting-edge technology and bold creative vision.',
}

export const navigation = [
  { label: 'Features', href: '#features' },
  { label: 'Showcase', href: '#showcase' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
]

export const heroData = {
  badge: 'Next-Gen Digital Agency',
  headlineTop: 'We Build',
  headlineBottom: 'Digital Futures.',
  subline: 'Crafting immersive digital experiences with cutting-edge technology and bold creative vision.',
  primaryCTA: { label: 'Start Project', href: '#pricing' },
  secondaryCTA: { label: 'View Work', href: '#showcase' },
}

export const proofItems = [
  { value: '150+', label: 'Projects Delivered' },
  { value: '50+', label: 'Global Clients' },
  { value: '12', label: 'Countries' },
  { value: '99%', label: 'Satisfaction Rate' },
]

export interface Feature {
  icon: IconComponent
  title: string
  description: string
}

export const features: Feature[] = [
  { icon: Zap, title: 'Lightning Fast', description: 'Optimised performance that loads in milliseconds, keeping users engaged from the first interaction.' },
  { icon: Globe, title: 'Global Scale', description: 'Infrastructure built for worldwide deployment with edge computing and CDN integration.' },
  { icon: Shield, title: 'Cyber Secure', description: 'Enterprise-grade security protocols protecting your digital assets around the clock.' },
  { icon: Cpu, title: 'AI Powered', description: 'Machine learning integration that adapts and evolves with your users\u2019 behaviour patterns.' },
  { icon: Layers, title: 'Modular Design', description: 'Component-based architecture allowing rapid iteration and seamless scalability.' },
  { icon: Palette, title: 'Bold Aesthetics', description: 'Striking visual design that captures attention and communicates your brand identity.' },
  { icon: Code, title: 'Clean Code', description: 'Meticulously crafted codebases following industry best practices and modern standards.' },
  { icon: Sparkles, title: 'Motion Design', description: 'Fluid animations and micro-interactions that bring interfaces to life.' },
  { icon: Rocket, title: 'Rapid Launch', description: 'Streamlined development pipeline from concept to deployment in record time.' },
]

export interface Project {
  title: string
  category: string
  gradient: string
}

export const projects: Project[] = [
  { title: 'Neon District', category: 'Web', gradient: 'from-purple-600 to-cyan-500' },
  { title: 'Pulse Mobile', category: 'Mobile', gradient: 'from-cyan-500 to-blue-600' },
  { title: 'Vortex Brand', category: 'Branding', gradient: 'from-pink-500 to-purple-600' },
  { title: 'GridRunner', category: 'Web', gradient: 'from-blue-500 to-purple-500' },
  { title: 'DataStream', category: 'Mobile', gradient: 'from-purple-500 to-pink-500' },
  { title: 'Synthwave ID', category: 'Branding', gradient: 'from-cyan-600 to-purple-600' },
]

export const showcaseFilters = ['All', 'Web', 'Mobile', 'Branding']

export interface PricingPlan {
  name: string
  price: { monthly: string; yearly: string }
  description: string
  features: string[]
  highlighted: boolean
  cta: string
}

export const pricingPlans: PricingPlan[] = [
  {
    name: 'Spark',
    price: { monthly: 'Free', yearly: 'Free' },
    description: 'Perfect for getting started with basic digital needs.',
    features: ['1 Project', 'Basic Components', 'Community Support', 'Standard Hosting'],
    highlighted: false,
    cta: 'Get Started',
  },
  {
    name: 'Pulse',
    price: { monthly: '\u00a349', yearly: '\u00a3470' },
    description: 'For teams that need professional digital solutions.',
    features: ['Unlimited Projects', 'Premium Components', 'Priority Support', 'Custom Domain', 'Analytics Dashboard', 'API Access'],
    highlighted: true,
    cta: 'Go Pulse',
  },
  {
    name: 'Nova',
    price: { monthly: '\u00a3149', yearly: '\u00a31,430' },
    description: 'Enterprise-grade solutions for ambitious organisations.',
    features: ['Everything in Pulse', 'Dedicated Account Manager', 'Custom Integrations', 'SLA Guarantee', 'White-label Options', 'Advanced Security', 'On-premise Option'],
    highlighted: false,
    cta: 'Contact Sales',
  },
]

export interface FAQItem {
  question: string
  answer: string
}

export const faqItems: FAQItem[] = [
  { question: 'What technologies do you specialise in?', answer: 'We work with cutting-edge technologies including React, Next.js, Three.js, WebGL, and custom shader development. Our stack is always evolving to leverage the latest innovations.' },
  { question: 'How long does a typical project take?', answer: 'Project timelines vary based on complexity. A standard website takes 4\u20138 weeks, while complex web applications with 3D elements and custom animations may take 8\u201316 weeks.' },
  { question: 'Do you offer ongoing maintenance?', answer: 'Yes, all our plans include varying levels of ongoing support and maintenance. We ensure your digital products stay updated, secure, and performing optimally.' },
  { question: 'Can you work with our existing brand guidelines?', answer: 'Absolutely. We excel at translating existing brand identities into immersive digital experiences while maintaining complete brand consistency.' },
  { question: 'What is your design process?', answer: 'Our process follows Discovery, Design, Development, and Deployment phases. We involve clients at every stage with regular reviews and iterative feedback loops.' },
  { question: 'Do you handle hosting and deployment?', answer: 'Yes, we provide end-to-end deployment solutions including cloud hosting, CI/CD pipelines, and performance monitoring across global edge networks.' },
]

export const footerLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Showcase', href: '#showcase' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Privacy', href: '#' },
  { label: 'Terms', href: '#' },
]

export const socialLinks = [
  { label: 'Twitter', href: '#' },
  { label: 'GitHub', href: '#' },
  { label: 'Dribbble', href: '#' },
  { label: 'LinkedIn', href: '#' },
]
