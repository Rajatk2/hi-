// src/app/page.js
export default function Home() {
  return (
    <section className="text-center py-16">
      <h2 className="text-4xl font-semibold mb-4">Innovate. Collaborate. Excel.</h2>
      <p className="text-lg mb-8">At Excellentia, we are dedicated to fostering innovation and collaboration in the tech community. Join us to be part of a thriving network of tech enthusiasts and professionals.</p>
      <Link href="/join" className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition">Join Us</Link>
    </section>
  )
}
