<template>
 <div>
   <!-- <h1>FIREWALL</h1> -->
    <span id="mySidenav" class="sidenav">
                  <!-- <h6>Go to</h6> -->
                  <a href="#1">Firewall</a>
                  <a href="#2">Proxy</a>
                  <a href="#3">Ips</a>
                </span>
    <section id="1">
     
 		  <firewall1 v-for="(i,index) in info" :data=i :no=index v-on:updateData="updateData($event)" v-on:toggle_nav_bar="toggle_nav($event)" v-on:cancel_edit="cancel"></firewall1>
    </section>
    <section id="2">
      <proxy v-for="(i,index) in info" :data=i :no=index v-on:updateData="updateData($event)" v-on:toggle_nav_bar="toggle_nav($event)" v-on:cancel_edit="cancel"></proxy>
    </section>  
    <section id="3">
      <ips v-for="(i,index) in info" :data=i :no=index v-on:updateData="updateData($event)" v-on:toggle_nav_bar="toggle_nav($event)" v-on:cancel_edit="cancel"></ips>
    </section>    
 </div>
</template>

<script>
import firebase from 'firebase'
import firewall1 from '@/components/firewall1'
import proxy from '@/components/proxy'
import ips from '@/components/ips'
export default {
  name: 'settings',
  components : {
  	firewall1,
    proxy,
    ips
  },
  data () {
    return {
    	info : []
    }
  },
  mounted() {
      console.log('hellooo')
      this.retrieveData();
      this.router.push('/');
  },
  methods : {
    updateData : function (receivedData) {
      document.getElementById("mySidenav").style.width = "170px";
      var index = receivedData.index.indexNo;
      var todoRef = firebase.database();
      todoRef.ref("items/"+index).update(
       receivedData.data);
    },
    retrieveData : function () {
      var vm=this;
      var l;
      var todoRef = firebase.database().ref("items/");
      todoRef.on("value", function(snapshot) {
        l=snapshot.val().length;
        vm.info = snapshot.val();
      });
    },
    toggle_nav : function(toggle_data)
    {
      console.log(toggle_data);
      document.getElementById("mySidenav").style.width = "0";
    },
    cancel : function (){
      console.log("cancel clicked")
      document.getElementById("mySidenav").style.width = "170px";

    }
  }
}
</script>


<style scoped>
/* h1{
  background-color: aliceblue;
  margin: 0 500px;
} */
.sidenav {
  height: 40%;
  width: 0%;
  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;
  /* background-color: #d1cebd; */
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
   background:rgba(255,255,255, 0.7);
 
}
#mySidenav {
  width : 160px;
}
.sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: black;
  opacity: 0.8;
  display: block;
  transition: 0.3s;
  font-family: 'Bebas Neue', cursive;
  font-size : 30px;
}
.sidenav a:hover {
  color: white;
}

</style>
