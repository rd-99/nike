import { star } from "../assets/icons"

const Review = ({imgURL , customerName , rating, feedback}) => {
  return (
    <div className="m-10 justify-center items-center flex-col flex">
        <img src={imgURL} alt="customer" className="rounded-full object-cover w-[120px] h-[120px]"/>
        <p className="mt-6 max-w-sm text-center info-text">{feedback}</p>
        <div>
            <img src={star} width={24} height={24} className="object-contain m-1"/>
            <p >({rating})</p>
        </div>
        <h3 className="mt-1 font-palanquin text-3xl text-center font-bold">{customerName}</h3>
    </div>
    
  )
}

export default Review