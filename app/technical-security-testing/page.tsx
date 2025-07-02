import Header from "../components/Header"
import Footer from "../components/Footer"
import { Button } from "@/components/ui/button"
import { Shield, Search, Code, Network, Smartphone, CheckCircle, Clock, FileText } from "lucide-react"
import Image from "next/image"

export default function TechnicalSecurityTesting() {
  const testingServices = [
    {
      icon: Network,
      title: "Network Penetration Testing",
      timeline: "2-4 weeks",
      description:
        "Comprehensive testing of your network infrastructure to identify vulnerabilities before attackers do",
      deliverables: [
        "Executive summary with business risk context",
        "Detailed technical findings and evidence",
        "Prioritized remediation roadmap",
        "Compliance mapping (FDA, SOC 2, ISO 27001)",
      ],
    },
    {
      icon: Smartphone,
      title: "Device Penetration Testing",
      timeline: "3-6 weeks",
      description: "Specialized testing for IoT devices, medical devices, and embedded systems",
      deliverables: [
        "Hardware and firmware analysis",
        "Communication protocol testing",
        "Device-specific vulnerability assessment",
        "Regulatory compliance validation",
      ],
    },
    {
      icon: Search,
      title: "Vulnerability Assessment",
      timeline: "1-2 weeks",
      description: "Systematic identification and classification of security vulnerabilities across your environment",
      deliverables: [
        "Comprehensive vulnerability inventory",
        "Risk-based prioritization matrix",
        "Patch management recommendations",
        "Ongoing monitoring guidance",
      ],
    },
    {
      icon: Code,
      title: "Application Assessment",
      timeline: "2-4 weeks",
      description: "In-depth security testing of web applications, mobile apps, and APIs",
      deliverables: [
        "OWASP Top 10 compliance validation",
        "Business logic flaw identification",
        "Authentication and authorization testing",
        "Secure development recommendations",
      ],
    },
    {
      icon: FileText,
      title: "Code Audit",
      timeline: "1-3 weeks",
      description: "Line-by-line security review of source code to identify vulnerabilities early in development",
      deliverables: [
        "Static code analysis results",
        "Security anti-pattern identification",
        "Secure coding best practices guide",
        "Developer training recommendations",
      ],
    },
  ]

  const whenYouNeed = [
    {
      scenario: "Regulatory Compliance",
      description:
        "FDA submissions, SOC 2 audits, or client security requirements demand independent security validation",
    },
    {
      scenario: "Pre-Launch Validation",
      description: "Ensure your product is secure before going to market or releasing to customers",
    },
    {
      scenario: "Due Diligence Support",
      description: "Provide security evidence for funding rounds, acquisitions, or enterprise sales",
    },
    {
      scenario: "Incident Response",
      description: "Understand the full scope of a security incident and prevent future occurrences",
    },
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
                Technical Security
                <span className="text-yellow-500"> Testing</span>
                <br />
                That Drives Results
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Comprehensive security testing that goes beyond compliance checkboxes. Get actionable insights that
                protect your business and satisfy regulatory requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3">
                  Get Testing Quote
                </Button>
                <Button
                  variant="outline"
                  className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black px-8 py-3 bg-transparent"
                >
                  View Sample Report
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Technical security testing"
                width={600}
                height={500}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Technical Security Testing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From network infrastructure to application code, we provide thorough security testing that identifies real
              risks and provides actionable remediation guidance.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {testingServices.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="bg-yellow-500 p-3 rounded-lg mr-4">
                    <service.icon className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                    <p className="text-yellow-600 font-medium">{service.timeline}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">Key Deliverables:</h4>
                  {service.deliverables.map((deliverable, idx) => (
                    <div key={idx} className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-600 text-sm">{deliverable}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* When You Need This */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              When You Need Technical Security Testing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Technical security testing is essential at key business milestones and regulatory checkpoints.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {whenYouNeed.map((item, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg border-l-4 border-yellow-500">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.scenario}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Testing Approach</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  <strong className="text-yellow-500">Business-Context Aware:</strong> We don't just find
                  vulnerabilities—we help you understand which ones actually threaten your business objectives and
                  regulatory compliance.
                </p>
                <p>
                  <strong className="text-yellow-500">Regulatory Focused:</strong> Our testing methodologies align with
                  FDA, SOC 2, ISO 27001, and other compliance frameworks relevant to your industry.
                </p>
                <p>
                  <strong className="text-yellow-500">Actionable Results:</strong> Every finding includes specific
                  remediation guidance, timeline recommendations, and business impact analysis.
                </p>
                <p>
                  <strong className="text-yellow-500">Minimal Disruption:</strong> We work around your operational
                  schedule and can perform testing in staging environments when production testing isn't feasible.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-500 mb-2">300+</div>
                <div className="text-gray-300">Security Assessments</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-500 mb-2">100+</div>
                <div className="text-gray-300">Organizations Tested</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-500 mb-2">12+</div>
                <div className="text-gray-300">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-500 mb-2">Zero</div>
                <div className="text-gray-300">False Positives Policy</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Typical Timeline & Investment</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transparent pricing and realistic timelines help you plan your security testing initiatives effectively.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <Clock className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quick Assessment</h3>
              <p className="text-gray-600 mb-4">1-2 weeks for vulnerability scanning and basic penetration testing</p>
              <p className="text-2xl font-bold text-yellow-600">$15K - $25K</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center border-2 border-yellow-500">
              <Shield className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Comprehensive Testing</h3>
              <p className="text-gray-600 mb-4">3-6 weeks for full network, application, and device testing</p>
              <p className="text-2xl font-bold text-yellow-600">$35K - $75K</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <Code className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Ongoing Program</h3>
              <p className="text-gray-600 mb-4">Quarterly testing with continuous monitoring and support</p>
              <p className="text-2xl font-bold text-yellow-600">$10K - $20K/month</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-yellow-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">Ready to Test Your Security Controls?</h2>
          <p className="text-xl text-black mb-8 max-w-3xl mx-auto">
            Get comprehensive security testing that provides actionable insights and supports your compliance
            requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-black hover:bg-gray-800 text-white font-semibold px-8 py-3">
              Get Testing Proposal
            </Button>
            <Button
              variant="outline"
              className="border-black text-black hover:bg-black hover:text-white px-8 py-3 bg-transparent"
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
