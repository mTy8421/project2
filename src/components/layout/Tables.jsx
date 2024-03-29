import DoWork from "./DoWork";

export default function Tables() {
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
            <th>ชื่องาน</th>
            <th>ชื่อหัวข้อภาระงาน</th>
            <th>ตวจรสอบ</th>
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
                  <DoWork />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
