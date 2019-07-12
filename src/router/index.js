import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import About from "../views/About";
import UserProfile from "../views/User/UserProfile";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home
	},
	{
		path: "/about",
		name: "About",
		component: About
	},
	{
		path: "/user/:id",
		name: "UserProfile",
		component: UserProfile
	}
];

export default new VueRouter({
	routes
});
