import { useState } from "react"
export const New=()=>{
    const[data,setData]=useState<string>('')
    const[allData,setAllData]=useState<string[]>([])
    const handleAdd=()=>{
        if (data.trim()){
        setAllData([...allData,data])
        setData('')}
    }
    const handleDelete=(id:string)=>{
        setAllData(allData.filter((item)=>item !== id))
    }

    return(
        <div style={{alignItems:'center', justifyContent:'center'}} >
            <input placeholder='enter here some thing' style={{borderWidth:'1px ',alignItems:'center',justifyContent:'center' 
        }} value={data} onChange={(e)=>setData(e.target.value)}/>
            <button onClick={handleAdd}>add</button>
            <div>
                {allData.map((text,index)=>(
                    <div>
                    <li key={index}>{text}</li>
                    <button              
                     onClick={()=>handleDelete(text)}
                    >delete</button>
                    </div>
               ) )}
            </div>
        </div>
    )
}