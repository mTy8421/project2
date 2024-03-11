import NavBar from "../layout/NavBar";
import SideBarOpenAdmin from "../layout/SideBarOpenAdmin";
import TableApprove from "../layout/TableApprove";

export default function CheckWork() {
  return (
    <>
      <NavBar />
      <div className="container flex">
        <div className="flex-none">
          <SideBarOpenAdmin />
        </div>
        <div className="flex-1 w-64 mt-3 ml-3">
          <h1 className="text-center text-2xl">อนุมติภาระงาน</h1>
          <TableApprove />
        </div>
      </div>
    </>
  );
}
