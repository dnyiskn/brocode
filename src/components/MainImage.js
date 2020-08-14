import React from "react"
import Img from "gatsby-image"
import {useStaticQuery, graphql,} from "gatsby"
import {MainImageWrapper} from "../elements"

export const MainImage = ({fixed}) => {

    const data = useStaticQuery(graphql`
        query {
            imageSharp(fixed: {originalName: {eq: "lisboneve.jpg" }}) {
                fixed {
                    ...GatsbyImageSharpFixed
                }
            }
        }
    `)

    return ( 
        <MainImageWrapper>
            <Img fixed={ fixed ? fixed : data.imageSharp.fixed} style = {{
                position: "absolute",
                left: 0,
                top: 0,
                width: "100%",
                height: "100%",
            }} />
        </MainImageWrapper>    
    )
}