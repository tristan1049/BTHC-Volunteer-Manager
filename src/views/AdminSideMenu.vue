<template>
    <!-- <component :is="tag"> -->
        <ul class="nav nav-pills nav-fill flex-column nav-stacked">

            <router-link to='/adash/users'>
                <li class="nav-item">
                    <a class="nav-link mb-3 mx-3" :class="this.users_class" href="#" role="tab"><i class="fa fa-users mr-3"></i>Users</a>
                </li>
            </router-link>

            <router-link to='/adash/approvals'>
                <li class="nav-item">
                    <a class="nav-link mb-3 mx-3" :class="this.approvals_class" data-toggle="tab" href="#" role="tab"><i class="fa fa-check mr-2"></i>
                        Approvals
                        <div class="notif" v-if="this.notifUpdate">
                            <i class="fa fa-exclamation-circle mr-2"></i >
                        </div>
                    </a>
                </li>
            </router-link>

            <router-link to='/adash/sites'>
                <li class="nav-item">
                    <a class="nav-link mb-3 mx-3" :class="this.sites_class" href="#" role="tab"><i class="fa fa-building mr-3"></i>Sites</a>
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
            users_class: "",
            approvals_class: "",
            sites_class: "",
        }
    },
    mounted(){
        if (this.active === "Users")
            this.users_class = "active"
        if (this.active === "Approvals")
            this.approvals_class = "active"
        if (this.active === "Sites")
            this.sites_class = "active"
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
