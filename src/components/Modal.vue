<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal-lg" role="dialog">
        <div class="modal-header">
          <button
            type="button"
            class="btn-close"
            aria-label="Close"
            @click="close"
          ></button>
        </div>
        <section
          class="modal-body d-flex justify-content-center m-2"
          id="modalDescription"
        >
          <img :src="poster" />
        </section>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Modal",
  props: ["poster"],
  methods: {
    close() {
      this.$parent.closeModal();
    },
  },
};
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(136, 136, 136, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-lg {
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
}
.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}
.modal-header {
  position: relative;
  border-bottom: 1px solid #eeeeee;
  color: #000000;
  justify-content: space-between;
}
.modal-footer {
  border-top: 1px solid #eeeeee;
  flex-direction: column;
}
.modal-body {
  position: relative;
  padding: 20px 10px;
}
.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}
</style>
