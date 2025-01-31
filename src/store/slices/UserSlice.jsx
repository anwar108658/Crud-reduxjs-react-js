import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const addData = createAsyncThunk("addData",async (data) => {
    const response = await fetch("https://679809ebc2c861de0c6ebc0d.mockapi.io/users",{
        method:"POST",
        headers:{
            "Content-type":"application/json",
        },
        body:JSON.stringify(data)
    })
    try {
        return await response.json();
    } catch (error) {
        console.log("AddData-Error",error)
        return error
    }
})
export const getUsers = createAsyncThunk("getUsers",async () => {
    const response = await fetch("https://679809ebc2c861de0c6ebc0d.mockapi.io/users")
    try {
        return await response.json();
    } catch (error) {
        console.log("AddData-Error",error)
        return error
    }
})
export const deletUser = createAsyncThunk("deletUser",async (id) => {
    const response = await fetch(`https://679809ebc2c861de0c6ebc0d.mockapi.io/users/${id}`,{method:"Delete"})
    try {
        return await response.json();
    } catch (error) {
        console.log("Update-Error",error)
        return error
    }
})
export const updateUser = createAsyncThunk("updateUser",async (data) => {
    const response = await fetch(`https://679809ebc2c861de0c6ebc0d.mockapi.io/users/${data.id}`,{method:"PUT",headers:{"Content-type":"application/json",},body:JSON.stringify(data)})
    try {
        return await response.json();
    } catch (error) {
        console.log("Delete-Error",error)
        return error
    }
})

export const UserSlice = createSlice({
    name:"user",
    initialState:{
        userData:[],
        isloading:false,
        isError:""
    },
    extraReducers:(builder) => {
        // Add Data
        builder.addCase(addData.pending,(state) =>{
            state.isloading = true
        })
        builder.addCase(addData.fulfilled,(state,action) =>{
            state.userData.push(action.payload)
            state.isloading=false
        })
        builder.addCase(addData.rejected,(state,action) =>{
            state.isError=String(action.payload)
        })

        // get all Users
        builder.addCase(getUsers.pending,(state) =>{
            state.isloading = true
        })
        builder.addCase(getUsers.fulfilled,(state,action) =>{
            state.userData=action.payload
            state.isloading=false
        })
        builder.addCase(getUsers.rejected,(state,action) =>{
            state.isError=String(action.payload)
        })

        // Delete User
        builder.addCase(deletUser.pending,() =>{
            // state.isloading = true
        })
        builder.addCase(deletUser.fulfilled,(state,action) =>{
            state.userData=state.userData.filter((item) => item.id !== action.payload.id)
        })
        builder.addCase(deletUser.rejected,(state,action) =>{
            state.isError=String(action.payload)
        })

        // Update User
        builder.addCase(updateUser.pending,(state) =>{
            state.isloading = true
        })
        builder.addCase(updateUser.fulfilled,(state,action) =>{
            state.userData = state.userData.map((item) => item.id == action.payload.id?action.payload:item)
        })
        builder.addCase(updateUser.rejected,(state,action) =>{
            state.isError=String(action.payload)
        })

    }
})

export default UserSlice.reducer