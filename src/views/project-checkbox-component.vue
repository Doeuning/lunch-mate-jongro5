<template>
  <label
    v-if="checkedType"
    :class="{
      'form-checkbox': true,
      disabled: disabled,
      checked: checked,
      focused: focused,
      'form-checkbox-sub': subType,
    }"
  >
    <input
      ref="checkbox"
      type="checkbox"
      :checked="checked"
      :disabled="disabled"
      v-bind="$attrs"
      v-on="listeners"
    />

    <template v-if="subType">
      <i class="icon-checkbox-sub"></i>
    </template>
    <template v-else>
      <!-- 체크박스 on -->
      <i class="icon-checkbox"></i>
    </template>

    <slot></slot>
  </label>
  <label
    v-else
    :class="{
      'form-checkbox': true,
      disabled: disabled,
      checked: checked.some((el) => el === val),
      focused: focused,
      'form-checkbox-sub': subType,
    }"
  >
    <input
      ref="checkbox"
      type="checkbox"
      :checked="checked.some((el) => el === val)"
      :disabled="disabled"
      v-bind="$attrs"
      v-on="listeners"
    />

    <template v-if="subType">
      <i class="icon-checkbox-sub"></i>
    </template>
    <template v-else>
      <i class="icon-checkbox"></i>
    </template>

    <slot></slot>
  </label>
</template>
<script>
export default {
  name: "Checkbox",
  data() {
    return {
      focused: false,
    };
  },
  props: {
    checked: {
      type: [Boolean, Array],
      required: true, // 질문1. 이건 왜 필요한가요?
    },
    disabled: Boolean,
    subType: Boolean,
    val: String,
  },
  inheritAttrs: false,
  computed: {
    checkedType() {
      return typeof this.checked === "boolean";
    },
    listeners() {
      return {
        ...this.$listeners,
        focusin: (event) => {
          this.focused = true;
          this.$emit("focusin", event);
        },
        focusout: (event) => {
          this.focused = false;
          this.$emit("focusout", event);
        },
        change: (event) => {
          if (this.checkedType) {
            // boolean 이면 (체크박스가 하나면)
            this.$emit("formChange", event.target.checked); // formChange 이벤트에는 boolean을 보내고
            this.$emit("change", event); // change 이벤트엔 change 이벤트 자체를 보내라
          } else {
            // array 이면 (체크박스가 여러개면)
            const idx = this.checked.indexOf(this.val); // value값이 array의 몇번째에 있는지 찾아서
            let tmp = [...this.checked]; // checked array를 깊은복사
            if (idx !== -1) {
              // value가 있으면
              tmp.splice(idx, 1); // 깊은복사한 배열에서 지우고
            } else {
              // value가 없으면
              tmp.push(this.val); // 깊은복사한 배열에 삽입해라
            }
            //console.log(tmp);
            this.$emit("formChange", tmp); // formChange 이벤트에는 깊은복사 한 배열을 보내고
            this.$emit("change", event); // change 이벤트엔 change 이벤트 자체를 보내라
          }
        },
      };
    },
  },
  model: {
    prop: "checked",
    event: "formChange",
  },
};
</script>
<style scoped lang="scss">
.form-checkbox {
  position: relative;
  display: inline-block;
  padding: 5px 0 5px 30px;
  align-items: center;
  cursor: pointer;
  input {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    /*visibility: hidden;*/
  }
  [class^="icon-checkbox"] {
    position: absolute;
    top: 4px;
    left: 0;
    display: inline-block;
    height: 20px;
    width: 20px;
    margin-right: 10px;
  }
  .icon-checkbox {
    border-radius: 50%;
    height: 20px;
    width: 20px;
    border: 1px solid #ddd;
    box-sizing: border-box;
  }
  .icon-checkbox-sub {
    background: yellow;
  }
  span {
  }
  fieldset:disabled &,
  &.disabled {
    cursor: default;
    color: $gray-50;
    /*svg {
      background: $gray-30;
      border-radius: 50%;
    }*/
    .icon-checkbox {
      background: $gray-30;
      border-radius: 50%;
    }
    span {
    }
  }
  &.checked {
    .icon-checkbox {
      border: none;
      background: url(../../assets/images/ic-checkbox-main-20-o.svg) no-repeat 0
        0 / 20px auto;
    }
    span {
    }
    &.disabled {
    }
  }
  &.focused {
    /*color: $mint;*/
  }
  &.depth-2 {
    /*top: 10px;*/
  }
}
.form-checkbox-sub {
  /*i {
    background: url(#{$images}/btn-check-sub-20-n.svg) no-repeat 0 0 /
      20px auto;
  }*/
  &.checked {
    i {
      background-position: 0 -20px;
    }
    /*i {
      background-image: url(#{$images}/btn-check-sub-20-o.svg);
    }*/
  }
}
.no-accordion {
  svg {
    top: 13px;
  }
}
</style>
