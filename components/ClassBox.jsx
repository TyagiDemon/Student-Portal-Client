import Link from "next/link";
import tw from "tailwind-styled-components";

export default function ClassBox({ adminName, classname, url }) {
	// const [color, setColor] = useState("black");
	return (
		<Link href={url}>
			<Wrapper>
				<div className={`bg-[#3A5BA0] h-16 rounded-t-lg`}></div>
				<TextBox>
					<div className="text-2xl font-semibold">{classname}</div>
					<div className="text-sm font-[Inconsolata] uppercase mt-4">
						{adminName}
					</div>
				</TextBox>
			</Wrapper>
		</Link>
	);
}

const Wrapper = tw.div`
  shadow-lg hover:cursor-pointer transition hover:opacity-[90%]
`;
const TextBox = tw.div`
  p-4 bg-[#FFE5B4] h-48 flex flex-col justify-between
`;
