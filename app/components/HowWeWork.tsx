import { MessageSquare, Award, Building, Users, Globe2, Zap } from "lucide-react"

export default function HowWeWork() {
  const workingPrinciples = [
    {
      icon: MessageSquare,
      title: "Biz-lingual",
      description:
        "We hire and train our consultants to speak both business and geek, so they can translate packets into policy.",
    },
    {
      icon: Award,
      title: "Experienced",
      description:
        "Our consultants have, on average, more than 10 years experience, and have held operational roles at the C-suite and Director level.",
    },
    {
      icon: Building,
      title: "Cross-industry",
      description:
        "We have worked in industries as diverse as retail, higher education, life sciences, oil and gas, electrical, automotive, government, and retail, among others.",
    },
    {
      icon: Users,
      title: "Size-agnostic",
      description: "We consult and advise pre-revenue startups, Fortune 50, and every size in between.",
    },
    {
      icon: Globe2,
      title: "Global",
      description:
        "Our consultants span four continents and a half dozen languages, and we have done projects in dozens of countries.",
    },
    {
      icon: Zap,
      title: "Engaged",
      description:
        "Our consultants are active participants in the information security community, developing tools, running conferences, and regularly attend industry events like DEF CON and the RSA Conference.",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How We Work</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our approach combines deep technical expertise with business acumen, delivering solutions that work in the
            real world.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workingPrinciples.map((principle, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start mb-4">
                <div className="bg-yellow-500 p-3 rounded-lg mr-4 flex-shrink-0">
                  <principle.icon className="h-6 w-6 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{principle.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{principle.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
