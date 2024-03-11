export default function DoWork() {
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
              <span className="label-text mx-auto">เวลาในการทำงาน :</span>
            </div>
            <input
              type="text"
              placeholder="นาที"
              className="input input-bordered w-24 max-w-xs"
            />
            <div className="label">
              <span className="label-text mx-auto">เวลาที่ใช้ไป :</span>
            </div>
            <input
              type="text"
              placeholder="นาที"
              className="input input-bordered w-24 max-w-xs"
            />
          </label>
          <label className="flex mt-3 justify-center">
            <div className="label">
              <span className="label-text mx-auto">ผลการปฎิบัติงาน :</span>
            </div>
            <textarea
              className="textarea textarea-bordered h-24 mt-2"
              placeholder="Test"
            ></textarea>
          </label>
          <label className="flex justify-center mt-3">
            <div className="label">
              <span className="label-text mx-auto">ภาพประกอบ:</span>
            </div>
            <input
              type="file"
              className="file-input file-input-bordered w-full max-w-xs"
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
