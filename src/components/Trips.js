import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from "gatsby";
import {GatsbyImage as Img} from 'gatsby-plugin-image'

const Trips = () => {
    const data = useStaticQuery(graphql`
        query TripsQuery {
            allTripsJson {
                edges {
                    node{
                        alt
                        button
                        name
                        img {
                            childImageSharp {
                                gatsbyImageData 
                            }
                        }
                    }
                }
            }
        }
    `)


function getTrips(data) {
    const tripsArr = []
    data.allTripsJson.edges.forEach((trip, i) => {
        tripsArr.push(
            <div key={i}>
                <Img image={trip.node.img.childImageSharp.gatsbyImageData} image={trip.node.img.childImageSharp.alt} />
            </div>
        )
    })
    return tripsArr
}

    return (
        <ProductsContainer>
            <ProductsHeading>Heading</ProductsHeading>
            <ProductsWrapper>{getTrips(data)}</ProductsWrapper>
        </ProductsContainer>
    )
}

export default Trips

const ProductsContainer = styled.div`
    min-height: 100vh;
    padding: 5rem calc((100vw - 1300px) / 2 );
    background: #fff;
    color: #fff;
`

const ProductsWrapper = styled.div`
    font-size: clamp(1.2rem, 5vw, 3rem);
    text-align: center;
    margin-bottom: 5rem;
    color: #000;
`

const ProductsHeading = styled.div``