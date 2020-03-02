import React from 'react'
import {useTranslation} from 'react-i18next'
 function Home() {
     const {t}= useTranslation()
    return (
        <div>
            <h1>{t('welcome',{NickName:'dark Sider'})}</h1>
       
        </div>
    )
}
export default Home