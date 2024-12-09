export type TTodo =  {
    id: number, 
    text: string, 
    date: string, 
    isChecked: boolean
}

export type THeader = { 
    inputText: string, 
    setInputText: (value: string) => void, 
    addTodo: () => void, 
    deleteAllTodo: () => void,
    deleteLastTodo: () => void, 
    updateAllCounter?:  () => void, 
    completedCount?: () => void, 
    showAll: () => void,
    showCompleted: () => void
}