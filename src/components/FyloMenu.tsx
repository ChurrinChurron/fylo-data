import fylo_logo from "../assets/logo.svg"
import icon_document from "../assets/icon-document.svg"
import icon_folder from "../assets/icon-folder.svg"
import icon_upload from "../assets/icon-upload.svg"
import "./styles/fylo_menu.css"

const FyloMenu = () => {
  return (
    <div className="menu col-12 col-md-5 col-lg-4 px-5 py-5 bg-info">
      <img className="mb-2" src={fylo_logo} alt="fylo logo" />
      <div className="mt-4 d-flex align-items-center gap-3">
        <button className="btn__doc bg-success border-0 rounded-2"><img src={icon_document} alt="icon document" /></button>
        <button className="bg-success border-0 rounded-2"><img src={icon_folder} alt="icon folder" /></button>
        <button className="bg-success border-0 rounded-2"><img src={icon_upload} alt="icon upload" /></button>
      </div>
    </div>
  )
}

export default FyloMenu