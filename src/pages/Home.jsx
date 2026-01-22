import SEO from "../components/SEO";

function Home() {
    return (

      <>
      <SEO
        title="Frame & Glass Workshop | Custom Framing & Glass Solutions"
        description="Professional custom framing and glass work for artwork, mirrors, certificates, and interiors in Sri Lanka."
        image="/images/og-image.jpg"
        url="https://your-domain.com/"
      />

        {/* Hero Section */}
        <section className="bg-gray-50 px-6 py-24 border-b border-gray-100">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <h1 className="text-5xl font-bold leading-tight text-gray-900">
                Custom Frame & Glass Work
              </h1>
  
              <p className="mt-6 text-lg text-gray-600">
                Handcrafted framing and precision glass solutions for artwork,
                mirrors, certificates, and interiors.
              </p>
  
              <div className="mt-8 flex gap-4">
                <button className="rounded-md bg-gray-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-black">

                  View Portfolio
                </button>
  
                <button className="rounded-md border border-gray-300 px-6 py-3 text-sm font-medium text-gray-900 hover:bg-gray-100">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </section>
  
        {/* Services Section */}
        <section className="bg-gray-50 px-6 py-24 border-b border-gray-100">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-gray-900">
              Our Services
            </h2>
  
            <p className="mt-4 max-w-2xl text-gray-600">
              We provide high-quality framing and glass services tailored to your
              needs, using durable materials and expert craftsmanship.
            </p>
  
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  Picture Framing
                </h3>
                <p className="mt-2 text-gray-600">
                  Custom frames for photos, paintings, certificates, and artwork.
                </p>
              </div>
  
              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  Mirror & Glass Framing
                </h3>
                <p className="mt-2 text-gray-600">
                  Precision framing and finishing for mirrors and glass panels.
                </p>
              </div>
  
              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  Glass Cutting & Replacement
                </h3>
                <p className="mt-2 text-gray-600">
                  Accurate glass cutting and replacement for homes and offices.
                </p>
              </div>
            </div>
          </div>
        </section>
  
        {/* Portfolio Section */}
        <section className="bg-gray-50 px-6 py-24 border-b border-gray-100">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-gray-900">
              Our Work
            </h2>
  
            <p className="mt-4 max-w-2xl text-gray-600">
              A selection of our recent framing and glass projects.
            </p>
  
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="aspect-square rounded-lg bg-gray-200" />
              <div className="aspect-square rounded-lg bg-gray-200" />
              <div className="aspect-square rounded-lg bg-gray-200" />
              <div className="aspect-square rounded-lg bg-gray-200" />
              <div className="aspect-square rounded-lg bg-gray-200" />
              <div className="aspect-square rounded-lg bg-gray-200" />
            </div>
          </div>
        </section>
  
        {/* Contact Section */}
        <section className="bg-gray-50 px-6 py-24 border-b border-gray-100">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-gray-900">
              Get in Touch
            </h2>
  
            <p className="mt-4 max-w-2xl text-gray-600">
              Have a project in mind? Reach out to us for custom framing and glass
              solutions.
            </p>
  
            <div className="mt-8 space-y-2 text-gray-700">
              <p>
                <strong>Phone:</strong> +94 XX XXX XXXX
              </p>
              <p>
                <strong>WhatsApp:</strong> +94 XX XXX XXXX
              </p>
              <p>
                <strong>Location:</strong> Your Town, Sri Lanka
              </p>
            </div>
          </div>
        </section>
      </>
    );
  }
  
  export default Home;
  