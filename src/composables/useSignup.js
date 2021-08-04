import {ref} from "vue";
import {projectAuth} from "../firebase/config";

const error = ref(null)

const signup = async (email, password, displayName) => {
    try {
        const resp = await projectAuth.createUserWithEmailAndPassword(email,password)
        if (!resp) {
            throw new Error('Could not complete the signup')
        }
        await resp.user.updateProfile({displayName})
        error.value = null
        return resp
    }catch (e) {
        console.log(e.message)
        error.value = e.message
    }


}

const useSignup = () => {
    return {error , signup}
}

export default useSignup