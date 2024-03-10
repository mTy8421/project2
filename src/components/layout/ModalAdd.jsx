import Tables from "./Tables";

export default function ModalAdd() {
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
          <label className="form-control mt-3">
            <div className="lable">
              <span className="label-text">หัวข้อภาระงาน :</span>
            </div>
            <input
              type="text"
              placeholder="test"
              className="input input-bordered mt-2"
              // w-full max-w-xs
            />
          </label>
          <label className="form-control mt-3">
            <div className="label">
              <span className="label-text">ผลสัมฤทธิ์ของงาน :</span>
            </div>
            <textarea
              className="textarea textarea-bordered h-24 mt-2"
              placeholder="Test"
            ></textarea>
          </label>
          <label className="form-control mt-3">
            <div className="label">
              <span className="label-text">กำหนดแล้วเสร็จ (ถ้ามี) :</span>
            </div>
            <textarea
              className="textarea textarea-bordered h-24 mt-2"
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
