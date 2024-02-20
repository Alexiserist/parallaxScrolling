import Image from 'next/image'
import ParallaxPage from './pages/parallax'
import TestPage from './pages/testPage'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <ParallaxPage/>
      <div className="h-40 background-stone-color w-screen">
      </div>
      <TestPage/>
    </main>
  )
}
