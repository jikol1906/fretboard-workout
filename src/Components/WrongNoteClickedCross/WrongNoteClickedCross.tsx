/** @jsxImportSource theme-ui */

import { keyframes } from "@emotion/react";
import { ThemeUICSSObject } from "theme-ui";


const WrongNoteClickedCross: React.FunctionComponent = () => {
  
  const draw = keyframes`
    to {
      stroke-dashoffset: 0;
    }
  `;

  const svgStyles: ThemeUICSSObject = {
    display: 'block',
    height: "100%",
    width: "auto",
    path: {
      strokeDashoffset: "110.73878479003906",
      strokeDasharray: "110.73878479003906",
      animation: `${draw} .2s ease-in-out both`,
      "&:nth-of-type(2)": {
        animationDelay: ".2s",
      },
    },
  };

  return (
    <svg
      sx={svgStyles}
      viewBox="0 0 104 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="1">
        <path
          d="M101.524 3.23816L2.4762 52.762"
          stroke="#FF7C1E"
          strokeWidth="4.95238"
          strokeLinecap="round"
        />
        <path
          d="M101.524 52.762L2.4762 3.23816"
          stroke="#FF7C1E"
          strokeWidth="4.95238"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
};

export default WrongNoteClickedCross;
