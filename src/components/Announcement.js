import styled from 'styled-components'
import Marquee from 'react-double-marquee' 
// import { mobile } from '../responsive'

const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:14px;
    font-weight: 500;
`

const Announcement = () => {
    return (
        <Container>
            <Marquee 
                speed = {0.02}
                direction = {'right'}
                delay = {3000}
                childMargin = {15}
                reverse = {true}
            >
                Super Deal! Free Shipping on Order Over $50
            </Marquee>
        </Container>
    )
}

export default Announcement
