import Navbar from "../components/Navbar";
import AllClasses from "../components/AllClasses";

export default function home() {
	return (
		<div className="min-h-screen">
			<Navbar />
			<AllClasses />
		</div>
	);
}
