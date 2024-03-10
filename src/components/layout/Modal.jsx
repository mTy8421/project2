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
          <div className="form-control items-center mt-3">
            <div>
              <label>หัวข้อภาระงาน :</label>
              <input
                type="text"
                placeholder="test"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
