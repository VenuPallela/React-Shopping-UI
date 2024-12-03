import React from 'react'

const WomenCollection = (props) => {
    const { title, image10, image12, image3, image4, image2, image11 } = props.ladiesFashion

    return (
        <div>
            <h2>{title}</h2>
            <div className="bannerBox">
            <img src="https://img.freepik.com/free-vector/gradient-shopping-discount-horizontal-sale-banner_23-2150321996.jpg?semt=ais_hybrid" alt="" />

            </div>

            <div className="menImages">
                <img src={image3} alt={title} />
                <img src={image2} alt={title} />
                <img src={image3} alt={title} />
                <img src={image4} alt={title} />
                <img src={image2} alt={title} />
                <img src={image4} alt={title} />




            </div>
        </div>
    )
}

export default WomenCollection
