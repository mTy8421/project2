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
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
          </tr>
        </thead>
        <tbody>
          {num.map((key) => {
            return (
              <tr className="hover" key={key}>
                <th>2</th>
                <td>Hart Hagerty</td>
                <td>Desktop Support Technician</td>
                <td>Purple</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
