import { notFound } from "next/navigation";
import React from "react";

// interface Props {
//   params: { id: number };
// }

// const UserDetailPage = ({ params : {id} }: Props) => {
//   return <div>UserDetailPage {id}</div>;
// };

const UserDetailPage = async function ({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const id = (await params).id;

  if (id > 10) notFound();
  return <div>UserDetailPage {id}</div>;
};

export default UserDetailPage;
