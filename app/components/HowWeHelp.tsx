import { Shield, TrendingUp, Users } from "lucide-react"
import Image from "next/image"

export default function HowWeHelp() {
  const benefits = [
    {
      icon: Shield,
      title: "Unblock Revenue",
      description:
        "Clear the security hurdles blocking your sales, funding, or regulatory approval. Get compliant faster with targeted solutions that meet requirements without over-engineering.",
    },
    {
      icon: TrendingUp,
      title: "Right-Size Your Investment",
      description:
        "Spend only what you need to meet requirements. We help you match budget to actual needs and demonstrate security program effectiveness to stakeholders.",
    },
    {
      icon: Users,
      title: "Get Expert Guidance",
      description:
        "Skip the learning curve with advisors who've done this hundreds of times. Build and document your security program efficiently while you focus on your business.",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How We Help You</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet your cybersecurity and regulatory requirements without disrupting your business or breaking your
            budget.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="bg-yellow-500 p-3 rounded-lg mr-4">
                  <benefit.icon className="h-6 w-6 text-black" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{benefit.title}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/placeholder.svg?height=400&width=500"
              alt="Cybersecurity strategy"
              width={500}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Business-First Approach</h3>
            <div className="space-y-4 text-gray-600">
              <p>
                Every recommendation ties directly to your revenue and timeline goals, because we take the time to
                understand your organizational drivers and business context.
              </p>
              <p>
                Know which requirements are critical for your specific situation and which can be addressed later, with
                our strategic advisory and assessment services.
              </p>
              <p>
                Protect revenue while optimizing costs, rather than over-engineering solutions, thanks to operational
                expertise from consultants who've solved these problems hundreds of times.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Industry Expertise</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a
              href="/medical-device-security"
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="text-yellow-500 group-hover:text-yellow-600 font-semibold">Medical Devices</div>
              <p className="text-gray-600 text-sm mt-2">FDA compliance & device security</p>
            </a>
            <a
              href="/financial-services-security"
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="text-yellow-500 group-hover:text-yellow-600 font-semibold">Financial Services</div>
              <p className="text-gray-600 text-sm mt-2">Regulatory compliance & risk management</p>
            </a>
            <a
              href="/nonprofit-security"
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="text-yellow-500 group-hover:text-yellow-600 font-semibold">Non-Profits</div>
              <p className="text-gray-600 text-sm mt-2">Budget-conscious security solutions</p>
            </a>
            <a
              href="/iot-device-security"
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="text-yellow-500 group-hover:text-yellow-600 font-semibold">IoT Devices</div>
              <p className="text-gray-600 text-sm mt-2">Device security & compliance</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
