import tw from "tailwind-styled-components";

export default function ClassHeader({ title }) {
	return (
		<Wrapper>
			<Title>{title}</Title>
		</Wrapper>
	);
}

const Wrapper = tw.div`
  shadow-lg rounded-lg h-64 m-12 flex flex-col-reverse p-10 pb-8 bg-[#3A5BA0]
`;

const Title = tw.div`
  text-2xl text-white font-semibold
`;
