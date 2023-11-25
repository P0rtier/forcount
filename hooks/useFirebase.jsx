// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
import {getFirestore, getDocs, collection} from "firebase/firestore";
import {useState, useEffect} from 'react';

const firebaseConfig = {
    apiKey: "AIzaSyAsWRlQ87zkT2RGl93nPA4i9GmnyHAJ4Wg",
    authDomain: "pim-db-368e5.firebaseapp.com",
    projectId: "pim-db-368e5",
    storageBucket: "pim-db-368e5.appspot.com",
    messagingSenderId: "1083602125854",
    appId: "1:1083602125854:web:77d5bf262efab0c0ca1a0f",
    measurementId: "G-NX4QMW5DJW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firestore = getFirestore(app);

export const useFirestore = (collection_name, query) => {
    const [documents, setDocuments] = useState([]);
    const [loading, setLoading] = useState(true);

    const getCollection = async () => {
        let querySnapshot;
        if (query !== undefined) {
            querySnapshot = await getDocs(query);
        } else {
            querySnapshot = await getDocs((collection(firestore, collection_name)));
        }
        const documents = querySnapshot.docs.map(doc => doc.data());
        setDocuments(documents);
        setLoading(false);
        return documents;
    }

    useEffect(() => {
        getCollection();
    }, [collection, query]);

    const refresh = () => {
        return(getCollection())
    }

    return {documents, loading, refresh, getCollection};
};

