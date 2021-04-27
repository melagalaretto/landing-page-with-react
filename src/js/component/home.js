import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		<nav class="navbar navbar-expand-lg navbar-light bg-light">
			<a class="navbar-brand" href="#">
				Start Boostrap
			</a>
			<button
				class="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNavAltMarkup"
				aria-controls="navbarNavAltMarkup"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div
				class="collapse navbar-collapse justify-content-end"
				id="navbarNavAltMarkup">
				<div class="navbar-nav">
					<a class="nav-link active" href="#">
						Home <span class="sr-only">(current)</span>
					</a>
					<a class="nav-link" href="#">
						About
					</a>
					<a class="nav-link" href="#">
						Services
					</a>
					<a
						class="nav-link disabled"
						href="#"
						tabindex="-1"
						aria-disabled="true">
						Contact
					</a>
				</div>
			</div>
		</nav>
	);
}
