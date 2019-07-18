<template>
  <div class="user-profile">
    <div class="container py-5">
      <UserProfile :data="user"/>
      <GButton class="mt-4" color="accent" @click="$router.go(-1)">Go back</GButton>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import UserProfile from "../../components/User/UserProfile";

export default {
	name: "User",
	components: {
		UserProfile
	},
	computed: {
		...mapGetters({ user: "getSingleUser" })
	},
	created() {
		this.fetchSingleUser(this.$route.params.username);
	},
	methods: {
		...mapActions(["fetchSingleUser"])
	}
};
</script>
