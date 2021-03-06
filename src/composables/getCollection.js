import {ref, watchEffect} from "vue";
import { projectFirestore } from "../firebase/config";

const getCollection = (collection) => {
    const documents = ref(null)
    const error = ref(null)

    let collectionRef = projectFirestore.collection(collection).orderBy('created')


   const unsub = collectionRef.onSnapshot(snap => {
        let results = []

        snap.docs.forEach(doc => {
           doc.data().created && results.push({ ...doc.data(), id: doc.id})
        })
        documents.value = results
        error.value = null
    }, err => {
        console.log(err.message)
        error.value = 'Could not fetch data'
    })

    watchEffect(onInvalidate => {
        // unsub from prev collection when watcher is stopped (component unmounted)
        onInvalidate(() => unsub())
    })
    return {documents, error}
}
export default getCollection
