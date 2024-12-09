import { createSlice, current } from "@reduxjs/toolkit";
import { TTodo } from "../types";

const todoSlice = createSlice({
    name: "todo",
    initialState: {
        todo: [],
        all: 0, 
        completedTodo: 0,
        last: [], 
        count: 0,
        isChecked: false, 
        checkedTodo: [], 
        isOnlyCompletedShown: false
    },
    reducers: {
        addTodoRedux(state: any, {payload}: {payload: any}) {
            state.todo.push(payload);
        },
        removeTodoRedux(state: any, {payload}: {payload: any}) {
            const index = state.todo.findIndex((item: TTodo) => item.id === payload)
            state.todo.splice(index, 1);
        },
        changeTodoRedux(state: any, {payload}: {payload: any}) {
            const current = state.todo.find((item: TTodo) => item.id === payload);
            state.isChecked = !current.isChecked
            if (current != undefined) {
                current.isChecked = !current.isChecked;
            }
        },
        deleteAllTodoRedux(state: any) {
            state.todo.length = 0;
        }, 
        deleteLastTodoRedux(state: any) {
            state.last = state.todo.pop(); 
        }, 
        updateAllCounterRedux(state: any) {
            state.all = state.todo.length;
        },
        updateCompletedCounterRedux(state: any) {
            state.checkedTodo = state.todo.filter((item: TTodo) => item.isChecked);
            state.count = state.checkedTodo.length;
            console.log(state.checkedTodo)
        }, 
        showAllRedux(state: any) {
            state.isOnlyCompletedShown = false
        }, 
        showCompletedRedux(state: any) {
            state.isOnlyCompletedShown = true
        }
    }
})


const {actions, reducer} = todoSlice;

export default reducer;
export const {addTodoRedux, removeTodoRedux, changeTodoRedux, deleteAllTodoRedux, deleteLastTodoRedux, updateAllCounterRedux, updateCompletedCounterRedux, showAllRedux, showCompletedRedux} = actions;