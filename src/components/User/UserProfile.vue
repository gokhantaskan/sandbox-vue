<template>
  <div v-if="data.length">
    <div class="user-profile">
      <pre>{{ data }}</pre>
    </div>
  </div>
  <div v-else>Loading...</div>
</template>

<script>
export default {
	name: "UserProfile",
	props: {
		data: {
			type: Object,
			required: true,
			default: null
		}
	}
};
</script>
