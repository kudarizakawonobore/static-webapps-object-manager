<template>
  <div class="devices">
    <h1>This is Devices Page</h1>

    <div class="devicelist" v-for="device in deviceList" :key="device.name">
      <Device v-bind:target="device"></Device>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Device from "@/components/Device.vue";
export default {
  components: {
    Device
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