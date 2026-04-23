let arr1: number[] = [1,2,3,4,5]
let arr2: [number, string] = [1, 'test'] // --> Tupple
// let arr2: [number, string] = [1, 'test', 'test2'] --> Type '[number, string, string]' is not assignable to type '[number, string]'

function test<T>(a: T, b: T): T {
    return "test" as T
}

test<string>("hey", "hello")


const nameAgeMap: { [index: string]: string | number } = {}
nameAgeMap.Jack = 5
nameAgeMap.Mark = 'Fifty'

enum UserRole {
    ADMIN = 'admin',
    SUPERADMIN = 'root',
    GUEST = 'guest',
}