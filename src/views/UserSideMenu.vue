<template>
    <!-- <component :is="tag"> -->
        <ul class="nav nav-pills nav-fill flex-column nav-stacked">
            <router-link to='/udash/updates'>
                <li class="nav-item">
                    <a class="nav-link mb-3 mx-3" :class="this.updates_class" data-toggle="tab" href="#" role="tab"><i class="fa fa-envelope mr-2"></i >
                        Updates
                        <div class="notif" v-if="this.notifUpdate">
                            <i class="fa fa-exclamation-circle mr-2"></i >
                        </div>
                    </a>
                </li>
            </router-link>
            <router-link to='/udash/hours'>
                <li class="nav-item">
                    <a class="nav-link mb-3 mx-3" :class="this.hours_class" href="#" role="tab"><i class="fa fa-calendar mr-3"></i>Hours</a>
                </li>
            </router-link>
            
            <router-link to='/udash/training'>
                <li class="nav-item">
                    <a class="nav-link mb-3 mx-3" :class="this.training_class" data-toggle="tab" href="#" role="tab"><i class="fa fa-pencil mr-2"></i>Training</a>
                </li>
            </router-link>
            
            <router-link to='/udash/profile'>
                <li class="nav-item">
                    <a class="nav-link mb-3 mx-3" :class="this.profile_class" data-toggle="tab" href="#" role="tab"><i class="fa fa-user mr-2"></i>Profile</a>
                </li>
            </router-link>
        </ul>
    <!-- </component> -->
</template>

<script>
export default {
    name: "UserSideMenu",
    props: {
        active: {
        type: String,
        default: "",
        description: "Which menu button should be active."
        },
        notifUpdate: {
        type: Boolean,
        default: false,
        description: "Whether or not the update button shows a notification."
        },
    },
    data() {
        return {
            updates_class: "",
            hours_class: "",
            training_class: "",
            profile_class: "",
        }
    },
    mounted(){
        if (this.active === "Updates")
            this.updates_class = "active"
        if (this.active === "Hours")
            this.hours_class = "active"
        if (this.active === "Training")
            this.training_class = "active"
        if (this.active === "Profile")
            this.profile_class = "active"
    },
}
</script>

<style>
.notif{
  position:relative;
  width: 100%;
  padding: 0;
  transform: translateX(calc(50% - 2px));
  top: calc(-40px - 4px + 2px);
  margin-bottom: calc(-20px - 4px);
  margin-left: 16px;
  /* font-size: 14px; */
   font-size: 18px;
}
</style>
