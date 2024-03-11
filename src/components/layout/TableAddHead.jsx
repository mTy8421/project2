export default function TableAddHead() {
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
            <th></th>
          </tr>
        </thead>
        <tbody>
          {num.map((key) => {
            return (
              <tr className="hover" key={key}>
                <th>{key}</th>
                <td>Test</td>
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
