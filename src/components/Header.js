import React from 'react'
import styled from 'styled-components'

const Header = () => {
    return (
        <div>
            <Container >
                <a>
                    <img src="/images/logo.svg" alt="" />
                </a>
                <Menu>

                </Menu>
            </Container>
        </div>
    )
}

export default Header

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    padding: 0 20px;
    
`

const Menu = styled.div`

`