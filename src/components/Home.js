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
                <Section />
                <Section />
                <Section />
            </Container>
        </div>
    )
}

export default Home

const Container = styled.div`
                height: 100vh;
                `