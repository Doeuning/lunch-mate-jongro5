<template>
  <div class="modal-wrap" @click.self="modalClose">
    <div class="modal-inner">
      <slot />
      <div class="btn-wrap">
        <button @click="modalClose" class="btn-close">닫기</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "modal-box",
  methods: {
    modalClose() {
      console.log("그냥 닫기");
      this.$emit("modal-close");
    },
  },
};
</script>

<style lang="scss">
.modal-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  &::after {
    display: block;
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: #000000;
    opacity: 0.3;
  }
}

.modal-inner {
  position: relative;
  width: 80%;
  max-width: 500px;
  border-radius: 5px;
  padding: 30px;
  background: #fff;
  z-index: 10;
  opacity: 1;
}
.nodata {
  text-align: center;
  background: none;
  border-bottom: 1px solid #969690;
  padding: 50px 0;
}
</style>
