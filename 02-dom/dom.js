const gray = "#B0B0B0"

let content = document.querySelector(".clanek")

content.innerHTML = `
	<p class="prvni">
		Bonbon cake jelly-o croissant tiramisu dessert.
		Macaroon cookie ice cream sweet roll topping fruitcake candy canes macaroon sweet roll.
		Croissant cookie jelly-o donut cupcake sugar plum.
		Chocolate brownie chocolate cake icing tart marzipan tootsie roll chocolate cheesecake.
	</p>
	<p class="druhy">
		Carrot cake pastry chupa chups cheesecake. Jujubes candy canes cake lemon drops.
		Powder gingerbread gummi bears gingerbread gingerbread. Bonbon muffin danish.
	</p>
	<p class="treti">
		Marshmallow chocolate bar ice cream cookie wafer gingerbread cookie pastry.
		Candy biscuit soufflé marshmallow pastry donut. Lollipop gummies danish sesame snaps.
		Croissant tart candy canes gingerbread powder bear claw.
	</p>
`;

let firstParagraph = document.querySelector(".prvni");
firstParagraph.style.color = gray;

let photo = document.querySelector("#fotka");
photo.src = "./obrazky/asterix_a_obelix.png";

let mainTitle = document.querySelector(".hlavni-nadpis");
mainTitle.style.backgroundColor = "purple"; //background-color
mainTitle.style.color = "white";

let secondaryTitle = document.querySelector(".sekundarni-nadpis");
secondaryTitle.textContent = "Asterix a Obelix";


