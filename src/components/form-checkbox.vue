<template>
  <label class="input" :for="checkId">
    <input
      type="checkbox"
      :id="checkId"
      :name="checkName"
      :checked="checked"
      :disabled="currChecked >= 2 && !this.checked ? true : false"
      v-model="checked"
      @input="changeEvent($event)"
    />
    <span class="title">{{ checkTitle }}</span>
  </label>
</template>

<script>
export default {
  name: 'form-checkbox',
  props: [
    'checkName',
    'checkId',
    'checkTitle',
    'checked',
    'maxCheck',
    'currChecked',
  ],
  methods: {
    changeEvent($event) {
      this.$emit('get-checked', $event.target.checked);
    },
  },
  model: { prop: 'checked', event: 'get-checked' },
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
    font-weight: 300;
    font-size: 20px;
    line-height: 1.5;
    color: #8997bd;
    transition: all 0.3s;
  }
  input[type='checkbox'] {
    & ~ .title {
      padding: 0 0 0 30px;
      &::before {
        display: block;
        content: '';
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
        content: 'v';
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
    &:checked ~ .title {
      color: #252f3e;
      &::before {
        border-color: #252f3e;
      }
      &::after {
        color: #252f3e;
      }
    }
  }
}
</style>
