import Tables from "./Tables";

export default function Modal() {
  return (
    <>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_2").showModal()}
      >
        open modal
      </button>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box min-w-[50%]">
          <h3 className="font-bold text-lg text-center">เพิ่มหัวข้อภาระงาน</h3>
          <label className="form-control">
            <div className="lable">
              <span className="lable-text">หัวข้อภาระงาน :</span>
            </div>
            <input
              type="text"
              placeholder="test"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control">
            <div className="label">
              <span className="label-text">ผลสัมฤทธิ์ของงาน :</span>
            </div>
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="Test"
            ></textarea>
          </label>
          <label className="form-control">
            <div className="label">
              <span className="label-text">กำหนดแล้วเสร็จถ้ามี :</span>
            </div>
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="Test"
            ></textarea>
          </label>
          <div className="form-control">
            <button className="btn btn-info text-white mx-auto mt-3">
              บันทึกข้อมูล
            </button>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
