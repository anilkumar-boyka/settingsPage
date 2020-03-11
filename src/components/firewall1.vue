<template>
  <div class="firewall">
    <div class="info">
      firewall {{no+1}}<br>
      Ip Address - {{data.ip_address}}<br>
      Username  - {{data.user_name}}<br>
      Password - {{data.passWord}}
      <span><b-button  class="showButton" variant="secondary" v-on:click="edit">Edit</b-button></span>
    </div>
    <!-- <firewall1/> -->
  <!--   <div>
        <h2>Firewall 1</h2> -->
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
              <b-button type="submit" variant="secondary" v-on:click="updateData">Update</b-button>
            </b-form>
          </div>  
        <!-- <div>
          <span v-if='show_button'><b-button  class="showButton" variant="secondary" v-on:click="showData()">click here to show data</b-button></span>
          <span v-if='edit_button'><b-button  class="showButton" variant="secondary" v-on:click="edit()">Edit</b-button></span>
          
          <div class="info" v-if='show'>
            <span>Ip address - {{ip}}<br></span>
            Username - {{uname}}
          </div>  
        </div> -->
      <hr>
    </div>   
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  props : ['data','no'],
  name: 'firewall1',
  data () {
    return {
      username: '',
      password: '',
      ip_Info: '',
      // data:{},
      // show : 0,
      // ip :'',
      // pswd :'',
      // uname : '',
      show_form : 0,
      // edit_button : 0,
      // show_button : 0
    }
  },
  methods: {
    edit:function () {
      this.show_form = 1;
    // const information ={
    //     ip_address : this.ip_Info,
    //     password : this.password,
    //     user_name : this.username
    //   }
    },
    updateData : function () {
      console.log("update")
      console.log(this.ip_Info)
       const information ={
        ip_address : this.ip_Info,
        passWord : this.password,
        user_name : this.username
      }
      console.log(information)

    }
  },
  mounted(){
    console.log('inside f1 component');
    console.log(this.data);
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
}
.showButton{
  float:right;
}
.data{
  color:white;
}
/* span{ */
  /* background-color: grey */
/* } */
</style>
