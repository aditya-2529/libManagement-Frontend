import axios from "axios"


const FILE_BASE_REST_API_URLL = 'http://localhost:8080'

class FileService{
    getBookName(custid){
        return axios.get(FILE_BASE_REST_API_URLL+'/'+custid)
    }
    getBooks(fileName){
        return axios.get(FILE_BASE_REST_API_URLL+'/downloadFile/'+fileName)
    }
    createBook(formData,id){
        return axios.post(FILE_BASE_REST_API_URLL+'/uploadFile/'+id,formData)
    }
}

export default new FileService();