interface StatItem {
  value: string
  label: string
}

const defaultStats: StatItem[] = [
  {
    value: "5.6K+",
    label: "Successful Audits Completed",
  },
  {
    value: "120+",
    label: "Clients Worldwide",
  },
  {
    value: "20+",
    label: "Years of Industry Experience",
  },
  {
    value: "99%",
    label: "Client Retention Rate",
  },
]

export default function Statistics() {
  return (
    <main className="bg-gray-50 py-6">
      <div className="container mx-auto">
        <div className="w-full max-w-6xl mx-auto px-4 py-8">
          <div className="bg-black rounded-3xl px-4 py-8 md:px-12 md:py-16">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12">
              {defaultStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-4xl lg:text-6xl font-light text-white mb-2 md:mb-4">
                    {stat.value}
                  </div>
                  <div className="text-gray-100 text-xs md:text-base font-normal leading-tight md:leading-relaxed">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
