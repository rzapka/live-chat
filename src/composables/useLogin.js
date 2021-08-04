import {ref} from "vue";
import {projectAuth} from "../firebase/config";

const error = ref(null)

const login = async (email, password) => {
    try {
        error.value = null
        return await projectAuth.signInWithEmailAndPassword(email, password)
    } catch(e) {
        error.value = 'Incorrect login credentials'
    }
}

const useLogin = () => {
    return {error, login}
}

export default useLogin