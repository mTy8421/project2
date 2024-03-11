import NavBar from "../layout/NavBar";
import SideBarOpen from "../layout/SideBarOpen";
import TablesCheck from "../layout/TableCheck";

export default function History() {
  return (
    <>
      <NavBar />
      <div className="container flex">
        <div className="flex-none">
          <SideBarOpen />
        </div>
        <div className="flex-1 w-64 mt-3 ml-3">
          <h1 className="text-center text-2xl">ประวัติการทำงาน</h1>
          <TablesCheck />
        </div>
      </div>
    </>
  );
}
