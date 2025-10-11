import React from "react";
import { Button } from "./ui/button";

const JoinCTA = () => {
  return (
    <section className="bg-green-700 text-white py-16 text-center">
      <h2 className="text-3xl font-bold mb-4">Ready to Join the Family?</h2>
      <p className="mb-6">
        Be part of a vibrant Ghanaian community in Estonia.
      </p>
      <Button className="bg-white text-green-700 font-semibold hover:bg-gray-100">
        Become a Member
      </Button>
    </section>
  );
};

export default JoinCTA;
