import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import nation from "../images/nation.png";
import green from "../images/green.png";
import { mobile } from "../responsive";

const Container = styled.div``;
 
const Wrapper = styled.div`
  padding: 20px;
  ${mobile({
    padding:"10px"
  })}
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;
`;
const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  ${mobile({
    display: "flex"
  })}
`;
const TopText = styled.span`
  text-decoration: underline;
  margin: 0px 10px;
  cursor: pointer;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  ${mobile({
    flexDirection:"column"
  })}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({
    flexDirection: "column"
  })}
`;
const ProductDetails = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
  width: 200px;
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const ProductSize = styled.span``;
const PriceDetails = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const PriceAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px
`;
const ProductAmount = styled.span`
    font-size: 24px;
    margin: 5px;
    ${mobile({
      margin: "5px 15px"
    })}
`;
const ProductPrice = styled.span`
    font-size: 30px;
    font-weight: 200;
    ${mobile({
      marginBottom:"10px"
    })}
`;

const Hr = styled.hr`
    background-color:#eee;
    border: none; 
    height: 1px;
`;
const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh; 
  ${mobile({
    marginTop: "20px"
  })}
`;

const SummaryTitle = styled.h1`
    font-weight: 200;
`;
const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: ${props => props.type === "total" && "500"};
    font-size: ${props => props.type === "total" && "24px"}
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const Button = styled.button`
    width: 100%;
    padding: 10px;
    color: #fff;
    background: black;
`;


const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR SHIRT</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>SHOPPING SHIRT(2)</TopText>
            <TopText>Your wishlist</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetails>
                <Image src={nation} alt="product image" />
                <Details>
                  <ProductName>
                    <b>PRODUCT : </b>
                    ALVIN MELON DRESS
                  </ProductName>
                  <ProductId>
                    <b>ID : </b>
                    587645863
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductSize>
                    <b>SIZE : </b>37.5
                  </ProductSize>
                </Details>
              </ProductDetails>
              <PriceDetails>
                  <PriceAmountContainer>
                      <Add />
                      <ProductAmount>2</ProductAmount>
                      <Remove />
                  </PriceAmountContainer>
                  <ProductPrice>$ 2</ProductPrice>
              </PriceDetails>
            </Product>
            <Hr />
            <Product>
              <ProductDetails>
                <Image src={green} alt="product image" />
                <Details>
                  <ProductName>
                    <b>PRODUCT : </b>
                    LACOSTE T-SHIRT
                  </ProductName>
                  <ProductId>
                    <b>ID : </b>
                    587645863
                  </ProductId>
                  <ProductColor color="green" />
                  <ProductSize>
                    <b>SIZE : </b> XL
                  </ProductSize>
                </Details>
              </ProductDetails>
              <PriceDetails>
                  <PriceAmountContainer>
                      <Add />
                      <ProductAmount>2</ProductAmount>
                      <Remove />
                  </PriceAmountContainer>
                  <ProductPrice>$ 2</ProductPrice>
              </PriceDetails>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem >
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ 40</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText >Total</SummaryItemText>
              <SummaryItemPrice>$ 40</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
