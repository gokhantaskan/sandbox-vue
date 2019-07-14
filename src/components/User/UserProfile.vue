<template>
  <div v-if="user">
    <div class="user-profile">
      <div class="d-flex flex-row justify-content-between">
        <div>
          <h1 class="user-profile__name">
            {{ user.name }} {{ user.surname }}
            <sup class="user-profile__id">{{ user.id }}</sup>
          </h1>
          <p class="user-profile__username">@{{ user.username }}</p>
        </div>
        <div class="is-relative">
          <div class="user-profile__avatar-back is-absolute"></div>
          <img
            class="user-profile__avatar"
            :src="user.avatar"
            :alt="`${user.name} ${user.surname}`"
          >
        </div>
      </div>
      <h3>
        <span class="user-profile__title">{{ user.title }}</span>
        <br>
        <span class="user-profile__company">{{ user.company }}</span>
      </h3>
      <p class="user-profile__about">{{ user.about }}</p>
      <table class="user-profile__table">
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
