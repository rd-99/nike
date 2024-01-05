import ServiceCard from "../components/ServiceCard"
import { services } from "../constants"
const Services = () => {
  return (
    <section className="max-container flex flex-wrap justify-center gap-9">
      {services.map((item) => (
      <ServiceCard key={item.label} {...item}/>
      ))}
    </section>
  )
}

export default Services