import SEO from "../components/SEO";

function Contact() {
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
            Contact Us
          </h1>
  
          <div className="mt-6 text-gray-700">
            <p><strong>Phone:</strong> +94 XX XXX XXXX</p>
            <p><strong>WhatsApp:</strong> +94 XX XXX XXXX</p>
            <p><strong>Location:</strong> Your Town, Sri Lanka</p>
          </div>
        </div>
      </section>
      </>
    );
  }
  
  export default Contact;
  