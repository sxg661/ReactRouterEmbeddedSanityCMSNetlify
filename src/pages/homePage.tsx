import { useEffect } from "react";
import { getTestimonials } from "../../studio/queries/getTestimonials"

export default function HomePage() {
  useEffect(() => {
    getTestimonials().then(() => {
        console.log("success");
    });
  });

  return (
    <h1>Home</h1>
  );
}