/** @jsxImportSource theme-ui */

import { Heading, SxProp } from "theme-ui";

interface IMainHeadingProps {
}

const MainHeading: React.FunctionComponent<IMainHeadingProps & SxProp> = ({children,...rest}) => {
  return <Heading as="h1" sx={{
    textTransform:'uppercase',
    mb:['2',null,'3'],
    fontSize:["2.2rem","3.5rem","5rem","7em","9rem"],
    letterSpacing:[".5rem",null,"1.2rem","1.7rem"]
  }}
  {...rest}
  >{children}</Heading>;
};

export default MainHeading;
