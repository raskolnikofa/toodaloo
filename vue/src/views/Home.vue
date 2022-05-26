<template>
  <div>
    <task-list/>
    <file-upload/>
  </div>
</template>

<script>
import TaskList from "@/components/TaskList";
import FileUpload from "@/components/FileUpload";
export default {
  name: "Home",
  data() {
    return {
      title: "Hello",
    };
  },
  components: {TaskList, FileUpload},
  methods: {
    actionClick() {
      alert(this.title);
    },
  },
};
</script>

<style></style>
