import {
  Footer,
  Hero,
  PopularProducts,
  Services,
  SpecialOffer,
  CustomerReviews,
} from "./sections/index";

import  Nav  from "./components/nav";
const App = () => {
  return (
    <main className="relative border-indigo-50">
      <Nav />
      <section className="xl:padding-l wide:padding-r padding-b" id="Hero">
        <Hero />
      </section>
      <section className="padding" >
        <PopularProducts />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding" id="SpecialOffers">
        <SpecialOffer />
      </section>
      <section className="bg-pale-blue padding">
        <CustomerReviews />
      </section>
      {/* <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section> */}
      <section className=" bg-black padding-x padding-t pb-8" id="Footer">
        <Footer />
      </section>
    </main>
  );
};

export default App;
