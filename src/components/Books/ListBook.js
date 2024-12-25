import React, { useEffect, useState } from 'react'
import BooksService from '../../services/Books/BooksService';
import { useParams } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import FileService from '../../services/Files/FileService';

export default function ListBook() {
    const [books, setBooks] = useState([]);
    const [obooks, setOBooks] = useState([]);
    const [bookName , setBookName ] = useState([]);
    const {id} = useParams();
    
    var a = new Set([]);
    var data = [];

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
            
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Categories
                </Dropdown.Toggle>
                
      <Dropdown.Menu>
            {books.map(
                
                book => {
                    
                        return (
                            <Dropdown.Item onClick={() => {
                                BooksService.getBooksCategory(book.category).then((res) => {
                                    data = res.data;
                                    setOBooks(data);
                                    console.log(obooks);
                                }).catch((e) => console.log(e))
                            }}>
                                {book.category}
                            </Dropdown.Item>
                        )
                    
                }
            )}
            </Dropdown.Menu>
  
            </Dropdown>
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th> Book Id </th>
                        <th> Book Name </th>
                        <th> Book Title </th>
                        <th> Book EmpId </th>
                        <th> Book CustId </th>
                        <th> Category</th>
                        <th> Actions </th>
                    </tr>
                </thead>
                <tbody>
                    {data.length === 0 ? 
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
                                        <td>{book.category}</td>
                                        <td>
                                            {/* <Link className="btn btn-info" to={`/edit-customer/`}>Issue</Link> */}
                                            <button className = "btn btn-info"
                                            style = {{marginLeft:"10px"}} onClick={()=>{issueBook(book.id,book.name,book.title,book.empid)}}> Issue</button>
                                            {book.custid && <button className='btn btn-info'
                                            style={{marginLeft: "10px"}}><a href={`http://localhost:8080/downloadFile/`+bookName}>Open Book</a></button>}
                                        </td>
                                    </tr>
                                )
                            }
                        ):
                        
                        data.map(
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
                                        <td>{book.category}</td>
                                        <td>
                                            {/* <Link className="btn btn-info" to={`/edit-customer/`}>Issue</Link> */}
                                            <button className = "btn btn-info"
                                            style = {{marginLeft:"10px"}} onClick={()=>{issueBook(book.id,book.name,book.title,book.empid)}}> Issue</button>
                                            <button className='btn btn-info'
                                            style={{marginLeft: "10px"}}><a href={`http://localhost:8080/downloadFile/`+bookName}>Open Book</a></button>
                                        </td>
                                    </tr>
                                )
                            }
                        )
                    }
                </tbody>
            </table>
        </div>
  )
}
