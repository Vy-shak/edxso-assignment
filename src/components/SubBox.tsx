import React, { useEffect, useState } from 'react'

type states = "inactive" |"clicked"

interface subBox {
    indexVal:number,
    updateSeq:any,
    reply:number[],
    seq:number[],
}

function SubBox({indexVal, seq,updateSeq,reply}:subBox) {
    const [status,setStatus] = useState(0);


    const handleClick = () =>{
        setStatus(indexVal);
        if (seq.includes(indexVal)) {
            return
        }
        updateSeq((prev:number[])=>[...prev,indexVal])
    }

 
  return (
    <div  onClick={handleClick}
    className={`border ${reply.includes(indexVal)?"bg-orange-500":null} w-full cursor-pointer h-full ${status==indexVal?"bg-green-600":null}   border-gray-300 flex items-center justify-center rounded-md  transition-colors`}
  >
  </div>
  )
}

export default SubBox
