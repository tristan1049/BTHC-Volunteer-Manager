<template>
    <basenav type="primary" effect="dark" expand style="position:fixed" class="fill-width navbar-style ">
        <div class="container">
          <a class="navbar-brand" href="#">Boston Tax Help - Volunteer Portal</a>
          <div class="row" slot="content-header" slot-scope="{closeMenu}">
              <div class="col-6 collapse-brand">
                  <img src="../../assets/img/logo-crop.png"  alt="Logo" />
              </div>
              <div class="col-6 collapse-close">
                  <closebutton @click="closeMenu"></closebutton>
              </div>
          </div>
          <ul class="navbar-nav ml-lg-auto">
              <li class="nav-item">
                  <a class="nav-link nav-link-icon" href="https://www.bostontaxhelp.org/">
                      Main Site
                  </a>
              </li>
              <li class="nav-item">
                  <a class="nav-link nav-link-icon" href="https://www.bostontaxhelp.org/contact-us/">
                      Contact Us
                  </a>
              </li>
              <basedropdown tag="li" title="Actions">
                <a class="dropdown-item" href="#">Logout</a>
                <a class="dropdown-item" href="#">Change Email</a>
                <a class="dropdown-item" href="#">Request Role/Site Change</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Delete Account</a>
              </basedropdown>
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
import basedropdown from "../components/BaseDropdown";

export default {
    name: "UserNav",
    components: {
        basenav,
        basedropdown,
        closebutton,
    },
}
</script>

<style>
.navbar div.container{
  margin-left: 30px !important;
  margin-right: 45px !important;
  padding: 0%;
  max-width: 100%;
  width: 100% !important;
}
</style>
