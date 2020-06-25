<template>
  <div id="devices">
    <h1>This page is devices page</h1>
    <vue-loading type="spin" v-if="devices.length == 0" />
    <div class="results">
    <b-card-group>
      <div class="devicelist" v-for="device in deviceList" :key="device.name">
        <Device v-bind:target="device"></Device>
      </div>
    </b-card-group>
    <div>
      <b-button href="#" variant="primary">Create</b-button>
    </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Device from "@/components/Device.vue";
import {VueLoading} from "vue-loading-template";
export default {
  components: {
    Device,
    VueLoading
  },
  computed: {
    ...mapState(["devices"]),
    deviceList: {
      get() {
        return this.devices;
      }
    }
  },
  mounted() {
    this.getDevices();
  },
  methods: {
    ...mapActions(["getDevices"])
  }
};
</script>
<style scoped>
.devicelist {
  float: left;
}
</style>