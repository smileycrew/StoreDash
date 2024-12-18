import AdminFormHeading from "../../components/admin-form-heading"
import Input from "../../components/input"
import { AddType } from "../../managers/types"

export const AddProduct = ({ displayAddTypeForm, setDisplayAddTypeForm, type, setType, handleGetTypes }) => {
    // handle function for addTypeForm
    const handleAddTypeForm = (event) => {
        setType(event.target.value)
    }
    // handle function to add type
    const handleAddType = () => {
        AddType({ name: type }).then(() => {
            setType("")
            setDisplayAddTypeForm(false)
            handleGetTypes()
        })
    }
    // handle function to cancel display edit form
    const handleCancelDisplayEditForm = () => {
        setDisplayAddTypeForm(false)
    }
    return (
        <div className={`md:bg-white md:border md:flex flex-col ${displayAddTypeForm ? "flex" : "hidden"} gap-5 p-5 md:rounded-lg md:shadow`}>
            <div className="flex flex-wrap justify-between mb-3">
                <AdminFormHeading formTitle="Add a type" onClick={() => setType("")} />
            </div>

            <div className="flex flex-col justify-center gap-y-3">
                <div className="relative">
                    <Input inputName="name" inputStyle="inline" inputType="text" onChange={handleAddTypeForm} required value={type || ""}>
                        * Name
                    </Input>
                </div>
            </div>
            <button className="button-secondary md:hidden text-2xl" onClick={handleCancelDisplayEditForm}>Cancel</button>
            <button className="button-primary text-2xl" onClick={handleAddType}>Add</button>
        </div>
    )
}
