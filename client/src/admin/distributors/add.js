import AdminFormHeading from "../../components/admin-form-heading"
import Input from "../../components/input"
import { addDistributor } from "../../managers/distributors"

export const AddDistributor = ({ distributor, setDistributor, displayAddDistributorForm, setDisplayAddDistributorForm, handleGetDistributors }) => {
    // handle add distributor form
    const handleAddDistributorForm = (event) => {
        const copy = { ...distributor }
        const { name, value } = event.target
        if (name === "name") {
            copy.name = value
        } else if (name === "street") {
            copy.street = value
        } else if (name === "city") {
            copy.city = value
        } else if (name === "state") {
            copy.state = value
        } else if (name === "zipcode") {
            copy.zipcode = value * 1
        }
        setDistributor(copy)
    }
    // handle function to add distributor
    const handleAddDistributor = () => {
        addDistributor(distributor).then(() => {
            setDistributor({})
            handleGetDistributors()
        })
    }
    // handle function to cancel display add distributor form
    const handleCancelDisplayAddDistributorForm = () => {
        setDisplayAddDistributorForm(false)
    }
    return (
        <div className={`md:bg-white md:border md:flex flex-col ${displayAddDistributorForm ? "flex" : "hidden"} p-5 md:rounded-lg`}>
            <div className="flex flex-wrap justify-between mb-3">
                <AdminFormHeading formTitle="Add a distributor" onClick={() => setDistributor({})} />
            </div>

            <div className="flex flex-col justify-center gap-y-3">
                <div className="relative">
                    <Input>* Name</Input>
                    <input className="input-layout md:w-auto peer w-full" name="name" onChange={handleAddDistributorForm} required type="text" value={distributor.name || ""} />
                    <label className="label-layout peer-focus:text-gray-950">* Name</label>
                </div>

                <div className="relative">
                    <input className="input-layout peer w-full" name="street" onChange={handleAddDistributorForm} required type="text" value={distributor.street || ""} />
                    <label className="label-layout peer-focus:text-gray-950">* Street</label>
                </div>

                <div className="flex flex-col md:flex-row gap-3">
                    <div className="relative">
                        <input className="input-layout peer w-full" name="city" onChange={handleAddDistributorForm} required type="text" value={distributor.city || ""} />
                        <label className="label-layout peer-focus:text-gray-950">* City</label>
                    </div>

                    <div className="relative">
                        <input className="input-layout peer w-full" name="state" onChange={handleAddDistributorForm} required type="text" value={distributor.state || ""} />
                        <label className="label-layout peer-focus:text-gray-950">* State</label>
                    </div>

                    <div className="relative">
                        <input className="input-layout peer w-full" name="zipcode" onChange={handleAddDistributorForm} required type="number" value={distributor.zipcode || ""} />
                        <label className="label-layout peer-focus:text-gray-950">* Zipcode</label>
                    </div>
                </div>

                <button className="button-secondary md:hidden text-2xl" onClick={handleCancelDisplayAddDistributorForm}>Cancel</button>

                <button className="button-primary text-2xl" onClick={handleAddDistributor}>Add</button>
            </div>
        </div>
    )
}