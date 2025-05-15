import React from 'react'
import { IKImage } from 'imagekitio-react';


function Images({ src, className, w, h, alt }) {

    return (
        <IKImage urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
            path={src}
            className={className}
            loading='lazy'
            lqip={{ active: true, quality: 20 }}
            alt={alt}
            width={w}
            hight={h}
            // reduce size images make them optmise 
             transformation={
                [
                   {
                    width:w,
                    height:h,
                   },
                ]
             }/>

    )
}

export default Images