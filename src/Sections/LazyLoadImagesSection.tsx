import React from "react";
// import { LazyLoadImage } from 'src/Components/css-modules/LazyLoadImage'
import { LazyLoadImage } from "../Components/css-modules/LazyLoadImage";

const LazyLoadImagesSection = () => {
  return (
    <section className="lazyloading-section flex flex-col flex-wrap gap-8 justify-center items-center my-6">
      <h1 id="Inputs" className="text-2xl font-bold">
        Lazy Loading Section
      </h1>
      <article className="flex flex-row gap-4">
        <LazyLoadImage
          src="https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="alt text"
          borderRadius="2rem"
        />
        <LazyLoadImage
          src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="alt text"
          borderRadius="2rem"
        />
        <LazyLoadImage
          src="https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D"
          alt="alt text"
          borderRadius="2rem"
        />
      </article>
    </section>
  );
};

export default LazyLoadImagesSection;
