export default function RegulatoryPressure() {
  const scenarios = [
    {
      title: "Medical Device FDA Submissions",
      description: "Navigate cybersecurity requirements for 510(k) and PMA submissions without delays",
    },
    {
      title: "Meet Client Security Requirements",
      description: "Satisfy enterprise customer security questionnaires and due diligence requests",
    },
    {
      title: "Due Diligence for Funding",
      description: "Clear security hurdles for Series A, B, C funding rounds and investor requirements",
    },
  ]

  return (
    <section className="py-16 bg-red-50 border-l-4 border-red-500">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Stuck on Security Requirements?</h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto">
            Don't let cybersecurity requirements block your revenue, funding, or regulatory approval. We help you
            understand exactly what you need—no more, no less.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {scenarios.map((scenario, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-yellow-500">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{scenario.title}</h3>
              <p className="text-gray-600">{scenario.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-lg text-gray-700 font-medium">
            Most clients need compliance within 6 months—we can help you get there.
          </p>
        </div>
      </div>
    </section>
  )
}
