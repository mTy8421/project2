import logo from "../../assets/test.jpg";

export default function ModalCheck() {
  return (
    <>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_2").showModal()}
      >
        ตวจรสอบ
      </button>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box min-w-[50%]">
          <h3 className="font-bold text-lg text-center">
            กรอกรายละเอียดภาระงานประจำวัน
          </h3>
          <label className="form-control mt-3">
            <div className="text-center">
              <span className="text-xl">ประเภทของงาน : </span>
              <span className="text-xl">Work 1</span>
            </div>
          </label>
          <label className="form-control mt-3">
            <div className="text-center">
              <span className="text-xl">ชื่องาน : </span>
              <span className="text-xl">Test</span>
            </div>
          </label>
          <label className="form-control mt-3">
            <div className="text-center">
              <span className="text-xl">เวลาในการทำงาน : </span>
              <span className="text-xl">90 นาที</span>
            </div>
          </label>
          <hr />
          <label className="flex mt-3 justify-center">
            <div className="label">
              <span className="label-text mx-auto">
                เวลาในการทำงาน : 90 นาที
              </span>
            </div>
            <div className="label">
              <span className="label-text mx-auto">เวลาที่ใช้ไป : 30 นาที</span>
            </div>
          </label>
          <label className="flex mt-3 justify-center">
            <div className="label">
              <span className="label-text mx-auto">
                ผลการปฎิบัติงาน : Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Pariatur sint mollitia incidunt doloribus, et
                deleniti animi maiores autem eligendi optio quas cumque, id
                iusto! Eius maiores consequatur facere architecto saepe?
              </span>
            </div>
          </label>
          <label className="flex justify-center mt-3">
            <img src={logo} alt="ภาพประกอบ" />
          </label>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
