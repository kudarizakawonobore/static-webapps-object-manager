<template>
  <b-card
    v-bind:title="target.name"
    img-src="https://picsum.photos/600/300/?image=25"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>name: {{target.name}}</b-card-text>
    <b-card-text>owner: {{target.owner}}</b-card-text>
    <b-card-text></b-card-text>

    <b-button href="#" variant="primary">Go somewhere</b-button>
  </b-card>
</template>

<script>
export default {
    props: ['target']
}
</script>