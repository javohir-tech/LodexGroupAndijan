//react router dom 
import { Link } from 'react-router-dom'

export default function PlayMarket({icon, title, subtitle}) {
    return (
        <Link className='d-flex align-items-center google-play gap-2'>
            <div>
                {icon}
            </div>
            <div>
                <p className='mb-0 title'>{title}</p>
                <p className='mb-0 subtitle'>{subtitle}</p>
            </div>
        </Link>
    )
}
