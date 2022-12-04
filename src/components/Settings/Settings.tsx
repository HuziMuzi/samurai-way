import React from 'react';
import s from './Settings.module.css'
import GitHub from "../common/icons/GitHub";
import Facebook from "../common/icons/Facebook";
import Inst from "../common/icons/Inst";
import Twitter from "../common/icons/Twitter";
import Vk from "../common/icons/Vk";
import WebSite from "../common/icons/WebSite";
import Youtube from "../common/icons/Youtube";
import Main from "../common/icons/Main";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {InputChangeSocial} from "./Input/InputChangeSocial";
import {useForm} from "react-hook-form";
import {savePhotoThunk, saveProfile} from "../../Redux/profile-reducer";


export type TSettingData = {
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: boolean
    facebook: null | string
    github: null | string
    instagram: null | string
    mainLink: null | string
    twitter: null | string
    vk: null | string
    website: null | string
    youtube: null | string
    photos: any

}

export type TActiveProfile = {
    AboutMe: string
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: null | string
    contacts: {
        facebook: null | string
        github: null | string
        instagram: null | string
        mainLink: null | string
        twitter: null | string
        vk: null | string
        website: null | string
        youtube: null | string
    }
}


const Settings = () => {
    const dispatch = useAppDispatch()

    const {register, handleSubmit} = useForm<TSettingData>()
    const userData = useAppSelector(state => state.profileReducer.profile)
    const contacts = useAppSelector(state => state.profileReducer.profile.contacts)

    const onClickSubmit = (values: TSettingData) => {
        const saveSettingsProfile = {
            contacts: {
                facebook: values.facebook,
                website: values.website,
                vk: values.vk,
                twitter: values.twitter,
                instagram: values.instagram,
                youtube: values.youtube,
                github: values.github,
                mainLink: values.mainLink
            },
            AboutMe: 'just about me',
            lookingForAJob: values.lookingForAJob,
            lookingForAJobDescription: values.lookingForAJobDescription,
            fullName: values.fullName,
        }

        dispatch(saveProfile(saveSettingsProfile))
        // console.log(values.photos)
        console.log(values.photos)

        if (values.photos.length) {
            console.log(values.photos[0])
            dispatch(savePhotoThunk(values.photos[0]))
        }
    }

    return (
        <form onSubmit={handleSubmit(onClickSubmit)}>
            <div>
                Settings
                <div className='flex'>
                    <div className=''>
                        <img width={'150px'}
                             src={userData.photos?.large || 'https://i.imgur.com/lqN6w1t.png'}
                             alt=""/>
                        <input type='file' {...register('photos')} />
                    </div>

                    <div >
                        <div>Full name:
                            <input {...register('fullName')} value={userData.fullName}/>
                        </div>
                        <div>looking for a job: {userData.lookingForAJob}
                            <input type={'checkbox'} {...register('lookingForAJob')}  checked={userData.lookingForAJob}/>
                        </div>
                        <div>looking for a job:
                            <input type={'text'} {...register('lookingForAJobDescription')} value={userData.lookingForAJobDescription}/>
                        </div>
                    </div>
                </div>


                <div>Change social media:</div>
                <div className={s.socialBlock}>
                    <div>
                        <div>
                            <InputChangeSocial icon={<GitHub/>} register={register} name={'github'} value={contacts.github}/>
                        </div>
                        <div>
                            <InputChangeSocial icon={<Facebook/>} register={register} name='facebook' value={contacts.facebook}/>
                        </div>
                        <div>
                            <InputChangeSocial icon={<Inst/>} register={register} name='instagram' value={contacts.instagram}/>
                        </div>
                        <div>
                            <InputChangeSocial icon={<Twitter/>} register={register} name={'twitter'} value={contacts.twitter}/>
                        </div>
                    </div>

                    <div>

                        <div>
                            <InputChangeSocial icon={<Vk/>} register={register} name='vk' value={contacts.vk}/>
                        </div>
                        <div>
                            <InputChangeSocial icon={<WebSite/>} register={register} name='website' value={contacts.website}/>
                        </div>
                        <div>
                            <InputChangeSocial icon={<Youtube/>} register={register} name='youtube' value={contacts.youtube}/>
                        </div>
                        <div>
                            <InputChangeSocial icon={<Main/>} register={register} name='mainLink' value={contacts.mainLink}/>
                        </div>
                    </div>
                </div>

                <button >Save</button>
            </div>
        </form>
    );
};

export default Settings;