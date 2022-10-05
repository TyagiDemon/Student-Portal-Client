import tw from "tailwind-styled-components";
import ClassBox from "./ClassBox";
import classes from "../data/classes";

export default function AllClasses() {
	
	return (
		<Wrapper>
			{classes.map((item, key) => (
				<ClassBox
					key={key}
					color={item.color}
					adminName={item.adminName}
					classname={item.classname}
					url={`/class/${item.id}`}
				/>
			))}
		</Wrapper>
	);
}

// export async function getServerSideProps() {
// 	// console.log(classes);
// 	let data;
// 	async function setData() {
// 		data = classes;
// 	}

// 	await setData();
// 	return { props: {data} };
// }

const Wrapper = tw.div`
  grid md:grid-cols-2 lg:grid-cols-4 gap-8 p-12
`;
