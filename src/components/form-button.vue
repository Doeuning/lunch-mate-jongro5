<template>
  <div class="btn-area">
    <button class="btn-back" @click="goBack">뒤로</button>
    <button class="btn-back" @click="reloadPage">다시하기</button>
  </div>
</template>

<script>
export default {
  name: "form-button",
  methods: {
    reloadPage() {
      window.location.reload(true);
    },
    goBack() {
      this.$emit("go-back");
    },
  },
};
</script>
<style scoped lang="scss">
.btn-area {
  display: flex;
  margin: 100px auto 0;
  .btn-back {
    flex: 1;
    border: none;
    border-radius: 5px;
    padding: 20px 30px;
    background: #969690;
    font-size: 20px;
    color: #fff;
    text-decoration: none;
    transition: all 0.3s;
    cursor: pointer;
    word-break: keep-all;
    & ~ .btn-back {
      margin-left: 20px;
    }
    &:hover,
    &:focus {
      background: #fb8b24;
    }
  }
}
</style>
