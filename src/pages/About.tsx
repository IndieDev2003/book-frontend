import { Link } from "react-router-dom";

export default function About() {
  return (
    <section className="p-4 pb-20">
      <h2 className="text-2xl">About</h2>
      <p className="text-gray-700">
        Welcome to our store — where quality meets convenience.
      </p>
      <p className="my-4 text-gray-700">
        We are dedicated to providing our customers with a seamless online
        shopping experience, offering a carefully curated selection of products
        that combine style, functionality, and value. Our goal is simple: to
        make premium products accessible while maintaining exceptional service
        and trust.
      </p>
      <p className="my-4 text-gray-700">
        Founded with a passion for innovation and customer satisfaction, our
        store focuses on delivering items that meet modern needs and
        expectations. Every product we offer is chosen with attention to detail,
        ensuring it aligns with our standards of quality and reliability.
      </p>
      <p className="my-4 text-gray-700">
        We believe shopping should be easy, enjoyable, and secure. That’s why we
        continuously improve our platform, streamline our processes, and
        prioritize fast delivery and responsive support.
      </p>
      <h3 className="my-4 text-2xl">Why Choose Us</h3>
      <ol className="my-2">
        <li className="text-gray-700">
          {" "}
          High-quality, carefully selected products
        </li>
        <li className="text-gray-700">
          Transparent pricing with no hidden costs
        </li>
        <li className="text-gray-700">Fast and reliable shipping</li>
        <li className="text-gray-700">Dedicated customer support</li>
        <li className="text-gray-700">Secure and easy checkout experience</li>
      </ol>
      <h3 className="text-2xl">Our Mission</h3>
      <p className="my-4 text-gray-700">
        To simplify online shopping by delivering quality products and building
        long-term relationships with our customers through trust, consistency,
        and excellent service.
      </p>
      <h3 className="text-2xl">Our Vision</h3>
      <p className="text-gray-700 my-4">
        To become a trusted global destination for online shopping by
        continuously evolving with customer needs and market trends.
      </p>
      <Link to={"/"}>
    
        <h3 className="underline hover:text-orange-900 text-orange-600 cursor-pointer w-fit ">
          Go to home
        </h3>
      </Link>
    </section>
  );
}
