<template>
  <div class="home">
    <div class="container py-5">
      <h1>Home</h1>
      <UserCard :data="users"/>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import UserCard from "../../components/User/UserCard";

export default {
	name: "Home",
	data() {
		return {};
	},
	components: {
		UserCard
	},
	computed: {
		...mapGetters({ users: "getAllUsers" })
	},
	mounted() {
		this.fetchAllUsers();
	},
	methods: {
		...mapActions(["fetchAllUsers"])
	}
};
</script>
