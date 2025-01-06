import Head from 'next/head'

const ProductsPage = () => {
  return (
    <>
      <Head>
        <title>Our Products - Ace Energy</title>
        <meta name="description" content="Explore our range of products for the energy and industrial sectors" />
        
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100&display=swap"
          rel="stylesheet"
        />
      </Head>
      
      <main className="container mx-auto px-4 py-8 ">
        <section className="justify-center mb-12">
          
          <h1 className="flex text-4xl items-center md:text-5xl uppercase tracking-[0.05em]">
  <span className="text-black">Our Produ</span>
  <span className="text-red-600 tracking-[0.1em]">c</span>
  <span className="text-black tracking-[0.1em]">ts</span>
</h1>

          
          <p className="text-xl font-poppins text-gray-600 mt-2">
            At Ace Energy, we offer a wide range of products and services designed for the energy and industrial sectors.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 font-poppins  ">

          {/* Process Plant and Equipment */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-110 transition-all">
            <img src="/pressure-vessel.jpg" alt="Process Plant & Equipment" className="w-full h-48 object-cover rounded-md mb-4" />
            <h2 className="text-2xl font-semibold text-white uppercase">Process Plant & Equipment</h2>
            <p className="text-white mt-2">
              We design and manufacture a variety of process equipment for gas and oil treatment, including dehydration and filtration systems.
            </p>
            <ul className="list-disc ml-5 mt-3 text-white">
              <li>Gas Dehydration & Sweetening Units</li>
              <li>Oil Treatment & Produced Water Systems</li>
              <li>Skid-Mounted & Modular Systems</li>
            </ul>
          </div>

          {/* Structural Steel */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-110 transition-all">
            <img src="/structural-steel.jpg" alt="Structural Steel" className="w-full h-48 object-cover rounded-md mb-4" />
            <h2 className="text-2xl font-semibold text-white uppercase">Structural Steel</h2>
            <p className="text-white mt-2">
              High-quality structural steel products for industrial construction, sourced globally from top manufacturers.
            </p>
            <ul className="list-disc ml-5 mt-3 text-white">
              <li>Plates, Beams, Channels, Angles</li>
              <li>Custom Sizes and Testing Options</li>
              <li>Offshore and Onshore Steel Solutions</li>
            </ul>
          </div>


          {/* Pipes & Tubing */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-110 transition-all">
            <img src="/pipes-tubes.avif" alt="Pipes & Tubing" className="w-full h-48 object-cover rounded-md mb-4" />
            <h2 className="text-2xl font-semibold text-white uppercase">Pipes & Tubing</h2>
            <p className="text-white mt-2">
              Seamless and welded pipes in a variety of grades and coatings, designed to meet your project requirements.
            </p>
            <ul className="list-disc ml-5 mt-3 text-white">
              <li>Available from 2&quot; to 56&quot; in various materials</li>
              <li>Fusion Bonded Epoxy and Concrete Coatings</li>
              <li>Nickel, Titanium, and Alloy Clad Steel</li>
            </ul>
          </div>


          {/* Hot Induction Bends & Barred Tees */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-110 transition-all ">
            <img src="/tube-bends.webp" alt="Hot Induction Bends & Barred Tees" className="w-full h-48 object-cover rounded-md mb-4" />
            <h2 className="text-2xl text-white font-semibold uppercase">Hot Induction Bends & Barred Tees</h2>
            <p className="text-white mt-2">
              Hot Induction bending is a precise process for high-performance bends, ensuring dimensional accuracy and repeatability.
            </p>
            <ul className="list-disc font-poppins ml-5 mt-3 text-white">
              <li>Diameter Range: 2&quot; to 64&quot;</li>
              <li>Various Material Options</li>
              <li>High Productivity & Precision</li>
            </ul>
          </div>

          {/* Fittings & Flanges */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-110 transition-all">
            <img src="/flanges-fittings.jpg" alt="Fittings & Flanges" className="w-full h-48 object-cover rounded-md mb-4" />
            <h2 className="text-2xl font-semibold text-white uppercase">Fittings & Flanges</h2>
            <p className="text-white mt-2">
              A wide selection of industrial fittings and flanges in various materials including Carbon, Stainless, and Alloys.
            </p>
            <ul className="list-disc ml-5 mt-3 text-white">
              <li>Butt Weld, Cast, and Forged Fittings</li>
              <li>Outlet Fittings and Special Forgings</li>
              <li>Materials: Carbon Steel, Duplex, Titanium, etc.</li>
            </ul>
          </div>


          {/* Valves */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-110 transition-all">
            <img src="/industrial-valves.jpg" alt="Valves" className="w-full h-48 object-cover rounded-md mb-4" />
            <h2 className="text-2xl font-semibold text-white uppercase">Valves</h2>
            <p className="text-white mt-2">
              We offer a range of valves for industrial applications, including API 6D, API 6A, and customized solutions.
            </p>
            <ul className="list-disc ml-5 mt-3 text-white">
              <li>Gate, Globe, Check, Ball, Butterfly Valves</li>
              <li>Pressure Classes: ANSI 150~2500, API 1000psi~10000psi</li>
              <li>Materials: Carbon Steel, Stainless Steel, Inconel, Titanium</li>
            </ul>
          </div>

          
        </div>
      </main>
    </>
  )
}

export default ProductsPage
