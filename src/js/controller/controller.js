import Model from "../model/Model";
import View from "../view/view";

class Controller {
	constructor(model, view) {
		this.model = model;
		this.view = view;
	}

	init() {
		this.view.render(this.model.heading);
	}
}

export default new Controller(new Model(), new View());
