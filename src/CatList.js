// write your CatList component here
import React from 'react'

const CatList = (props) => {
    const catPics = props.catPics.map( catPic => {
        return <img src={catPic.url} key={catPic.id} alt={catPic.url} />
    })

    return (
        <div>
            {catPics}
        </div>
    )

}

export default CatList