

//icons
import { CgArrowTopRight } from "react-icons/cg";

export default function PortfolioCard({title, description, col, img , link}) {
    return (
        <   >
        <div className={`col-md-${col} portfolio-card position-relative`}>
            <a href={link} target="_blank">
            <img src={img} className="img-fluid h-100 w-100" alt="image  is not  defiendt " />
            </a>
            <div className="position-absolute bottom-0 left-0 w-75 px-3">
                <h2 className="mb-0">{title}</h2>
                <p className="mb-0">{description}</p>
            </div>
            <a className="position-absolute border p-3 rounded-pill arrow">
                    <CgArrowTopRight className="color-danger"/>
            </a>
        </div>

        </>
        
        
    )
}
