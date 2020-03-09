<template>
  <div>
     <h2>Firewall 2</h2>
   <!--  <p>ip- {{ipInfo()}}</p>
    <p>username-</p>
    <p>password</p> -->
    <b-form>
          <div class="mx-auto labels" style="width: 500px;">
            <b-form-group label="Ip address:" >
                <b-form-input
                  type="text"
                  v-model="ip_Info"
                  required
                  placeholder="Enter Ip address">
                </b-form-input>
            </b-form-group>
            <b-form-group label="Username:">
                <b-form-input
                    type="text"
                    required
                    placeholder="Enter username">
                </b-form-input>
            </b-form-group>
              <b-form-group label="Your password:">
                <b-form-input type="password"
                  v-model="password"
                  required
                  placeholder="Enter password">
                </b-form-input>
              </b-form-group>
          </div>
          <!-- <button v-on:click.prevent="saveData()">Save data</button> -->
          <b-button variant="secondary"v-on:click.prevent="ipInfo()">Save</b-button>
        </b-form>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'settings',
  data () {
    return {
      ip_Info: null
    }
  },
  methods: {
    ipInfo: function () {
      console.log('yo')
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
