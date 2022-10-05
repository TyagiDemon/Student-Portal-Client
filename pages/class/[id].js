import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import Navbar from "../../components/Navbar";
import ClassHeader from "../../components/ClassHeader";
import classes from "../../data/classes";
import AllPosts from "../../components/AllPosts";
import ClassInfo from "../../components/ClassInfo";

export default function Class() {
	const router = useRouter();
	const { id } = router.query;
	const [data, setData] = useState({
		classname: "",
		id: "",
		adminName: "",
		adminId: "",
		color: "",
	});

	function getClass() {
		let temp;
		classes.map((item) => {
			console.log(item.id, id);
			if (item.id == id) {
				temp = item;
			}
		});

		if (temp) setData(temp);
	}

	useEffect(() => {
		getClass();
	}, [id]);

	return (
    <Wrapper>
      <Navbar />
			<ClassHeader title={data.classname} />
			<Container>
				<AllPosts />
				<ClassInfo />
			</Container>
		</Wrapper>
	);
}

const Wrapper = tw.div`
`;
const Container = tw.div`
	flex m-12 px-10 gap-6
`;
