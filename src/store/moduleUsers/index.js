import axios from "axios";

const jsonUsersURL = "https://107px.codesandbox.io";

export const moduleUsers = {
	state: {
		users: []
	},
	mutations: {
		SET_USERS(state, users) {
			state.users = users;
		}
	},
	actions: {
		fetchUsers({ commit }) {
			axios
				.get(`${jsonUsersURL}/db.json`)
				.then(response => {
					commit("SET_USERS", response.data);
				})
				.catch(error => alert(error));
		}
	},
	getters: {
		getUsers(state) {
			return state.users;
		}
	}
};
