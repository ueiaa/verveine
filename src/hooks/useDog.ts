import {reactive,onMounted} from 'vue'
import axios from 'axios';

//https://dog.ceo/api/breed/pembroke/images/random
    
export default function(){

    let dogList = reactive([
        'https://images.dog.ceo/breeds/pembroke/n02113023_4373.jpg'
    ])

    //钩子
    onMounted(()=>{
        getDog()
    })

    async function getDog(){
        try {
            let result = await axios.get('https://dog.ceo/api/breed/pembroke/images/random')
            console.log(result.data)
            dogList.push(result.data.message)
        } catch (error) {
            alert(error)
        }
        
    }

    //向外部提供
    return {dogList,getDog}
}
    