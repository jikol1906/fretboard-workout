/** @jsxImportSource theme-ui */

import { Heading, SxProp } from "theme-ui";

interface IMainHeadingProps {
}

const MainHeading: React.FunctionComponent<IMainHeadingProps & SxProp> = ({children,...rest}) => {
  return <Heading as="h1" sx={{
    fontFamily:'main',
    textTransform:'uppercase',
    fontSize:["2rem","3.5rem","5rem","7em","9rem"],
    letterSpacing:[".4rem",null,"1.2rem","1.7rem"]
  }}
  {...rest}
  >{children}</Heading>;
};

export default MainHeading;
