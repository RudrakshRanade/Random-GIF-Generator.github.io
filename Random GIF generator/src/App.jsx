import Tag from './components/Tag'
import Random from './components/Random'

export default function App() {
  return (
  <div className='w-full h-full flex flex-col background relative items-center'>

<h1 className="bg-white absolute text-center mt-[40px] 
font-bold py-2 px-10 text-4xl rounded-lg w-11/12">RANDOM GIFS</h1>

<div className="flex flex-col w-full items-center mt-[135px]">
  <Random/>
  <Tag/>
</div>

  </div>

  )
}

