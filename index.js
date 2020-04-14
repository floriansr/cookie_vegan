function Recipe (title) {
  let recipe = Object.create(Recipe.prototype)
  recipe.title = title

  const steps = [
  [1, "cup", "white flour", "dry"],
  [0.5, "tsp", "baking soda", "wet"],
  [0.25, "tsp", "salt", "dry"],
  [0.25, "cup", "sugar", "dry"],
  [0.25, "cup", "brow sugar", "dry"],
  [0.25, "tbsp", "soy milk", "wet"],
  [0.25, "tbsp", "oil", "wet"],
  [0.25, "tsp", "pure vanilla extract", "dry"],
  ["Form into one big ball, then either refrigerate at least 2 hours or freeze until the dough is cold. Once dough is chilled, preheat oven to 325 F. Form dough balls, and place on a greased baking tray, leaving enough room between cookies for them to spread."],
  [325, 10]
]

  recipe.steps = steps

  return recipe
}

Recipe.prototype.cook = function () {

	div_id = document.getElementById('div_id')
	div_id.innerHTML +=
		
	    `<h3 class="text-center">${this.title}.</h3>`

	for (let i = 0; i < this.steps.length; i++) {

		// console.log(i);
		// console.log(this.steps[i][0]);

		if (this.steps[i][0] > 300) {
			div_id.innerHTML +=
			`<br><p class="text-center"> Then, heat ${this.steps[i][1]} minutes in the oven at ${this.steps[i][0]} degrees.</p>`
			return
		}

		if (this.steps[i][0].length > 30) {
			// console.log(this.steps[i][0])
			
			div_id.innerHTML +=

			`<br><p class="text-center"> ${this.steps[i][0]} <br>`
		}

		else {
			// console.log(this.steps[i][3]);

			if (this.steps[i][3] === "dry" ){

				div_id.innerHTML +=
		   		`<p class="text-center">Add ${this.steps[i][0]} ${this.steps[i][1]} of ${this.steps[i][2]} to the bowl</p>`
			}
			else {

			div_id.innerHTML +=
		    `<p class="text-center">Pour ${this.steps[i][0]} ${this.steps[i][1]} of ${this.steps[i][2]} to the bowl.</p>`
			}
	   	}
	};
};

const cookies = Recipe('Cookie Vegan')

// cookies.cook();