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

  return <div>UserDetailPage {id}</div>;
};

export default UserDetailPage;
