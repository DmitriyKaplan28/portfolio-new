import React from "react"
import styled from "styled-components"

type IconPropsType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
}


export const Icon = ({iconId, width, height, viewBox}: IconPropsType) => {
    return (
        //TODO svg

       <img src="" alt="" />

        // <svg width = {width || "50"} height = {height || "50"} viewBox={viewBox || "0 0 50 50"}>
        //     <use xlinkHref={`${iconSprite}#${iconId}`} />
        // </svg>

    )
}