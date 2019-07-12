<template>
  <div class="home" v-if="users.length">
    <UserCard :user-data="users"/>
  </div>
  <div v-else>Loading...</div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import UserCard from "../components/User/UserCard";

export default {
	name: "Home",
	data() {
		return {};
	},
	components: {
		UserCard
	},
	computed: {
		...mapGetters({ users: "getUsers" })
	},
	mounted() {
		this.fetchUsers();
	},
	methods: {
		...mapActions(["fetchUsers"])
	}
};
</script>
