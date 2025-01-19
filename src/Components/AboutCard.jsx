import React from 'react'

export default function AboutCard({ title, description, img, order }) {

    let orderNumber = 2;

    if(order === true){
        orderNumber = 0
    }

    const [ firstWord, ...remainingWords] = title.split(" ")
    const word  = description.split(" ")
    const firstTwoWords = word.slice(0, 3).join(" ")
    const addition = word.slice(3).join(" ")
    console.log(addition)


    return (
        <div>
            <div className="row align-items-center justify-content-evenly">
                <div className={`col-md-6 order-1 about-card__info`}>
                    <h2 className='mb-3'><span>{firstWord}</span> {`${remainingWords.join(" ")}`}</h2>
                    <p><span>{firstTwoWords}</span> {addition}</p>
                </div>
                <div className={`col-md-5 order-${orderNumber}`}>
                    <img src={img} className='img-fluid' alt="card img" />
                </div>
            </div>
        </div>
    )
}
