import React from "react";

const Newsletter = () => {
  return (
    <section className="newsletter-section px-12 flex items-center mt-24">
      <div>
        <h3 className="text-2xl text-[#fff] uppercase font-semibold mb-4">
          GET THE LATEST INFORMATION <br /> AND SPECIAL OFFERS
        </h3>
        <input
          type="email"
          placeholder="Email Address..."
          className="input w-full max-w-xs mb-2"
        />
        <input type="submit" className="btn bg-siteColor" value="Subscribe" />
      </div>
    </section>
  );
};

export default Newsletter;
