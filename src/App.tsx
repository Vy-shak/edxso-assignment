
import { useEffect, useState } from 'react';
import './App.css'
import { Childbox } from './components/Childbox';


function App() {
  const [seq,setseq] = useState([]);
  const [reply,setReply] = useState([]);
  const [done,setDone] = useState(false);
  const matrixBox = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  console.log("reply",reply)

  useEffect(()=>{
    const n = seq.length;
    let currentIndex = -1;
    if (n<9) {
      return
    };

    const interval = setInterval(()=>{
      console.log("hello",currentIndex)
      if (currentIndex<9) {
        setReply((prev)=>[...prev,seq[currentIndex]]);
        currentIndex++
      }
      else {
        clearInterval(interval);
        setDone(true)
      }
    },500);

    return () => clearInterval(interval); 
  },[seq]);

  const handleReset = ()=>{
    window.location.reload()
  }


  console.log(seq)
  return (
    <section className='w-screen flex flex-col gap-y-4 justify-center items-center h-screen bg-white p-40'>
      <h2 className='text-neutral-600 text-lg font-bold'>3x3 matric color changer</h2>
      <div className="grid w-full h-full grid-cols-3 grid-row-3 gap-2 ">
        {matrixBox.map((item) => (
          <Childbox key={item} seq={seq}  reply = {reply}  updateSeq={setseq} indexVal={item} />
        ))}
      </div>
      <div className='w-full h-12'>
      {done&&<button  onClick={handleReset} className='bg-green-600 text-md rounded px-4 py-2 w-full font-bold h-fit'>play again</button>}
      </div>
    </section>
  )
}

export default App
