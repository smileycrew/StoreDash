import { editType } from "../../managers/types"

export const EditProduct = ({ displayEditTypeForm, setDisplayEditTypeForm, handleGetTypes, typeToEdit, setTypeToEdit }) => {
    // handle function for edit type form
    const handleEditTypeForm = (event) => {
        const copy = { ...typeToEdit }
        const { name, value } = event.target
        if (name === "name") {
            copy.name = value
            setTypeToEdit(copy)
        }
    }
    // handle function to edit type
    const handleEditType = () => {
        editType(typeToEdit).then(() => {
            setTypeToEdit({})
            handleGetTypes()
        })
    }
    // hanle function to cancel edit type form
    const handleCancelEditTypeForm = () => {
        setDisplayEditTypeForm(false)
    }
    return (
        <div className={`md:bg-white md:border md:flex flex-col ${displayEditTypeForm ? "flex" : "hidden"} gap-5 p-5 md:rounded-lg`}>
            <div className="flex flex-wrap justify-between mb-3">
                <p className="font-semibold text-xl">Edit</p>
                <button className="border border-emerald-600 h-[2rem] hover:bg-emerald-700/20 px-5 rounded-full text-emerald-800 transition" onClick={() => setTypeToEdit({})}>Clear fields</button>
            </div>
            <div className="flex flex-col justify-center gap-y-3">
                <div className="relative">
                    <input className="input-layout peer" name="name" onChange={handleEditTypeForm} required type="text" value={typeToEdit.name || ""} />
                    <label className="label-layout peer-focus:text-gray-950">* Name</label>
                </div>
            </div>
            <button className="button-secondary md:hidden text-2xl" onClick={handleCancelEditTypeForm}>Cancel</button>
            <button className="button-primary text-2xl" onClick={handleEditType}>Edit</button>
        </div>
    )
}