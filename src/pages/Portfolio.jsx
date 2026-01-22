import SEO from "../components/SEO";


function Portfolio() {
    return (

        <>
        <SEO
        title="Our Work | Frame & Glass Portfolio"
        description="View our recent custom frame and glass projects."
        image="/images/og-image.jpg"
        url="https://your-domain.com/portfolio"
        />  
        <section className="bg-gray-50 px-6 py-24 border-b border-gray-100">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-4xl font-bold text-gray-900">
            Our Work
          </h1>
  
          <p className="mt-4 max-w-2xl text-gray-600">
            A selection of our recent framing and glass projects.
          </p>
  
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <img
              src="/images/portfolio/frame-1-.jpg"
              alt="Custom picture framing"
              className="aspect-square w-full rounded-lg object-cover transition-transform duration-300 hover:scale-105"
            />
            <img
              src="/images/portfolio/frame-2-.jpg"
              alt="Artwork framing"
              className="aspect-square w-full rounded-lg object-cover transition-transform duration-300 hover:scale-105"
            />
            <img
              src="/images/portfolio/frame-3-.jpg"
              alt="Certificate framing"
              className="aspect-square w-full rounded-lg object-cover transition-transform duration-300 hover:scale-105"
            />
            <img
              src="/images/portfolio/glass-1-.jpg"
              alt="Glass mirror framing"
              className="aspect-square w-full rounded-lg object-cover transition-transform duration-300 hover:scale-105"
            />
            <img
              src="/images/portfolio/glass-2-.jpg"
              alt="Custom glass installation"
              className="aspect-square w-full rounded-lg object-cover transition-transform duration-300 hover:scale-105"
            />
            <img
              src="/images/portfolio/glass-3-.jpg"
              alt="Glass replacement work"
              className="aspect-square w-full rounded-lg object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </section>
      </>
    );
  }
  
  export default Portfolio;
  