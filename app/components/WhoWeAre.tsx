import { Eye, Globe, Heart, Target } from "lucide-react"
import Image from "next/image"

export default function WhoWeAre() {
  const values = [
    {
      icon: Eye,
      title: "Vision",
      description: "We watch what is coming, and keep a view of history.",
    },
    {
      icon: Globe,
      title: "Holism",
      description: "We know everything we do is part of a broader context.",
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "We believe trust is our most important asset.",
    },
    {
      icon: Target,
      title: "Focus",
      description: "We concentrate on what is core to us.",
    },
  ]

  return (
    <section id="about" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why We're Different</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                <strong className="text-yellow-500">No Scare Tactics:</strong> We focus on what you actually need to
                meet your requirements, not worst-case scenarios designed to sell you more services.
              </p>
              <p>
                <strong className="text-yellow-500">Business-First Approach:</strong> Every recommendation ties directly
                to your revenue and timeline goals. We understand that security serves your business, not the other way
                around.
              </p>
              <p>
                <strong className="text-yellow-500">Problem Solvers:</strong> We specialize in solving hard problems and
                are often our clients' first call when they need expertise, or when they've had several other false
                starts with different approaches.
              </p>
            </div>
          </div>
          <div>
            <Image
              src="/placeholder.svg?height=400&width=500"
              alt="Stratigos Security team"
              width={500}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Core Values</h3>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Founded in 2012, we help organizations succeed by solving cybersecurity challenges efficiently and
            cost-effectively. We're often the team called in when others have failed or when the stakes are highest.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center">
              <div className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <value.icon className="h-8 w-8 text-black" />
              </div>
              <h4 className="text-xl font-semibold mb-2 text-yellow-500">{value.title}</h4>
              <p className="text-gray-300">{value.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-300 italic">"We are passionate about what we do and how we do it."</p>
        </div>
      </div>
    </section>
  )
}
