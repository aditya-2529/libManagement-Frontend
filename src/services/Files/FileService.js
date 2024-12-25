import axios from "axios"

const FILE_BASE_REST_API_URLL = 'https://library-management-system-latest.onrender.com';


// const FILE_BASE_REST_API_URLL = 'http://localhost:8080'

class FileService{
    getBookName(custid){
        return axios.get(FILE_BASE_REST_API_URLL+'/'+custid)
    }
    getBooks(fileName){
        return axios.get(FILE_BASE_REST_API_URLL+'/downloadFile/'+fileName)
    }
    getAllBooksName(){
        return axios.get(FILE_BASE_REST_API_URLL)
    }
    createBook(formData,id){
        return axios.post(FILE_BASE_REST_API_URLL+'/uploadFile/'+id,formData)
    }
}

export default new FileService();