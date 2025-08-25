import { Rating, RatingStar as Star } from "flowbite-react";

export default function RatingStar() {
  return (
    <Rating className="text-yellow-400 text-2xl">
      <Star  />
      <Star />
      <Star />
      <Star />
      <Star />
    </Rating>
  );
}
