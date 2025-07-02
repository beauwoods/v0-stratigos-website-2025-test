import { Briefcase, Settings, Search } from "lucide-react"
import { Shield, ArrowRight } from "lucide-react"

export default function WhatWeDo() {
  const services = [
    {
      icon: Search,
      title: "Assess Risk",
      timeline: "2-4 weeks",
      link: "/assess-cybersecurity-risk",
      services: [
        "Cyber Risk Assessment - Understand your most critical security risks in business context",
        "Compliance Alignment Review - Gap analysis against regulatory and industry standards",
        "Cyber Maturity Assessment - Benchmark your security program maturity and roadmap",
      ],
    },
    {
      icon: Shield,
      title: "Evaluate Technical Controls",
      timeline: "1-8 weeks",
      link: "/technical-security-testing",
      services: [
        "Network & Device Penetration Testing - Comprehensive security testing of infrastructure and devices",
        "Application Assessment & Code Audit - In-depth security review of applications and source code",
        "Vulnerability Assessment - Systematic identification and prioritization of security vulnerabilities",
      ],
    },
    {
      icon: Briefcase,
      title: "Get Expert Advice",
      timeline: "Ongoing",
      link: "/cybersecurity-advisory-services",
      services: [
        "Security Strategy and Roadmap - Align security investments with business objectives",
        "Virtual Chief Information Security Officer - Executive-level security leadership and guidance",
        "Cyber Supply Chain Risk - Third-party risk assessment and vendor security management",
      ],
    },
    {
      icon: Settings,
      title: "Mature Your Governance",
      timeline: "2-6 months",
      link: "/security-program-development",
      services: [
        "Security Design and Architecture - Build robust security frameworks and controls",
        "Security Program Development - Establish comprehensive security governance and processes",
        "M&A Diligence - Security due diligence for mergers, acquisitions, and investments",
      ],
    },
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Start Small, Scale Smart</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the right level of engagement for your timeline and budget. Most clients start with an assessment,
            then expand based on their needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((category, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-black p-3 rounded-lg mr-4">
                  <category.icon className="h-6 w-6 text-yellow-500" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                  <p className="text-yellow-600 font-semibold">{category.timeline}</p>
                </div>
              </div>
              <div className="space-y-4 mb-6">
                {category.services.map((service, serviceIndex) => (
                  <div key={serviceIndex} className="border-l-4 border-yellow-500 pl-4">
                    <p className="text-gray-700 leading-relaxed">{service}</p>
                  </div>
                ))}
              </div>
              <a
                href={category.link}
                className="inline-flex items-center text-yellow-600 hover:text-yellow-700 font-semibold"
              >
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
