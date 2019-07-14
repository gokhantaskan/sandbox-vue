<template>
  <div class="user-profile">
    <div class="container py-5">
      <UserProfile :data="user"/>
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
