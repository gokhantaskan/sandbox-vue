import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import User from "../views/User";
import About from "../views/About";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home
	},
	{
		path: "/:username",
		name: "User",
		component: User
	},
	{
		path: "/about",
		name: "About",
		component: About
	}
];

export default new VueRouter({
	routes
});
