<template>
  <div>
      <site-header class="mb-5"/>
      <div class="mt-5 p-5">
        <slot />
      </div>
  </div>
</template>


<script>
  import SiteHeader from "../components/SiteHeader.vue";
  export default {
    components: {SiteHeader}
  }
</script>
