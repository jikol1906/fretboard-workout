/** @jsxImportSource theme-ui */
import { Box, SxProp } from "theme-ui";

interface IComingSoonProps {
  overlayBorderradius: string;
}

const ComingSoon: React.FunctionComponent<SxProp & IComingSoonProps> = ({
  children,
  overlayBorderradius,
  ...props
}) => {
  return (
    <Box
      sx={{
        position: "relative",
        "&::after": {
          content: "''",
          bg: "#74747466",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          borderRadius: overlayBorderradius,
        },
      }}
      {...props}
    >
      {children}
      <Box
        sx={{
          fontSize: [".9rem",null,"1.4rem"],
          background: "linear-gradient(#FEFCAF, #FFFEDA)",
          position: "absolute",
          borderRadius: "2% / 50%",
          p: "3em 2em",
          left:'50%',
          top:'80%',
          transform: 'translateX(-50%) rotate(5deg)',
          boxShadow: "default",
          zIndex:1,
        }}
      >
        <span sx={{ fontFamily: "main", textTransform:'uppercase' }}>Coming Soon</span>
      </Box>
    </Box>
  );
};

export default ComingSoon;
