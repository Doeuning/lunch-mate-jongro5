<template>
  <label :class="{ input: true, checked: classBind }">
    <input
      type="checkbox"
      :checked="checked"
      :value="value"
      @change="sendEvent"
    />
    <span class="title">
      <slot></slot>
    </span>
  </label>
</template>

<script>
export default {
  name: "form-checkbox",
  props: {
    checked: [Boolean, Array],
    value: String,
  },
  computed: {
    checkType() {
      return typeof this.checked === "boolean";
    },
    classBind() {
      if (this.checkType) {
        return this.checked;
      }
      return this.checked.some((item) => item === this.value);
    },
  },
  methods: {
    sendEvent(e) {
      if (this.checkType) {
        this.$emit("change", e.target.checked);
      } else {
        // 여기부터
        const idx = this.checked.indexOf(this.value);
        let checkedList = [...this.checked];
        if (idx !== -1) {
          checkedList.splice(idx, 1);
        } else {
          checkedList.push(this.value);
        }
        // 여기까지!
        this.$emit("change", checkedList);
      }
    },
  },
  model: {
    prop: "checked",
    event: "change",
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
    font-weight: 400;
    font-size: 20px;
    line-height: 1.5;
    color: #8997bd;
    transition: all 0.3s;
  }
  strong.title {
    font-weight: 700;
  }
  input[type="checkbox"] {
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
        content: "v";
        position: absolute;
        top: 50%;
        left: 5px;
        width: 22px;
        height: 22px;
        border-radius: 50%;
        line-height: 1;
        transform: translate(0, -50%);
        transition: all 0.3s;
      }
    }
    &:disabled ~ .title {
      color: #dddddd;
      cursor: default;
      &::before {
        border-color: #dddddd;
      }
      &::after {
        color: #dddddd;
      }
    }
  }
  &.checked .title {
    color: cornflowerblue;
    &::before {
      border-color: cornflowerblue !important;
      background: cornflowerblue;
    }
    &::after {
      color: #fff;
    }
  }
}
</style>
