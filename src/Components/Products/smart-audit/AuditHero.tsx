'use client'

const AuditHero = () => {
  return (
    <section className="relative bg-[url('/about.png')] bg-cover bg-center px-4 py-6 flex overflow-hidden">
      <div className="container mx-auto rounded-3xl mt-25">
        {/* Text Content with Black Overlay */}
        
          {/* Badge */}
          <div className="inline-flex px-3 py-1.5 bg-white rounded-xl text-sm mb-6">
            <p className="text-lg sm:text-[18px] font-medium text-[#667085]">
              Home {">>"} Products {">>"} Smart Audit
            </p>
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-semibold leading-tight text-white mb-6">
            <span>Internal Audit</span>
            <span className="block">Management Software</span>
          </h1>

          <p className="text-xl text-gray-200 mb-6">
            Replace traditional audit checklists with powerful digital
            <span className="block">
              applications to automate audit processes and improve compliance gaps
            </span>
          </p>

          <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300">
            Book Demo
          </button>
        
      </div>
    </section>
  )
}

export default AuditHero
