import { useRef } from "react"
import Footer from "./components/Footer"
import Main from "./sections/Main"
import Skills from "./sections/Skills"
import Experience from "./sections/Experience"
import Navbar from "./components/Navbar"

function App() {
  const homeRef = useRef<HTMLDivElement>(null)
  const skillsRef = useRef<HTMLDivElement>(null)
  const experienceRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  const navbarProps = {
    homeRef,
    skillsRef,
    experienceRef,
    projectsRef,
    contactRef
  }

  return (
    <>
      <Navbar {...navbarProps} />
      <Main innerRef={homeRef} />
      <Skills innerRef={skillsRef} />
      <Experience innerRef={experienceRef} />
      <div ref={projectsRef} className="flex flex-col items-center justify-center w-full h-screen bg-slate-100 text-slate-800">Projects</div>
      <div ref={contactRef} className="flex flex-col items-center justify-center w-full h-screen">
       <div className="border border-slate-400 rounded-md p-10">
        <h1 className="text-4xl">Matt Proctor</h1>
        <h2 className="text-xl">425.295.4143</h2>
        <h2 className="text-xl">matthewalanproctor@gmail.com</h2>
       </div>
      </div>
      <Footer />
    </>
  )
}

export default App
