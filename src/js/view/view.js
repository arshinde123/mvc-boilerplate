export default class BudgetView {
	constructor(props) {}

	render(heading) {
		const h1 = document.createElement("h1");
		h1.innerHTML = `${heading} <i class="fa fa-eye" aria-hidden="true"></i>`;

		document.getElementById("root").append(h1);
	}
}
