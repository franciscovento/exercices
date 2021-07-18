import React from 'react'

const CreateTask = ({handleSubmit, register, onCreateTask}) => {


    return (
        <div className="formContainer">
            <form onSubmit={handleSubmit(onCreateTask)}>
                <div>
                    <label>
                        Students Name:
                        <input type="text" {...register('student', {required: true})} />
                    </label>
                </div>
                <div>
                    <label>
                        Task:
                        <input type="text" {...register('task', {required: true})}/>
                    </label>
                </div>
                <div>
                    <button type="submit">Crear tarea</button>
                </div>
            </form>
        </div>
    )
}
export default CreateTask
