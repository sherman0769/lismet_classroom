import Navbar from '../components/Navbar'
import About from '../components/About'
import Schedule from '../components/Schedule'
import Courses from '../components/Courses'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-gray-50">
        <About />
        <Schedule />
        <Courses />
      </main>
      <Footer />
    </>
  )
} 