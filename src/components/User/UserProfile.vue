<template>
  <div v-if="user">
    <div class="user-profile">
      <h1 class="user-profile__name">
        {{ user.surname }}, {{ user.name }}
        <sup class="user-profile__id">{{ user.id }}</sup>
      </h1>
      <p>@{{ user.username }}</p>
      <p>{{ user.about }}</p>
      <table>
        <tbody>
          <tr>
            <td>
              <div class="td td--left">
                <i class="material-icons">my_location</i>
              </div>
            </td>
            <td class="user__email td td--right">
              <div class="td">{{ user.country }}</div>
            </td>
          </tr>
          <tr>
            <td>
              <div class="td td--left">
                <i class="material-icons">mail</i>
              </div>
            </td>
            <td class="user__email td td--right">
              <div class="td">
                <a
                  :href="`mailto:${user.email.toLowerCase()}`"
                  target="_blank"
                >{{ user.email.toLowerCase() }}</a>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div class="td td--left">
                <i class="material-icons">phone</i>
              </div>
            </td>
            <td>
              <div class="user__phone td td--right">
                <a :href="`tel:${user.phone}`" target="blank">{{ user.phone }}</a>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <pre>{{ user }}</pre>
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
	computed: {
		user() {
			let user = {};
			user = this.data[0];
			return user;
		}
	}
};
</script>
