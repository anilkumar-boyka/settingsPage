<template>
  <div class="firewall">
    <div>
        <h2>Firewall 1</h2>
        <b-form method="post">
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
          <b-button variant="secondary"v-on:click.prevent="saveData()" >Update</b-button>
        </b-form>
        <div>
          <b-button m-t=1 variant="secondary"v-on:click="showData()">click here to show data</b-button>
          <div v-if='show'>
            {{showData()}}
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
      ip_Info: null,
      data:{},
      show : 0
    }
  },
  methods: {
    ipInfo: function () {
      // this.ip_Info = 123
      console.log('hello')

    },
    showData: function () {
      this.show=1;
      console.log('showData')
      return 4;

    },
    saveData:function () {
      console.log('hello');
      this.$http.post('https://jsonplaceholder.typicode.com/posts',{
        userName:this.userName,
        passWord:this.password,
        ipinfo:this.ip_Info,
      }).then(data=>console.log(data)).catch(err=>console.log('error is'+err));
       var info = firebase.database().ref();
      info.child('items').push({
          ip_address: 30,
          user_name: 1,
          passWord:this.password
          
      });
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
  height:100%;
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
</style>
