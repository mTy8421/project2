export default function TableAddSub() {
  let num = [];
  for (let index = 0; index < 2; index++) {
    num.push(index);
  }

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>รหัสภาระงาน</th>
            <th>ชื่อหัวข้อภาระงาน</th>
            <th>ชื่อภาระงาน</th>
            <th>ประเภทของงาน</th>
            <th>เวลา (นาที)</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {num.map((key) => {
            return (
              <tr className="hover" key={key}>
                <th>{key}</th>
                <td>Test</td>
                <td>Test</td>
                <td>Work1</td>
                <td>90</td>
                <td>
                  <button className="btn btn-error text-white">ลบ</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
