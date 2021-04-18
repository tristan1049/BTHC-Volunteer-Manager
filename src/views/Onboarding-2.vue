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

            <!-- Page changing UI -->
            <div v-if="!admin_edit">
              <PageChanger v-bind:page="1"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageChanger from "../components/PageChanger";
import Onb2 from "../components/Onb-2.vue";

export default {
  name: "Onboarding-2",
  components: {
    PageChanger,
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