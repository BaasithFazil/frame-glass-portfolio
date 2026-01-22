import SEO from "../seo/SEO";
import PageTransition from "../components/layout/PageTransition";

function Services() {
    return (
        <>
<PageTransition>
        <SEO
        title="Our Work | Frame & Glass Portfolio"
        description="View our recent custom frame and glass projects."
        image="/images/og-image.jpg"
        url="https://your-domain.com/portfolio"
        />

        <section className="bg-gray-50 px-6 py-28 border-b border-gray-100">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-4xl font-bold text-gray-900">
            Our Services
          </h1>
          <p className="mt-4 text-gray-600">
            Custom framing, mirror framing, glass cutting, and replacement services.
          </p>
        </div>
      </section>
      </PageTransition>
      </>
    );
  }
  
  export default Services;
  