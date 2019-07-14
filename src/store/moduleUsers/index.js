import axios from "axios";

const jsonURL = "https://8oidj.codesandbox.io/db.json";

export const moduleUsers = {
	state: {
		users: [],
		user: []
	},
	mutations: {
		SET_ALL_USERS: (state, users) => (state.users = users),
		SET_SINGLE_USER: (state, user) => (state.user = user)
	},
	actions: {
		fetchAllUsers({ commit }) {
			axios
				.get(`${jsonURL}`)
				.then(response => {
					commit("SET_ALL_USERS", response.data);
				})
				.catch(error => alert(error));
		},
		fetchSingleUser({ commit }, username) {
			axios
				.get(`${jsonURL}`)
				.then(async response => {
					const data = [];
					await data.push(
						response.data.find(user => user.username === username)
					);
					commit("SET_SINGLE_USER", data);
				})
				.catch(error => alert(error));
		}
	},
	getters: {
		getAllUsers: state => state.users,
		getSingleUser: state => state.user
	}
};
