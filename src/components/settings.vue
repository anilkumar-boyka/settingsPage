<template>
 <div>
 		<firewall1 v-for="(i,index) in info" :data=i :no=index v-on:updateData="updateData($event)"></firewall1>
 </div>
</template>

<script>
import firebase from 'firebase'
import firewall1 from '@/components/firewall1'
export default {
  name: 'settings',
  components : {
  	firewall1,
  },
  data () {
    return {
    	info : []
    }
  },
  mounted() {
      console.log('hellooo')
      this.retrieveData();
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
</style>