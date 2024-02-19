<template>
    <login />
</template>

<script>
import login from "./login";

definePageMeta({
  layout: "custom"
});

export default {
  components: {
    login,
  }
}
</script>