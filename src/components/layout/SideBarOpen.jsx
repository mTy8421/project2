import { Link } from "react-router-dom";

export default function SideBarOpen() {
  return (
    <div className="drawer md:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <li>
            <Link to="/">หน้าหลัก</Link>
          </li>
          <li>
            <Link to="/Works">ภาระงาน</Link>
          </li>
          <li>
            <Link to="/history">ประวัติการทำงาน</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
