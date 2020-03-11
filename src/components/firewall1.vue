<template>
  <div class="firewall">
    <!-- <div>
        <h2>Firewall 1</h2>
          <div class="form" v-if="show_form">
            <b-form >
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
                        v-model="username"
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
              <b-button type="submit" variant="secondary" v-on:click="updateData()" >Update</b-button>
              
            </b-form>
          </div>  
        <div>
          <span v-if='show_button'><b-button  class="showButton" variant="secondary" v-on:click="showData()">click here to show data</b-button></span>
          <span v-if='edit_button'><b-button  class="showButton" variant="secondary" v-on:click="edit()">Edit</b-button></span>
          
          <div class="info" v-if='show'>
            <span>Ip address - {{ip}}<br></span>
            Username - {{uname}}
          </div>  
        </div>
      <hr>
    </div>   -->
    <ul>
      <li v-for="(info,index) in infos">
        <div class="data">
          <h2>Firewall {{index+1}}</h2>
          <div class="info">
            Ip Address - {{info.ip_address}}<br>
            Username - {{info.passWord}}
          </div>
        </div><hr>
      </li>
    </ul>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  props : ['infos'],
  name: 'firewall1',
  data () {
    return {
      // username: '',
      // password: '',
      // ip_Info: '',
      // data:{},
      // show : 0,
      // ip :'',
      // pswd :'',
      // uname : '',
      // show_form : 0,
      // edit_button : 0,
      // show_button : 0
    }
  },
  methods: {
  },
  mounted(){
    console.log('inside f1 component');
    console.log(this.infos);
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.firewall{
  background-color:#f1f3f4;
  background-color:black;
  height: 100%;
}
.labels{
  color:white
}
h2{
  margin-bottom:20px;
  padding-top:20px;
  color:white;
  font-size : xx-large;
}
hr{
  color:white;
  border:1px solid white;
}
.info{
  color : black;
  margin: 20px;
  padding:10px;
  background-color:white;
  font-family: 'Abril Fatface';
  font-size: xx-large;
  // opacity : 0.9;
}
.showButton{
  margin-left: 100px;
}
.data{
  color:white;
}
/* span{ */
  /* background-color: grey */
/* } */
</style>
