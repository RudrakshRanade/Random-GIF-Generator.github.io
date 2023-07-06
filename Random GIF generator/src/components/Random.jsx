import Spinner from './Spinner.js';
import useGif from "../hooks/useGif.js";

function Random() {

  function clickHandler(){
fetchData();  }

const {gif , loading , fetchData} = useGif();

return (
  <div className="w-1/2 bg-green-500 rounded-lg border-[3px] border-black
  flex flex-col items-center gap-y-5">

      <h1 className="mt-[15px] text-2xl underline uppercase font-bold">A Random gif</h1>

      { loading ? (<Spinner/>) : (<img src={gif}   alt="" width={450} />)  }

      

<button className="bg-yellow-500 w-[87%] py-2 text-xl rounded-lg items-center mb-[20px]"
onClick={clickHandler}>
  Generate
</button>

    </div>
  )
}


export default  Random