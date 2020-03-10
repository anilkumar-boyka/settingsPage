<template>
  <div class="firewall">
    <div>
        <h2>Firewall 1</h2>
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
          <!-- <button v-on:click.prevent="saveData()">Save data</button> -->
          <b-button type="submit" variant="secondary" v-on:click="saveData()" >Update</b-button>
          <b-button  class="showButton" variant="secondary" v-on:click="showData()">click here to show data</b-button>
        </b-form>
        <div>
          
          <div class="info" v-if='show'>
            <span>Ip address - {{ip}}<br></span>
            Username - {{uname}}
          </div>  
        </div>
      <hr>
    <!-- <firewall2 /> -->
    </div>  
  </div>
</template>

<script>
import firebase from 'firebase'
import Firewall2 from '@/components/firewall2'
export default {
  name: 'settings',
  components: {
    Firewall2
  },
  data () {
    return {
      username: '',
      password: '',
      ip_Info: '',
      data:{},
      show : 0,
      ip :'',
      pswd :'',
      uname : ''
    }
  },
  methods: {
    ipInfo: function () {
      // this.ip_Info = 123
      console.log('hello')

    },
    showData: function () {
      var vm=this;
      var todoRef = firebase.database().ref("items/");
      todoRef.on("value", function(snapshot) {
        console.log(snapshot.val()[0].ip_address)
        vm.ip = snapshot.val()[0].ip_address;
        vm.uname = snapshot.val()[0].user_name;
        vm.show=1;
      });
    },
    saveData:function () {
      var vm=this;
      console.log('hello');
      this.$http.post('https://jsonplaceholder.typicode.com/posts',{
        userName:vm.username,
        passWord:vm.password,
        ipinfo:vm.ip_Info,
      }).then(data=>console.log(data)).catch(err=>console.log('error is'+err));
       var info = firebase.database().ref();
      info.child('items').set([{
          ip_address: vm.ip_Info,
          user_name: vm.username,
          passWord:vm.password
      
      }]);
    }
  },
  mounted(){
    // this.showData();
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
  margin-bottom:50px;
  padding-top:30px;
  color:white;
}
hr{
  color:white;
  border:1px solid white;
}
.info{
  color : black;
  margin: 50px;
  padding:20px;
  background-color:white;
  font-family: 'Abril Fatface';
  font-size: xx-large
}
.showButton{
  margin-left: 100px;
}
/* span{ */
  /* background-color: grey */
/* } */
</style>
