import React from 'react'
import Layout from '../../../component/Layout'
import { useRouter } from 'next/router'
import style from '../../styles/Users.module.css'

interface UserProps {
    dataUsers: Array<any>
}
export default function Users(props: UserProps) {
    const { dataUsers } = props
    const router = useRouter()

    // console.log("isi datanya : ", dataUsers)
    return (
        <Layout pageTitle="User Page">
            {dataUsers.map( (user) => {
                return (
                    <div key={user.id} onClick={()=> router.push(`/users/${user.id}`)} className={style.card}>
                        <p>{user.name}</p>
                        <p>{user.email}</p>
                    </div>
                )
            })}
        </Layout>
    )
}

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const dataUsers = await res.json()

    return {
        props: {
            dataUsers,
        },
    };
}
