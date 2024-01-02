import React from 'react'
import SelectField from './SelectField'
import '../../Pages/PageComponent.css'
import MultiLineField from './TextArea'

const AddSale = () => {

  const textAreasConfig = [
    {
      showCount: true,
      maxLength: 150,
      onChange: (e) => console.log('First TextArea:', e.target.value),
      placeholder: 'Sale Note',
      height: 45,
      resize: 'vertical',
      width: 370,
      marginTop: 40,
    },
    {
      showCount: false,
      maxLength: 150,
      onChange: (e) => console.log('Second TextArea:', e.target.value),
      placeholder: 'Staff Note',
      height: 45,
      resize: 'both',
      width: 370,
      marginTop: 40,
    },
    
    // Add more configurations as needed
  ];

  return (

      <div className='AddSaleBoard'>
        <h1>Add Sale</h1>
        <div className='SelectionArea' >
          <SelectField
            placeholder="Select Customer Name"
            options={[
              { value: '1', label: 'Deals Orbs' },
              { value: '2', label: 'Furniture Mecca' },
              { value: '3', label: 'Zameer Ansari' },
              { value: '4', label: 'Sialkot Bakers' },
            ]}
          />
          <SelectField
            placeholder="Select Company Name"
            options={[
              { value: '1', label: 'Sky Holidays' },
              { value: '2', label: 'Nexzell' },
              { value: '3', label: 'ZelleSolutions' },
            ]}
          />
          <SelectField
            placeholder="Select Biller Name"
            options={[
              { value: '1', label: 'Mr. Osama' },
              { value: '2', label: 'Miss Faraya' },
            ]}
          />
          <SelectField
            placeholder="Select Order Tax %"
            options={[
              { value: '1', label: '5' },
              { value: '2', label: '10' },
              { value: '3', label: '13' },
              { value: '4', label: '15' },
            ]}
          />
          <SelectField
            placeholder="Select Order of Discount"
            options={[
              { value: '1', label: 'Discount Amount' },
              { value: '2', label: 'Discount %' },
            ]}
          />
          <SelectField
            placeholder="Sale Status"
            options={[
              { value: '1', label: 'Complete' },
              { value: '2', label: 'In-Complete' },
              { value: '3', label: 'Partial' },
            ]}
          />
          <SelectField
            placeholder="Payment Status"
            options={[
              { value: '1', label: 'Complete' },
              { value: '2', label: 'In-Complete' },
              { value: '3', label: 'Partial' },
            ]}
          />
          <MultiLineField textAreas={textAreasConfig} />
      
        </div>
      </div>

  )
}

export default AddSale