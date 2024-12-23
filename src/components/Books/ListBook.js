import React, { useEffect, useState } from 'react'
import BooksService from '../../services/Books/BooksService';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import FileService from '../../services/Files/FileService';

export default function ListBook() {
    const [books, setBooks] = useState([]);
    const [bookName , setBookName ] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        getBooks();
    },[])

    const getBooks = () => {
        BooksService.getAllBooks().then((res) => {
            setBooks(res.data);
        }).catch((e) => console.log(e));
    }


    function issueBook(idP,name,title,empid){
        const book = {name,title,empid,custid:id};
        BooksService.updateBooks(idP,book).then((res) => {
            getBooks();
        }).catch((e) => console.log(e));
    }

    
  return (
    <div className = "container">
            <h2 className = "text-center"> List Book </h2>
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th> Book Id </th>
                        <th> Book Name </th>
                        <th> Book Title </th>
                        <th> Book EmpId </th>
                        <th> Book CustId </th>
                        <th> Actions </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        books.map(
                            book =>
                            {
                                
        FileService.getBookName(book.empid).then((res) => {
            // console.log(res.data)
            setBookName(res.data);
        }).catch((e) => console.log(e));
                        return(
                            <tr key = {book.id}> 
                                <td> {book.id} </td>
                                <td> {book.name} </td>
                                <td>{book.title}</td>
                                <td>{book.empid}</td>
                                <td>{book.custid}</td>
                                <td>
                                    {/* <Link className="btn btn-info" to={`/edit-customer/`}>Issue</Link> */}
                                    <button className = "btn btn-info"
                                    style = {{marginLeft:"10px"}} onClick={()=>{issueBook(book.id,book.name,book.title,book.empid)}}> Issue</button>
                                    <button className='btn btn-info'
                                    style={{marginLeft: "10px"}}><a href={`http://localhost:8080/downloadFile/`+bookName}>Open Book</a></button>
                                </td>
                            </tr>
                        )}
                        )
                    }
                </tbody>
            </table>
        </div>
  )
}
