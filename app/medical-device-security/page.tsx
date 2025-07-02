import Header from "../components/Header"
import Footer from "../components/Footer"
import { Button } from "@/components/ui/button"
import { Shield, FileCheck, Clock, CheckCircle, Heart } from "lucide-react"
import Image from "next/image"

export default function MedicalDeviceSecurity() {
  const challenges = [
    {
      icon: FileCheck,
      title: "Regulatory Submissions",
      description: "Navigate complex cybersecurity requirements while hitting your submission timeline",
    },
    {
      icon: Shield,
      title: "Post-Market Surveillance",
      description: "Maintain ongoing cybersecurity monitoring and vulnerability management as required by FDA guidance",
    },
    {
      icon: Heart,
      title: "Sustainable Product Security",
      description:
        "Build a sustainable product security program that reduces total cost and risk while maintaining regulatory compliance",
    },
    {
      icon: Clock,
      title: "Medically-Relevant Cybersecurity",
      description:
        "Expertise that helps you maintain focus on safety and effectiveness, rather than one-size-fits-all cybersecurity",
    },
  ]

  const solutions = [
    {
      category: "Pre-Market Advisory",
      services: [
        "Cybersecurity risk management planning",
        "Threat modeling and risk assessment guidance",
        "Penetration testing and vulnerability assessment",
        "FDA readiness assessment through trusted sources",
      ],
    },
    {
      category: "Post-Market Guidance",
      services: [
        "Vulnerability management and response planning",
        "Incident response strategy development",
        "Ongoing risk assessment and monitoring guidance",
        "FDA communication and reporting strategy",
      ],
    },
    {
      category: "Strategic Advisory",
      services: [
        "Cybersecurity by design integration",
        "Regulatory strategy and roadmap development",
        "Product security program development",
        "Executive and board-level cybersecurity guidance",
      ],
    },
  ]

  const deviceTypes = [
    "Implanted & Wearables",
    "AI-Enabled Devices",
    "Software as Medical Device (SaMD)",
    "Surgical Robots",
    "Diabetes Management",
    "Imaging Systems",
    "Lab Equipment",
    "Anesthesia Systems",
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-black to-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Medical Device
                <span className="text-yellow-500"> Cybersecurity</span>
                <br />
                Made Simple
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Navigate FDA cybersecurity requirements while hitting your regulatory timelines. We've helped develop
                the current FDA guidance and worked with dozens of medical device manufacturers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3">
                  Connect with our Experts
                </Button>
                <Button
                  variant="outline"
                  className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black px-8 py-3 bg-transparent"
                >
                  FDA Penetration Test Guide
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Medical device cybersecurity"
                width={600}
                height={500}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meeting Your Stakeholder Demands</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Balance the needs of regulators, patients, caregivers, and your business with cybersecurity solutions that
              that enables your success
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {challenges.map((challenge, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="bg-yellow-500 p-3 rounded-lg mr-4">
                    <challenge.icon className="h-6 w-6 text-black" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{challenge.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{challenge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Medical Device Security Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert advisory, guidance, and assessment services designed specifically for medical device manufacturers,
              from pre-market development through post-market surveillance.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{solution.category}</h3>
                <div className="space-y-4">
                  {solution.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700">{service}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Proven FDA Expertise</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  We have advised regulators - including helping draft current pre- and post-market guidance - for more
                  than a decade. We can help you meet both the letter and intent of the requirements with proven
                  expertise that others can't match.
                </p>
                <p>
                  Dozens of medical device manufacturers have relied on our advice and guidance to align patient safety
                  and clinical effectiveness with cybersecurity and comply with regulatory requirements.
                </p>
                <p>
                  Our approach combines deep cybersecurity expertise with experience hitting regulatory, engineering,
                  and business goals.
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-yellow-500 mb-6">Device Types We've Secured</h3>
              <div className="grid grid-cols-2 gap-4">
                {deviceTypes.map((deviceType, index) => (
                  <div key={index} className="bg-gray-800 p-4 rounded-lg text-center">
                    <div className="text-gray-300 text-sm">{deviceType}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-yellow-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">Hit Your Product Launch Deadlines</h2>
          <p className="text-xl text-black mb-8 max-w-3xl mx-auto">
            Streamline cybersecurity and regulatory requirements. Work with experts who advise the regulators and have
            helped write their guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-black hover:bg-gray-800 text-white font-semibold px-8 py-3">
              Connect with our Experts
            </Button>
            <Button
              variant="outline"
              className="border-black text-black hover:bg-black hover:text-white px-8 py-3 bg-transparent"
            >
              FDA Penetration Test Guide
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
