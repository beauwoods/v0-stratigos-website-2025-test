import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-black to-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Cybersecurity On Budget, On Time,
              <span className="text-yellow-500"> and Without Disruption</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Meet your cybersecurity and regulatory needs faster and with less cost through expert guidance
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3">
                Get Your Compliance Roadmap
              </Button>
              <Button
                variant="outline"
                className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black px-8 py-3 bg-transparent"
              >
                Email Your Questions
              </Button>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/placeholder.svg?height=500&width=600"
              alt="Cybersecurity consulting"
              width={600}
              height={500}
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
