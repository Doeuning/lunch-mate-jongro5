<template>
  <div>
    <div class="check-wrap">
      <form-checkbox
        :checked="single.checked"
        v-model="single.checked"
        :value="single.title"
        >{{ single.title }}</form-checkbox
      >
    </div>
    <div class="check-wrap">
      <div class="check-all">
        <form-checkbox-all v-model="arr1.all" @change="agreeAll(arr1)"
          >전체동의</form-checkbox-all
        >
      </div>
      <ul>
        <li v-for="policy in arr1.list" :key="policy.id">
          <form-checkbox
            :checked="policy.checked"
            v-model="arr1.checked"
            :value="policy.title"
            @change="changeEvent(arr1)"
            >{{ policy.title }}</form-checkbox
          >
          {{ arr1.checked }}
        </li>
      </ul>
    </div>
    <div class="check-wrap">
      <div class="check-all">
        <label>
          <input type="checkbox" v-model="arr2.all" @change="agreeAll(arr2)" />
          전체동의
        </label>
      </div>
      <ul>
        <li v-for="policy in arr2.list" :key="policy.id">
          <label>
            <input
              type="checkbox"
              :value="policy.id"
              v-model="arr2.checked"
              @change="changeEvent(arr2)"
            />
            {{ policy.title }}
          </label>
        </li>
      </ul>
    </div>
    <div class="check-wrap">
      <!--      <label>-->
      <!--        <input-->
      <!--          type="checkbox"-->
      <!--          :value="policy.id"-->
      <!--          v-model="arr2.checked"-->
      <!--          @change="changeEvent(arr2)"-->
      <!--        />-->
      <!--        {{ policy.title }}-->
      <!--      </label>-->
    </div>
  </div>
</template>

<script>
import formCheckbox from "../components/form-checkbox";
import formCheckboxAll from "../components/form-checkbox-all";
export default {
  name: "check-all",
  data() {
    return {
      single: {
        checked: false,
        id: "single1",
        title: "오징어튀김",
      },
      arr1: {
        all: false,
        checked: [],
        list: [
          {
            id: "policy1",
            title: "육회",
          },
          {
            id: "policy2",
            title: "떡볶이",
          },
          {
            id: "policy3",
            title: "골뱅이소면",
          },
        ],
      },
      arr2: {
        all: false,
        checked: [],
        list: [
          {
            id: "2policy1",
            title: "2육회",
          },
          {
            id: "2policy2",
            title: "2떡볶이",
          },
          {
            id: "2policy3",
            title: "2골뱅이소면",
          },
        ],
      },
    };
  },
  components: {
    "form-checkbox": formCheckbox,
    "form-checkbox-all": formCheckboxAll,
  },
  computed: {},
  methods: {
    changeEvent(arr) {
      arr.all = false;
      if (arr.list.length === arr.checked.length) {
        arr.all = true;
      }
    },
    agreeAll(arr) {
      arr.checked = [];
      if (arr.all) {
        arr.list.forEach((item) => {
          arr.checked.push(item.title);
        });
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
