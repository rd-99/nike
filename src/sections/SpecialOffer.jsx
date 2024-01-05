import { offer } from "../assets/images";
const SpecialOffer = () => {
  return (
    <section className="flex justify-between items-center max:xl:flex-col-reverse gap-10 max-container bg-gradient-to-tr from-yellow-50 to-purple-300">
      <div className="flex-1">
        <img
          src={offer}
          width={90}
          height={68}
          className="object-contain w-full"
        />
      </div>
      <div className=" flex flex-1 flex-col">
        {/* flex flex-1 flex-col */}
        <h2 className="text-4xl font-palanquin font-bold">
          <span className="text-coral-red">Special </span>
          Offer
        </h2>
        <p className="mt-4 info-text">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="mt-6 info-text">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
      </div>
    </section>
  );
};

export default SpecialOffer;
