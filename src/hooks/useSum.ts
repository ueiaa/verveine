import {ref} from 'vue'

export default function(){
    let sum = ref(0)
    function add() {
        sum.value += 1
    }

    //向外部提供
    return {sum, add}
}


    