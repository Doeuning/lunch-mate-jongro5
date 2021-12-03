<template>
  <label class="input" :for="radioId">
    <input
      type="radio"
      :id="radioId"
      :name="radioName"
      @change="changeEvent($event)"
    />
    <span class="title">{{ radioTitle }}</span>
  </label>
</template>

<script>
export default {
  name: "form-radio",
  props: ["radioTitle", "radioName", "radioId"],
  methods: {
    changeEvent($event) {
      this.$emit("rdo-checked", $event.target);
    },
  },
};
</script>
<style scoped lang="scss">
.input {
  display: inline-block;
  position: relative;
  align-items: center;
  cursor: pointer;
  input {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    opacity: 0;
    visibility: hidden;
  }
  .title {
    display: block;
    font-size: 20px;
    line-height: 1.5;
    color: #8997bd;
    transition: all 0.3s;
  }
  input[type="radio"] {
    & ~ .title {
      padding: 0 0 0 30px;
      &::before {
        display: block;
        content: "";
        position: absolute;
        top: 50%;
        left: 0;
        width: 22px;
        height: 22px;
        border: 1px solid #8997bd;
        border-radius: 50%;
        transform: translate(0, -50%);
        transition: all 0.3s;
      }
      &::after {
        display: block;
        content: "";
        position: absolute;
        top: 50%;
        left: 6px;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: #8997bd;
        transform: translate(0, -50%);
        transition: all 0.3s;
      }
    }
    &:checked ~ .title {
      color: #252f3e;
      &::before {
        border-color: #252f3e;
      }
      &::after {
        background: #252f3e;
      }
    }
  }
}
</style>
