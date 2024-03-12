import NavBar from "../layout/NavBar";
import SideBarOpen from "../layout/SideBarOpen";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";

export default function Test() {
  return (
    <>
      <NavBar />
      <div className="container flex">
        <div className="flex-none">
          <SideBarOpen />
        </div>
        <div className="flex-1 w-64 ml-3 mt-3">
          <div className="mx-auto justify-center">
            <div className="card w-96 bg-base-100 shadow-xl mx-auto">
              <div className="card-body">
                <h2 className="card-title">
                  <Bar
                    data={{
                      labels: ["Test A", "Test B", "Test C"],
                      datasets: [
                        {
                          label: "Top",
                          data: [10, 20, 30],
                        },
                      ],
                    }}
                  />
                </h2>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="card w-96 bg-base-100 shadow-xl mx-auto">
              <div className="card-body">
                <h2 className="card-title">
                  <Line
                    data={{
                      labels: ["Test A", "Test B", "Test C"],
                      datasets: [
                        {
                          label: "Top",
                          data: [10, 20, 30],
                        },
                      ],
                    }}
                  />
                </h2>
              </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl mx-auto">
              <div className="card-body">
                <h2 className="card-title">
                  <Doughnut
                    data={{
                      labels: ["Test A", "Test B", "Test C"],
                      datasets: [
                        {
                          label: "Top",
                          data: [10, 20, 30],
                        },
                      ],
                    }}
                  />
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
