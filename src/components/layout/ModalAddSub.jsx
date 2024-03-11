export default function ModalAddSub() {
  return (
    <>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn btn-info text-white"
        onClick={() => document.getElementById("my_modal_2").showModal()}
      >
        เพิ่ม
      </button>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box min-w-[50%]">
          <h3 className="font-bold text-lg text-center">
            เพิ่มรายละเอียดหัวข้อภาระงานประจำวัน
          </h3>
          <label className="form-control mt-3">
            <div className="label">
              <span className="label-text">ประเภทของงาน :</span>
            </div>
            <div className="label">
              <input type="radio" name="radio-1" className="radio" checked />
              <span className="label-text">Work 1</span>
              <input type="radio" name="radio-1" className="radio" />
              <span className="label-text">Work 2</span>
              <input type="radio" name="radio-1" className="radio" />
              <span className="label-text">Work 3</span>
              <input type="radio" name="radio-1" className="radio" />
              <span className="label-text">Work 4</span>
            </div>
          </label>
          <label className="form-control mt-3">
            <div className="label">
              <span className="label-text">หัวข้อหลัก :</span>
            </div>
            <select name="select" className="select select-bordered">
              <option value="none" disabled selected>
                โปรเลือก
              </option>
              <option value="test">Test</option>
            </select>
          </label>
          <label className="form-control mt-3">
            <div className="label">
              <span className="label-text">ชื่องาน :</span>
            </div>
            <input
              type="text"
              placeholder="test"
              className="input input-bordered"
            />
          </label>
          <label className="flex mt-3">
            <div className="label">
              <span className="label-text mr-1">เวลาในการทำงาน :</span>
            </div>
            <input
              type="text"
              placeholder="นาที"
              className="input input-bordered w-24 max-w-xs"
            />
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
