import styled from "styled-components";
import { device } from "./device";

const Text = styled.div`
  font-size: 18px;

  @media ${device.mobileS} {
	font-size: "16px"
  }

  @media ${device.laptop} {
	  font-size: 18px;
  }
`;


const SecondaryText = styled.div`
  font-size: 0.75em;
  color: #EDEDED;

  @media ${device.mobileS} {
	font-size: "0.75em"
  }

  @media ${device.laptop} {
	  font-size: 2em;
  }
`;

const FlexColumn = styled.div`
	display: flex;
	flex-direction: column;
`

const FlexRow = styled.div`
	display: flex;
	flex-direction: row;
`
let styles = {
	"flex-column": { display: "flex", flexDirection: "column" },
	"flex-row": { display: "flex", flexDirection: "row" },
	"no-shrink": { flexShrink: 0 },
	"justify-between": { justifyContent: "space-between" },
	"justify-start": { justifyContent: "flex-start" },
	"justify-end": { justifyContent: "flex-end" },
	"justify-center": { justifyContent: "center" },
	"w-full": { width: "100%" },
	"w-4": { width: "1rem" },
	"w-5": { width: "1.25rem" },
	"w-6": { width: "1.5rem" },
	"h-full": { height: "100%" },
	"h-4": { height: "1rem" },
	"h-5": { height: "1.25rem" },
	"h-6": { height: "1.5rem" },
	"h-12": { height: "3rem" },
	"items-center": { alignItems: "center" },
	"mx-auto": { marginLeft: "auto", marginRight: "auto" },
	"my-auto": { marginTop: "auto", marginBottom: "auto" },
	"mt-auto": { marginTop: "auto" },
	"mb-auto": { marginBottom: "auto" },
	"ml-0": { marginLeft: "0rem" },
	"ml-1": { marginLeft: "0.25rem" },
	"ml-2": { marginLeft: "0.5rem" },
	"ml-3": { marginLeft: "0.75rem" },
	"ml-4": { marginLeft: "1rem" },
	"ml-5": { marginLeft: "1.25rem" },
	"ml-6": { marginLeft: "1.5rem" },
	"-ml-1": { marginLeft: "-0.25rem" },
	"-ml-2": { marginLeft: "-0.5rem" },
	"-ml-3": { marginLeft: "-0.75rem" },
	"-ml-4": { marginLeft: "-1rem" },
	"-ml-5": { marginLeft: "-1.25rem" },
	"-ml-6": { marginLeft: "-1.5rem" },
	"ml-auto": { marginLeft: "auto" },
	"mr-0": { marginRight: "0rem" },
	"mr-1": { marginRight: "0.25rem" },
	"mr-2": { marginRight: "0.5rem" },
	"mr-3": { marginRight: "0.75rem" },
	"mr-4": { marginRight: "1rem" },
	"mr-5": { marginRight: "1.25rem" },
	"mr-6": { marginRight: "1.5rem" },
	"mr-7": { marginRight: "1.75rem" },
	"mr-8": { marginRight: "2rem" },
	"-mr-1": { marginRight: "-0.25rem" },
	"-mr-2": { marginRight: "-0.5rem" },
	"-mr-3": { marginRight: "-0.75rem" },
	"-mr-4": { marginRight: "-1rem" },
	"-mr-5": { marginRight: "-1.25rem" },
	"-mr-6": { marginRight: "-1.5rem" },
	"-mr-7": { marginRight: "-1.75rem" },
	"-mr-8": { marginRight: "-2rem" },
	"mr-auto": { marginRight: "auto" },
	"-m-6": { margin: "-1.5em" },
	"mb-0": { marginBottom: "0rem" },
	"mb-1": { marginBottom: "0.25rem" },
	"mb-2": { marginBottom: "0.5rem" },
	"mb-3": { marginBottom: "0.75rem" },
	"mb-4": { marginBottom: "1rem" },
	"mb-5": { marginBottom: "1.25rem" },
	"mb-6": { marginBottom: "1.5rem" },
	"mb-7": { marginBottom: "1.75rem" },
	"mb-8": { marginBottom: "2rem" },
	"mt-0": { marginTop: "0rem" },
	"mt-1": { marginTop: "0.25rem" },
	"mt-2": { marginTop: "0.5rem" },
	"mt-3": { marginTop: "0.75rem" },
	"mt-4": { marginTop: "1rem" },
	"mt-5": { marginTop: "1.25rem" },
	"mt-6": { marginTop: "1.5rem" },
	"mt-7": { marginTop: "1.75rem" },
	"mt-8": { marginTop: "2.0rem" },
	"mt-12": { marginTop: "3.0rem" },
	"-mt-1": { marginTop: "-0.25rem" },
	"-mt-2": { marginTop: "-0.5rem" },
	"-mt-3": { marginTop: "-0.75rem" },
	"-mt-4": { marginTop: "-1rem" },
	"-mt-5": { marginTop: "-1.25rem" },
	"-mt-6": { marginTop: "-1.5rem" },
	"-mt-8": { marginTop: "-2.0rem" },
	"-mt-12": { marginTop: "-3.0rem" },
	"py-auto": { paddingTop: "auto", paddingBottom: "auto" },
	"p-0": { padding: "0rem" },
	"p-1": { padding: "0.25rem" },
	"p-2": { padding: "0.5rem" },
	"p-3": { padding: "0.75rem" },
	"p-4": { padding: "1rem" },
	"p-5": { padding: "1.25rem" },
	"p-6": { padding: "1.5rem" },
	"pr-1": { paddingRight: "0.25rem" },
	"pr-2": { paddingRight: "0.5rem" },
	"pr-3": { paddingRight: "0.75rem" },
	"pr-4": { paddingRight: "1rem" },
	"pr-5": { paddingRight: "1.25rem" },
	"pr-6": { paddingRight: "1.5rem" },
	"pr-7": { paddingRight: "1.75rem" },
	"pr-8": { paddingRight: "2rem" },
	"pl-1": { paddingLeft: "0.25rem" },
	"pl-2": { paddingLeft: "0.5rem" },
	"pl-3": { paddingLeft: "0.75rem" },
	"pl-4": { paddingLeft: "1rem" },
	"pl-5": { paddingLeft: "1.25rem" },
	"pl-6": { paddingLeft: "1.5rem" },
	"pl-7": { paddingLeft: "1.75rem" },
	"pl-8": { paddingLeft: "2rem" },
	"pt-1": { paddingTop: "0.25rem" },
	"pt-2": { paddingTop: "0.5rem" },
	"pt-3": { paddingTop: "0.75rem" },
	"pt-4": { paddingTop: "1rem" },
	"pt-5": { paddingTop: "1.25rem" },
	"pt-6": { paddingTop: "1.5rem" },
	"pb-1": { paddingBottom: "0.25rem" },
	"pb-2": { paddingBottom: "0.5rem" },
	"pb-3": { paddingBottom: "0.75rem" },
	"pb-4": { paddingBottom: "1rem" },
	"pb-5": { paddingBottom: "1.25rem" },
	"pb-6": { paddingBottom: "1.5rem" },
	"lh-4": { lineHeight: "1rem" },
	"lh-5": { lineHeight: "1.25rem" }
}

export {styles, SecondaryText, Text, FlexRow, FlexColumn};
