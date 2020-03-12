<template>
  <div class="firewall"><span class = "Firewall_heading">Firewall {{no+1}}</span><br>
    <b-container> 
      <div class="info">
        <b-row>
          <b-col sm="3">Ip Address - {{data.ip_address}}</b-col><br>
          <b-col sm="3">Username  - {{data.user_name}}</b-col><br>
          <b-col sm="3">Password - {{data.passWord}}</b-col>
          <b-col sm="3"><span v-if="edit_button"><b-button  class="showButton" variant="secondary" v-on:click="edit">Edit</b-button></span></b-col>
        </b-row>  
      </div>
      <div class="form" v-if="show_form">
        <b-form>
          <div class="labels">
            <b-row>
              <b-col>
                <b-form-group label="Ip address:" >
                    <b-form-input
                      type="text"
                      v-model="ip_Info"
                      required
                      placeholder="Enter Ip address">
                    </b-form-input>
                </b-form-group>
              </b-col>
              <b-col> 
                <b-form-group label="Username:">
                    <b-form-input
                      type="text"
                      v-model="username"
                      required
                      placeholder="Enter username">
                    </b-form-input>
                </b-form-group>
              </b-col>
              <b-col>
                <b-form-group label="Your password:">
                  <b-form-input type="password"
                    v-model="password"
                    required
                    placeholder="Enter password">
                  </b-form-input>
                </b-form-group>
              </b-col>  
              <b-col> 
                <b-button type="submit" class="updateButton" variant="secondary" v-on:click="updateData(no)">Update</b-button>
                 <b-button class="cancelButton" variant="danger" v-on:click="cancelButton">Cancel</b-button>
              </b-col>  
            </b-row>
          </div>
        </b-form>
      </div>  
    </b-container>
    <hr>
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
      edit_button : 1,
      // show_button : 0
    }
  },
  methods: {
    edit:function () {
      this.show_form = 1;
      this.edit_button = 0;
    // const information ={
    //     ip_address : this.ip_Info,
    //     password : this.password,
    //     user_name : this.username
    //   }
    },
    updateData : function (data) {
      if(this.ip_Info=='' ||this.username==''||this.password=='')
      {
        alert('Field value cannot be set empty')
      }
       else
       {
           const information ={
            data :{
              ip_address : this.ip_Info,
              passWord : this.password,
              user_name : this.username,  
            },
            index : {
              indexNo : data
            }
          }
          this.$emit('updateData',information);
          this.show_form = 0;
          this.edit_button = 1;
          this.ip_Info = '';
          this.username = '';
          this.password = '';
        }
    },
    cancelButton : function () {
      this.show_form = 0;
      this.edit_button = 1;
      this.ip_Info = '';
      this.username = '';
      this.password = '';
    }
  },
  // mounted(){
  //   console.log('inside f1 component');
  //   console.log(this.data);
  // }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.firewall{
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
  color : white;
  /*margin: 20px;
  padding:10px;*/
  background-color:black;
  font-family: 'Abril Fatface';
  font-size: 20px;
}
showButton{
  float:right;
}
.data{
  color:white;
}
.Firewall_heading {
  color: white;
  font-size :xx-large;
  margin:30px;
  font-family: 'Abril Fatface', cursive;
}
.username {
  margin-right:2px;
  text-indent :20%;

}
.mainInfo {
  font-size :25px;
}
.updateButton{
  margin-top : 30px;
}
.cancelButton{
  margin : 30px 0 0 10px;
}
</style>
