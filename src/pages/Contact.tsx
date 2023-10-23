import Layout from "../Layout"

const ContactPage = () => {
  return (
    <div>
      <Layout>
        <main className="container mx-auto p-4 min-h-screen">
          <section className="mb-8">
            <h1 className="text-3xl font-semibold mb-4">Contact Us</h1>
            <p className="text-gray-700">
              We'd love to hear from you! Whether you have questions, feedback,
              or want to collaborate, feel free to reach out to us using the
              form below.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Send us a Message</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full border p-2"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full border p-2"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full border p-2"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
              >
                Send Message
              </button>
            </form>
          </section>

          {/* Add additional contact information, such as email, social media links, or a physical address */}
        </main>
      </Layout>
    </div>
  )
}

export default ContactPage
