export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans mt-20">
      <header className="bg-gradient-to-r from-purple-500 to-blue-500 text-white py-12 text-center">
        <h1 className="text-4xl font-bold">About Razorops</h1>
        <p className="mt-4 text-lg">Learn more about our mission to optimize Kubernetes performance and reduce costs.</p>
      </header>

      <main className="container mx-auto px-6 py-12">
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg leading-relaxed">
            At Razorops, we aim to revolutionize Kubernetes management with intelligent AI-driven solutions. Our platform ensures peak performance and cost efficiency for your clusters, so you can focus on innovation.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>AI-powered optimization for Kubernetes clusters.</li>
            <li>Real-time cost-saving adjustments.</li>
            <li>Enterprise-grade security and compliance.</li>
            <li>Seamless integration with major cloud providers.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg leading-relaxed">
            Have questions or need support? Reach out to our team at <a href="mailto:support@razorops.com" className="text-blue-500 underline">support@razorops.com</a>.
          </p>
        </section>
      </main>

     
    </div>
  );
}