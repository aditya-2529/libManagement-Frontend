import axios from 'axios'

const Customer_BASE_REST_API_URL = process.env.API_CUST || 'http://localhost:8080/api/v1/customer';


class CustomerService{

    getAllCustomers(){
        return axios.get(Customer_BASE_REST_API_URL)
    }

    createCustomer(Customer){
        return axios.post(Customer_BASE_REST_API_URL, Customer)
    }

    getCustomerById(CustomerId){
        return axios.get(Customer_BASE_REST_API_URL + '/' + CustomerId);
    }

    updateCustomer(CustomerId, Customer){
        return axios.put(Customer_BASE_REST_API_URL + '/' +CustomerId, Customer);
    }

    getCustomerName(cut){
        return axios.get(Customer_BASE_REST_API_URL + '/' + cut);
    }

    deleteCustomer(CustomerId){
        return axios.delete(Customer_BASE_REST_API_URL + '/' + CustomerId);
    }
}

export default new CustomerService();