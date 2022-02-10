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
          bg: "rgba(0,0,0,.4)",
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
          fontSize: [".9rem",null,"1.5rem"],
          bg: "#F5ED77",
          position: "absolute",
          p: "3em 2em",
          left:'50%',
          top:'80%',
          transform: 'translateX(-50%) rotate(5deg)',
          boxShadow: "default",
          zIndex:1,
          '&::after': {
            content: "''",
            position: 'absolute',
            top:'10%',
            left:'50%',
            transform:'translateX(-50%)',
            display:'block',
            height:'5px',
            width:'5px',
            bg:'black',
            borderRadius:'999px'   
          }
        }}
      >
        <span sx={{ fontFamily: "main", textTransform:'uppercase' }}>Coming Soon</span>
      </Box>
    </Box>
  );
};

export default ComingSoon;
