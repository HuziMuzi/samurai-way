import React, {useEffect} from "react";
import {follow, requestUsers, setCurrentPage, unfollow} from "../../../Redux/users-reducer";
import {UserCard} from "./UserCard/UserCard";
import Pagination from "../../components/common/Paginator/Paginator";
import {useAppDispatch, useAppSelector} from "../../../hooks/hooks";
import {LoaderIcon} from "../../assets/LoaderIcon/LoaderIcon";
import {UsersBox} from "./styles";




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
                <Pagination totalCount={totalUsersCount} pageCount={pageSize} onClick={onClickPage} currentPage={currentPage}/>
            {isFetching ? <LoaderIcon positions='positionAbsolute'/>
                :
                <div>
                    <UsersBox>
                        {users.map(u => <UserCard
                            key={u.id}
                            user={u}
                            followingInProgress={followingInProgress}
                            follow={followHandler}
                            unfollow={unfollowHandler}/>
                        )}
                    </UsersBox>
                </div>
            }
        </div>
    )
}
