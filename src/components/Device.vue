<template>
  <b-card
    v-bind:title="target.name"
    v-bind:img-src="target.path"
    v-bind:img-alt="target.path"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>name: {{target.name}}</b-card-text>
    <b-card-text>owner: {{target.owner}}</b-card-text>
    <b-card-text></b-card-text>

    <div class="button-group">
      <b-button href="#" variant="primary">Edit</b-button>
    </div>
  </b-card>
</template>

<script>
export default {
    props: ['target']
}
</script>
<style scoped>
</style>