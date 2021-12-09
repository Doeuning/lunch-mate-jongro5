<script>
import formCheckbox from "./form-checkbox";
export default {
  name: "form-checkbox-all",
  extends: formCheckbox,
  methods: {
    sendEvent() {
      this.$emit("get-checked-all");
    },
  },
};
</script>
