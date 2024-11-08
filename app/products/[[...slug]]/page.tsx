import React from "react";

// interface Props {
//   params: { slug: string[] };
//   searchParams : {sortOrder : string}
// }

// type Props = {
//   params: Promise<{ slug: string[] }>;
//   searchParams: Promise<{ sortOrder: string }>;
// };

// // const ProductPage = ({ params: { slug } , searchParams: {sortOrder} }: Props) => {
// //   return <div>ProductPage {slug} {sortOrder}</div>;
// // };

// type tParams = Promise<{ slug: string[] }>;

// export default async function Challenge(props: { params: tParams }) {
//   const { slug } = await props.params;
//   const productID = slug[1];

//   // other code here
// }

const ProductPage = async function ({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ sortOrder: string }>;
}) {
  const slug = (await params).slug;
  const sortOrder = (await searchParams).sortOrder;  
  
  return (<div>My Post: {slug} {sortOrder}</div>);
};

export default ProductPage;
