<template>
 <div>
 	<firewall1 :infos=info></firewall1>
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
  	  var vm=this;
  	  var l;
      var todoRef = firebase.database().ref("items/");
      todoRef.on("value", function(snapshot) {
      	l=snapshot.val().length;
      	console.log('l is'+l)
      	console.log(snapshot.val())
      	vm.info = snapshot.val();
      	console.log('info is')
      	console.log(vm.info)
      	// for(i=0;i<l;i++){
      	// 	vm.info.push({snapshot.val()[i].})
      	// }
        // console.log(snapshot.val()[0].ip_address)
        // vm.ip = snapshot.val()[0].ip_address;
        // vm.uname = snapshot.val()[0].user_name;
      });	
  }
}  
</script>


<style scoped>
</style>