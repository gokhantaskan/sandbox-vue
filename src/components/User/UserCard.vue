<template>
	<div v-if="data.length">
		<div class="card card--user" v-for="(user, id) in data" :key="id">
			<div class="user">
				<div class="user__image-wrapper">
					<img
						class="user__image"
						:src="user.avatar"
						:alt="`${user.name} ${user.surname}`"
					/>
				</div>
				<div>
					<h4 class="user__name">
						<router-link
							:to="{
								name: 'User',
								params: { username: user.username }
							}"
						>
							{{ user.name }} {{ user.surname }}
						</router-link>
						<StarRating
							read-only
							:rating="user.rating"
							:show-rating="false"
							:star-size="14"
						/>
					</h4>
					<h5 class="user__title">{{ user.title }}</h5>
					<h6 class="user__company">{{ user.company }}</h6>
					<table>
						<tbody>
							<tr>
								<td>
									<div class="td td--left">
										<i class="material-icons">my_location</i>
									</div>
								</td>
								<td class="user__email td td--right">
									<div class="td">
										{{ user.country }}
									</div>
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
										>
											{{ user.email.toLowerCase() }}
										</a>
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
										<a :href="`tel:${user.phone}`" target="blank">
											{{ user.phone }}
										</a>
									</div>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
	<div v-else>
		Loading...
	</div>
</template>

<script>
import StarRating from "vue-star-rating";

export default {
	name: "UserCard",
	props: {
		data: {
			type: [Array],
			required: true,
			default: null
		}
	},
	components: {
		StarRating
	}
};
</script>

<style lang="scss" scoped>
.vue-star-rating {
	/* display: inline-flex !important; */
	margin: 0.125rem 0 0;
}
</style>
