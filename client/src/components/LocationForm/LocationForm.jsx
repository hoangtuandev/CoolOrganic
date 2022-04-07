import { React } from 'react'
import useLocationForm from "./useLocationForm";
import Select from "react-select";
import styles from './LocationForm.module.scss'

function LocationForm(props) {

    const { setSelectedCity, setSelectedDistrict, setSelectedWard } = props

    const {
        state,
        onCitySelect,
        onDistrictSelect,
        onWardSelect,
        onSubmit
    } = useLocationForm(false);

    const {
        cityOptions,
        districtOptions,
        wardOptions,
        selectedCity,
        selectedDistrict,
        selectedWard
    } = state;

    const handleSelectedCity = (option) => {
        onCitySelect(option)
        setSelectedCity(option.label)
    }

    const handleSelectedDistrict = (option) => {
        onDistrictSelect(option)
        setSelectedDistrict(option.label)
    }

    const handleSelectedWard = (option) => {
        onWardSelect(option)
        setSelectedWard(option.label)
    }


    return (
        <form
            onSubmit={onSubmit}
            className="w-11/12 p-5 mx-auto mt-10 bg-gray-100 border-2 rounded md:w-2/3 sm:w-3/4 lg:w-1/2 xl:w-1/3"
        >
            <div className="flex flex-col gap-5">

                <Select
                    className={`${styles.selectField}`}
                    name="cityId"
                    key={`cityId_${selectedCity?.value}`}
                    isDisabled={cityOptions.length === 0}
                    options={cityOptions}
                    onChange={(option) => handleSelectedCity(option)}
                    // onChange={(option) => onCitySelect(option)}
                    placeholder="Tỉnh/Thành"
                    defaultValue={selectedCity}
                />

                <Select
                    className={`${styles.selectField}`}
                    name="districtId"
                    key={`districtId_${selectedDistrict?.value}`}
                    isDisabled={districtOptions.length === 0}
                    options={districtOptions}
                    onChange={(option) => handleSelectedDistrict(option)}
                    placeholder="Quận/Huyện"
                    defaultValue={selectedDistrict}
                />

                <Select
                    className={`${styles.selectField}`}
                    name="wardId"
                    key={`wardId_${selectedWard?.value}`}
                    isDisabled={wardOptions.length === 0}
                    options={wardOptions}
                    placeholder="Phường/Xã"
                    onChange={(option) => handleSelectedWard(option)}
                    defaultValue={selectedWard}
                />
            </div>
        </form>
    );
}

export default LocationForm;
