import React from 'react'
import styled from 'styled-components'
import Section from './Section'

const Home = () => {
    return (
        <div>
            <Container>
                <Section
                    title='Model S'
                    description='Order Online For Touchless Delivery'
                    backgroundImage='model-s.jpg'
                    leftBtnText='Custom Order'
                    rightBtnText='Existing Inventory'
                />
                <Section
                    title='Model Y'
                    description='Order Online For Touchless Delivery'
                    backgroundImage='model-y.jpg'
                    leftBtnText='Custom Order'
                    rightBtnText='Existing Inventory'
                />
                <Section
                    title='Model 3'
                    description='Order Online For Touchless Delivery'
                    backgroundImage='model-3.jpg'
                    leftBtnText='Custom Order'
                    rightBtnText='Existing Inventory'
                />
                <Section
                    title='Model X'
                    description='Order Online For Touchless Delivery'
                    backgroundImage='model-x.jpg'
                    leftBtnText='Custom Order'
                    rightBtnText='Existing Inventory'
                />
            </Container>
        </div>
    )
}

export default Home

const Container = styled.div`
                height: 100vh;
                `