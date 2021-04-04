import React from 'react'
import styled from 'styled-components'
import EmailBg from "../assets/images/testim-1.jpg"
import { Button } from './Button'

const Email = () => {
    return (
        <EmailContainer>
            <EmailContact>
                <h1>Get Access to Exclusive Offers</h1>
                <p>Sign up for your newsletter below to ge $100 off your first trip!</p>
                <form action="#">
                    <FormWrap>
                        <label htmlFor="email">
                            <input type="email" placeholder="Enter your email" id="email" />
                        </label>
                        <Button as="button" type="submit" 
                            round="true" primary="true" 
                            css={`
                                height: 48px;

                                @media screen and (max-width: 768px){
                                    width: 100%;
                                    min-width: 350px;
                                }

                                @media screen and (max-width: 400px){
                                    width: 100%;
                                    min-width: 250px;
                                }
                            `}
                        >Sign Up</Button>
                    </FormWrap>
                </form>
            </EmailContact>
        </EmailContainer>
    )
}

export default Email

const EmailContainer = styled.div`
    background: linear-gradient(
            180deg, 
            rgba(0,0,0,0.5) 0%, 
            rgba(0,0,0,0.5) 35%, 
            rgba(0,0,0,0.5) 100%, 
        ),
        url(${EmailBg}) no-repeat center;
    background-size: cover;
    height: 450px;
    width: 100%;
    padding: 543m calc((100vw - 1300px) / 2);
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
`

const EmailContact = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        text-align: center;
        margin-bottom: 1rem;
        font-size: clamp(1rem, 5vw, 2.5rem);
        padding: 0 1rem;
    }
    
    p {
        text-align: center;
        font-size: clamp(1rem, 2.5vw, 1.5rem);
        padding: 0 1rem;
        margin-bottom: 2rem;
    }

    form {
        z-index: 10;
    }
`

const FormWrap = styled.div`
    input {
        padding: 1rem 1.5rem;
        outline: none;
        width: 350px;
        height: 48px;
        border-radius: 50px;
        border: none;
        margin-right: 1rem;
    }

    @media screen and (max-width: 768px) {
        margin-bottom: 1rem;
        width: 100%;
        margin-right: 0;
    }
`