import NavBar from "../layout/NavBar";
import SideBarOpenAdmin from "../layout/SideBarOpenAdmin";
import TableAddSub from "../layout/TableAddSub";
import ModalAddSub from "../layout/ModalAddSub";
export default function AddSubWorks() {
  return (
    <>
      <NavBar />
      <div className="container flex">
        <div className="flex-none">
          <SideBarOpenAdmin />
        </div>
        <div className="flex-1 w-64 mt-3 ml-3">
          <h1 className="text-center text-2xl">เพิ่มภาระงาน</h1>
          <div className="flex justify-center mt-3">
            <ModalAddSub />
          </div>
          <TableAddSub />
        </div>
      </div>
    </>
  );
}
