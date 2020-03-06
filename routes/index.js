const Routes = (app) => {
	app.get("/", (req, res) => {
		res.render("home");
	});
}

export default Routes;