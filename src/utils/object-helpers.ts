import {usersType} from "../Redux/users-reducer";
import {userType} from "../Redux/profile-reducer";


export function updateObjectInArray<T>  (items: T[], itemId: number, objectPropName: any, newObjectProps: any) {
 // @ts-ignore
 return   items.map(user => user[objectPropName] === itemId ? {...user, ...newObjectProps} : user)

}

// export type updateObjectInArrayType<D = []> = {
//   users : D
// }