<template>
  <basenav type="primary" effect="dark" expand style="position: fixed" class="fill-width navbar-style">
    <div class="container">
      <a class="navbar-brand" href="#">Boston Tax Help - Admin Dashboard</a>
      <div class="row" slot="content-header" slot-scope="{ closeMenu }">
        <div class="col-6 collapse-brand">
          <img src="../../assets/img/logo-crop.png" alt="Logo" />
        </div>
        <div class="col-6 collapse-close">
          <closebutton @click="closeMenu"></closebutton>
        </div>
      </div>
      <ul class="navbar-nav ml-lg-auto">
        <li class="nav-item">
          <a class="nav-link nav-link-icon" href="https://www.bostontaxhelp.org/">
            [Sample Text]
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link nav-link-icon" href="https://www.bostontaxhelp.org/contact-us/">
            [Sample Text]
          </a>
        </li>
      </ul>
      <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
        <li aria-haspopup="true" class="dropdown nav-item dropdown">
            <a href="#" data-toggle="dropdown" role="button" class="nav-link">
                <span class="nav-link-inner--text mr-1">Actions</span>
                <i class="fa fa-caret-down"></i>
            </a>
            <ul class="dropdown-menu show">
                <!-- <a href="#/landing" class="dropdown-item">Landing</a
                ><a href="#/profile" class="dropdown-item">Profile</a
                ><a href="#/login" class="dropdown-item">Login</a
                ><a href="#/register" class="dropdown-item">Register</a> -->
                <a class="dropdown-item" href="#">Logout</a>
                <a class="dropdown-item" href="#">Change Email</a>
                <a class="dropdown-item" href="#">Promote User</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Delete Account</a>
            </ul>
        </li>
      </ul>
    </div>
    <!-- <div class="ml-1" v-if="false">
            <base-button size="sm" type="secondary"><i class="fa fa-angle-left mr-2"></i >Return to Dash</base-button>
        </div>   -->
  </basenav>
</template>

<script>
import basenav from "../components/BaseNav";
import closebutton from "../components/CloseButton";
//import basedropdown from "../components/BaseDropdown";

export default {
  name: "UserNav",
  components: {
    basenav,
    //basedropdown,
    closebutton,
  },
};
</script>

<style>
.navbar div.container {
  margin-left: 30px !important;
  margin-right: 45px !important;
  padding: 0%;
  max-width: 100%;
  width: 100% !important;
}
</style>
