import "./styles/fylo_storage.css"

const FyloStorage = () => {

  const progressValue = 80;
  const min = 0;
  const max = 100;

  return (
    <div className="position-relative col-12 col-md-6 col-lg-7 px-5 pt-4 pb-5 px-md-4 pt-md-5 pb-md-4 px-xl-5 rounded-2 bg-info">
      <p className="text-primary small">You've used <span className="fw-bold">815 GB</span> of your storage</p>
      <div className="progress position-relative rounded-pill bg-success">
        <div className=" progress-bar bg-gradient w-75 m-1 rounded-pill" role="progressbar" aria-valuenow={progressValue} aria-valuemin={min} aria-valuemax={max}>
          <div className="progressbar__circle position-absolute bg-light rounded-circle"></div>
        </div>
      </div>
      <div className="d-flex justify-content-between mt-2">
        <p className="text-white fw-bold small">0 GB</p>
        <p className="text-white fw-bold small">1000 GB</p>
      </div>
      <div className="storage__left position-absolute rounded-3 py-2 px-4 bg-white">
        <p className="d-flex align-items-center gap-2 mb-0 fw-bold text-success">185 <span className="mt-2 text-secondary">GB LEFT</span></p>
      </div>
    </div>
  )
}

export default FyloStorage