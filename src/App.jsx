import green from "./ljtech-g.svg";
import purple from "./ljtech-p.svg";
import red from "./ljtech-r.svg";
import { useEffect, useState } from "react";

export default function App() {
	const [active, setActive] = useState(false);
	const [target, setTarget] = useState(document.getElementById("html"));
	console.log(`Theme is: ${active}`);

	const switchTheme = () => {
		setActive((prev) => !prev);
	};

	useEffect(() => {
		if (active) {
			target.classList.add("dark");
		}
		if (!active) {
			target.classList.remove("dark");
		}
	});

	return (
		<div className="min-h-screen grid dark:bg-gray-900 dark:text-white">
			<header className="text-center font-bold p-3">
				<a
					className="hover:opacity-80"
					href="https://ljtech.ca"
					target="_blank"
				>
					ljtech.ca
				</a>
			</header>
			<main className="row-span-6 grid p-3">
				<div className="flex content-center items-center justify-around py-3">
					<img src={green} alt="logo" />
					<img src={purple} alt="logo" />
					<img src={red} alt="logo" />
				</div>
				<div className="flex content-center items-center justify-center">
					<fieldset>
						<legend>Change light theme 💡</legend>
						<div className="text-center">
							<button
								type="button"
								className="font-bold border rounded-sm px-2 py-1 m-2"
								onClick={switchTheme}
							>
								Toggle
							</button>
						</div>
					</fieldset>
				</div>
			</main>

			<footer className="text-center font-bold p-3">
				© {new Date().getFullYear()}
			</footer>
		</div>
	);
}
