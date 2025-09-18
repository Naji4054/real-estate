import React from 'react'

const AddListing = () => {
  return (
    <section>
      <div className="account-bg-image mb-24">
        <div className='container mx-auto'>
          <div>
            <h1 className='text-[36px] font-semibold'>Add Listing</h1>
            <p>home addlisting</p>
          </div>
        </div>
      </div>

      <div>
        <form>
          <div>
            <label htmlFor="description">Property Description</label>
            <div className='flex'>
              <textarea className='' placeholder='Title*'></textarea>
              <textarea placeholder='Description'></textarea>
            </div>
          </div>
          <div>
            <label htmlFor="Property Price">Property Price</label>
            <div>
              <input type="number" placeholder='Price in $ (only numbers)*'/>
              <input type="Number" placeholder=' Before Price Label (ex: from)' />
              <input type="Number" placeholder=' After Price Label (ex: /month)' />
              <input type="Number" placeholder=' Yearly Tax Rate' />
            </div>
          </div>
          <div>
            <label htmlFor="Property Price">Select Category</label>
            <div>
              <select name="location" required>
                <option value="location" disabled selected hidden>Choose location</option>
                <option value="newyork">New York</option>
                <option value="los angeles">Los Angeles</option>
                <option value="florida">Florida</option>
                <option value="south carolina">South Crolina</option>
              </select>
              <select name="location" required>
                <option value="category" disabled selected hidden>Choose Category</option>
                <option value="apartment">Apartment</option>
                <option value="house">House</option>
                <option value="villa">Villa</option>
                <option value="shop">Shop</option>
                <option value="condo">Condo</option>
                <option value="office">Office</option>
              </select>
              <select name="location" required>
                <option value="slae / rent" disabled selected hidden>Sale / Rnet</option>
                <option value="sale">For Sale</option>
                <option value="rent">For Rent</option>
              </select>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default AddListing
