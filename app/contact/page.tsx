export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans mt-20">
      <header className="bg-gradient-to-r from-purple-500 to-blue-500 text-white py-12 text-center">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="mt-4 text-lg">We would love to hear from you!</p>
      </header>

      <main className="container mx-auto px-6 py-5">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Details */}
          <div >
            <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
            <p className="text-gray-500 mb-4">
              Center for Innovation and Entrepreneurship (CIE), IIIT Hyderabad, India
            </p>
            <p className="text-gray-700 mb-4">Mobile: +91 765 2040 210</p>
            <p className="text-gray-700 mb-4">Email: support@razorops.com</p>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-10 mb-10 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Send Us a Message</h2>
            <iframe width="300" height="350" target="_parent" src="https://app.blinkcrm.in/forms/15aa2d00-ac2f-4d8f-8f10-0048b337dd47?output=embed"></iframe>
          </div>
        </div>

        
      </main>
    </div>
  );
}