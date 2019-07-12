<template>
  <div v-if="UserData.length">
    <div class="card card--user" v-for="(user, id) in UserData" :key="id">
      <div class="user">
        <div class="user__image-wrapper">
          <img class="user__image" :src="user.avatar" :alt="user.name + ' ' + user.surname">
        </div>
        <div>
          <h4 class="user__username">{{ user.username }}</h4>
          <h5 class="user__name">{{ user.name }} {{ user.surname }}</h5>
          <h6 class="user__work">
            <span class="user__work__title">{{ user.title }}</span>
            {{' '}}
            <span class="user__work__company">at {{ user.company }}</span>
          </h6>
          <table>
            <tbody>
              <tr>
                <td>
                  <div class="td td--left">
                    <i class="material-icons">mail</i>
                  </div>
                </td>
                <td class="user__email td td--right">
                  <div class="td">{{ user.email.toLowerCase() }}</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="td td--left">
                    <i class="material-icons">phone</i>
                  </div>
                </td>
                <td>
                  <div class="user__phone td td--right">{{ user.phone }}</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
	name: "UserCard",
	props: {
		UserData: {
			type: [Object, Array],
			default: null,
			required: true
		}
	}
};
</script>
