export default class BudgetView {
	constructor(props) {}

	render() {
		const h1 = document.createElement("h1");
		h1.innerHTML = `This is view <i class="fa fa-eye" aria-hidden="true"></i>`;

		document.getElementById("root").append(h1);
	}
}
