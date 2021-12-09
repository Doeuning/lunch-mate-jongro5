<template>
  <div class="check-wrap">
    <div class="check-all">
      <form-checkbox-all
        :checkStrong="true"
        :checkTitle="'전체동의'"
        :checked="checkAll"
        :checkLength="checkLength"
        :checkedArray="checkedArray.length"
        @get-checked-all="getChecked(policies)"
      />
    </div>
    <ul>
      <li v-for="policy in policies" :key="policy.id">
        <form-checkbox
          :checkTitle="policy.title"
          :name="name"
          :checked="policy.value"
          @get-checked="getChecked(policies, policy)"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import FormCheckbox from "../components/form-checkbox";
import FormCheckboxAll from "../components/form-checkbox-all";
export default {
  name: "check-all",
  data() {
    return {
      checkedArray: [],
      name: "doeun",
      policies: [
        {
          id: "policy1",
          title: "육회",
          value: false,
        },
        {
          id: "policy2",
          title: "떡볶이",
          value: false,
        },
        {
          id: "policy3",
          title: "골뱅이소면",
          value: false,
        },
      ],
    };
  },
  components: {
    "form-checkbox": FormCheckbox,
    "form-checkbox-all": FormCheckboxAll,
  },
  computed: {
    checkLength() {
      return this.policies.length;
    },
    checkAll() {
      return this.checkedArray.length === this.checkLength;
    },
  },
  methods: {
    getChecked(policies, policy) {
      if (policy) {
        // 개별 체크박스
        policy.value = !policy.value;
        let checkThisPolicy = this.checkedArray.indexOf(policy.id);
        if (checkThisPolicy > -1) {
          this.checkedArray.splice(checkThisPolicy, 1);
        } else {
          this.checkedArray.push(policy.id);
        }
      } else {
        // 전체동의 체크박스
        if (this.checkedArray.length < this.checkLength) {
          // 전체 체크된게 아니면 체크 안된거를 checkedArray에 넣어라!
          policies.forEach((item) => {
            this.checkedArray.push(item.id);
            return (item.value = true);
          });
          this.checkedArray = Array.from(new Set(this.checkedArray));
        } else {
          // 전체 체크됐으면
          policies.forEach((item) => {
            return (item.value = false);
          });
          this.checkedArray = [];
        }
      }
    },
  },
};
</script>

<style lang="scss">
.check-wrap {
  width: 600px;
  margin: 100px auto;
  text-align: left;
}
</style>
