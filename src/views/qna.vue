<template>
  <div class="qna-wrap">
    <h1 class="qna-tit">Q &amp; A</h1>
    <button class="btn" @click="addNum" type="button">Click</button>
    <h1 class="qna-tit">{{ counter }}</h1>
    <marquee class="qna-bg" scrollamount="50" behavior="" direction=""
      >질문을 참아주시면 감사하겠습니다.</marquee
    >
  </div>
</template>

<script>
export default {
  name: "qna-page",
};
</script>

<style lang="scss">
.qna-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  .qna-tit {
    font-weight: 100;
    font-size: 100px;
  }
  .qna-bg {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: -1;
    transform: translate(-50%, -50%);
    font-weight: 700;
    font-size: 500px;
    opacity: 0.05;
  }
}
</style>
