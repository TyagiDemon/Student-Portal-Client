import Link from "next/link";
import tw from "tailwind-styled-components";

export default function Post({props}) {
	return (
		<Wrapper>
			<Title>{props.title}</Title>
			<Content>{props.content}</Content>
			<Files>
				{props?.files?.map((item, key) => (
					<Link key={key} href={item.url}>
						{item.name}
					</Link>
				))}
			</Files>
			<Comment>0 comments</Comment>
		</Wrapper>
	);
}

const Wrapper = tw.div`
	m-2 shadow-lg rounded-lg p-2
`;
const Title = tw.div`
	font-semibold
`;
const Content = tw.div`
	font-light
`;
const Files = tw.div`
	mt-2 grid grid-cols-3
`;
const Comment = tw.div`
	text-xs mt-2
`;