<template>
  <div v-if="data.length">
    <div class="user-profile">
      <pre>{{ singleUser }}</pre>
    </div>
  </div>
  <div v-else>Loading...</div>
</template>

<script>
export default {
	name: "UserProfile",
	props: {
		data: {
			type: [Array, Object],
			required: true,
			default: null
		}
	},
	data() {
		return {
			singleUser: this.data[0]
		}
	}
};
</script>
