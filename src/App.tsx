import './App.css'

interface ProjectInfo {
  name: string,
  image?: string,
  description?: string,
  link?: string
}

function Project({ name, image, description, link }: ProjectInfo) {
  return (
    <a href={link} className='w-full'>
      <div className='w-full rounded border px-4 py-4 flex justify-between'>
        <div className=''>
          <p className='text-xl mb-2'>{name}</p>
          {description}
        </div>
        <img src={image} className='max-w-[512px]' />
      </div>
    </a>
  )
}

function App() {
  return (
    <>
      {/* <div className='absolute w-screen h-screen'>
        <Canvas camera={{ position: [-5, 5, 5], fov: 50 }}>
          <ambientLight />
          <mesh>
            <boxGeometry args={[1, 1, 1]} />
          </mesh>
        </Canvas>
      </div> */}
      <div className='font-lora h-screen w-screen flex flex-col *:w-3xl *:mx-auto'>
        <div className='h-fit pt-10 border-b'>
          <h1 className='mb-2'>Joel Williams</h1>
          <p className='mt-2 mb-3'>📍 Tokyo, Japan</p>
          <p className='text-lg'>Hi my name is Joel, I am currently studying Economics and I enjoy building games and simulators as a hobby. I spent the last two years in sales and now I am building products that help people accomplish their dreams.</p>
          <ul className='font-sans flex gap-4 my-4'>
            <li><a href='#' target='_blank' className='border py-1 px-2 rounded'>🎥 YouTube</a></li>
            <li><a href='https://github.com/joelwashere' target='_blank' className='border py-1 px-2 rounded'>👨‍💻 GitHub</a></li>
            {/* <li><a href='#' target='_blank' className='border py-1 px-2 rounded'>🐤 X / Twitter</a></li> */}
            {/* <li><a href='#' className='border py-1 px-2 rounded'>🎥 Youtube</a></li> */}
          </ul>
        </div>
        <div className='mt-3'>
          <h2 className='text-xl'>Projects</h2>
          <div className='flex flex-col gap-4 mt-2'>
            <Project name={'Graph'} image={''} description='A graphing calculator' link="https://interpretbetter.com/graph" />
            <Project name={'Quicksub'} image={''} description='A video transcription app' link="https://quicksub.app" />
            <Project name={'Nemo'} description='Research Agents for sellers' link="#" />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
