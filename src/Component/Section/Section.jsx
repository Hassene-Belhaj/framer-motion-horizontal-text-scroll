import { motion, useScroll, useTransform } from "framer-motion";
import styled from "styled-components";



const Header = styled.div`
  height: 100vh;
  width: 100%;
  overflow: hidden;
  background: #d5d5d5;
   `



const Title = styled(motion.h1)`
  color: #000;
  font-size:9rem;
  white-space: nowrap;
  margin: 0;
  text-transform: uppercase;
  margin-top: 40rem;
  transition: all 1.5s ease-in-out;

`

const SectionDiv = styled.div`
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding: 10em 0;
  color: white;
  background: #000;
`;



const Section = () => {
  const { scrollYProgress } = useScroll();
  const width = useTransform(scrollYProgress, [0,1],[-900,900]);

  return (
    <>
      <Header>
        <Title style={{x:width }}>lorem ipsun <span> &#8226; </span> lorem ipsun <span> &#8226; </span>  lorem ipsun </Title>
      </Header>
      <SectionDiv></SectionDiv>
    </>
  );
};

export default Section;