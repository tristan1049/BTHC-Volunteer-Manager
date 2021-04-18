<template>
  <div>
    <div class="main-container bg-gray-custom justify-content-center">
      <div class="row justify-content-center form-body">
        <div class="col-10">
          <div class="card shadow-lg p-5 my-5">
            <Onb2 v-bind:admin_edit="true" v-bind:edit="edit1"/>
            <Onb3 v-bind:admin_edit="true" v-bind:edit="edit2"/>
            <Onb4 v-bind:admin_edit="true" v-bind:edit="edit3"/>
            <Onb5 v-bind:admin_edit="true" v-bind:edit="edit4"/>
            <div>{{ user_data }}</div>

            <!-- Save Button -->
            <div class="text-right">
                <button class="btn btn-primary" @click="save_data()">
                Edit Form
                </button>
                <div>{{ user_data }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Onb2 from "../components/Onb-2";
import Onb3 from "../components/Onb-3";
import Onb4 from "../components/Onb-4";
import Onb5 from "../components/Onb-5";

export default {
  name: "Adminedit",
  components: {
    Onb2,
    Onb3,
    Onb4,
    Onb5
  },
  data() {
      return {
          edit1: false,
          edit2: false,
          edit3: false,
          edit4: false
      }
  },
  methods: {
      save_data: function() {
          this.edit1 = true;
          this.edit2 = true;
          this.edit3 = true;
          this.edit4 = true;
      }
  }
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