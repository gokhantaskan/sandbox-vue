<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { randomId } from "./utils";

export default {
	name: "App",
	components: {},
	data() {
		return {
			appClass: randomId()
		};
	},
	created() {
		console.log("random ID from utils:" + randomId());
	}
};
</script>

<style lang="scss">
#app {
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
</style>
