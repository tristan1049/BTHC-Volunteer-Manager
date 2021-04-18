<template>
  <div>
    <div class="main-container bg-gray-custom justify-content-center">
      <div class="row justify-content-center form-body">
        <div class="col-10">
          <div class="card shadow-lg p-5 my-5">
            <Onb4/>

            <!-- Spacing -->
            <br />
            <br />

            <!-- Page changing UI -->
            <div v-if="!admin_edit">
              <PageChanger v-bind:page="3"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageChanger from "../components/PageChanger";
import Onb4 from "../components/Onb-4.vue";

export default {
  name: "Onboarding-4",
  components: {
    PageChanger,
    Onb4
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