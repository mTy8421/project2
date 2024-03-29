import ModalAdd from "../layout/ModalAdd";
import NavBar from "../layout/NavBar";
import SideBarOpenAdmin from "../layout/SideBarOpenAdmin";
import TableAddHead from "../layout/TableAddHead";

export default function AddWorks() {
  return (
    <>
      <NavBar />
      <div className="container flex">
        <div className="flex-none">
          <SideBarOpenAdmin />
        </div>
        <div className="flex-1 w-64 mt-3 ml-3">
          <h1 className="text-center text-2xl">เพิ่มหัวข้อภาระงาน</h1>
          <div className="flex justify-center mt-3">
            <ModalAdd />
          </div>
          <TableAddHead />
        </div>
      </div>
    </>
  );
}
