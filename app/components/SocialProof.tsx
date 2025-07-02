export default function SocialProof() {
  const credentials = [
    {
      number: "300+",
      label: "Projects Completed",
      description: "Since 2012",
    },
    {
      number: "100+",
      label: "Organizations Served",
      description: "From startups to Fortune 100",
    },
    {
      number: "Dozens",
      label: "Medical Device Manufacturers",
      description: "Including FDA requirement development",
    },
  ]

  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Organizations Worldwide</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We've helped develop the current FDA cybersecurity requirements and have extensive experience across
            industries and company sizes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {credentials.map((credential, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-yellow-500 mb-2">{credential.number}</div>
              <div className="text-xl font-semibold mb-2">{credential.label}</div>
              <div className="text-gray-400">{credential.description}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 text-center">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-yellow-500 mb-3">Medical Device Security Specialists</h3>
            <p className="text-gray-300">
              Deep expertise in FDA cybersecurity requirements and medical device compliance
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-yellow-500 mb-3">All Company Sizes</h3>
            <p className="text-gray-300">From pre-revenue startups to Fortune 100 enterprises across all industries</p>
          </div>
        </div>
      </div>
    </section>
  )
}
