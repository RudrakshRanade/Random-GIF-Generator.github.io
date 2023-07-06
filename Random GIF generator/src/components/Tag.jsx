import { useState } from "react"
import Spinner from './Spinner.js';
import useGif from "../hooks/useGif.js";

function Tag() {

const[ tag , setTag ] = useState('dog');

const{ gif , loading , fetchData } = useGif(tag);

function clickHandler(){
  fetchData();  }

function changeHandler(event){
  setTag(event.target.value); 
}

return (
  <div className="w-1/2 bg-blue-500 rounded-lg border-[3px] border-black
  flex flex-col items-center gap-y-5 mt-[40px] mb-[30px]">

      <h1 className="mt-[15px] text-2xl underline uppercase font-bold">Random {tag} gif</h1>

      { loading ? (<Spinner/>) : (<img src={gif} alt="GIF" width={450} />)  }

      
<input
className="bg-white w-10/11 text-xl py-2 rounded-lg text-center mb-[15px]" 
onChange={changeHandler}
value={tag}></input>

<button className="bg-yellow-500 w-[87%] py-2 text-xl rounded-lg items-center mb-[20px]"
onClick={clickHandler}>
  Generate
</button>

    </div>
  )
}


export default  Tag