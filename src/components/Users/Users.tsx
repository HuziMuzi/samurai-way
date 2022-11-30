import React, {useEffect} from "react";
import {follow, requestUsers, setCurrentPage, unfollow} from "../../Redux/users-reducer";
import {User} from "./User";
import Pagination from "../common/Paginator/Paginator";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {Preloader} from "../common/Preloader/Preloader";




export const Users = () => {
    const isFetching =  useAppSelector(state => state.usersReducer.isFetching)
    const users =  useAppSelector(state => state.usersReducer.users)
    const totalUsersCount =  useAppSelector(state => state.usersReducer.totalUsersCount)
    const pageSize =  useAppSelector(state => state.usersReducer.pageSize)
    const currentPage =  useAppSelector(state => state.usersReducer.currentPage)
    const followingInProgress =  useAppSelector(state => state.usersReducer.followingInProgress)
   const dispatch = useAppDispatch()

    const onClickPage = (pageNumber : number)=> {
        dispatch(setCurrentPage(pageNumber))
        dispatch(requestUsers(pageNumber, pageSize))
    }

    const followHandler = (userID:number) => {
        dispatch(follow(userID))
    }

    const unfollowHandler = (userID:number) => {
        dispatch(unfollow(userID))
    }

    useEffect(() => {
        dispatch(requestUsers(1, pageSize))

    }, [])
    return (
        <div>
            {isFetching ? <Preloader/>
                :
                <div>
                <Pagination totalCount={totalUsersCount} pageCount={pageSize} onClick={onClickPage} currentPage={currentPage}/>
                    <div>
                        {users.map(u => <User
                            key={u.id}
                            user={u}
                            followingInProgress={followingInProgress}
                            follow={followHandler}
                            unfollow={unfollowHandler}/>
                        )}
                    </div>
                </div>
            }
        </div>
    )
}