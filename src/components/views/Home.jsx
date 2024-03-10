import NavBar from "../layout/NavBar";
import SideBarOpen from "../layout/SideBarOpen";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="container flex">
        <div className="flex-none">
          <SideBarOpen />
        </div>
        <div className="flex-1 w-64 ml-3 mt-3">
          <h1 className="text-center text-2xl">รายงาน</h1>
          <p className="">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis,
            eaque, harum eius tenetur optio numquam magnam ipsam ea fugiat
            consequuntur officia architecto. Eveniet corporis, sed dolore optio
            beatae sit! Illo!
          </p>
        </div>
      </div>
    </>
  );
}
