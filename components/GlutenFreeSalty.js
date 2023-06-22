import React from "react";

const GlutenFreeSalty = () => {
  return (
    <section
      className="glutenFreeSalty - [url('glutenfreeSaltybg.svg')]"
      bg-cover
      bg-center
      bg-fixed
    >
      <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 flex items-center justify-center">
        <div className="container mx-auto text-orange-900">
          <h1 className="text-4x1 mb-8">The Gluten-Free section</h1>
        </div>
      </div>
    </section>
  );
};

export default GlutenFreeSalty;
