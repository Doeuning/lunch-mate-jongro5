<template>
  <div class="check-wrap">
    <div class="check-all">
      <form-checkbox-all
        :checkStrong="true"
        :checkTitle="'전체동의'"
        :checked="agree1.checkAll"
        :checkLength="agree1.policies"
        :checkedArray="agree1.checkedArray"
      />
    </div>
    <ul>
      <li v-for="policy in agree1.policies" :key="policy.id">
        <form-checkbox
          :checkTitle="policy.title"
          :name="agree1.name"
          :checked="policy.value"
          @get-checked="getChecked(agree1, policy)"
        />
      </li>
    </ul>
    <div class="check-all">
      <form-checkbox-all
        :checkStrong="true"
        :checkTitle="'이것도 전체동의'"
        :checked="agree2.checkAll"
        :checkLength="agree2.checkLength"
        :checkedArray="agree2.checkedArray.length"
        @get-checked-all="getChecked(agree2)"
      />
    </div>
    <ul>
      <li v-for="policy in agree2.policies" :key="policy.id">
        <form-checkbox
          :checkTitle="policy.title"
          :name="agree2.name"
          :checked="policy.value"
          @get-checked="getChecked(agree2, policy)"
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
      agree1: {
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
        checkLength: 0, //this.policies.length,
        checkAll: false, //this.checkedArray.length === this.checkLength,
      },
      agree2: {
        checkedArray: [],
        name: "감자",
        policies: [
          {
            id: "policy1",
            title: "도은이에게 보쌈정식 사주기",
            value: false,
          },
          {
            id: "policy2",
            title: "도은이를위한 제육볶음 사주기",
            value: false,
          },
          {
            id: "policy3",
            title: "도은이 돈까스 사주기",
            value: false,
          },
        ],
        checkLength: 0, //this.policies.length,
        checkAll: false, //this.checkedArray.length === this.checkLength,
      },
    };
  },
  components: {
    "form-checkbox": FormCheckbox,
    "form-checkbox-all": FormCheckboxAll,
  },
  computed: {
    // checkLength() {
    //   return this.policies.length;
    // },
    // checkAll() {
    //   return this.checkedArray.length === this.checkLength;
    // },
  },
  methods: {
    getChecked(group, policy) {
      let policies = group.policies;
      if (policy) {
        // 개별 체크박스
        policy.value = !policy.value;
        let checkThisPolicy = group.checkedArray.indexOf(policy.id);
        if (checkThisPolicy > -1) {
          group.checkedArray.splice(checkThisPolicy, 1);
        } else {
          group.checkedArray.push(policy.id);
        }
      } else {
        // 전체동의 체크박스
        if (group.checkedArray.length < group.checkLength) {
          // 전체 체크된게 아니면 체크 안된거를 checkedArray에 넣어라!
          policies.forEach((item) => {
            group.checkedArray.push(item.id);
            return (item.value = true);
          });
          group.checkedArray = Array.from(new Set(group.checkedArray));
        } else {
          // 전체 체크됐으면
          policies.forEach((item) => {
            return (item.value = false);
          });
          group.checkedArray = [];
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
