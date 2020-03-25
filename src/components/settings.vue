<template>
 <div>
   <!-- <h1>FIREWALL</h1> -->
    <section id="1">
 		  <firewall1 v-for="(i,index) in info" :data=i :no=index v-on:updateData="updateData($event)"></firewall1>
    </section>
    <section id="2">
      <proxy v-for="(i,index) in info" :data=i :no=index v-on:updateData="updateData($event)"></proxy>
    </section>  
    <section id="3">
      <ips v-for="(i,index) in info" :data=i :no=index v-on:updateData="updateData($event)"></ips>
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
    }

  }
}
</script>


<style scoped>
/* h1{
  background-color: aliceblue;
  margin: 0 500px;
} */
</style>
