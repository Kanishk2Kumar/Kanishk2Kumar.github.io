"use client"

import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    title: "Mobile Accessories E-commerce",
    technologies: ["REACT", "NEXT.JS", "NODE.JS", "MONGODB", "TAILWIND CSS"],
    isDark: false,
  },
  {
    title: "Plant Shop E-commerce",
    technologies: ["REACT", "NEXT.JS", "STRIPE API", "TAILWIND CSS"],
    isDark: false,
  },
  {
    title: "Apple Tech Marketplace",
    technologies: ["BLAZOR", "ASP.NET CORE", "SQL SERVER", "BOOTSTRAP"],
    isDark: true,
  },
  {
    title: "Electronics & Gadgets Store",
    technologies: ["VUE.JS", "LARAVEL", "MYSQL", "SCSS"],
    isDark: false,
  },
  {
    title: "Home Decor Marketplace",
    technologies: ["ANGULAR", "FIREBASE", "GRAPHQL", "MATERIAL UI"],
    isDark: false,
  },
  {
    title: "Digital Game Store",
    technologies: ["SVELTE", "NODE.JS", "MONGODB", "CHAKRA UI"],
    isDark: false,
  },
]

export function WorksSection() {
  return (
    <section className="min-h-screen bg-gray-100 relative overflow-hidden">
      {/* Header */}
      <div className="absolute top-6 left-8 right-8 flex justify-between items-center z-10">
        <p className="text-sm tracking-[0.2em] text-gray-600 uppercase">Logic meets aesthetics, seamlessly</p>
        <button className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
          <div className="w-6 h-0.5 bg-white relative">
            <div className="absolute top-0 w-6 h-0.5 bg-white transform translate-y-2"></div>
            <div className="absolute top-0 w-6 h-0.5 bg-white transform -translate-y-2"></div>
          </div>
        </button>
      </div>

      <div className="flex min-h-screen">
        {/* Left Side - Projects List */}
        <div className="w-1/2 pt-24 pl-8">
          {/* WORKS Title */}
          <h1 className="text-[12rem] font-black leading-none tracking-tight text-black mb-16">WORKS</h1>

          {/* Projects List */}
          <div className="space-y-0">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`group cursor-pointer transition-all duration-300 ${
                  project.isDark ? "bg-black text-white" : "bg-transparent text-black"
                } hover:bg-black hover:text-white`}
              >
                <div className="flex items-center justify-between py-6 px-6 border-b border-gray-300 group-hover:border-gray-600">
                  <div>
                    <h3 className="text-xl font-medium mb-2">{project.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="text-xs tracking-wide opacity-70">
                          {tech}
                          {techIndex < project.technologies.length - 1 && <span className="ml-2">•</span>}
                        </span>
                      ))}
                    </div>
                  </div>
                  <ArrowUpRight className="w-6 h-6 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Description and Browser Mockup */}
        <div className="w-1/2 pt-24 pr-8 pl-16">
          {/* Description */}
          <div className="mb-16">
            <p className="text-lg leading-relaxed text-gray-700 text-right max-w-lg ml-auto">
              FEATURED PROJECTS THAT HAVE BEEN METICULOUSLY CRAFTED WITH PASSION TO DRIVE RESULTS AND IMPACT.
            </p>
          </div>

          {/* Browser Mockup */}
          <div className="relative">
            <div className="bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden">
              {/* Browser Header */}
              <div className="bg-gray-50 px-4 py-3 flex items-center gap-2 border-b border-gray-200">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-white rounded px-3 py-1 text-xs text-gray-500 border">https://apple-store.com</div>
                </div>
              </div>

              {/* Browser Content */}
              <div className="aspect-[4/3] bg-gradient-to-br from-blue-50 to-purple-50 p-6">
                {/* Navigation */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-6">
                    <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                    <nav className="flex gap-4 text-sm">
                      <span className="text-blue-600 font-medium">All Categories</span>
                      <span className="text-gray-600">Accessories</span>
                      <span className="text-gray-600">Deals</span>
                      <span className="text-gray-600">Gift Cards</span>
                    </nav>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-gray-300 rounded"></div>
                    <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                  </div>
                </div>

                {/* Main Content */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {/* Apple Shopping Event */}
                  <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-lg p-4 text-white">
                    <h3 className="font-bold mb-2">Apple Shopping Event</h3>
                    <p className="text-sm opacity-90 mb-3">Shop great deals on MacBook, iPad, iPhone and more</p>
                    <div className="w-20 h-12 bg-white/20 rounded"></div>
                  </div>

                  {/* Product Cards */}
                  <div className="space-y-2">
                    <div className="bg-pink-100 rounded-lg p-3 flex items-center justify-between">
                      <div>
                        <div className="text-2xl font-bold">327</div>
                        <div className="text-xs text-gray-600">Days</div>
                      </div>
                      <div className="w-12 h-8 bg-pink-200 rounded"></div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-blue-100 rounded p-2">
                        <div className="text-xs font-medium">New Dual Sense</div>
                        <div className="w-8 h-6 bg-blue-200 rounded mt-1"></div>
                      </div>
                      <div className="bg-yellow-100 rounded p-2">
                        <div className="text-xs font-medium">Instant Camera</div>
                        <div className="w-8 h-6 bg-yellow-200 rounded mt-1"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Popular Categories */}
                <div>
                  <h4 className="font-medium mb-3">Popular Categories</h4>
                  <div className="grid grid-cols-7 gap-2">
                    {[
                      "Apple iPhone",
                      "Apple MacBook",
                      "Motherboards",
                      "Mirrorless",
                      "Headsets",
                      "Drones",
                      "Apple iPad",
                    ].map((category, index) => (
                      <div key={index} className="text-center">
                        <div className="w-12 h-12 bg-gray-200 rounded-lg mb-1 mx-auto"></div>
                        <div className="text-xs text-gray-600">{category}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
