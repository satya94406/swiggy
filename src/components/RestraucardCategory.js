import Itemlist from "./Itemlist";

const RestraucardCategory=({data,show,setShowIndex})=>{
 const handleClick=()=>{
     setShowIndex()
 };

 return(
 <div className="bg-gray-60 m-4 w-full lg:w-4/5 shadow-xl mx-auto my-2">
   <div className="flex cursor-pointer justify-between" onClick={handleClick}>
         <div className=" font-bold text-stone-950 text-xl m-4">
             {data.title}({data.itemCards.length})
         </div>
         <div>
           <p className="m-4 text-3xl lg:text-4xl hover:text-sky-700"><i className="bi bi-arrow-down-circle-fill "></i></p>
         </div>
   </div>
        {show && <Itemlist items={data.itemCards} />}
 </div>
    )
}

export default RestraucardCategory;