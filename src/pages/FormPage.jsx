import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";


const FormPage = () => {
    const navigate = useNavigate()
    const [post, setPost] = useState({
        title:"",
        body:""
    })

    const changeInput =(event)=>{

        const {value, name}=event.target

        setPost({
            ...post,
            [name]:value
        })

    }
    const submitPost = async (event)=>{
        event.preventDefault()

        try {
            const response = await axios.post('https://dummyjson.com/posts/add', {
                userId:1,
                title: post.title,
                body: post.body
            })
            console.log(response.data)
            navigate('/')
        } catch (error) {
            console.log('Ошибка: ' + error)
        }
    }

    return (
        <div>
            <form onSubmit={submitPost} onChange={changeInput}>
                <input type="text" placeholder="заголовок" name='title' value={post.title}/>
                <textarea placeholder="Введите текст..." name='body' value={post.body} rows={5} cols={30}/>
                <br/>
                <button type="submit">Отправить</button>
            </form>
        </div>
    );
};

export default FormPage;