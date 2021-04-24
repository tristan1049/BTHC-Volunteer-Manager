<template>
  <div>
    <div class="main-container bg-gray-custom justify-content-center">
      <div class="row justify-content-center form-body">
        <div class="col-10">
          <div class="card shadow-lg p-5 my-5">
            <Onb2/>

            <!-- Spacing -->
            <br />
            <br />

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Onb2 from "../components/Onb-2.vue";

export default {
  name: "Onboarding-2",
  components: {
    Onb2
  },
};
</script>

<style>
.main-container {
  min-height: 100vh;
  height: 100%;
  /* overflow-x: visible; */
  display: flex;
  position: relative;
}
.form-body {
  width: 100%;
}
.bg-gray-custom {
  background-color: #e9ecef;
}
</style>