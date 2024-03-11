import ModalApprove from "../layout/ModalApprove";
export default function TableApprove() {
  let num = [];
  for (let index = 0; index < 10; index++) {
    num.push(index);
  }

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>รหัสภาระงาน</th>
            <th>ชื่อผู้ใช้งาน</th>
            <th>ชื่อภาระงาน</th>
            <th>ตวจรสอบ</th>
            <th>สถานะ</th>
          </tr>
        </thead>
        <tbody>
          {num.map((key) => {
            return (
              <tr className="hover" key={key}>
                <th>{key}</th>
                <td>Test</td>
                <td>Work 1</td>
                <td>
                  <ModalApprove />
                </td>
                <td>{key % 2 == 0 ? "อนุมัติ" : "ไม่อนุมัติ"}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
