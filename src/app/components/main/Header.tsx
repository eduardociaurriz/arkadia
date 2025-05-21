import HeaderWrapper from "../Header/HeaderWrapper";
import SocialLinks from "../Header/SocialLinks";
import { Logo } from "../Header/Logo";
import Title from "../Header/Title";

const Header: React.FC = () => {
  return (
    <>
      <HeaderWrapper>
        <Logo />
        <Title />
        <SocialLinks />
      </HeaderWrapper>
    </>
  );
};

export default Header;