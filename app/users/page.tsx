import Link from "next/link";
import UserTable from "./UserTable";

// interface Props {
//   searchParams: { sortOrder: string };
// }

// const UsersPage = async (Props) => {
//   const searchParams = await Props.searchParams;
//   const sortOrder = searchParams.sortOrder;

//   console.log(sortOrder);

//   return (
//     <>
//       <h1>Users</h1>
//       <UserTable sortOder={sortOrder}></UserTable>
//     </>
//   );
// };

const UsersPage = async function ({
  searchParams,
}: {
  searchParams: Promise<{ sortOrder: string }>;
}) {
  const sortOrder = (await searchParams).sortOrder;

  return (
    <>
      <h1>Users</h1>
      <Link href='/users/new' className="btn ">New</Link>
      <UserTable sortOder={sortOrder}></UserTable>
    </>
  );
};

export default UsersPage;
