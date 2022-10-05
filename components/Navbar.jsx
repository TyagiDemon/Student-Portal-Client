import tw from "tailwind-styled-components";

export default function Navbar() {
	return (
		<Wrapper>
			<Title>Student Portal</Title>
		</Wrapper>
	);
}

const Wrapper = tw.div`
  p-4 shadow-md
`;
const Title = tw.div`
  text-[#1F4690] font-bold text-lg
`;
