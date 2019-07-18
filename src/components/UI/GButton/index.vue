<template>
  <component
    :class="[
      'button',
			{
				'shadow-sm': shadow,
				'button--block': block,
			},
			color ? `button--${color}` : null,
		]"
    :style="{
			width: width,
		}"
    :is="tag"
    @click="e => $emit('click', e)"
  >
    <slot></slot>
  </component>
</template>

<script>
export default {
	name: "GButton",
	props: {
		tag: {
			type: String,
			default: "button",
			required: false
    },
    color: {
      type: String,
      default: null,
      required: false
    },
    shadow: {
      type: Boolean,
      default: false,
      required: false
    },   
    block: {
      type: Boolean,
      default: false,
      required: false
    },
    width: {
      type: String,
      default: null,
      required: false
    }
	},
	methods: {}
};
</script>
