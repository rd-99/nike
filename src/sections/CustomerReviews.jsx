import { reviews } from "../constants"
import Review from "../components/Review"
const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin font-bold text-4xl text-center">
        <span className="text-coral-red">Customer</span> Reviews
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center">Below are some mock reviews</p>
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review) => (
          <Review key={review.customerName} {...review}/>
        ))}

      </div>

    </section>
  )
}

export default CustomerReviews