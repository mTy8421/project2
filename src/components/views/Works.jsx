import NavBar from "../layout/NavBar";
import SideBarOpen from "../layout/SideBarOpen";
import Tables from "../layout/Tables";

export default function Works() {
  return (
    <>
      <NavBar />
      <div className="container flex">
        <div className="flex-none">
          <SideBarOpen />
        </div>
        <div className="flex-1 w-64 mt-3 ml-3">
          <h1 className="text-center text-2xl">
            บัญชีรายชื่อภาระงานที่ต้องปฎิบัติ
          </h1>
          <Tables />
        </div>
      </div>
    </>
  );
}
