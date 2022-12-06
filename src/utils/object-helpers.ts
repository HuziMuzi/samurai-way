
export function updateObjectInArray<T>  (items: T[], itemId: number, objectPropName: any, newObjectProps: any) {
 // @ts-ignore
 return   items.map(user => user[objectPropName] === itemId ? {...user, ...newObjectProps} : user)
}
