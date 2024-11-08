import React from "react";

// interface Props {
//   params: { id: number; photoId: number };
// }

// const PhotoPage = ({params: {id,photoId}} : Props) => {
//   return <div>PhotoPage {id} {photoId}</div>;
// };

const PhotoPage = async function ({
  params,
}: {
  params: Promise<{ id: number; photoId: number }>;
}) {
  const id = (await params).id;
  // const photoId = (await params).photoId;

  return <div>UserDetailPage {id}</div>;
};

export default PhotoPage;
