import React, { useState, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Shorty = () => {
	const getLocalStorage = () => {
		let url = localStorage.getItem("url");

		if (url) {
			return JSON.parse(localStorage.getItem("url"));
		} else {
			return [];
		}
	};
	const [input, setInput] = useState("");
	const [url, setUrl] = useState(getLocalStorage());
	const [copyState, setCopyState] = useState("copy");
	const shorten = async () => {
		const response = await fetch(
			`https://api.shrtco.de/v2/shorten?url=${input}`
		);
		if (!input) {
			alert("enter a url");
		}
		const data = await response.json();
		setUrl((old) => [...old, data.result]);
		setInput("");
	};
	//doubt
	const handleCopy = () => {
		if (Array.isArray(url) && url.length > 0) {
			navigator.clipboard.writeText(url[url.length - 1]?.full_short_link);
		}
		setCopyState("Copied!");
	};
	useEffect(() => {
		localStorage.setItem("url", JSON.stringify(url));
	}, [url]);

	return (
		<div className="shorty">
			<div>
				Make long urls short
				<br></br>
			</div>
			<input
				value={input}
				className="inputBox"
				placeholder="enter long url"
				onChange={(e) => setInput(e.target.value)}
			></input>
			<button className="shortenB" onClick={shorten}>
				shorten
			</button>
			<p>{url.full_short_link}</p>
			<div className="results">
				<div className="copier">
					<CopyToClipboard text={url}>
						<button className="copyB" onClick={handleCopy}>
							copy recent
						</button>
					</CopyToClipboard>
				</div>
				<hr></hr>
				<ul>
					{url.length > 0 &&
						url.map((link) => {
							if (link === null) {
								return;
							} else {
								return <li>{link?.full_short_link}</li>;
							}
						})}
				</ul>
			</div>
		</div>
	);
};

export default Shorty;
