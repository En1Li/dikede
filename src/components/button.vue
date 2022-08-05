<template>
  <div style="display: inline-block; margin-left: 15px">
    <div
      @click="$emit('click')"
      class="button"
      :style="{ backgroundColor: color }"
    >
      <span
        :class="icon"
        :style="{
          color: iconColor,
        }"
      >
      </span>
      <i class="text" :style="{ color: labelColor }">{{ label }}</i>
      <!-- <slot name="icon" class="icon"/> -->
      <!-- <slot name="text" class="text"/> -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: "#fff",
    },
    label: {
      type: String,
      default: "按钮",
    },
    labelColor: {
      type: String,
      default: "#fff",
    },
    icon: {
      type: String,
    },
    iconColor: {
      type: String,
      default: "#fff",
    },
  },
  data() {
    return {};
  },

  created() {},

  methods: {},
};
</script>

<style scoped lang="scss">
.button {
  width: 80px;
  height: 36px;
  border-radius: 5px;
  /* border: 1px solid #000; */
  line-height: 36px;
  text-align: center;
  font-size: 14px;

  .text {
    padding-left: 5px;
    font-style: normal;
  }
}
</style>
