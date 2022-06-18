import tw from "tailwind-styled-components";
import Footer from "../components/Footer";
import Form from "../components/Form";

export default function Home() {
	return (
		<Wrapper>
			<div>
				<Form />
			</div>
			<Footer />
		</Wrapper>
	);
}

const Wrapper = tw.div`
  min-h-screen flex flex-col justify-center
`;
