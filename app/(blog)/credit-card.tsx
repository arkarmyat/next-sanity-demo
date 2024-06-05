import { PortableTextTypeComponentProps } from "next-sanity";
import React from "react";
import { client } from "@/sanity/lib/client";
import CoverImage from "./cover-image";

interface CreditCard {
  name: string;
  picture: any;
}

export default async function CreditCard(
  props: PortableTextTypeComponentProps<any>,
) {
  const { value } = props;
  const query = `
    *[_type == "creditCard" && _id == $id][0] 
`;
  const params = { id: value.reference._ref };
  const creditCard = await client.fetch(query, params);
  console.log(creditCard);
  return (
    <div className="text-xl  p-4 rounded-md border">
      <h3 className="text-xl my-0 p-0">{creditCard.name}</h3>
      <CoverImage image={creditCard.picture} />
    </div>
  );
}
