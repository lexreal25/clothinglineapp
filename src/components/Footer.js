import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from "@material-ui/icons";
import styled from "styled-components";
import payment from '../images/payment.png'
import { mobile } from "../responsive";



const Container = styled.div`
  display: flex;
  ${mobile({
    flexDirection: "column"
  })}
`;

const Logo = styled.h1``;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Desc = styled.p`
  margin: 20px 0px;
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({
    backgroundColor: "#eee"
  })}
`;

const Title = styled.h3`
    margin-bottom: 30px;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
    cursor: pointer;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({
    display:"none"
  })}
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;
const Payment = styled.img`
    width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>DANNY'S FASHION.</Logo>
        <Desc>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
          minus at maiores ullam ad? Omnis ullam cum ad illum. Atque est nisi a
          exercitationem commodi quo tenetur, autem voluptas recusandae.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="3E440F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>My Account</ListItem>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms & Conditions</ListItem>
        </List>
      </Center>
      <Right>
          <Title>Contact</Title>
          <ContactItem>
             <Room style={{marginRight:"10px",color:'teal'}}/> P.O.Box 7916 Accra-North
          </ContactItem>
          <ContactItem>
            <Phone style={{marginRight:"10px", color:'blue'}}/> +233 550-742-738
          </ContactItem>
          <ContactItem>
             <MailOutline style={{marginRight:"10px", color:'green'}}/> contact@lexorg.dev
          </ContactItem>
          <Payment src={payment}/>
      </Right>
    </Container>
  );
};

export default Footer;
