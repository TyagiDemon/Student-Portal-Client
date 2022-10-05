import { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import posts from "../data/posts";
import Post from "./Post";

export default function AllPosts() {
	// const [data, setData] = useState([]);

	// useEffect(() => {
	// 	setData(posts);
  // }, []);
  
	return (
		<Wrapper>
			{posts.map((item, key) => (
				<Post key={key} props={item} />
			))}
		</Wrapper>
	);
}

const Wrapper = tw.div`
	flex-1
`;
