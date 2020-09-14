const initialState: Array<InitialStateType> = [
    {id: '1', name: 'Katia', age: 12},
    {id: '2', name: 'Denis', age: 20},
    {id: '3', name: 'Toni', age: 16},
    {id: '4', name: 'Alisa', age: 23},
]

export const hwReducer = (state: Array<InitialStateType> = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'SORT-DATA':
            return [...state.sort((a, b) => 0 - (a.name > b.name
                ? (action.sortDirection == 'up' ? -1 : 1)
                : (action.sortDirection == 'up' ? 1 : -1))
            )]
        case 'CHECK-AGE':
            return [...state.filter((v) => v.age >= 18)]
        default:
            return state;
    }
}

export const sortUpNamesAC = (arrayData: InitialStateType[]) => ({type: 'SORT-UP-NAMES', arrayData} as const)
export const sortDownNamesAC = (arrayData: InitialStateType[]) => ({type: 'SORT-DOWN-NAMES', arrayData} as const)
export const sortDataAC = (arrayData: InitialStateType[], sortDirection: SortDirectionType) => ({
    type: 'SORT-DATA',
    arrayData,
    sortDirection
} as const)
export const checkAgeAC = (arrayData: InitialStateType[]) => ({type: 'CHECK-AGE', arrayData} as const)

// TYPES
export type InitialStateType = {
    id: string
    name: string
    age: number
}


export type ActionsType = SortUpNamesType | SortDownNamesType | SortNamesType | CheckAgeType

export type SortUpNamesType = ReturnType<typeof sortUpNamesAC>
export type SortDownNamesType = ReturnType<typeof sortDownNamesAC>
export type SortNamesType = ReturnType<typeof sortDataAC>
export type CheckAgeType = ReturnType<typeof checkAgeAC>
export type SortDirectionType = 'up' | 'down'