import React from 'react'

const CreateTask = ({handleSubmit, register, onCreateTask}) => {


    return (
        <div className="formContainer">
            <form onSubmit={handleSubmit(onCreateTask)}>
                <h1>Task Manager</h1>
                <div>
                    <label>
                        {/* Students Name: */}
                        <input  placeholder='Student Name' type="text" {...register('student', {required: true})} />
                    </label>
                </div>
                <div>
                    <label>
                        {/* Task: */}
                        <input  placeholder='task' type="text" {...register('task', {required: true})}/>
                    </label>
                </div>
                <div>
                    <button type="submit">Create Task</button>
                </div>
            </form>
        </div>
    )
}
export default CreateTask
