import React from "react"
import {useStaticQuery, graphql} from "gatsby"
import {FooterWrapper, FooterSocialWrapper, FooterSocialIcons} from "../elements"

export const Footer = () => {

const data = useStaticQuery(graphql`

query {
    facebook: file(relativePath: {eq: "facebook.svg"}) {
        publicURL
    }
    github: file(relativePath: {eq: "github.svg"}) {
        publicURL
    }
    instagram: file(relativePath: {eq: "instagram.svg"}) {
        publicURL
    }
    twitter: file(relativePath: {eq: "twitter.svg"}) {
        publicURL
    }
}

`)
    return <FooterWrapper>
        <FooterSocialWrapper>
            <FooterSocialIcons>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <img src={data.facebook.publicURL} alt="Facebook Logo"/>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <img src={data.instagram.publicURL} alt="Instagram Logo"/>
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <img src={data.github.publicURL} alt="Github Logo"/>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <img src={data.twitter.publicURL} alt="Twitter Logo"/>
                </a>
            </FooterSocialIcons>
            <p>If ya jiggle like Jello, I'll say Hello</p>
        </FooterSocialWrapper>
    </FooterWrapper>
}