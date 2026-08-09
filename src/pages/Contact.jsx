import PageTransition from "../components/layout/PageTransition";
import SEO from "../seo/SEO";

function Contact() {
return (
  <>
    <SEO
      title="Contact Us | Frame & Glass"
      description="Get in touch with Frame & Glass for custom glass and framing solutions."
      image="/images/og-image.jpg"
      url="https://your-domain.com/contact"
    />

    <PageTransition>
<section className="bg-white py-24">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid md:grid-cols-2 gap-20 items-start">

      {/* Left Side */}
      <div>
        <h1 className="text-5xl font-bold text-black mb-12">
          CONTACT US
        </h1>

        <div className="space-y-10 text-black">

          <div>
            <h3 className="text-xl font-semibold mb-2">
              Call Us
            </h3>
            <p>+94 77 228 7228</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">
              WhatsApp
            </h3>
            <p>+94 77 228 7228</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">
              Location
            </h3>
            <p>Colombo, Sri Lanka</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">
              Business Hours
            </h3>
            <p>Mon - Sat : 8:00 AM - 6:00 PM</p>
          </div>

        </div>
      </div>

      {/* Right Side Form */}
      <div>
        <form className="space-y-8">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full bg-transparent border-b border-gray-300 text-black py-3 outline-none focus:border-black"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full bg-transparent border-b border-gray-300 text-black py-3 outline-none focus:border-black"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full bg-transparent border-b border-gray-300 text-black py-3 outline-none focus:border-black"
          />

          <textarea
            rows="5"
            placeholder="Project Details"
            className="w-full bg-transparent border-b border-gray-300 text-black py-3 outline-none focus:border-black resize-none"
          />

          <button
            type="submit"
            className="bg-black text-white font-semibold px-10 py-4 rounded-full hover:bg-gray-800 transition"
          >
            REQUEST A QUOTE
          </button>

        </form>
      </div>

    </div>
  </div>
</section>
      <section className="bg-white py-12 border-t">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-3xl font-bold text-black mb-6">
      Find Us
    </h2>

    <iframe
      title="Google Maps"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63370.66525021759!2d79.83238280763233!3d6.930397021262091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25b8a6008d69d%3A0x1b3708e8c78adb81!2sFRAME%20%26%20GLASS!5e0!3m2!1sen!2slk!4v1781635542640!5m2!1sen!2slk" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
      width="100%"
      height="400"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="rounded-lg"
    ></iframe>
  </div>
</section>
    </PageTransition>
  </>
);
  }
  
  export default Contact;
  