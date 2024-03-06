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
          <h1 className="text-center text-2xl">Works</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod
            impedit illo veritatis eum, ipsum hic cumque corrupti illum est
            minus! Molestias, eius. Nulla quia id eius temporibus? Ullam, minima
            harum!
          </p>
          <Tables />
        </div>
      </div>
    </>
  );
}
