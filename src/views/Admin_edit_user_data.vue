<template>
  <div>
    <div class="main-container bg-gray-custom justify-content-center">
      <div class="row justify-content-center form-body">
        <div class="col-10">
          <div class="card shadow-lg p-5 my-5">
            <Onb2 ref="err1" v-bind:admin_edit="true" v-bind:edit="edit"/>
            <Onb3 ref="err2" v-bind:admin_edit="true" v-bind:edit="edit"/>
            <Onb4 ref="err3" v-bind:admin_edit="true" v-bind:edit="edit"/>
            <Onb5 ref="err4" v-bind:admin_edit="true" v-bind:edit="edit"/>

            <div v-if="errors_exist">
                <h5 style="color: red;">
                    Correct errors on this page before data can be saved.
                </h5>
            </div>
            <div v-if="!errors_exist">
                <h5 v-if="edit !== 0" class="text-success">
                    Your changes have been saved!
                </h5>
            </div>

            <!-- Save Button -->
            <div class="text-right">
                <button class="btn btn-primary" @click="save_data()">
                Edit Form
                </button>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { EventBus } from '../eventbus';
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
          edit: 0,
          errors_exist: false
      }
  },
  mounted() {
    EventBus.$on('errors', this.errorHandler);
  },
  methods: {
      errorHandler: function() {
        this.errors_exist = true;
      },
      save_data: function() {
        this.errors_exist = false;

        if (this.edit === 0) {
            this.edit = 1;
        }
        else if (this.edit === 1) {
            this.edit = 2;
        }
        else if (this.edit === 2) {
            this.edit = 1;
        }
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