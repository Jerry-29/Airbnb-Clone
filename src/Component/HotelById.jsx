import { useParams } from "react-router-dom"

export const HotelbyId=()=>{
  const {id}=useParams()
  return <div>
    {id}
    </div>
}