import React from 'react'
import BgGradient from './BgGradient'

const HowItWorksSection = () => {
  return (
    <section className="relative overflow-hidden bg-gray-50">
        <div className="py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 lg:pt-12">
            <BgGradient />

            <div className="text-center mb-16">
                <h2 className="font-bold text-xl uppercase mb-4 text-rose-500">How it works</h2>
                <h3 className="font-bold text-3xl max-w-2xl mx-auto">Transform any PDF into easy-to-digest summary in three simple steps</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto-relative">
            </div>
        </div>
    </section>
  )
}

export default HowItWorksSection