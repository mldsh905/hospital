import React from 'react';
import {Select} from "antd";
import AllergyHistory from "./AllergyHistory";
import DiseaseHistory from "./DiseaseHistory";
import AddNewAllergyHistory from "./AddNewAllergyHistory";
import AddNewDiseaseHistory from "./AddNewDiseaseHistory";

const History = () => {
    return (
        <div>
            <div>
                <div className='flex justify-start items-center gap-2'>
                    <span className='font-bold '>Allergy history</span>
                    <Select
                        defaultValue="no"
                        style={{ width: 160 }}
                        onChange={()=>{}}
                        options={[
                            { value: 'no', label: 'No' },
                            { value: 'yes', label: 'Yes' },
                        ]}
                    />
                    <AddNewAllergyHistory/>
                </div>
                <div>
                    <AllergyHistory/>
                </div>
            </div>
            <div>
                <div className='flex justify-start items-center gap-2'>
                    <span className='font-bold '>Disease history</span>
                    <Select
                        defaultValue="no"
                        style={{ width: 160 }}
                        onChange={()=>{}}
                        options={[
                            { value: 'no', label: 'No' },
                            { value: 'yes', label: 'Yes' },
                        ]}
                    />
                    <div>
                        <AddNewDiseaseHistory/>
                    </div>
                </div>
                <div>
                    <DiseaseHistory/>
                </div>
            </div>
        </div>
    );
};

export default History;